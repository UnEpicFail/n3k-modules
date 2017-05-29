import { Component, OnInit, Input } from '@angular/core';

import { InstitutionFull } from '../../../api/institution/InstitutionFull';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Input()
  institution: InstitutionFull;

  constructor() { }

  ngOnInit() {
  }

   getContactByType(id:number) {
    for(let i in this.institution.contacts) {
      if (this.institution.contacts[i].type.id === id){
        return this.institution.contacts[i]
      }
    }
    return {}
  }

  backgraunImage(){
    return `url(${this.institution.publication.image_url})`
  }
}
