import { Component, Input, forwardRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WysiwygComponent),
  multi: true
};

@Component({
  selector: 'n3-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class WysiwygComponent implements ControlValueAccessor, AfterViewInit {

  public editor;
  public _id = '' 
    + String.fromCharCode(Math.floor(Math.floor(Math.random() * 10) * 2.5) + 97)
    + String.fromCharCode(Math.floor(Math.floor(Math.random() * 10) * 2.5) + 97)
    + String.fromCharCode(Math.floor(Math.floor(Math.random() * 10) * 2.5) + 97)
    + String.fromCharCode(Math.floor(Math.floor(Math.random() * 10) * 2.5) + 97)
    + String.fromCharCode(Math.floor(Math.floor(Math.random() * 10) * 2.5) + 97)
    + String.fromCharCode(Math.floor(Math.floor(Math.random() * 10) * 2.5) + 97);
  public _value: string;
  public _title: string;
  public _placeholder: string;
  private ready = false;

  @Input()
  set title(title){
    this._title = (title || '')
  }

  @Input()
  set placeholder(placeholder){
    this._placeholder = (placeholder || '')
  }

  @Input()
  set id(id) {
    this._id = (id || this._id)
  }

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this._value = value;
    } else {
      this._value = '';
    }
    this.setValue()
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngAfterViewInit()
  {
    tinymce.init({
      selector: '#'+this._id,
      language: 'ru',
      language_url: '../../../../assets/langs/ru.js',
      plugins: ['link', 'paste', 'table', 'autoresize', 'charmap', 'contextmenu', 'textcolor'],
      contextmenu: "link  textcolor| charmap",
      skin_url: '../../../../assets/skins/lightgray',
      toolbar: ['charmap table paste link'],
      init_instance_callback: ()=>{this.ready = true},
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onChange(content);
          this.onTouched();
        });
      },
    });
  }

  ngOnDestroy() {

  }

  setValue() {
    if (!this.ready) {
      setTimeout(() => {this.setValue()},1)
    } else {
      this.editor.setContent(this._value)
    }
  }

}
