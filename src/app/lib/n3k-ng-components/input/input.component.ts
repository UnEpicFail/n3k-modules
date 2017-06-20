import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};


@Component({
  selector: 'n3k-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  public _value: string = '';
  public _title: string;
  public _placeholder: string;
 

  @Input()
  set title(title){
    this._title = (title || '')
  }


  @Input()
  set placeholder(placeholder){
    this._placeholder = (placeholder || '')
  }

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this._value = value;
    } else {
      this._value = '';
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngOnInit() {
  }

  modelChange(value?:any){
    this._value = (value || '')
    this.onChange(this._value)
    this.onTouched()
  }
  
  isEmpty() {
    return (this._value === undefined || this._value === '' || this._value === null)
  }
}
