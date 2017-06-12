import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Institution } from '../../api/institution/Institution';
import { InstitutionService } from '../../api/institution'
import { Response } from '../../api/common/Response';
import { Pagination } from '../../api/common/Pagination';
import { Address } from '../../api/common/Address';

import { Classifier_listService } from '../../api/classifier_list'

import { AddressComponent } from './address/address.component'

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

  form: FormGroup

  _institution: Institution = new Institution({})

  constructor(
    private institutionService: InstitutionService,
    private classifireService: Classifier_listService,
    private fb: FormBuilder,
  ) {
   
    this.institutionService.institutionGet('1').subscribe(res=>{
      let _res = new Response(res);
      this._institution = new Institution(_res.data);
      this.setForm()
    })

  }

  ngOnInit() {
    this.setForm()
  }


  onSubmit() {
    console.log('this._institution', this._institution.organization)
    console.log('this.form', this.form)
  }

  setForm() {
    this.form = this.fb.group({
      organization: this._institution.organization
    })
  }
}
