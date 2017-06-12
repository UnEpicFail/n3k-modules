import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Organization } from '../../../api/institution/Organization';
import { Address } from '../../../api/common/Address';

import { Classifier_listService } from '../../../api/classifier_list'


const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => OrganizationComponent),
  multi: true
};

@Component({
  selector: 'edit-organization',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})

export class OrganizationComponent implements ControlValueAccessor {

  public form: FormGroup;
  public oktmoService;
  public typeOfOwnershipService;
  public foundersTypeService;
  public statusService;
  public _organization: Organization = new Organization({});
  
  onChange = (_) => {};
  onTouched = () => {};

  writeValue(organization: any): void {
    if (organization !== undefined && organization !== null) {
      this._organization = new Organization(organization);
    } else {
      this._organization = new Organization({});
    }
    this.setForm()
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(
    private classifireService: Classifier_listService,
    private fb: FormBuilder
  ) {

    this.oktmoService = classifireService.classifierOktmoList();
    this.typeOfOwnershipService = classifireService.classifierTypeOfOwnershipList();
    this.foundersTypeService = classifireService.classifierFoundersTypeList();
    this.statusService = classifireService.classifierOrganizationStatusList();
    this.setForm();
  }

  setForm() {
    this.form = this.fb.group({
      oktmo: this._organization.oktmo,
      type_of_ownership: this._organization.type_of_ownership,
      founders_type: this._organization.founders_type,
      status: this._organization.status,
      name: this._organization.name,
      address: this._organization.address
    })
    this.form.valueChanges.subscribe(data => {
      console.log('data', data)
      this.onChange(new Organization(data))
      this.onTouched()
    })
  }

  onAddressDelete(index) {
    this._organization.address = new Address({})
    this.setForm()
  }

}
