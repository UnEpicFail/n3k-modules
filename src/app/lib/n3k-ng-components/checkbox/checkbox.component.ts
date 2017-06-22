import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true
};


@Component({
  selector: 'n3k-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class CheckboxComponent implements ControlValueAccessor {

  _value:boolean = false
  _title:string = ''

  @Input()
  set title(title) {
    if (title) {
      this._title = title
    }
  }

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this._value = (value);
    } else {
      this._value = false;
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngOnInit() {
  }

  modelChange(value?:any){
    this._value = (value || false)
    this.onChange(this._value)
    this.onTouched()
  }

}
