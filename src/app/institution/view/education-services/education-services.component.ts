import { Component, OnInit, Input } from '@angular/core';

import { InstitutionService } from '../../../api/institution';
import { Institution } from '../../../api/institution/Institution';
import { Response } from '../../../api/common/Response';
import { EducationServiceList } from '../../../api/institution/EducationServiceList';

@Component({
  selector: 'app-education-services',
  templateUrl: './education-services.component.html',
  styleUrls: ['./education-services.component.css']
})
export class EducationServicesComponent implements OnInit {

  _institution: Institution
  _params: {
    tabName: string
  }
  educationServices;


  @Input()
  set institution(institution) {
    if (institution) {
      this._institution = new Institution(institution);
      this.is.educationServiceList(null,null,null,[this._institution.identity.id]).subscribe(res => {
        this.educationServices = new EducationServiceList(new Response(res).data).items
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
