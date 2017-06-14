import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

import { Classifier_listService } from '../../../api/classifier_list'
import { JobShort } from '../../../api/common/JobShort'

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => JobComponent),
  multi: true
};

@Component({
  selector: 'edit-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class JobComponent implements OnInit, ControlValueAccessor {

  public _job: JobShort;
  public canAddNew = false;
  public _editState = false;
  public positionService;

  @Input() title:string

  @Output() onDelete = new EventEmitter()

  onChange = (_) => {};
  onTouched = () => {};

  writeValue(job: any): void {
    if (job !== undefined && job !== null) {
      this._job = new JobShort(job);
    } else {
      this._job = new JobShort({});
    }

    this.canAddNew = this.isEmpty(this._job);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(private classifierService:Classifier_listService) {
    this.positionService = classifierService.classifierJobPositionList()
  }

  ngOnInit() {
  }

    isEmpty(obj) {
    let keys = obj.keys()
    let res = true

    for(let i = 0, max_i = keys.length; i < max_i; i+=1){
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
    return res
  }

  deleteMe() {
    this.onDelete.emit(this._job.identity);
  }

  cancel() {
    this._editState = false;
  }

  submit() {
    this.onChange(this._job)
    this.onTouched()
    this._editState = false;
    this.canAddNew = false;
  }

}
