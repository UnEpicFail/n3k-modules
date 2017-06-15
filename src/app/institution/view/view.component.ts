
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InstitutionFull } from '../../api/institution/InstitutionFull';
import { Response } from '../../api/common/Response';

import { InstitutionService } from '../../api/institution'


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input()
  institution: InstitutionFull

  selectedTab: string
  selectedId: string

  tabs = [
    {
      id: 'common',
      link: '../common',
      name: 'Общие сведения',
    },
    {
      id: 'departments',
      link: '../departments',
      name: 'Подразделения',
    },
    {
      id: 'buildings',
      link: '../buildings',
      name: 'Здания',
    },
    {
      id: 'territory',
      link: '../territory',
      name: 'Територия',
    },
    {
      id: 'contracts',
      link: '../contracts',
      name: 'Договоры',
    },
    {
      id: 'education-services',
      link: '../education-services',
      name: 'Образовательные услуги',
    },
    {
      id: 'electronic-services',
      link: '../electronic-services',
      name: 'Электронные госуслуги',
    },
    {
      id: 'innovations',
      link: '../innovations',
      name: 'Инновации',
    },
  ]



  constructor(private ar: ActivatedRoute, public institutionService: InstitutionService) {
    this.ar.params.subscribe(params => {
      this.selectedTab = params.tab
      this.selectedId = params.id;
      institutionService.institutionGet(params.id).subscribe(res => {
        let _res = new Response(res)
        this.institution = new InstitutionFull(_res.data)
      })  
    })
  }

  ngOnInit() {}

}

