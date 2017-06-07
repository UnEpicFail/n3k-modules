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

  private _institution: Institution
  public _educationServicesList: EducationServiceList;


  @Input()
  set institution(institution) {
    if (institution) {
      this._institution = new Institution(institution);
      this.is.educationServiceList(null,null,null,[this._institution.identity.id]).subscribe(res => {
        let _res = new Response(res)
        this._educationServicesList = new EducationServiceList(_res.data)
      })
    }
  }

  constructor(private is: InstitutionService) { }

  ngOnInit() {
  }

}
