import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: string, exponent: string): string {
    let arr = value.split(':')
    return parseInt(arr[0],10)+':'+arr[1];
  }

}
