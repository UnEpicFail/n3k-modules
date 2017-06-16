import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnchornTargetRefDirective } from '../../lib/n3k-ng-components/anchor-menu/anchor-menu.component'

import { Institution } from '../../api/institution/Institution';
import { InstitutionService } from '../../api/institution'
import { Response } from '../../api/common/Response';
import { JobShort } from '../../api/common/JobShort';



import { Classifier_listService } from '../../api/classifier_list'

import { AddressComponent } from './address/address.component'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  anchorList: {}[] = [
    {name:'Юридическое лицо', target: 'organization'},
    {name:'Общие сведения', target: 'common'},
    {name:'Дополнительная информация', target: 'organization'},
    {name:'Контактная информация', target: 'organization'},
    {name:'Общественный орган управления', target: 'organization'},
    {name:'Аккредитация', target: 'organization'},
    {name:'Лицензия', target: 'organization'}
  ]

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


  @ViewChildren(AnchornTargetRefDirective) anchors:QueryList<AnchornTargetRefDirective>

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

  onSubmit() {
    console.log('this._institution', this._institution.organization)
    console.log('this.form', this.form)
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
      //foundation_date: [i.foundation_date],
      jurisdiction: [i.jurisdiction],
      description: [i.description],
      //img????
      //capacity: [i.capacity],      
    })
  }

  onHeadDelete() {
    this._institution.head = new JobShort({})
    this.setForm()
  }

  onWorkTimeDelete(id) {
    let index = this.getWorkTimeIndex(id)
    if (index){
      this._institution.work_time.splice(index, 1)
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
    if (index) {
      this._institution.education_area.splice(index, 1)
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
    if (index) {
      this._institution.meals.splice(index, 1)
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
}
