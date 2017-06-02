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

  private _institution: Institution;
  private _publicDigitalServiceList: PublicDigitalServiceList;


  @Input()
  set institution(institution){
    if (institution) {
      this._institution = new Institution(institution);
      this.is.publicDigitalServiceList(this._institution.identity.id).subscribe(res => {
        let _res = new Response(res);
        this._publicDigitalServiceList = new PublicDigitalServiceList(_res.data);
      })
    }
  }

  constructor(private is: InstitutionService) { }

  ngOnInit() {
  }

}
