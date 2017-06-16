import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Classifier_listService } from '../../../api/classifier_list'
import { WorkTime } from '../../../api/common/WorkTime'
import { ClassifierShort } from '../../../api/common/ClassifierShort'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WorkTimeComponent),
  multi: true
};


@Component({
  selector: 'edit-work-time',
  templateUrl: './work-time.component.html',
  styleUrls: ['./work-time.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class WorkTimeComponent implements OnInit, ControlValueAccessor {

  @Input() title:string

  @Output() onDelete = new EventEmitter()

  public _work_times: WorkTime[] = [];
  public _editState = [];
  public workTimeOptions = [
    new ClassifierShort({id: 1, name: 'Пн'}),
    new ClassifierShort({id: 2, name: 'Вт'}),
    new ClassifierShort({id: 3, name: 'Ср'}),
    new ClassifierShort({id: 4, name: 'Чт'}),
    new ClassifierShort({id: 5, name: 'Пт'}),
    new ClassifierShort({id: 6, name: 'Сб'}),
    new ClassifierShort({id: 7, name: 'Вс'})
  ]

  public beforeSetValue;
  public beforeGetValue;

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(work_times: any): void {
    this._work_times = [];
    if (Array.isArray(work_times)) {
      for (let i = 0, max_i = work_times.length; i < max_i; i += 1) {
        if(!this.isEmpty(work_times[i])){
          this._work_times.push(new WorkTime(work_times[i]));
          this._editState.push(false)
        }
      }
    } else {
      if(work_times && !this.isEmpty(work_times)){
        this._work_times.push(new WorkTime(work_times));
        this._editState.push(false)
      }
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() {
    this.beforeSetValue = values => {
      if (!values) {
        return []
      }
      let res = []
      
      if (!Array.isArray(values)) {
        values = [values]
      }

      values.map(value => {
        this.workTimeOptions.map(option => {
          if (value == option.id) {
            res.push(option)
          }
        })
      })

      return res;
    }

    this.beforeGetValue= values => {
      if (!values) {
        return []
      }
      let res = []
      
      if (!Array.isArray(values)) {
        values = [values]
      }

      values.map(value => {
        res.push(value.id)
      })

      res.sort( function(a, b) {
        return a - b 
      })

      return res;
    }
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
    this._work_times.unshift(new WorkTime({}))
    this._editState.unshift(true)
  }

  deleteMe(i) {
    if (this._work_times[i].id) {
      this.onDelete.emit(this._work_times[i].id);
    } 

    this._work_times.splice(i, 1);
    this._editState.splice(i, 1);
  }

  cancel(i) {
    if (!this._work_times[i].id) {
      this._work_times.splice(i, 1);
      this._editState.splice(i, 1);
    }
    this._editState[i] = false;
  }

  submit(i) {
    this.onChange(this._work_times)
    this.onTouched()
    this._editState[i] = false;
  }

}
