import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InstitutionShort } from '../../api/common/InstitutionShort'
import { Router, ActivatedRoute } from '@angular/router';
import { MapMouseEvent, MapClickMouseEvent, MarkerClaster }  from '../../angular2-yandex-maps/core.module';

import { InstitutionService } from '../../api/institution'
import { Classifier_listService } from '../../api/classifier_list';
import { ClassifierShort } from '../../api/common/ClassifierShort';
import { Response } from '../../api/common/Response';
import { InstitutionList } from '../../api/institution/InstitutionList'

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {
  

  filter: FormGroup
  selectedTab: string = 'map';
  list: InstitutionList = new InstitutionList([]);
  pagination: {page:number} = {
    page: 1
  }

  districtsService
  educationLeveService
  institutionTypesService
  okfsesService
  institutionStatusesService
  previewQuery: string = ''


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ar:ActivatedRoute,
    private classifierService: Classifier_listService,
    private institutionService: InstitutionService
  ) { 

    
    this.setFilter()

    this.districtsService = classifierService.classifierDistrictList()
    this.educationLeveService = classifierService.classifierEducationLevelList()
    this.institutionTypesService = classifierService.classifierInstitutionTypeList()
    this.okfsesService = classifierService.classifierOkfsList()
    this.institutionStatusesService = classifierService.classifierInstitutionStatusList()

  }

  ngOnInit() {
    this.ar.params.subscribe(params=>{
      //sconsole.log(params)
    })
    this.ar.queryParams
      .subscribe(params => {

        if (params.filter) {
          this.setFilter(JSON.parse(params.filter))
        }
      });
  }

  private getFromArray(arr, code){
    for(let i in arr) {
      if (arr[i].type.code == code) {
        return arr[i].value
      }
    }
    return false;
  }

  private searchInputChange(){
    this.router.navigate(['/institution/map-list',{search:'aaa',direction:'12'}])
  }

  selectListItem(id) {
    if (this.selectedTab === 'map') {
      this.router.navigate([`institution/view/${id}/common`]);
    }
  }

  setFilter(data?) {
    data = (data || {})
    this.previewQuery = (data['p_query'] || '')
    this.filter = this.fb.group({
      p_query: [(data['p_query'] || '')],
      p_districts: [this.classifiring(data['p_districts'])],
      p_education_levels: [this.classifiring(data['p_education_levels'])],
      p_institution_types: [this.classifiring(data['p_institution_types'])],
      p_okfses: [this.classifiring(data['p_okfses'])],
      p_institution_statuses: [this.classifiring(data['p_institution_statuses'])],
      p_deleted: [data['p_deleted']],
    })

    this.filter.valueChanges.subscribe((data) => {
      if (this.previewQuery === data.p_query) {
        let _data = JSON.stringify(this.unNulling(data))
        this.router.navigate(['institution'], {queryParams: {filter: _data}})
        this.previewQuery = data.p_query
      }
    })

    this.getList();
  }
  
  get isActiveMap() {
    return this.selectedTab === 'map'
  }

  get isActiveList() {
    return this.selectedTab === 'list'
  }
  
  onFilterSubmit() {
    let _data = JSON.stringify(this.unNulling(this.filter.value))
    this.router.navigate(['institution'], {queryParams: {filter: _data}})
    this.previewQuery = this.filter.value.p_query
  }

  classifiring(data) {
    let res
    if (Array.isArray(data)) {
      res = []
      data.map(_data => {
        res.push(new ClassifierShort(_data))
      })
    } else {
      res = new ClassifierShort(data)
    }
    return res
  }

  unNulling(data) {
    let _data = {}
    for (let i in data) {
      if (Array.isArray(data[i])) {
        if (data[i].length > 0) {
          _data[i] = []
          for (let j = 0, max_j = data[i].length; j < max_j; j += 1){
            _data[i].push(this.unNulling(data[i][j]))
          }
        }
      } else {
        if (data[i] !== null && data[i] !== '' ){
          _data[i] = (typeof data[i] === 'object') ? this.unNulling(data[i]) : data[i] 
        }
      }
    }
    return (Object.keys(_data).length === 0) ? '' : _data 
  }
  
  getList(){
    let p_limit = 20
    let p_page = this.pagination.page
    let p_query = this.filter.value.p_query
    let p_regions = []
    let p_districts = []
    if (Array.isArray(this.filter.value.p_districts)) {
      this.filter.value.p_districts.map(district => {
        p_districts.push(district.id)
      })
    }
    let p_institution_types = []
    if (Array.isArray(this.filter.value.p_institution_types)) {
      this.filter.value.p_institution_types.map(institution_type => {
        p_institution_types.push(institution_type.id)
      })
    }
    let p_institution_kinds = []
    let p_education_levels = []
    if (Array.isArray(this.filter.value.p_education_levels)) {
      this.filter.value.p_education_levels.map(education_level => {
        p_education_levels.push(education_level.id)
      })
    }
    let p_okopfs = []
    let p_okfses = []
    if (Array.isArray(this.filter.value.p_okfses)) {
      this.filter.value.p_okfses.map(okfs => {
        p_okfses.push(okfs.id)
      })
    }
    let p_institution_statuses = []
    if (Array.isArray(this.filter.value.p_institution_statuses)) {
      this.filter.value.p_institution_statuses.map(institution_status => {
        p_institution_statuses.push(institution_status.id)
      })
    }
    let p_jurisdictions = []
    let p_education_orientations = []
    let p_deleted = this.filter.value.p_deleted


    this.institutionService.institutionList(
      p_limit,
      p_page,
      p_query,
      p_regions,
      p_districts,
      p_institution_types,
      p_institution_kinds,
      p_education_levels,
      p_okopfs,
      p_okfses,
      p_institution_statuses,
      p_jurisdictions,
      p_education_orientations,
      p_deleted,
    ).subscribe(
      res => {
        let responce = new Response(res)
        this.list = new InstitutionList(responce.data)
      },
      err => {
        console.error('error err', err)
      }
    )
  }

}
