import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Institution } from '../../../api/institution/Institution';
import { InstitutionService } from '../../../api/institution';
import { Response } from '../../../api/common/Response'
import { Territory } from '../../../api/institution/Territory'
import { TerritoryList } from '../../../api/institution/TerritoryList'

@Component({
  selector: 'app-territories',
  templateUrl: './territories.component.html',
  styleUrls: ['./territories.component.css']
})
export class TerritoriesComponent implements OnInit {

  territories
  territory
  _institution: Institution;
  selectedTerritory: number;
  _params: {
    tabName: string,
    selectedTeritory: string
  }

  @Input()
  set institution(institition){
    if (institition) {
      this._institution = new Institution(institition);
      this.is.territoryList(null,null,null,[this._institution.identity.id]).subscribe(res=>{
        this.territories = new TerritoryList(new Response(res).data).items

        if(this._params.selectedTeritory === '') {
          this.selectTerritory(this.territories[0].identity.id)
        }

      })
    }
  }

  @Input()
  set params (params: string[]) {
    this._params = {
      tabName: (params[0] || ''),
      selectedTeritory: (params[1] || ''),
    }

    if (this._params.selectedTeritory !== '') {
      this.getTeritory(this._params.selectedTeritory)
    }
  }

  constructor(
    private is: InstitutionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectTerritory(id) {
    this.router.navigate(['institution', 'view', this._institution.identity.id], {fragment: this._params.tabName+'/'+id})
  }

  getTeritory(id) {
    this.is.territoryGet(id).subscribe(res => {
      this.territory = new Territory(new Response(res).data)
    })
  }

}
