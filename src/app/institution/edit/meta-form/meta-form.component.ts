import { Component, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { InstitutionMeta } from '../../../api/institution/InstitutionMeta'

import { Classifier_listService } from '../../../api/classifier_list'



const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MetaFormComponent),
  multi: true
};

@Component({
  selector: 'edit-meta',
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class MetaFormComponent implements ControlValueAccessor {

  _meta: InstitutionMeta = new InstitutionMeta({})
  form: FormGroup;
  fgosScoringService
  siteCharacteristicsService

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(meta: any): void {
    if (meta) {
      this._meta = new InstitutionMeta(meta);
    }
    this.setForm()
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(
    private classifireService: Classifier_listService,
    private fb: FormBuilder 
  ) {
    
    this.fgosScoringService = classifireService.classifierFgosScoringList()
    this.siteCharacteristicsService = classifireService.classifierSiteCharacteristicList()

    this.setForm();
  }

  ngOnInit() {
  }

  setForm() {
    
    this.form = this.fb.group({
      additional_name: [this._meta.additional_name],
      reorganization_name: [this._meta.reorganization_name],
      educational_program_url: [this._meta.educational_program_url],
      electronic_diary_vendor: [this._meta.electronic_diary_vendor],
      electronic_diary_name: [this._meta.electronic_diary_name],
      electronic_diary_url: [this._meta.electronic_diary_url],
      is_first_class: [this._meta.is_first_class],
      employee_count: [this._meta.employee_count],
      statute_url: [this._meta.statute_url],
      direction_for_ip: [this._meta.direction_for_ip],
      has_bookkeeping: [this._meta.has_bookkeeping],
      is_small_setted: [this._meta.is_small_setted],
      schedule_string: [this._meta.schedule_string],
      has_it_teachers: [this._meta.has_it_teachers],
      is_budget_transfered: [this._meta.is_budget_transfered],
      fgos_scoring: [this._meta.fgos_scoring],
      site_characteristics: [this._meta.site_characteristics]
    })
    
    this.form.valueChanges.subscribe(data => {
      this.onChange(new InstitutionMeta(data))
      this.onTouched()
    })
  }

}
