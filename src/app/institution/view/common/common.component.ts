import { Component, OnInit, Input } from '@angular/core';

import { InstitutionFull } from '../../../api/institution/InstitutionFull';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {


  _institution;
  _backgraunImage;
  _contacts={};

  @Input()
  set institution(institution: InstitutionFull){
    if(institution){
      this._institution = institution
      this._backgraunImage = `url(${this._institution.publication.image_url})`
      this._institution.contacts.map(contact=>{
        this._contacts[contact.type.id] = contact.value
      })
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
