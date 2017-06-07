import { Component, OnInit, Input, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ClonnerComponent),
  multi: true
};


@Component({
  selector: 'n3k-clonner',
  templateUrl: './clonner.component.html',
  styleUrls: ['./clonner.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class ClonnerComponent implements OnInit, ControlValueAccessor {


  private _values: {}[]
  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this._values = (Array.isArray(value)) ? value: [value];
    } else {
      this._values = [];
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngOnInit() {
  }

}
