import { Component, Input, forwardRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WysiwygComponent),
  multi: true
};

@Component({
  selector: 'n3k-wysiwyg',
  templateUrl: './wysiwyg.component.html',
  styleUrls: ['./wysiwyg.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class WysiwygComponent implements ControlValueAccessor, AfterViewInit {

  public editor;
  public _value: string;
  public _title: string;
  public _placeholder: string;
 

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
    if (this.editor) {
      this.editor.setContent(this._value)
    }
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngAfterViewInit(){
    tinymce.init({
      selector: 'textarea',
      language: 'ru',
      language_url: '../../../../assets/langs/ru.js',
      plugins: ['link', 'paste', 'table', 'autoresize', 'charmap', 'contextmenu', 'textcolor'],
      contextmenu: "link  textcolor| charmap",
      skin_url: '../../../../assets/skins/lightgray',
      toolbar: ['charmap table paste link'],
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


}
