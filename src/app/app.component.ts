import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuList:{}[] = [
    {link:'journal', name:'Журнал', icon:'icon-book-open', sub:[
      {link:'journal/program', name:'Программы'},
      {link:'journal/group', name:'Группы'},
    ]},
    {link:'institution', name:'Организации', icon:'icon-location-pin'},
    {link:'classifier', name:'Справочники', icon:'icon-location-pin'},
  ]

  active = [0, 0];


  constructor(private router: Router) {
    // router.events.subscribe((val) => { 
    //     if (val instanceof NavigationEnd) {
    //       console.log('val', val)
    //       for(let i in this.menuList) {
            
    //       }
    //     } 
    // });
  }

  getActive() {
    
    return 0;
  }
}
