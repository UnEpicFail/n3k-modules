import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'


import { Classifier_listService } from '../../../api/classifier_list'
import { EducationContractDocument } from '../../../api/institution/EducationContractDocument'
import { DatepickerComponentOptions } from '../../../lib/n3k-ng-components/datepicker/datepicker.component'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EducationContractDocumentComponent),
  multi: true
};

@Component({
  selector: 'clone-education-contract-document',
  templateUrl: './education-contract-document.component.html',
  styleUrls: ['./education-contract-document.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class EducationContractDocumentComponent  implements ControlValueAccessor {

  _documents = []
  _editState = []
  _notArray = false
  canAddNew = true


  regDateOptions = new DatepickerComponentOptions({
    title: 'Дата регистрации',
    placeholder: 'Дата регистрации'
  })
  issueDateOptions = new DatepickerComponentOptions({
    title: 'Дата впустка',
    placeholder: 'Дата впустка'
  })
  validFromOptions = new DatepickerComponentOptions({
    title: 'Действителен от',
    placeholder: 'Действителен от'
  })
  validToOptions = new DatepickerComponentOptions({
    title: 'Действителен до',
    placeholder: 'Действителен до'
  })

  statusService

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

  writeValue(documents: any): void {
    this._documents = []
    if (!Array.isArray(documents)) {
      this._notArray = true
      documents = (documents !== undefined && documents !== null) ? [documents] : []
    }
    
    for (let i = 0, max_i = documents.length; i < max_i; i += 1) {
      if (!documents[i]._isEmpty) {
        this._documents.push(new EducationContractDocument(documents[i]))
        this._editState.push(false)
      }
    }


    this.canAddNew = (this._limit > this._documents.length);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }


  constructor(
    private classifierService: Classifier_listService
  ) { 
    this.statusService = classifierService.classifierDocumentStatusList()
  }

  deleteMe(index) {
    this.onDelete.emit(this._documents[index].identity);
  }

  cancel(index) {
    this._editState[index] = false;
  }

  submit(index) {
    this.onChange([this._limit === 1] ? this._documents[0] : this._documents)
    this.onTouched()
    this._editState[index] = false;
  }

  addNew() {
    this._documents.unshift(new EducationContractDocument({}))
    this._editState.unshift(true)
    this.canAddNew = (this._documents.length < this._limit)
  }

}
