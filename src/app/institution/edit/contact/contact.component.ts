import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Classifier_listService } from '../../../api/classifier_list'
import { Contact } from '../../../api/common/Contact'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ContactComponent),
  multi: true
};

@Component({
  selector: 'edit-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class ContactComponent implements ControlValueAccessor {

  @Input() title:string

  _limit:number = Infinity
  @Input()
  set limit(limit) {
    if(limit){
      this._limit = limit
    }
  }

  _contacts = []
  _editState = []
  _notArray = false
  canAddNew = true
  contactTypeService

  @Output() onDelete = new EventEmitter()

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(contacts: any): void {
    this._contacts = []
    if (!Array.isArray(contacts)) {
      this._notArray = true
      contacts = (contacts !== undefined && contacts !== null) ? [contacts] : []
    }
    
    for (let i = 0, max_i = contacts.length; i < max_i; i += 1) {
      if (!contacts[i]._isEmpty) {
        this._contacts.push(new Contact (contacts[i]))
        this._editState.push(false)
      }
    }


    this.canAddNew = (this._limit > this._contacts.length);
    
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(private classifierService: Classifier_listService) { 
    this.contactTypeService = classifierService.classifierContactTypeList()
  }

  deleteMe(index) {
    if (!this._contacts[index].identity._isEmpty) {
      this.onDelete.emit(this._contacts[index].identity);
    }

    this._contacts.splice(index, 1)
    this._editState.splice(index, 1)
    this.canAddNew = (this._limit > this._contacts.length);
  }

  cancel(index) {
    if (this._contacts[index]._isEmpty) {
      this._editState.splice(index, 1)
      this._contacts.splice(index, 1)
      this.canAddNew = (this._limit > this._contacts.length);
    } else {
      this._editState[index] = false;

    }
  }

  submit(index) {
    this.onChange ( (this._notArray) ? this._contacts[0] : this._contacts )
    this.onTouched()
    this._editState[index] = false;
    this.canAddNew = (this._limit > this._contacts.length);
  }

  addNew() {
    this._contacts.unshift(new Contact({}))
    this._editState.unshift(true)
  }
  
}
