import { Component, OnInit, Input } from '@angular/core';

import { Institution } from '../../../api/institution/Institution';
import { InstitutionService } from '../../../api/institution';
import { Response } from '../../../api/common/Response'
import { Territory } from '../../../api/institution/Territory'
import { TerritoryList } from '../../../api/institution/TerritoryList'
import { TerritoryShort } from '../../../api/institution/TerritoryShort'

@Component({
  selector: 'app-territories',
  templateUrl: './territories.component.html',
  styleUrls: ['./territories.component.css']
})
export class TerritoriesComponent implements OnInit {

  public _territoryList
  public _territory
  private _institution: Institution;
  private selectedTerritory: number;
  @Input()
  set institution(institition){
    if (institition) {
      this._institution = new Institution(institition);
      this.is.territoryList(null,null,null,[this._institution.identity.id]).subscribe(res=>{
        let _res = new Response(res)
        this._territoryList = new TerritoryList(_res.data)
        this.selectTerritory (this._territoryList.items[0].identity.id)
      })
    }
  }


  constructor(private is: InstitutionService) { }

  ngOnInit() {
  }

  selectTerritory(id) {
    this.selectedTerritory = id
    this.is.territoryGet(id).subscribe(res => {
      let _res = new Response(res)
      this._territory = new Territory(_res.data)
    })
  }

}
