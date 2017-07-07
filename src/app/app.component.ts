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
    icon: string,
    sub?: {
      link: string,
      name: string
    }[]
  }[] = [
    {link:'journal', name:'Журнал', icon:'icon-book-open', sub:[
      {link:'journal/program', name:'Программы'},
      {link:'journal/group', name:'Группы'}
    ]},
    {link:'institution', name:'Организации', icon:'icon-location-pin'},
    {link:'classifier', name:'Справочники', icon:'icon-location-pin'}
  ]

  sub = [];


  constructor(
    private router: Router, 
    private ar: ActivatedRoute
  ) {      

    router.events.subscribe(val => { 
      if (val instanceof NavigationEnd) {
        let index = this.getActive(val.url.split('#')[0].split('?')[0].split('/')[1])
        if (index >= 0){
          this.sub = (this.menuList[index].sub || [])
        } else {
          this.sub = []
        }
      }
    });
  }

  getActive(name) {
    let index = -1;
    for(let i=0, max_i=this.menuList.length; i <max_i; i+=1){
      if(name === this.menuList[i].link){
        index = i;
        break;
      }
    }
    return index
  }

}
