
import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { Classifier_listService } from '../../../api/classifier_list'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { Institution } from '../../../api/institution/Institution'
import { Innovation } from '../../../api/institution/Innovation'
import { DatepickerComponentOptions } from '../../../lib/n3k-ng-components/datepicker/datepicker.component'


@Component({
  selector: 'app-innovation',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.css']
})
export class InnovationComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  institutionId
  _institution: Institution = new Institution({})
  _innovation: Innovation = new Innovation({})
  innovationId

  levelService
  activityService
  activityStartOptions = new DatepickerComponentOptions ({
    title: 'Активено с',
    placeholder: 'Активено с'
  })
  activityEndOptions = new DatepickerComponentOptions ({
    title: 'Активен до',
    placeholder: 'Активен до'
  })

  constructor(
    private fb: FormBuilder,
    private institutionServise: InstitutionService,
    private classifireService: Classifier_listService,
    private ar: ActivatedRoute,
    private router: Router
  ) { 

    this.levelService = classifireService.classifierInnovationLevelList()
    this.activityService = classifireService.classifierInnovationActivityDirectionList()


  }

  ngOnInit() {
    this.ar.params.subscribe((params:Params) => {
      this.institutionId = params['institutionId']
      this.innovationId = params['innovationId']

        if (!this.institutionId)
          return

        this.institutionServise.institutionGet(this.institutionId).subscribe(data => {
          let res = new Response(data);
          this._institution = new Institution(res.data)
          this.setForm()
        })

        if (!this.innovationId) {
          this.setForm()
        } else {
          this.institutionServise.innovationGet(this.innovationId).subscribe(data => {
            let res = new Response(data);
            this._innovation = new Innovation(res.data)
            this.setForm()
          })
        }
      }
    );
  }

  setForm () {
    let i = this._innovation
    this.form = this.fb.group({
      document: [i.document],
      name: [i.name],
      level: [i.level],
      activity_direction: [i.activity_direction],
      activity_start: [i.activity_start],
      activity_end: [i.activity_end],
    })
  }

  onSubmit() {
    this._innovation = new Innovation({
      identity: this._innovation.identity,
      entity_state: this._innovation.entity_state,
      institution_identity: this._institution.identity,
      document: this.form.value.document,
      name: this.form.value.name,
      level: this.form.value.level,
      activity_direction: this.form.value.activity_direction,
      activity_start: this.form.value.activity_start,
      activity_end: this.form.value.activity_end,
    })

    this.institutionServise.innovationSave(this._innovation).subscribe(
      res => {
        console.log('success res', res)
      },
      err => {
        console.error('err', err)
      }
    )
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/innovations'])
  }

}
