import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

   transform(value: boolean, exponent: string): string {
    return (value) ? 'Да' : 'Нет';
  }

}
