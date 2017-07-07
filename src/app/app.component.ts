import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuList:{
    link: string,
    name: string,
    active: boolean,
    icon: string,
    sub?: {
      link: string,
      active: boolean,
      name: string
    }[]
  }[] = [
    {link:'program', name:'Журнал', icon:'icon-book-open', active: false, sub:[
      {link:'program', name:'Программы', active: false},
      {link:'group', name:'Группы', active: false},
      {link:'classifier', name:'Справочники', active: false},
    ]},
    {link:'institution', name:'Организации', icon:'icon-location-pin', active: false},
  ]

  sub = [];


  constructor(
    private router: Router, 
    private ar: ActivatedRoute
  ) {      

    router.events.subscribe(val => { 
      if (val instanceof NavigationEnd) {
        this.setActive(val.url.split('#')[0].split('?')[0].split('/')[1])
        // let index = this.getActive()
        // if (index >= 0){
        //   this.sub = (this.menuList[index].sub || [])
        // } else {
        //   this.sub = []
        // }
      }
    });
  }

  setActive(active) {
    this.sub = []
    this.menuList.map(route => {
      let hasActiveSab = false
      if (route.sub){
        for (let i = 0, max_i = route.sub.length; i < max_i; i += 1){
          if (route.sub[i].link === active){
            hasActiveSab = true;
            route.sub[i].active = true
          } else {
            route.sub[i].active = false
          }
        }
      }
      if (hasActiveSab || route.link === active) {
        this.sub = route.sub
        route.active = true
      } else {
        route.active = false
      }
    })
  }

  getActive(name) {
    let index = -1;
    for (let i = 0, max_i = this.menuList.length; i < max_i; i += 1) {
      
    }
    return index
  }

}
