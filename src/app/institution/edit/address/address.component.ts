import { Component, OnInit, forwardRef, ElementRef, Renderer2  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Classifier_listService } from '../../../api/classifier_list'
import { Address } from '../../../api/common/Address'


const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AddressComponent),
  multi: true
};



@Component({
  selector: 'edit-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class AddressComponent implements OnInit, ControlValueAccessor{

  public regionService;
  public _address: Address = new Address({});

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(address: any): void {
    if (address !== undefined && address !== null) {
      this._address = new Address(address);
    } else {
      this._address = new Address({});
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(private classifireService: Classifier_listService) {
    this.regionService = classifireService.classifierRegionList() 
  }

  ngOnInit() {
    
  }

}
