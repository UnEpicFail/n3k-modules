
import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { Classifier_listService } from '../../../api/classifier_list'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { Institution } from '../../../api/institution/Institution'
import { PublicDigitalService } from '../../../api/institution/PublicDigitalService'

@Component({
  selector: 'app-electronic-service',
  templateUrl: './electronic-service.component.html',
  styleUrls: ['./electronic-service.component.css']
})
export class ElectronicServiceComponent implements OnInit {

  form: FormGroup = new FormGroup({})
   institutionId
  _institution: Institution = new Institution({})
  _service: PublicDigitalService = new PublicDigitalService({})
  serviceId

  kindService

  constructor(
    private fb: FormBuilder,
    private institutionServise: InstitutionService,
    private classifireService: Classifier_listService,
    private ar: ActivatedRoute,
    private router: Router
  ) {
   
    this.kindService = classifireService.classifierEducationServiceKindList()

    this.setForm()

  }

  ngOnInit() {
    this.ar.params.subscribe((params:Params) => {
      this.institutionId = params['institutionId']
      this.serviceId = params['serviceId']

        if (!this.institutionId)
          return

        this.institutionServise.institutionGet(this.institutionId).subscribe(data => {
          let res = new Response(data);
          this._institution = new Institution(res.data)
          this.setForm()
        })


        if (!this.serviceId) {
          this.setForm()
        } else {
          this.institutionServise.publicDigitalServiceGet(this.serviceId).subscribe(data => {
            let res = new Response(data);
            this._service = new PublicDigitalService(res.data)
            this.setForm()
          })
        }
      }
    );
  }

  setForm() {
    let s = this._service
    this.form = this.fb.group({
      service: [s.service],
      epgu_url: [s.epgu_url],
      rpgu_url: [s.rpgu_url],
      documentation_url: [s.documentation_url],
    })
  }

  onSubmit() {
    this._service = new PublicDigitalService({
      identity: this._service.identity,
      entity_state: this._service.entity_state,
      institution_identity: this._institution.identity,
      service: this.form.value.service,
      epgu_url: this.form.value.epgu_url,
      rpgu_url: this.form.value.rpgu_url,
      documentation_url: this.form.value.documentation_url,
    })
    this.institutionServise.publicDigitalServiceSave(this._service).subscribe(
      res => {
        console.log('success res', res)
      },
      err => {
        console.error('err', err)
      }
    )
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/education-services'])
  }

}

