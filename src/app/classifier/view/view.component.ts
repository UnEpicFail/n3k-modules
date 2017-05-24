import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  titles: {}[] = [
    {name: 'ID', propertie: 'id'},
    {name: 'Наименование', propertie: 'name'},
    {name: 'Код', propertie: 'code'},
    {name: 'Уровень образвоания', propertie: 'level'},
    {name: 'Направленность', propertie: 'direction'},
    ]

  list: {}[] = [
    {id:267345762, name:'Наличие сети Wi-Fi', code: '123', level: {id:1,name:'Дошкольное'}, direction: {id:1, name:'ФизМат'}},
    {id:28397492, name:'Наличие локальной вычислительной сети', code: '124', level: {id:1,name:'Дошкольное'}, direction: {id:1, name:'ФизМат'}},
    {id:12512, name:'Вентиляция', code: '125', level: {id:1,name:'Дошкольное'}, direction: {id:1, name:'ФизМат'}},
    {id:16, name:'Вахтер', code: '126', level: {id:1,name:'Дошкольное'}, direction: {id:1, name:'ФизМат'}},
  ]

  constructor() { }

  ngOnInit() {
  }

  toView(x) {
    return (typeof x === 'object') ? x.name : x;
  }

  deleteItem(id) {
    
  }

}
