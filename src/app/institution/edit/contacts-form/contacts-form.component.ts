import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ContactsFormComponent),
  multi: true
};

@Component({
  selector: 'edit-contacts',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class ContactsFormComponent implements ControlValueAccessor {

  public form: FormGroup;
  public _phone: string = '';
  public _additional_phone: string = '';
  public _email: string = '';
  public _site: string = '';
  public _fax: string = '';

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(contacts: any): void {
    if (contacts) {
      contacts.map(contact => {
        switch (contact.type.code) {
          case 'phone':
            this._phone = contact.value
          break;
          case 'site':
            this._site = contact.value
          break;
          case 'additional_phone':
            this._additional_phone = contact.value
          break;
          case 'email':
            this._email = contact.value
          break;
          case 'fax':
            this._fax = contact.value
          break;
        }
      })
      this.setForm()
    }    
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }


  constructor(private fb: FormBuilder) { 
    this.setForm();
  }

  ngOnInit() {
  }

  setForm() {
    this.form = this.fb.group({
      phone: this._phone,
      additional_phone: this._additional_phone,
      email: this._email,
      site: this._site,
      fax: this._fax,
    })

    this.form.valueChanges.subscribe(data => {
      let contacts = []
      
      if (data.phone) {
        contacts.push({
          type: {
            code: 'phone'
          },
          value: data.phone
        })
      }

      if (data.additional_phone) {
        contacts.push({
          type: {
            code: 'additional_phone'
          },
          value: data.additional_phone
        })
      }

      if (data.email) {
        contacts.push({
          type: {
            code: 'email'
          },
          value: data.email
        })
      }

      if (data.site) {
        contacts.push({
          type: {
            code: 'site'
          },
          value: data.site
        })
      }

      if (data.fax) {
        contacts.push({
          type: {
            code: 'fax'
          },
          value: data.fax
        })
      }

      this.onChange(contacts)
      this.onTouched()
    })
  }

}
