import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  currentRange: string = '1-20'
  list: {}[] = [
    {id: 1, name: 'Наличие сети Wi-Fi'},
    {id: 2, name: 'Наличие локальной вычислительной сети'},
    {id: 3, name: 'Вентиляция'},
    {id: 4, name: 'Уровни образования'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
