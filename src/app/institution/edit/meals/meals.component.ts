import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Classifier_listService } from '../../../api/classifier_list'
import { Meal } from '../../../api/common/Meal'
import { ClassifierShort } from '../../../api/common/ClassifierShort'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MealsComponent),
  multi: true
};


@Component({
  selector: 'edit-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class MealsComponent implements OnInit, ControlValueAccessor {

  @Input() title:string

  @Output() onDelete = new EventEmitter()

  public _meals: Meal[] = [];
  public _editState = [];

  public mealTypeService;
  public financingTypeService;

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(meals: any): void {
    this._meals = [];
    if (Array.isArray(meals)) {
      for (let i = 0, max_i = meals.length; i < max_i; i += 1) {
        if(!this.isEmpty(meals[i])){
          this._meals.push(new Meal(meals[i]));
          this._editState.push(false)
        }
      }
    } else {
      if(meals && !this.isEmpty(meals)){
        this._meals.push(new Meal(meals));
        this._editState.push(false)
      }
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(private classifierService: Classifier_listService) {
    this.mealTypeService = classifierService.classifierMealTypeList();
    this.financingTypeService = classifierService.classifierFinancingTypeList();
  }

  ngOnInit() {
  }

  isEmpty(obj) {
    let keys = obj.keys()
    let res = true

    for(let i = 0, max_i = keys.length; i < max_i; i+=1){
      if (typeof obj[keys[i]] !== 'undefined' && obj[keys[i]] !== null) {
        if (typeof obj[keys[i]].keys === 'function') {
          res = res && this.isEmpty(obj[keys[i]]);
        } else if (Array.isArray(obj[keys[i]])) {
          if (obj[keys[i]].length > 0) {
            for (let j = 0, max_j = obj[keys[i]].length; j < max_j; j+=1) {
              res = res && this.isEmpty(obj[keys[i]][j]);
            }
          } else {
            return true;
          }
        } else {
          return false;
        }
      }
    }
    return res
  }

  addNew() {
    this._meals.unshift(new Meal({}))
    this._editState.unshift(true)
  }

  deleteMe(i) {
    if (this._meals[i].id) {
      this.onDelete.emit(this._meals[i].id);
    } 

    this._meals.splice(i, 1);
    this._editState.splice(i, 1);
  }

  cancel(i) {
    if (!this._meals[i].id) {
      this._meals.splice(i, 1);
      this._editState.splice(i, 1);
    } else {
      this._editState[i] = false;
    }
  }

  submit(i) {
    this.onChange(this._meals)
    this.onTouched()
    this._editState[i] = false;
  }

}
