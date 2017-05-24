import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuList:{}[] = [
    {link:'institution', name:'Организации', icon:'icon-location-pin'},
    {link:'classifier', name:'Справочники', icon:'icon-location-pin'},
    {link:'group', name:'Группы', icon:'icon-location-pin'},
    {link:'program', name:'Программы', icon:'icon-location-pin'},
  ]
}
