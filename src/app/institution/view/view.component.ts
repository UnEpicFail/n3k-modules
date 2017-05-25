import { Component, OnInit } from '@angular/core';
import { InstitutionFull } from '../../api/institution/InstitutionFull';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  selectedTab = 'common'

  tabs = [
    {
      id: 'common',
      name: 'Общие сведения'
    },
    {
      id: 'divisions',
      name: 'Подразделения'
    },
    {
      id: 'buildings',
      name: 'Здания'
    },
    {
      id: 'area',
      name: 'Територия'
    },
    {
      id: 'contracts',
      name: 'Договоры'
    },
    {
      id: 'educational_services',
      name: 'Образовательные услуги'
    },
    {
      id: 'electronic_services',
      name: 'Электронные госуслуги'
    },
    {
      id: 'innovations',
      name: 'Инновации'
    },
  ]

  institution: InstitutionFull = new InstitutionFull({
    publication: {
      image_url: '',
      title: 'БДОУ детский сад №1 комбинированного вида'
    },
    name: 'Детский сад №1',
    full_name: 'Муниципальное бюджетное дошкольное образовательное учреждение детский сад №1 комбинированного вида',
    status: {
      id: 1,
      name: 'Функционирует'
    },
    district: {
      id: 1,
      name: 'Выборгский район'
    },
    levels: [
      {
        id: 1,
        name: 'Высшее образование'
      }
    ],
    contacts: [
      {
        type:{
          id: 1,
          name: 'site'
        },
        value: 'spbstu.ru'
      },
      {
        type:{
          id: 2,
          name: 'phone'
        },
        value: '88123237728'
      }
    ],
    description: `Политехнический университет - многофункциональное государственное высшее учебное заведение.

В 2010 году он получил статус национального исследовательского университета, что явилось признанием его роли и возможностей как в области подготовки кадров, так и в мультидисциплинарных научных исследованиях и разработках.
В рейтинге технических университетов России Политехнический неизменно занимает ведущие позиции.`,
    education_area: [
      {
        origin_address: 'Московский 1'
      },
      {
        origin_address: 'Московский 2'
      },
      {
        origin_address: 'Московский 3'
      },
      {
        origin_address: 'Московский 4'
      },
    ],
    region: {
      id: 1,
      name: 'Санкт-Петербург'
    }

  })

  constructor() { }

  ngOnInit() {
  }

  getContactByType(id:number) {
    for(let i in this.institution.contacts) {
      if (this.institution.contacts[i].type.id === id){
        return this.institution.contacts[i]
      }
    }
    return {}
  }

}
