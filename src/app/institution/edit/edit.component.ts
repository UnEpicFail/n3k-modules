import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  anchorList: {}[] = [
    {name:'Юридическое лицо'},
    {name:'Общие сведения'},
    {name:'Дополнительная информация'},
    {name:'Контактная информация'},
    {name:'Общественный орган управления'},
    {name:'Аккредитация'},
    {name:'Лицензия'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
