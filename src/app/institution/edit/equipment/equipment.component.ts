import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Classifier_listService } from '../../../api/classifier_list'
import { PlaceEquipment } from '../../../api/institution/PlaceEquipment'


const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EquipmentComponent),
  multi: true
};

@Component({
  selector: 'edit-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class EquipmentComponent implements ControlValueAccessor {

  @Input() title:string

  _limit:number = Infinity
  @Input()
  set limit(limit) {
    if(limit){
      this._limit = limit
    }
  }

  _equipments = []
  _editState = []
  _notArray = false
  canAddNew = true

  eqipmentTypeService

  @Output() onDelete = new EventEmitter()

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(equipments: any): void {
    this._equipments = []
    if (!Array.isArray(equipments)) {
      this._notArray = true
      equipments = (equipments !== undefined && equipments !== null) ? [equipments] : []
    }
    
    for (let i = 0, max_i = equipments.length; i < max_i; i += 1) {
      if (!equipments[i]._isEmpty) {
        this._equipments.push(new PlaceEquipment (equipments[i]))
        this._editState.push(false)
      }
    }


    this.canAddNew = (this._limit > this._equipments.length);
    
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(private classifierService: Classifier_listService) { 
  }

  deleteMe(index) {
    if (!this._equipments[index].identity._isEmpty) {
      this.onDelete.emit(this._equipments[index].identity);
    }

    this._equipments.splice(index, 1)
    this._editState.splice(index, 1)
    this.canAddNew = (this._limit > this._equipments.length);
  }

  cancel(index) {
    if (this._equipments[index]._isEmpty) {
      this._editState.splice(index, 1)
      this._equipments.splice(index, 1)
      this.canAddNew = (this._limit > this._equipments.length);
    } else {
      this._editState[index] = false;

    }
  }

  submit(index) {
    this.onChange ( (this._notArray) ? this._equipments[0] : this._equipments )
    this.onTouched()
    this._editState[index] = false;
    this.canAddNew = (this._limit > this._equipments.length);
  }

  addNew() {
    this._equipments.unshift(new PlaceEquipment({}))
    this._editState.unshift(true)
  }

}
