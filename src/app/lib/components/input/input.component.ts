import { Component, OnInit, Input, forwardRef, ElementRef, Renderer2 } from '@angular/core';
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

  private _value: string;
  private _title: string;
  private _placeholder: string;
 

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

  inputChange(e) {
    this._value = e
    this.onChange(this._value);
    this.onTouched(); 
  }

  isEmpty() {
    return (typeof this._value === 'undefined' || this._value === '' || this._value === null)
  }

}
