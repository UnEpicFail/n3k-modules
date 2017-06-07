import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';

import { Institution } from '../../api/institution/Institution';
import { InstitutionService } from '../../api/institution'
import { Response } from '../../api/common/Response';
import { Pagination } from '../../api/common/Pagination';

import { Classifier_listService } from '../../api/classifier_list'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  anchorList: {}[] = [
    {name:'Юридическое лицо'},
    {name:'Общие сведения'},
    {name:'Дополнительная информация'},
    {name:'Контактная информация'},
    {name:'Общественный орган управления'},
    {name:'Аккредитация'},
    {name:'Лицензия'}
  ]

  // fb;
  oktmoService;
  typeOfOwnershipService;
  foundersTypeService;
  statusService;
  //form;

  
  //selectedOktmo

  _institution: Institution = new Institution({})

  // oktmo = {
  //   value: []
  // };
  // oktmo2 = {
  //   value: []
  // }
  constructor(
    private institutionService: InstitutionService,
    private classifireService: Classifier_listService,
  ) {

    // this.fb = new FormBuilder();
    this.oktmoService = classifireService.classifierOktmoList();
    this.typeOfOwnershipService = classifireService.classifierTypeOfOwnershipList();
    this.foundersTypeService = classifireService.classifierFoundersTypeList();
    this.statusService = classifireService.classifierOrganizationStatusList();
    // this.form = this.fb.group({
    //   oktmo: JSON.stringify({id: 1, name:'from Edit'})
    // })
    // setTimeout(()=>{
    //   this.oktmo.value = [{id: 1, name:'Первое значение из справочника'}]
    // },1000)
    this.institutionService.institutionGet('1').subscribe(res=>{
      let _res = new Response(res);
      this._institution = new Institution(_res.data);
      this._institution.organization.name
    })

  }

  ngOnInit() {}


  onSubmit(f) {
    console.log('this._institution', this._institution.organization)
    //console.log('f', f.controls)
  }
}
