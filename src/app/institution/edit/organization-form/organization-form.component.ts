import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../../../api/institution/Organization';
import { Address } from '../../../api/common/Address';

import { Classifier_listService } from '../../../api/classifier_list'


@Component({
  selector: 'edit-organization',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationComponent implements OnInit {


  public oktmoService;
  public typeOfOwnershipService;
  public foundersTypeService;
  public statusService;
  public _organization: Organization;
  
  @Input('organization')
  set organization(organization){
    organization = organization || {}
    this._organization = new Organization(organization)
  }

  constructor(private classifireService: Classifier_listService) {

    this.oktmoService = classifireService.classifierOktmoList();
    this.typeOfOwnershipService = classifireService.classifierTypeOfOwnershipList();
    this.foundersTypeService = classifireService.classifierFoundersTypeList();
    this.statusService = classifireService.classifierOrganizationStatusList();

  }

  ngOnInit() {
  }


  onAddressDelete(index) {
    this._organization.address = new Address({})
  }

}
