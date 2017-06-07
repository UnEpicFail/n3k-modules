import { Component, OnInit, Input } from '@angular/core';

import { InstitutionService } from '../../../api/institution';
import { Institution } from '../../../api/institution/Institution'
import { InnovationShort } from '../../../api/institution/InnovationShort';
import { InnovationList } from '../../../api/institution/InnovationList'
import { Innovation } from '../../../api/institution/Innovation'
import { Response } from '../../../api/common/Response'

@Component({
  selector: 'app-innovations',
  templateUrl: './innovations.component.html',
  styleUrls: ['./innovations.component.css']
})
export class InnovationsComponent implements OnInit {

  private _institution:Institution
  private selectedInnovation: number;
  public _innovation: Innovation;
  public _innovationList: InnovationList;

  @Input()
  set institution(institution) {
    if(institution){
      this._institution = new Institution(institution);
      this.is.innovationList(null,null,null,[this._institution.identity.id]).subscribe(res => {
        let _res = new Response(res)
        this._innovationList = new InnovationList(_res.data)
        this.selectInnovation(this._innovationList.items[0].identity.id)
      })
    }
  }

  constructor(private is: InstitutionService) { }

  ngOnInit() {
  }

  selectInnovation(id) {
    this.selectedInnovation = id;
    this.is.innovationGet(id).subscribe(res => {
      let _res = new Response(res);
      this._innovation = new Innovation(_res.data)
    })
  }

}
