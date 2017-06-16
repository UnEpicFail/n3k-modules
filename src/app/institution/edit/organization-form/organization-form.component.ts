import { Component, forwardRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Organization } from '../../../api/institution/Organization';
import { Address } from '../../../api/common/Address';
import { PersonShort } from '../../../api/common/PersonShort';

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
  public regionService;
  public districtService;
  public okopfService;
  public okfsService;
  public okvedService;
  public _organization: Organization = new Organization({});
  editor
  
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
    this.regionService = classifireService.classifierRegionList();
    this.districtService = classifireService.classifierDistrictList();
    this.okopfService = classifireService.classifierOkopfList();
    this.okfsService = classifireService.classifierOkfsList();
    this.okvedService = classifireService.classifierOkvedList();
    this.setForm();
  }

  setForm() {
    this.form = this.fb.group({
      name: this._organization.name,
      inn: this._organization.inn,
      ogrn: this._organization.ogrn,
      meta: this.fb.group({
        previous_ogrn: this._organization.meta.previous_ogrn[0],
        description: this._organization.meta.description
      }),
      okpo: this._organization.okpo,
      okato: this._organization.okato,
      kpp: this._organization.kpp,
      oktmo: this._organization.oktmo,
      okogu: this._organization.okogu,
      type_of_ownership: this._organization.type_of_ownership,
      founders_type: this._organization.founders_type,
      status: this._organization.status,
      address: this._organization.address,
      region: this._organization.region,
      district: this._organization.district,
      okopf: this._organization.okopf,
      okfs: this._organization.okfs,
      okved: this._organization.okved,
      owner: this._organization.owner,
    })
    this.form.valueChanges.subscribe(data => {
      this.onChange(new Organization(data))
      this.onTouched()
    })
  }

  onAddressDelete(identity) {
    this._organization.address = new Address({})
    this.setForm()
  }

  onOwnerDelete(index) {
    this._organization.owner = new PersonShort({})
    this.setForm()
  }

}
