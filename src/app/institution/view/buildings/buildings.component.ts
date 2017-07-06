import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Institution } from '../../../api/institution/Institution';
import { Response } from '../../../api/common/Response';
import { Pagination } from '../../../api/common/Pagination';
import { BuildingList } from '../../../api/institution/BuildingList'
import { Building } from '../../../api/institution/Building';
import { InstitutionService } from '../../../api/institution'

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent {

  _institution: Institution;
  buildings;
  building;

  selectedBuilding;
  seatsSum = {};
  totalSeatsSum = 0;
  _params : {
    tabName: string,
    selectedBuilding: string
  }

  @Input()
  set institution(institution: Institution) {
    if (institution){
      this._institution = institution;
      this.is.buildingList(null, null, null, [this._institution.identity.id]).subscribe(data => {
        this.buildings = new Pagination(new Response(data).data).items
        if(this._params.selectedBuilding === '') {
          this.selectBuilding(this.buildings[0].identity.id)
        }
      })
    }
  }  

  @Input()
  set params(params: string[]){
    this._params = {
      tabName: (params[0] || ''),
      selectedBuilding: (params[1] || ''),
    }

    if (this._params.selectedBuilding !== '') {
      this.getBuilding(this._params.selectedBuilding)
    }
  }

  constructor(
    private is: InstitutionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectBuilding(id) {
    this.router.navigate(['institution', 'view', this._institution.identity.id], {fragment: this._params.tabName+'/'+id})
  }

  getBuilding(id) {
    this.is.buildingGet(id).subscribe(res => {
      let _res = new Response(res)
      this.building = _res.data
      this.building.rooms.map(room=>{
        this.seatsSum[room.identity.id] = 0
        room.seats.map(seat=>{
          this.seatsSum[room.identity.id] += seat.seats
        })
      })
      for(let i in this.seatsSum){
        this.totalSeatsSum += this.seatsSum[i]
      };
    })
  }

  addNewRoom() {
    this.router.navigate(['edit/'+this.selectedBuilding+'/room'])
  }
}
