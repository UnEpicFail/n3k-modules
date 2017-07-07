import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MapMouseEvent, MapClickMouseEvent, MarkerClaster }  from '../../angular2-yandex-maps/core.module';

import { Classifier_listService } from '../../api/classifier_list';
import { ProgramService } from '../../api/program';
import { InstitutionService } from '../../api/institution'
import { Response } from '../../api/common/Response';
import { ProgramList } from '../../api/program/ProgramList'
import { ClassifierShort } from '../../api/common/ClassifierShort'




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tabs = [
    {
      id: 'map',
      name: 'На карте'
    },
    {
      id: 'list',
      name: 'Списком'
    }
  ]

  filter:FormGroup

  params: string[] = []

  rootLink = '/program'

  list: ProgramList = new ProgramList({})

  districtsMethod
  institutionsMethod
  educationLevelsMethod
  educationSpecifiesMethod


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ar:ActivatedRoute,
    private classifierService: Classifier_listService,
    private programService: ProgramService,
    private institutionService: InstitutionService
  ) { 
    this.setFilter()
    
    this.districtsMethod = classifierService.classifierDistrictList();
    this.institutionsMethod = institutionService.institutionList
    this.educationLevelsMethod = classifierService.classifierEducationLevelList();
    this.educationSpecifiesMethod = classifierService.classifierSpecifyList()


  }

  ngOnInit() {
    this.ar.queryParams
      .subscribe(params => {
        if (params.filter) {
          this.setFilter(JSON.parse(params.filter))
        }
      });
  }

  setFilter (data?) {
    data = (data || {})
    this.filter = this.fb.group({
      p_query: [(data['p_query'] || '')],
      p_districts: [this.classifiring(data['p_districts'])],
      p_institutions: [this.classifiring(data['p_institutions'])],
      p_education_levels: [this.classifiring(data['p_education_levels'])],
      p_education_orientations: [this.classifiring(data['p_education_orientations'])],
      p_education_specifies: [this.classifiring(data['p_education_specifies'])],
      p_adaptives: [this.classifiring(data['p_adaptives'])],
      p_deleted: [(data['p_deleted'] || false)],

    })
    this.getList()
  }

  getList() {
    this.programService.programList()
      .subscribe(
        res => {
          this.list = new ProgramList(new Response(res).data)
        },
        err => {
          console.error('error err', err)
        })
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

  selectListItem() {

  }

  onFilterSubmit () {

  }

}
