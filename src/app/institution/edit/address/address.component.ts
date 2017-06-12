import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
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


  @Input() title:string

  @Output() onDelete = new EventEmitter()

  public viewFrom = ''
  public regionService;
  public _address = new Address({});
  public _edit_address = new Address({});
  public _editState = false;
  public canAddNew = true;

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(address: any): void {
    console.log('address', address)
    if (address !== undefined && address !== null) {
      this._address = new Address(address);
      this._edit_address = this._address
    } else {
      this._address = new Address({});
      this._edit_address = this._address
    }

    this.canAddNew = this.noAddress();
    if(!this.canAddNew){
      this.viewFrom = this.getView();
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(private classifireService: Classifier_listService) {
    this.regionService = classifireService.classifierRegionList() 
  }

  ngOnInit() {
    
  }

  noAddress() {
    return (typeof this._address === 'undefined' || this._address === null)
  }


  getView() {
    if(!this._address.fias)
      return ''


    let a = this._address.fias 
    let text = [];


    if (a.region.name) {
      text.push(a.region.name)
    }

    if (a.okrug.name) {
      text.push(a.okrug.name)
    }

    if (a.district.name) {
      text.push(a.district.name)
    }

    if (a.city.name) {
      text.push(a.city.name)
    }

    if (a.incity.name) {
      text.push(a.incity.name)
    }

    if (a.municipality.name) {
      text.push(a.municipality.name)
    }

    if (a.street.name) {
      text.push(a.street.name)
    }

    if (a.building.name) {
      text.push(a.building.name)
    }

    if (a.flat.name) {
      text.push(a.flat.name)
    }

    return text.join(', ')
  }

  deleteMe() {
    this.onDelete.emit(this._address.identity);
  }

  cancel(){
    this._edit_address = this._address;
    this._editState = false;
  }

  submit() {
    this._address = this._edit_address;
    this.viewFrom = this.getView();
    this._editState = false;
    this.canAddNew = false;
  }
}










