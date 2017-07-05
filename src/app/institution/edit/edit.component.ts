import { Component, OnInit, AfterContentChecked, AfterContentInit, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common'; 
import { AnchornTargetRefDirective } from '../../lib/n3-ng-components/anchor-menu/anchor-menu.component'



import { Institution } from '../../api/institution/Institution';
import { InstitutionService } from '../../api/institution'
import { Response } from '../../api/common/Response';
import { JobShort } from '../../api/common/JobShort';
import { Capacity } from '../../api/common/Capacity';
import { Address } from '../../api/common/Address';
import { Document } from '../../api/common/Document';
import { 
  trigger,
  state,
  style,
  animate,
  transition 
} from '@angular/animations';



import { Classifier_listService } from '../../api/classifier_list'

import { AddressComponent } from './address/address.component'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations: [
    trigger('loadState', [
      state('unload', style({
        opacity: 0
      })),
      state('load', style({
        opacity: 1
      })),
      transition('unload => load', animate('1000ms ease-in')),
      transition('load => unload', animate('1000ms ease-out'))
    ])
  ]
})
export class EditComponent implements OnInit, AfterContentChecked, AfterContentInit{

  anchorList: {}[] = [
    {name:'Юридическое лицо', target: 'organization'},
    {name:'Общие сведения', target: 'common'},
    {name:'Дополнительная информация', target: 'additional'},
    {name:'Общественный орган управления', target: 'public_administration'},
    {name:'Контактная информация', target: 'contacts'},
    {name:'Аккредитация', target: 'accreditation'},
    {name:'Лицензия', target: 'license'}
  ]

  loadState = 'unload';

  form: FormGroup

  _institution: Institution = new Institution({})

  regionService
  districtService
  shiftService
  statusService
  typeService
  kindService
  terrainService
  educationLanguageService
  levelsService
  ovzGroupTypesService
  jurisdictionService
  foundationDateOptions
  buttonsOptions

  anchors:QueryList<AnchornTargetRefDirective>
  @ViewChildren(AnchornTargetRefDirective) _anchors:QueryList<AnchornTargetRefDirective>

  constructor(
    private institutionService: InstitutionService,
    private classifireService: Classifier_listService,
    private fb: FormBuilder,
    private location: Location
  ) {

    this.institutionService.institutionGet('1').subscribe(res=>{
      let _res = new Response(res);
      this._institution = new Institution(_res.data);
      this.setForm()
    })

    this.foundationDateOptions = {
      title: 'Дата образования организации',
      placeholder: 'Дата образования организации',
    }

    this.regionService = classifireService.classifierRegionList()
    this.districtService = classifireService.classifierDistrictList()
    this.shiftService = classifireService.classifierEducationShiftList()
    this.statusService = classifireService.classifierInstitutionStatusList()
    this.typeService = classifireService.classifierInstitutionTypeList()
    this.kindService = classifireService.classifierInstitutionKindList()
    this.terrainService = classifireService.classifierTerrainTypeList()
    this.educationLanguageService = classifireService.classifierLanguageList()
    this.levelsService = classifireService.classifierEducationLevelList()
    this.ovzGroupTypesService = classifireService.classifierOvzGroupTypesList()
    this.jurisdictionService = classifireService.classifierJurisdictionList()
  }

  ngOnInit() {
    this.setForm()
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.loadState = 'load'
    }, 1000)
  }

  ngAfterContentChecked() {
    this.anchors = this._anchors
  }

  onSubmit() {
    console.log('this._institution', this._institution.organization)
    console.log('this.form', this.form.value)
    this.form.value.accreditation.type = {code:'accreditation'}
    this.form.value.license.type = {code:'license'}
    let inst = new Institution(this.form.value)
    inst.documents.push(this.form.value.accreditation)
    inst.documents.push(this.form.value.license)
    this.institutionService.institutionSave(inst).subscribe(
      res => { console.log('success res', res)},
      err => { console.error('error err', err)}
    )
  }

  onCancel() {
    this.location.back();
  }

  setForm() {
    let i = this._institution
    this.form = this.fb.group({
      organization: [i.organization],
      head: [i.head],
      region: [i.region],
      district: [i.district],
      full_name: [i.full_name],
      name: [i.name],
      shift: [i.shift],
      status: [i.status],
      type: [i.type],
      kind: [i.kind],
      terrain: [i.terrain],
      work_time: [i.work_time],
      education_language: [i.education_language],
      education_area: [i.education_area],
      levels: [i.levels],
      meals: [i.meals],
      ovz_group_types: [i.ovz_group_types],
      foundation_date: [i.foundation_date],
      jurisdiction: [i.jurisdiction],
      description: [i.description],
      //img????
      capacity: [i.capacity],
      meta: [i.meta],
      public_administration: [i.public_administration],
      address: [i.address],
      contacts: [i.contacts],
      accreditation: [this.getFromDocuments(i.documents, 'accreditation')],
      license: [this.getFromDocuments(i.documents, 'license')]
    })
  }

  onHeadDelete() {
    this._institution.head = new JobShort({})
    this.setForm()
  }

  onWorkTimeDelete(id) {
    let index = this.getWorkTimeIndex(id)
    if (typeof index === 'number'){
      this._institution.work_time.splice(index, 1)
      this.setForm()
    }
  }
  
  getWorkTimeIndex(id) {
    for (let i = 0, max_i = this._institution.work_time.length; i < max_i; i += 1){
      if (this._institution.work_time[i].id === id){
        return i
      }
    }
    return false
  }

  onEducationAreaDelete(identity) {
    let index = this.getEducationAreaIndex(identity)
    if (typeof index === 'number') {
      this._institution.education_area.splice(index, 1)
      this.setForm()
    }
  }

  getEducationAreaIndex(identity) {
    for (let i = 0, max_i = this._institution.education_area.length; i < max_i; i += 1){
      if (this._institution.education_area[i].identity === identity) {
        return i
      }
    }
    return false
  }

  onMealDelete(id) {
    let index = this.getMealIndex(id)
    if (typeof index === 'number') {
      this._institution.meals.splice(index, 1)
      this.setForm()
    }
  }

  getMealIndex(id) {
    for (let i = 0, max_i = this._institution.meals.length; i < max_i; i += 1){
      if (this._institution.meals[i].id === id) {
        return i
      }
    }
    return false
  }

  onCapacityDelete(id) {
    this._institution.capacity = new Capacity({});
    this.setForm();
  }

  onAddressDelete(id) {
    this._institution.address = new Address({});
    this.setForm();
  }

  getFromDocuments(docs, type) {
    
    if (docs) {
      docs.map(doc => {
        if(doc.type.code === type) {
          return doc
        }
      })
    }

    return new Document({})
  }
}
