import { Component, OnInit, Input } from '@angular/core';

import { InstitutionService } from '../../../api/institution';
import { Institution } from '../../../api/institution/Institution';
import { Response } from '../../../api/common/Response';
import { PublicDigitalServiceList } from '../../../api/institution/PublicDigitalServiceList';


@Component({
  selector: 'app-electronic-services',
  templateUrl: './electronic-services.component.html',
  styleUrls: ['./electronic-services.component.css']
})
export class ElectronicServicesComponent implements OnInit {

  _institution: Institution;
  _params: {
    tabName: string
  }
  publicDigitalServices;


  @Input()
  set institution(institution){
    if (institution) {
      this._institution = new Institution(institution);
      this.is.publicDigitalServiceList(null, null, null, [this._institution.identity.id]).subscribe(res => {
        this.publicDigitalServices = new PublicDigitalServiceList( new Response(res).data).items;
      })
    }
  }

  @Input()
  set params(params) {
    this._params = {
      tabName: params[0]
    }
  }

  constructor(private is: InstitutionService) { }

  ngOnInit() {
  }

}
