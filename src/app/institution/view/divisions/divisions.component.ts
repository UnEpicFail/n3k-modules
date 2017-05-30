import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.css']
})
export class DivisionsComponent implements OnInit {

  selectedDevision

  divisionsList = [
    {
      id: 1,
      name: 'Школа',
      childrens: [
        {
          id: 4,
          name: 'Администрация'
        },
        {
          id: 5,
          name: 'Спорткомплекс'
        }
      ]
    },
    {
      id: 2,
      name: 'Детский сад'
    },
    {
      id: 3,
      name: 'Спорткомплекс'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
