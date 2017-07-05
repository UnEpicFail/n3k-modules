import { Component, OnInit, Input, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { OverlayService } from '../overlay.service'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerComponent),
  multi: true
};


export class DatepickerComponentOptions {
  title: string
  placeholder: string
  constructor(obj) {
    this.title = (obj.title || '')
    this.placeholder = (obj.placeholder || '')
  }
}

@Component({
  selector: 'n3k-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR, OverlayService]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {


  _month: {}[][] = []
  _options: DatepickerComponentOptions
  _value: string = ''
  year_position
  month_position
  overlayDown
  dateList
  neck
  header

  monthList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  @Input('options')
  set options(options){
    this._options = new DatepickerComponentOptions((options || {}))
  }

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this._value = (value || '')
    this.getMonth(this._value)
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private overlay :OverlayService
  ) {
  
  }

  ngOnInit() {
  }

  modelChange(value?:any) {
    this._value = (value || '')
    this.onChange(this._value)
    this.onTouched()
    this.getMonth(this._value)
  }

  getMonth(d) {
    if(d)
    {
      d = d.split('.')
      d = d[1]+'.'+d[0]+'.'+d[2]
    }
    let DATE = new Date((d || new Date()));
    if (DATE) {
      this._month = []
      let days = []
      let today = new Date()
      let year = DATE.getFullYear();
      this.year_position = year;
      let month = DATE.getMonth();
      this.month_position = month;
      let date = DATE.getDate();
      let day = new Date(DATE.setDate(1)).getDay();
      day = (day === 0 ) ? 6 : day - 1 
      let next = new Date((new Date(year, month, 1)).setDate(32))
      let nextYear = next.getFullYear()
      let nextMonth = next.getMonth()
      let last = new Date(new Date(next.setDate(1)).setDate(0))
      let lastDate = last.getDate()
      let lastDay = last.getDay()
      lastDay = (lastDay === 0 ) ? 6 : lastDay - 1
      let preview = new Date((new Date(year, month, 1)).setDate(0))
      let previewYear = preview.getFullYear()
      let previewMonth = preview.getMonth()
      let previewDate = preview.getDate()
     
      for (let i = 0; i < day; i+=1) {
        days.unshift(
          {
            previewMonth: true,
            year: previewYear,
            month: (previewMonth < 10 ) ? '0' + previewMonth : previewMonth,
            date: previewDate - i,
            selectedDate: this.checkSelectedDate(previewDate - i,(previewMonth < 10 ) ? '0' + previewMonth : previewMonth, previewYear)
          }
        )
      }

      for (let i = 1; i <= lastDate; i += 1) {
        days.push({
          currentMonth: true,
          tody: (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()),
          year: year,
          month: (month < 10) ? '0' + month : month,
          date:  (i < 10 ) ? '0' + i : i,
          selectedDate: this.checkSelectedDate((i < 10 ) ? '0' + i : i, (month < 10) ? '0' + month : month, year)
        })
      }

      for (let i = 0; i <= 8 - lastDay; i += 1) {
        days.push({
          nextMonth: true,
          year: nextYear,
          month: (nextMonth < 10 ) ? '0' + nextMonth : nextMonth,
          date: '0' + (i + 1),
          selectedDate: this.checkSelectedDate( '0' + (i + 1), (nextMonth < 10 ) ? '0' + nextMonth : nextMonth, nextYear)
        })
      }

      let week

      for (let i = 0, max_i = days.length / 7 - 1; i < max_i; i += 1){
        week = []
        for (let j = 0; j < 7; j += 1) {
          week.push(days[j + (this._month.length * 7)])
        }
        this._month.push(week)
      }
    }
  }

  trigger() {
    this.getMonth(this._value)
    this.dateList = this.el.nativeElement.children[0].children[2].children[0]
    this.renderer.setStyle(this.dateList, 'width', this.el.nativeElement.offsetWidth+'px')
    setTimeout(()=>{
      
      this.renderer.setStyle(this.dateList, 'top', this.getPosition())

      this.overlayDown = this.overlay.up(() =>{
        this.renderer.appendChild(this.el.nativeElement.children[0].children[2], this.dateList)
      })
      this.renderer.setStyle(this.dateList, 'left', this.el.nativeElement.offsetLeft+'px')
      this.renderer.appendChild(document.body, this.dateList)
    }, 1);
  }

  selectDate(day) {
    this._value = day.date + '.' + ((day.month < 9) ?  '0' + (parseInt(day.month) + 1) : parseInt(day.month) + 1) + '.' + day.year
    this.onChange(this._value)
    this.onTouched()
    this.overlayDown()
  }

  previewMonth() {
    let d = new Date()
    d.setDate(1)
    d.setFullYear(this.year_position)
    d.setMonth(this.month_position - 1)
    this.getMonth(d.getDate()+'.'+(d.getMonth() + 1)+'.'+d.getFullYear())
  }

  nextMonth() {
    let d = new Date()
    d.setDate(1)
    d.setFullYear(this.year_position)
    d.setMonth(this.month_position + 1)
    this.getMonth(d.getDate()+'.'+(d.getMonth() + 1)+'.'+d.getFullYear())
  }

  previewYear() {
    let d = new Date()
    d.setDate(1)
    d.setMonth(this.month_position)
    d.setFullYear(this.year_position - 1)
    this.getMonth(d.getDate()+'.'+(d.getMonth() + 1)+'.'+d.getFullYear())
  }

  nextYear() {
    let d = new Date()
    d.setDate(1)
    d.setMonth(this.month_position)
    d.setFullYear(this.year_position + 1)
    this.getMonth(d.getDate()+'.'+(d.getMonth() + 1)+'.'+d.getFullYear())
  }

  checkSelectedDate(day, month, year){
    month = (parseInt(month) < 9) ? '0' + (parseInt(month)+1) : parseInt(month)+1
    return (day+'.'+month+'.'+year === this._value)
  }

  private getClosestColumn (el){
    if (!el.parentNode.getAttribute){
      return 0
    }
    if (el.parentNode.getAttribute('column')) {
      return el.parentNode.offsetTop
    } else {
      return this.getClosestColumn(el.parentNode)
    }
  }

  private getPosition() {
    let position = this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight + this.getClosestColumn(this.el.nativeElement)
    if (position + this.dateList.offsetHeight > window.innerHeight) {
      position -= this.dateList.offsetHeight + this.el.nativeElement.children[0].children[1].offsetHeight
    }
    return position + 'px'
  }
}
