import { Directive, Component, ContentChild, AfterContentInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[clone]'
})

export class CloneRefDirective {
  public setModel(){
    console.log('!!!!')
  }
}


const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ClonnerComponent),
  multi: true
};


@Component({
  selector: 'n3k-cloner',
  templateUrl: './clonner.component.html',
  styleUrls: ['./clonner.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class ClonnerComponent implements AfterContentInit, ControlValueAccessor {


  @ContentChild(CloneRefDirective)
  clone: CloneRefDirective

  private _clones: {}[]
  onChange = (_) => {};
  onTouched = () => {};

  writeValue(clones: any): void {
    if (clones !== undefined && clones !== null) {
      this._clones = (Array.isArray(clones)) ? clones: [clones];
    } else {
      this._clones = [];
    }
    console.log(this._clones)
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngAfterContentInit() {
    console.log(this.clone)
  }

}


