import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { InstitutionService } from '../../../api/institution';
import { Institution } from '../../../api/institution/Institution'
import { InnovationList } from '../../../api/institution/InnovationList'
import { Innovation } from '../../../api/institution/Innovation'
import { Response } from '../../../api/common/Response'

@Component({
  selector: 'app-innovations',
  templateUrl: './innovations.component.html',
  styleUrls: ['./innovations.component.css']
})
export class InnovationsComponent {

  _institution:Institution
  _params: {
    tabName: string,
    selectedInnovation: string
  }
  innovations;
  innovation: Innovation;

  @Input()
  set institution(institution) {
    if(institution){
      this._institution = new Institution(institution);
      this.is.innovationList(null,null,null,[this._institution.identity.id]).subscribe(res => {
        this.innovations = new InnovationList(new Response(res).data).items

        if (this._params.selectedInnovation === ''){
          this.getInnovtion(this.innovations[0].identity.id)
        }
      })
    }
  }

  @Input()
  set params(params) {
    this._params = {
      tabName: (params[0] || ''),
      selectedInnovation: (params[1] || '')
    }

    if (this._params.selectedInnovation !== '') {
      this.getInnovtion(this._params.selectedInnovation)
    }
  }

  constructor(
    private is: InstitutionService,
    private router: Router
  ) { }

  selectInnovation(id) {
    this.router.navigate(['institution', 'view', this._institution.identity.id], {fragment: this._params.tabName+'/'+id})
  }

  getInnovtion(id) {
    this.is.innovationGet(id).subscribe(res => {
      this.innovation = new Innovation(new Response(res).data)
    })
  }

}
