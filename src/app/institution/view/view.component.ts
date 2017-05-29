
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { InstitutionFull } from '../../api/institution/InstitutionFull';


@Pipe({name: 'toWeekDays'})
export class ToWeekDays implements PipeTransform {
  transform(value: number[], exponent: string): string {
    let days = ['','Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    return days[value[0]] + ((value.length>1)? '-'+days[value.slice(-1)[0]] : '');
  }
}

@Pipe({name: 'toTime'})
export class ToTime implements PipeTransform {
  transform(value: string, exponent: string): string {
    let arr = value.split(':')
    return parseInt(arr[0],10)+':'+arr[1];
  }
}

@Pipe({name: 'yesNo'})
export class YesNo implements PipeTransform {
  transform(value: boolean, exponent: string): string {
    return (value) ? 'Да' : 'Нет';
  }
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  selectedId: string;
  selectedTab = 'common'

  tabs = [
    {
      id: 'common',
      name: 'Общие сведения',
    },
    {
      id: 'divisions',
      name: 'Подразделения',
    },
    {
      id: 'buildings',
      name: 'Здания',
    },
    {
      id: 'area',
      name: 'Територия',
    },
    {
      id: 'contracts',
      name: 'Договоры',
    },
    {
      id: 'educational-services',
      name: 'Образовательные услуги',
    },
    {
      id: 'electronic-services',
      name: 'Электронные госуслуги',
    },
    {
      id: 'innovations',
      name: 'Инновации',
    },
  ]

  institution: InstitutionFull = new InstitutionFull({
    organization: {
      owner: {
        firstname: 'Игорь',
        surname: 'Петров',
        middlename: 'Владимирович',
        citizenship: {
          country: {
            name:'Российская Федерация'
          }
        }
      },
      okved: [
        {
          id: 1,
          name: '80.10.1 (дошкольное образование)'
        }
      ],
      okato: '49210804000',
      inn: 5303001700,
      okfs: {
        id: 1,
        name: '49210804000'
      },
      oktmo: {
        id: 1,
        name: '49210804000'
      },
      okopf: {
        id: 1,
        name: '2 09 03 «Бюджетные учреждения»'
      },
      ogrn: '1025301788423',
      kpp: '530301001',
      okogu: '49210804000',
      district: {
        id: 1,
        name: 'Санкт-Петербург'
      },
      region: {
        id: 1,
        name: 'Петроградский'
      },
      status: {
        id: 1,
        name: 'Муниципальная'
      },
      // founders_type: {
      //   id: 1,
      //   name: 'Муниципальное образование'
      // },
      type_of_ownership: {
        id: 1,
        name: 'Муниципальная'
      },
      address: {
        origin_address: 'Средний пр-кт, 20, 199004, г. Санкт-Петербург'
      },
      founders_type: {
        id: 1,
        name: 'Сад'
      }
    },
    type: {
      id: 1,
      name: 'Дошкольная образовательные организации'
    },
    foundation_date: '12.12.2016',
    ovz_group_types: [
      {
        id: 1,
        name: 'Компенсирующий'
      },
      {
        id: 2,
        name: 'Общеразвивающие'
      }
    ],
    work_time: [
      {
        id: 1,
        begin_time: '08:00:00',
        end_time: '17:00:00',
        week_days: [1,2,3,4,5]
      }
    ],
    shift: [
      {
        id: 1,
        name: '1 смена'
      },
      {
        id: 2,
        name: '2 смена'
      }
    ],
    meta: {
      site_characteristics: [
        {
          id: 1,
          name: 'Компенсирующий'
        },
        {
          id: 2,
          name: 'Общеразвивающие'
        }
      ],
      fgos_scoring: [
        {
          id: 1,
          name: 'ФГОС1'
        }
      ],
      is_small_setted: true,
      has_bookkeeping: true,
      is_budget_transfered: true,
      has_it_teachers: true,
      schedule_string: 'Круглосуточно',
      direction_for_ip: 'Прямое',
      statute_url: 'http://netrika.ru/',
      employee_count: 23,
      is_first_class: true,
      electronic_diary_url: 'http://netrika.ru/',
      electronic_diary_name: 'КАИС КРО',
      electronic_diary_vendor: 'Нетрика',
      educational_program_url:'http://netrika.ru/',
      additional_name: 'Муниципальное бюджетное дошкольное образовательное учреждение детский сад №1',
      reorganization_name: 'Муниципальное бюджетное дошкольное образовательное учреждение детский сад №1',
      occupied_place: 234,
      total_place: 270,
    },
    education_services: [
      {
        identity: {
          id:1
        },
        name: 'Дошкольное образование'
      }
    ],
    meals: [
      {
        id: 1,
        meal_type: {
          id: 1,
          name: 'Горячее питание'
        }
      }
    ],
    education_language: {
      id: 1, 
      name: 'Русский'
    },
    publication: {
      image_url: 'https://vignette2.wikia.nocookie.net/waha/images/d/d8/Altdorf3.jpg/revision/latest/scale-to-width-down/1000?cb=20110409091612&path-prefix=ru',
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
    description: 'Политехнический университет - многофункциональное государственное высшее учебное заведение. В 2010 году он получил статус национального исследовательского университета, что явилось признанием его роли и возможностей как в области подготовки кадров, так и в мультидисциплинарных научных исследованиях и разработках. В рейтинге технических университетов России Политехнический неизменно занимает ведущие позиции.',
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

  constructor() {}

  ngOnInit() {
  }

}

