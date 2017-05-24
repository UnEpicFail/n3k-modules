import { Component, OnInit } from '@angular/core';
import { InstitutionShort } from '../../api/common/InstitutionShort';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: InstitutionShort[] = [new InstitutionShort({
    name:'Детский сад №1 "Калинка"',
    status: {id:1, name:'Функционирует'},
    address: {
      origin_address: 'Ленинградская область. г. Выборг. ул. Ленина, д. 3'
    },
    contacts: [
      {type:{id:1, code:'phone'}, value: '8813454332'},
      {type:{id:2, code:'email'}, value: 'gboo1.ru'}
    ]
  })]

  public searchSrt: string = ''

  constructor(private router: Router, private ar:ActivatedRoute) { }

  ngOnInit() {
  }

}
