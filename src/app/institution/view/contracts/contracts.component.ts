import { Component, OnInit, Input } from '@angular/core';

import { Institution } from '../../../api/institution/Institution'
import { EducationContractList } from '../../../api/institution/EducationContractList'
import { EducationContract } from '../../../api/institution/EducationContract'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  private _institution: Institution;
  public _contractList: EducationContractList;
  public _contract: EducationContract
  private selectedContract

  @Input()
  set institution(institution) {
    if(institution) {
      this._institution = new Institution(institution);
      this.is.educationContractList(null, null, null, [this._institution.identity.id]).subscribe(res => {
        let _res = new Response(res)
        this._contractList = new EducationContractList(_res.data)
        this.selectContract(this._contractList.items[0].identity.id)
      })
    }
  }

  constructor(private is: InstitutionService) { }

  ngOnInit() {
  }

  selectContract(id) {
    this.selectedContract = id
    this.is.educationContractGet(id).subscribe(res => {
      let _res = new Response(res)
      this._contract = new EducationContract(_res.data)
    })
  }

}
