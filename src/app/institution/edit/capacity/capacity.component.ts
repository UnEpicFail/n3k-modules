import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

import { Capacity } from '../../../api/common/Capacity'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CapacityComponent),
  multi: true
};


@Component({
  selector: 'edit-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class CapacityComponent implements OnInit, ControlValueAccessor {

  _capacitis = []
  _editState = []
  canAddNew = true

  @Input() title:string

  _limit:number = Infinity
  @Input()
  set limit(limit) {
    if(limit){
      this._limit = limit
    }
  }

  @Output() onDelete = new EventEmitter()

  onChange = (_) => {};
  onTouched = () => {};



  writeValue(person: any): void {
    
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngOnInit() {
  }

  deleteMe(index) {
    this.onDelete.emit(this._capacitis[index].identity);
  }

  cancel(index) {
    this._editState[index] = false;
  }

  submit(index) {
    this.onChange([this._limit === 1] ? this._capacitis[0] : this._capacitis)
    this.onTouched()
    this._editState[index] = false;
  }

  addNew() {
    this._capacitis.unshift(new Capacity({}))
    this._editState.unshift(true)
    this.canAddNew = (this._capacitis.length < this._limit)
  }


}
