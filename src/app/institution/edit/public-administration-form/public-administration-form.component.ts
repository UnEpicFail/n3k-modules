import { Component, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { DatepickerComponentOptions } from '../../../lib/n3-ng-components/datepicker/datepicker.component';

import { PublicAdministration } from '../../../api/institution/PublicAdministration'

import { Classifier_listService } from '../../../api/classifier_list'



const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PublicAdministrationFormComponent),
  multi: true
};

@Component({
  selector: 'edit-public-administration',
  templateUrl: './public-administration-form.component.html',
  styleUrls: ['./public-administration-form.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class PublicAdministrationFormComponent implements ControlValueAccessor {

  publicAdministrationFormService
  foundationDateOptions: DatepickerComponentOptions = new DatepickerComponentOptions({
    title: 'Дата создания',
    placeholder: 'Дата создания'
  })
  liquidationDateOptions: DatepickerComponentOptions = new DatepickerComponentOptions({
    title: 'Дата расформирования',
    placeholder: 'Дата расформирования'
  })
  _publicAdministration: PublicAdministration = new PublicAdministration({})
  form: FormGroup

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(publicAdministration: any): void {
    if (publicAdministration) {
      this._publicAdministration = new PublicAdministration(publicAdministration);
    }
    this.setForm()
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(
    private classifireService: Classifier_listService,
    private fb: FormBuilder
  ) { 
    this.publicAdministrationFormService = classifireService.classifierPublicAdministrationFormList()
    this.setForm();
  }

  setForm() {
    this.form = this.fb.group({
      public_administration_form: [this._publicAdministration.form],
      foundation_cause: [this._publicAdministration.foundation_cause],
      foundation_date: [this._publicAdministration.foundation_date],
      liquidation_date: [this._publicAdministration.liquidation_date],
      powers: [this._publicAdministration.powers]
    })

    this.form.valueChanges.subscribe(data => {
      this.onChange(new PublicAdministration(data))
      this.onTouched()
    })
  }

}
