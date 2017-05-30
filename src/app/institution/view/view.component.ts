
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



  constructor() {}

  ngOnInit() {
  }

}

