import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { InstitutionService } from '../../../api/institution'
import { Institution } from '../../../api/institution/Institution'
import { EducationContractList } from '../../../api/institution/EducationContractList'
import { EducationContract } from '../../../api/institution/EducationContract'
import { Response } from '../../../api/common/Response'

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent {

  _institution: Institution;
  _params: {
    tabName: string,
    selectedContract: string
  }
  contractList: EducationContractList;
  contract: EducationContract
  selectedContract

  @Input()
  set institution(institution) {
    if(institution) {
      this._institution = new Institution(institution);
      this.is.educationContractList(null, null, null, [this._institution.identity.id]).subscribe(res => {
        this.contractList = new EducationContractList(new Response(res).data)
        if(this._params.selectedContract === '') {
          this.selectContract(this.contractList.items[0].identity.id)
        }
      })
    }
  }

  @Input()
  set params(params) {
    this._params = {
      tabName: (params[0] || ''),
      selectedContract: (params[1] || ''),
    }

    if (this._params.selectedContract !== '') {
      this.getContract(this._params.selectedContract)
    }
  }

  constructor(
    private is: InstitutionService,
    private router: Router
  ) { }

  selectContract(id) {
    this.router.navigate(['institution', 'view', this._institution.identity.id], {fragment: this._params.tabName+'/'+id})
  }

  getContract(id) {
    this.is.educationContractGet(id).subscribe(res => {
      this.contract = new EducationContract(new Response(res).data)
    })
  }

}
