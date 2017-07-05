import { Component, OnInit, QueryList, ViewChildren, AfterContentChecked} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AnchornTargetRefDirective } from '../../../lib/n3-ng-components/anchor-menu/anchor-menu.component'


import { Classifier_listService } from '../../../api/classifier_list'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { Institution } from '../../../api/institution/Institution'
import { Building } from '../../../api/institution/Building'



@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit, AfterContentChecked {

  form: FormGroup = new FormGroup({})
  institutionId
  _institution: Institution = new Institution({})
  _building: Building = new Building({})
  buildingId

  anchorList: {}[] = [
    {name:'Общие сведения', target: 'common'},
    {name:'Контактная информация', target: 'contacts'},
    {name:'Оснащение', target: 'equipment'},
  ]

  statusService
  typeService
  terrainService

  anchors:QueryList<AnchornTargetRefDirective>
  @ViewChildren(AnchornTargetRefDirective) _anchors:QueryList<AnchornTargetRefDirective>

  constructor(
    private fb: FormBuilder,
    private institutionServise: InstitutionService,
    private classifireService: Classifier_listService,
    private ar: ActivatedRoute,
    private router: Router
  ) {
    this.setForm()

    this.statusService = this.classifireService.classifierBuildingStatusList()
    this.typeService = this.classifireService.classifierBuildingTypeList()
    this.terrainService = this.classifireService.classifierTerrainTypeList()
  }

  ngOnInit() {
    this.ar.params.subscribe((params:Params) => {
    this.institutionId = params['institutionId']
    this.buildingId = params['buildingId']

      if (!this.institutionId)
        return

      this.institutionServise.institutionGet(this.institutionId).subscribe(data => {
        let res = new Response(data);
        this._institution = new Institution(res.data)
        this.setForm()
      })

      if (!this.buildingId) {
        this.setForm()
      } else {
        this.institutionServise.buildingGet(this.buildingId).subscribe(data => {
          let res = new Response(data);
          this._building = new Building(res.data)
          this.setForm()
        })
      }

    });
  }

  ngAfterContentChecked() {
    this.anchors = this._anchors
  }

  setForm () {
    let b = this._building;
    this.form = this.fb.group({
      capacity: [b.capacity],
      address: [b.address],
      type: [b.type],
      terrain: [b.terrain],
      rooms: [b.rooms],
      equipment: [b.equipment],
      name: [b.name],
      is_head: [b.is_head],
      status: [b.status],
    })
  }

  onSubmit() {
    this._building = new Building({
      identity: this._building.identity,
      entity_state: this._building.entity_state,      
      institution_identity: this._institution.identity,
      capacity: this.form.value.capacity,
      address: this.form.value.address,
      type: this.form.value.type,
      terrain: this.form.value.terrain,
      rooms: this.form.value.rooms,
      equipment: this.form.value.equipment,
      name: this.form.value.name,
      is_head: this.form.value.is_head,
      status: this.form.value.status,
    })  
    this.institutionServise.buildingSave(this._building).subscribe(
      res => {
        console.log('success', res)
      },
      err => {
        console.error('err', err)
      }
    )
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/buildings'])
  }

}
