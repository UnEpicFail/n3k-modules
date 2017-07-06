
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



  constructor(
    private ar: ActivatedRoute, 
    public institutionService: InstitutionService,
    private router: Router 
  ) {
    this.ar.params.subscribe(params => {
      this.selectedTab = params.tab
      this.selectedId = params.institutionId;
      this.selectedListItem = params.selected
      institutionService.institutionGet(this.selectedId).subscribe(res => {
        let _res = new Response(res)
        this.institution = new InstitutionFull(_res.data)
      })  
    })
    this.router.events.subscribe(params => {
      if (params instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          this.params = tree.fragment.split('/')
          this.selectedTab = this.params[0]
        }
      }
    })
  }

  ngOnInit() {}

  public openTab(id) {
    this.router.navigate(['/institution/view/'+this.selectedId], {fragment:id} )
  }

}

