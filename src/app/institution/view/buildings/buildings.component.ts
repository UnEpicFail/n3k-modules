import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { InstitutionFull } from '../../../api/institution/InstitutionFull';
import { Response } from '../../../api/common/Response';
import { Building } from '../../../api/institution/Building';
import { InstitutionService } from '../../../api/institution'

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  public _institution: InstitutionFull;
  private _building;
  private selectedBuilding;
  private _seatsSum = {};
  private _totalSeatsSum = 0;

  @Input()
  set institution(institution: InstitutionFull) {
    if (institution){
      this._institution = institution;
      this.selectBuilding(institution.buildings[0].identity.id);
    }
  }  

  constructor(
    private is: InstitutionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectBuilding(id) {
    this.selectedBuilding = id;
    this.is.buildingGet(id).subscribe(res => {
      let _res = new Response(res)
      this._building = _res.data
      this._building.rooms.map(room=>{
        this._seatsSum[room.identity.id] = 0
        room.seats.map(seat=>{
          this._seatsSum[room.identity.id] += seat.seats
        })
      })
      for(let i in this._seatsSum){
        this._totalSeatsSum += this._seatsSum[i]
      };
    })
  }

  addNewRoom() {
    this.router.navigate(['edit/'+this.selectedBuilding+'/room'])
  }
}
