import { Component, OnInit, QueryList, ViewChildren, AfterContentChecked} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common'; 
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AnchornTargetRefDirective } from '../../../lib/n3k-ng-components/anchor-menu/anchor-menu.component'

import { Classifier_listService } from '../../../api/classifier_list'
import { Department } from '../../../api/institution/Department'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { JobShort } from '../../../api/common/JobShort'
import { Institution } from '../../../api/institution/Institution'
import { InstitutionShort } from '../../../api/common/InstitutionShort'
import { Capacity } from '../../../api/common/Capacity'
import { Address } from '../../../api/common/Address'



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit, AfterContentChecked {

  form: FormGroup = new FormGroup({})
  _institution: Institution = new Institution({})
  _department: Department = new Department({})
  institutionId
  departmentId
  foundationDateOptions = {
    title: 'Дата создания',
    placeholder: 'Дата создания',
  }
  liquidationDateOptions = {
    title: 'Дата закрытия',
    placeholder: 'Дата закрытия',
  }

  anchorList: {}[] = [
    {name:'Общие сведения', target: 'common'},
    {name:'Контактная информация', target: 'contacts'},
  ]

  kindService
  parentService

  public beforeParntSetValue;
  public beforeParntGetValue;

  anchors:QueryList<AnchornTargetRefDirective>
  @ViewChildren(AnchornTargetRefDirective) _anchors:QueryList<AnchornTargetRefDirective>

  constructor(
    private fb: FormBuilder,
    private institutionServise: InstitutionService,
    private classifireService: Classifier_listService,
    private ar: ActivatedRoute,
    private router: Router
  ) {

    this.beforeParntSetValue = values => {
      if (!values) {
        return []
      }
      let res = []
      
      if (!Array.isArray(values)) {
        values = [values]
      }

      values.map( value => {
        res.push({
          id: value.identity.id,
          name: value.name,
          keys: () => {
            return ['id', 'name']
          }
        })
      })
      return res;
    }

    this.beforeParntGetValue= values => {
      if (!values) {
        return {}
      }

      let res = []

      if (!Array.isArray(values)) {
        values = [values]
      }
      

      values.map( value => {
        res.push({
          id: value.identity.id,
          name: value.name,
          identity: value.identity,
          keys: () => {
            return ['id', 'name']
          }
        })
      })

      return res;
    }

    this.setForm()

    this.kindService = classifireService.classifierInstitutionKindList()
    this.parentService = institutionServise.institutionList
  }

  ngOnInit() {
    this.ar.params.subscribe((params:Params) => {
      this.institutionId = params['institutionId']
      this.departmentId = params['departmentId']

      if (!this.institutionId)
        return

      this.institutionServise.institutionGet(this.institutionId).subscribe(data => {
        let res = new Response(data);
        this._institution = new Institution(res.data)
        this.setForm()
      })

      if (!this.departmentId) {
        this.setForm()
      } else {
        this.institutionServise.departmentGet(this.departmentId).subscribe(data => {
          let res = new Response(data);
          this._department = new Department(res.data)
          this.setForm()
        })
      }

    });
  }

  ngAfterContentChecked() {
    this.anchors = this._anchors
  }

  setForm() {
    let d = this._department
    d.parent = this._institution.identity
    this.form = this.fb.group({
      capacity: [d.capacity],
      head: [d.head],
      address: [d.address],
      contacts: [d.contacts],
      is_based_on_another_organization: [d.is_based_on_another_organization],
      foundation_date: [d.foundation_date],
      liquidation_date: [d.liquidation_date],
      entity_state: [d.entity_state],
      institution_identity: [d.institution_identity],
      name: [d.name],
      parent: [this._institution],
      kind: [d.kind],
    })
  }

  onHeadDelete() {
    this._department.head = new JobShort({})
    this.setForm()
  }
  
  onCapacityDelete() {
    this._department.capacity = new Capacity({});
    this.setForm();
  }

  onAddressDelete() {
    this._department.address = new Address({});
    this.setForm();
  }

  onContactDelete(identity) {
    let index = this.getContactIndex(identity)
    console.log(index)
    if(typeof index === 'number'){
      this._department.contacts.splice(index, 1)
      this.setForm()
    }
  }

  getContactIndex(identity) {
    for (let i = 0, max_i = this._department.contacts.length; i < max_i; i += 1){
      if (this._department.contacts[i].identity.id === identity.id){
        return i
      }
    }
    return false
  }

  onSubmit() {
    console.log('this.form', this.form.value)  
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/departments'])
  }

}
