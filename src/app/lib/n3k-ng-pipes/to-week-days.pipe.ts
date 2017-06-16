import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toWeekDays'
})
export class ToWeekDaysPipe implements PipeTransform {

  transform(value: number[], exponent: string): string {
    if (!value) {
      return ''
    }
    
    let days = ['','Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    let inOrder = true;
    let prev
    for (let i = 0, max_i = value.length; i < max_i; i += 1 ) {
      if (prev && value[i] !== prev+1) {
        inOrder = false;
      } 
      prev = value[i]
    }
    if (inOrder){
      return days[value[0]] + ((value.length>1)? '-'+days[value.slice(-1)[0]] : '');
    }
    else {
      let res = []
      value.map(val => {
        res.push(days[val])
      })
      return res.join(', ')
    }
  }

}
