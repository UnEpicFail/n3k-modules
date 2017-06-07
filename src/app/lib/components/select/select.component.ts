import { Component, OnInit, Input, forwardRef, ElementRef, Renderer2 } from '@angular/core';

import {
  NG_VALUE_ACCESSOR, 
  ControlValueAccessor 
} from '@angular/forms';

import { Response } from '../../../api/common/Response';
import { Pagination } from '../../../api/common/Pagination';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true
};


@Component({
  selector: 'n3k-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class SelectComponent implements OnInit, ControlValueAccessor {


  private _selected: boolean = false;
  private _loading: boolean = false;
  private _multi: boolean = false;
  private _title: string;
  private _placeholder: string;
  private _pagination = new Pagination({})
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
  private _options: {}[];
  private _fromMethod;
  private _values: any[] = [];
  private _model;
  
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

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this._values = (Array.isArray(value)) ? value: [value];
    } else {
      this._values = [];
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  private trigger () {
    let optionList = this.el.nativeElement.children[0].children[2]
    this.renderer.setStyle(optionList, 'width', this.el.nativeElement.offsetWidth+'px')
    this._selected = !this._selected;
    setTimeout(()=>{
      if (
        optionList.offsetTop + optionList.offsetHeight > window.innerHeight
      ) {
          this.renderer.setStyle(optionList, 'top', optionList.offsetTop - 300 - this.el.nativeElement.children[0].children[0].offsetHeight+'px')
      } else {
        this.renderer.setStyle(optionList, 'top', 'auto')
      }
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
        this._options =  ( this._options ) ? this._options.concat(this._pagination.items) : this._pagination.items ;
      })
    }
  }

  private select(option) {
    if (this._multi){
      if ( this.searchInValues(option.id) === false ) {
        this._values.push(option)
      } 
    } else {
      this._values[0] = option
    }
    this._selected = false
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

  private searchInValues(id) {
    let max_i = this._values.length
    if (max_i > 0) {
      for (let i = 0; i < max_i; i+=1 ){
        if ( this._values[i].id === id) {
          return i
        }
      }
    }
    return false;
  }

  private getValues() {
    return (this._multi) ? this._values : (this._values[0] || null)
  }


  private onScroll(e) {
    e.stopPropagation();
    e.preventDefault();
    let optionList = this.el.nativeElement.children[0].children[2]
    if (optionList.scrollHeight-optionList.offsetHeight === optionList.scrollTop 
      && this._pagination.next ) {
      this._filter.p_page = this._pagination.next
      this.getOptions();
    }
    return false;
  }
}
