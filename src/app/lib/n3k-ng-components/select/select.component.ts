import { Component, OnInit, Input, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Response } from '../../../api/common/Response';
import { Pagination } from '../../../api/common/Pagination';

import { OverlayService } from '../overlay.service'
import { PositionService } from '../../n3k-ng-grid/position.service'


const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};


@Component({
  selector: 'n3k-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR, OverlayService]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  public _selected: boolean = false;
  public _loading: boolean = false;
  public _multi: boolean = false;
  public _title: string;
  public _placeholder: string;
  private _pagination = new Pagination({});
  private optionList
  private _filter: {
    p_page: number,
    p_limin: number,
    p_query: string,
    p_sort_direction: string
    p_sort_field: string
  } = {
    p_page: 0,
    p_limin: 20,
    p_query: '',
    p_sort_direction: 'asc',
    p_sort_field: 'name'
  };
  public _options: {}[];
  private _fromMethod;
  public _values: any[] = [];
  private _model;
  private overlayDown;
  private header;
  private neck;
  
  onChange = (_) => {};
  onTouched = () => {};

  @Input()
  set options(options) {
    this._options = options
  }

  @Input()
  set fromMethod(method) {
    this._fromMethod = method;
  }

  @Input()
  set multi(multi) {
    this._multi = multi
  }

  @Input()
  set title(title) {
    this._title = title
  }

  @Input()
  set placeholder(placeholder) {
    this._placeholder = placeholder
  }

  @Input() beforeSetValue
  @Input() beforeGetValue
  @Input() beforeSetData


  writeValue(value: any): void {
    if(typeof this.beforeSetValue === 'function') {
      value = this.beforeSetValue(value)
    }
    this._values = []
    if (value !== undefined && value !== null) {
      if (!Array.isArray(value)) {
        value = [value]
      }
      for (let i=0, max_i=value.length; i < max_i; i+=1){
        if (!this.isEmpty(value[i])){
          this._values.push(value[i])
        }
      }
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private overlay: OverlayService,
    private positionService: PositionService
  ) {

    positionService.neck.subscribe( neck => {
      this.neck = neck
    })  

    positionService.header.subscribe( header => {
      this.header = header
    })  

  }

  ngOnInit() {
  }

  public trigger () {

    this.optionList = this.el.nativeElement.children[0].children[1].children[0]
    this.renderer.setStyle(this.optionList, 'width', this.el.nativeElement.offsetWidth+'px')
    this._selected = true;
    setTimeout(()=>{
      // if (
      //   this.optionList.offsetTop + this.optionList.offsetHeight > window.innerHeight
      // ) {
      //     this.renderer.setStyle(this.optionList, 'top', this.optionList.offsetTop - 300 - this.el.nativeElement.children[0].children[0].offsetHeight+'px')
      // } else {
      //   this.renderer.setStyle(this.optionList, 'top', 'auto')
      // }
      
      this.renderer.setStyle(this.optionList, 'top', 
        this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight + this.getClosestColumn(this.el.nativeElement) + 'px')

      this.overlayDown = this.overlay.up(() =>{
        this._selected = false
        this.renderer.appendChild(this.el.nativeElement.children[0].children[1], this.optionList)
      })
      this.renderer.setStyle(this.optionList, 'left', this.el.nativeElement.parentNode.offsetLeft+'px')
      this.renderer.appendChild(document.body, this.optionList)

    }, 1);
    if (!this._options) {
      this.getOptions();
    }
  }

  private getOptions() {
    if (this._fromMethod){
      this._loading = true;
      this._fromMethod(
        this._filter.p_limin, this._filter.p_page, this._filter.p_query
      ).subscribe( res=>{
        this._loading = false;
        let _res = new Response(res);
        this._pagination = new Pagination(_res.data)
        let items = ( typeof this.beforeSetData === 'function') ? this.beforeSetData(this._pagination.items) : this._pagination.items 
        this._options =  ( this._options ) ? this._options.concat(items) : items ;
      })
    }
  }

  private select(option) {
    if (this._multi){
      if ( this.searchInValues(option) === false ) {
        this._values.push(option)
      } 
    } else {
      this._values[0] = option
    }

    this.overlayDown()

    this.onChange(this.getValues());
    this.onTouched(); 
 }

  private unSelect(e, position) {
    e.stopPropagation();
    e.preventDefault();
    this._values.splice(position, 1)
    this.onChange(this.getValues());
    this.onTouched(); 
    return false;
  }

  private searchInValues(option) {
    let max_i = this._values.length
    if (max_i > 0) {
      for (let i = 0; i < max_i; i+=1 ){
        if ( this._values[i] === option) {
          return i
        }
      }
    }
    return false;
  }

  private getValues() {
    let v = (typeof this.beforeGetValue === 'function') ? this.beforeGetValue(this._values) : this._values
    return (this._multi) ? v : (v[0] || null)
  }


  public onScroll(e) {
    e.stopPropagation();
    e.preventDefault();
    // let optionList = this.el.nativeElement.children[0].children[2]
    if (this.optionList.scrollHeight-this.optionList.offsetHeight === this.optionList.scrollTop 
      && this._pagination.next ) {
      this._filter.p_page = this._pagination.next
      this.getOptions();
    }
    return false;
  }

  private isEmpty(obj) {
    let keys = obj.keys()
    let res = true

    for(let i = 0, max_i = keys.length; i < max_i; i+=1){
      if (keys[i] !== '_isEmpty'){
        if (typeof obj[keys[i]] !== 'undefined' && obj[keys[i]] !== null) {
          if (typeof obj[keys[i]].keys === 'function') {
            res = res && this.isEmpty(obj[keys[i]]);
          } else if (Array.isArray(obj[keys[i]])) {
            if (obj[keys[i]].length > 0) {
              for (let j = 0, max_j = obj[keys[i]].length; j < max_j; j+=1) {
                res = res && this.isEmpty(obj[keys[i]][j]);
              }
            } else {
              return true;
            }
          } else {
            return false;
          }
        }
      }
    }
    return res
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
}

