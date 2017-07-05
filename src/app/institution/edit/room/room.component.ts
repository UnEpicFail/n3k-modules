
import { Component, OnInit, QueryList, ViewChildren, AfterContentChecked} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AnchornTargetRefDirective } from '../../../lib/n3-ng-components/anchor-menu/anchor-menu.component'


import { Classifier_listService } from '../../../api/classifier_list'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { Institution } from '../../../api/institution/Institution'
import { Room } from '../../../api/institution/Room'



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, AfterContentChecked {

  form: FormGroup = new FormGroup({})
  institutionId
  buildingId
  _institution: Institution = new Institution({})
  _room: Room = new Room({})
  roomId

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

  }

  ngOnInit() {
    this.ar.params.subscribe((params:Params) => {
    this.institutionId = params['institutionId']
    this.buildingId = params['buildingId']
    this.roomId = params['roomId']

      if (!this.institutionId)
        return

      this.institutionServise.institutionGet(this.institutionId).subscribe(data => {
        let res = new Response(data);
        this._institution = new Institution(res.data)
        this.setForm()
      })

    });
  }

  ngAfterContentChecked() {
    this.anchors = this._anchors
  }

  setForm () {
    let r = this._room;
    this.form = this.fb.group({
     
    })
  }

  onSubmit() {
    console.log('this.form', this.form.value)  
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/buildings'])
  }

}
