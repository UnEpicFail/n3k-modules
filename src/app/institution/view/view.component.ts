
import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

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
  selectedListItem: string
  params: string[] = []

  tabs = [
    {
      id: 'common',
      name: 'Общие сведения',
    },
    {
      id: 'departments',
      name: 'Подразделения',
    },
    {
      id: 'buildings',
      name: 'Здания',
    },
    {
      id: 'territories',
      name: 'Територия',
    },
    {
      id: 'contracts',
      name: 'Договоры',
    },
    {
      id: 'education-services',
      name: 'Образовательные услуги',
    },
    {
      id: 'electronic-services',
      name: 'Электронные госуслуги',
    },
    {
      id: 'innovations',
      name: 'Инновации',
    },
  ]

  rootLink = '/'


  constructor(
    private ar: ActivatedRoute, 
    public institutionService: InstitutionService,
    private router: Router 
  ) {
    this.rootLink = router.url.split('#')[0]
    this.ar.params.subscribe(params => {
      this.selectedId = params.institutionId
      institutionService.institutionGet(this.selectedId).subscribe(res => {
        this.institution = new InstitutionFull(new Response(res).data)
      })  
    })
  }

  ngOnInit() {}


}

