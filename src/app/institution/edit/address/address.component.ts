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

  _limit:number = Infinity
  @Input()
  set limit(limit) {
    if(limit){
      this._limit = limit
    }
  }

  @Output() onDelete = new EventEmitter()

  public regionService;
  public okrugService;
  public districtService;
  public cityService;
  public incityService;
  public municipalityService;
  public streetService;
  public buildingService;
  public flatService; 
  public _address: Address[] = [];
  public _editState = [];
  public viewFrom = [];
  public canAddNew = true;
  public _notArray = false;


  onChange = (_) => {};
  onTouched = () => {};

  writeValue(address: any): void {
    this._address = []
    this.viewFrom = []
    if (!Array.isArray(address)) {
      this._notArray = true
      address = (address !== undefined && address !== null) ? [address] : []
    }
    
    for (let i = 0, max_i = address.length; i < max_i; i += 1) {
      if (!address[i]._isEmpty) {
        this._address.push(new Address(address[i]))
        this._editState.push(false)
        this.viewFrom.push(this.getView(address[i]))
      }
    }


    this.canAddNew = (this._limit > this._address.length);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  
  constructor(private classifireService: Classifier_listService) {
    this.regionService = classifireService.classifierRegionList()
    this.okrugService = classifireService.classifierRegionList()
    this.districtService = classifireService.classifierRegionList()
    this.cityService = classifireService.classifierRegionList()
    this.incityService = classifireService.classifierRegionList()
    this.municipalityService = classifireService.classifierRegionList()
    this.streetService = classifireService.classifierRegionList()
    this.buildingService = classifireService.classifierRegionList()
    this.flatService = classifireService.classifierRegionList()
  }

  ngOnInit() {
    
  }



  getView(address) {

    if(!address.fias)
      return ''


    let fias = address.fias
    let text = [];

    if (fias.region.name) {
      text.push(fias.region.name)
    }

    if (fias.okrug.name) {
      text.push(fias.okrug.name)
    }

    if (fias.district.name) {
      text.push(fias.district.name)
    }

    if (fias.city.name) {
      text.push(fias.city.name)
    }

    if (fias.incity.name) {
      text.push(fias.incity.name)
    }

    if (fias.municipality.name) {
      text.push(fias.municipality.name)
    }

    if (fias.street.name) {
      text.push(fias.street.name)
    }

    if (fias.building.name) {
      text.push(fias.building.name)
    }

    if (fias.flat.name) {
      text.push(fias.flat.name)
    }

    return text.join(', ')
  }

  deleteMe(index) {
    if (!this._address[index].identity._isEmpty) {
      this.onDelete.emit(this._address[index].identity);
    }

    this._address.splice(index, 1)
    this._editState.splice(index, 1)
    this.viewFrom.splice(index, 1)
    this.canAddNew = (this._limit > this._address.length);
  }

  cancel(index) {
    if (this._address[index]._isEmpty) {
      this._editState.splice(index, 1)
      this.viewFrom.splice(index, 1)
      this._address.splice(index, 1)
      this.canAddNew = (this._limit > this._address.length);
    } else {
      this._editState[index] = false;

    }
  }

  submit(index) {
    this.onChange ( (this._notArray) ? this._address[0] : this._address )
    this.onTouched()
    this.viewFrom[index] = this.getView(this._address[index]);
    this._editState[index] = false;
    this.canAddNew = (this._limit > this._address.length);
  }

  addNew() {
    this._address.unshift(new Address({}))
    this._editState.unshift(true)
    this.viewFrom.unshift('')
  }
}










