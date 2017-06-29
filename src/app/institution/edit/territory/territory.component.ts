import { Component, OnInit, QueryList, ViewChildren, AfterContentChecked} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AnchornTargetRefDirective } from '../../../lib/n3k-ng-components/anchor-menu/anchor-menu.component'


import { Classifier_listService } from '../../../api/classifier_list'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { Institution } from '../../../api/institution/Institution'
import { Territory } from '../../../api/institution/Territory'

@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit, AfterContentChecked {

  form: FormGroup = new FormGroup({})
  institutionId
  _institution: Institution = new Institution({})
  _territory: Territory = new Territory({})
  territoryId

  anchorList: {}[] = [
    {name:'Общие сведения', target: 'common'},
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
  ) { }

  ngOnInit() {
    this.ar.params.subscribe((params:Params) => {
    this.institutionId = params['institutionId']
    this.territoryId = params['territoryId']

      if (!this.institutionId)
        return

      this.institutionServise.institutionGet(this.institutionId).subscribe(data => {
        let res = new Response(data);
        this._institution = new Institution(res.data)
        this.setForm()
      })

      if (!this.territoryId) {
        this.setForm()
      } else {
        this.institutionServise.buildingGet(this.territoryId).subscribe(data => {
          let res = new Response(data);
          this._territory = new Territory(res.data)
          this.setForm()
        })
      }

    });
  }

  ngAfterContentChecked() {
    this.anchors = this._anchors
  }

  setForm () {
    let t = this._territory
    this.form = this.fb.group({
      name: [t.name],
      equipment: [t.equipment],
    })
  }

  onSubmit() {
    this._territory = new Territory({
      identity: this._territory.identity,
      entity_state: this._territory.entity_state,
      institution_identity: this._institution.identity,
      name: this.form.value.name,
      equipment: this.form.value.equipment,
    })
    this.institutionServise.territorySave(this._territory).subscribe(
      res => {
        console.log('res', res)
      },
      err => {
        console.error('err', err)
      }
    )
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/territories'])
  }

}
