import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

import { Classifier_listService } from '../../../api/classifier_list'
import { PersonShort } from '../../../api/common/PersonShort'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PersonComponent),
  multi: true
};


@Component({
  selector: 'edit-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class PersonComponent implements OnInit, ControlValueAccessor {

  public _person: PersonShort;
  public canAddNew = false;
  public _editState = false;
  public countryService;

  @Input() title:string

  @Output() onDelete = new EventEmitter()

  onChange = (_) => {};
  onTouched = () => {};



  writeValue(person: any): void {
    if (person !== undefined && person !== null) {
      this._person = new PersonShort(person);
    } else {
      this._person = new PersonShort({});
    }

    this.canAddNew = this._person._isEmpty;
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(private classifireService: Classifier_listService) {
    this.countryService = classifireService.classifierCountryList()
  }

  ngOnInit() {
  }


  deleteMe() {
    this.onDelete.emit(this._person.identity);
  }

  cancel() {
    this._editState = false;
  }

  submit() {
    this.onChange(this._person)
    this.onTouched()
    this._editState = false;
    this.canAddNew = false;
  }

}
