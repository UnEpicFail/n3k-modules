import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Document } from '../../../api/common/Document'
import { DatepickerComponentOptions } from '../../../lib/n3k-ng-components/datepicker/datepicker.component'


const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DocumentFormComponent),
  multi: true
};


@Component({
  selector: 'edit-document',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class DocumentFormComponent implements ControlValueAccessor{


  public _document: Document = new Document({})
  public _issueDateOptions: DatepickerComponentOptions = new DatepickerComponentOptions({
    title: 'Дата выдачи',
    placeholder: 'Дата выдачи'
  })
  public _validToOptions: DatepickerComponentOptions = new DatepickerComponentOptions({
    title: 'Срок действия',
    placeholder: 'Срок действия'
  })

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(document: any): void {
    this._document = new Document((document || {}))
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() {

  }

  ngOnInit() {
  }

}
