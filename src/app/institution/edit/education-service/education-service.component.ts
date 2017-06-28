
import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { Classifier_listService } from '../../../api/classifier_list'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { Institution } from '../../../api/institution/Institution'
import { EducationService } from '../../../api/institution/EducationService'

@Component({
  selector: 'app-education-service',
  templateUrl: './education-service.component.html',
  styleUrls: ['./education-service.component.css']
})
export class EducationServiceComponent implements OnInit {

  form: FormGroup = new FormGroup({})
   institutionId
  _institution: Institution = new Institution({})
  _service: EducationService = new EducationService({})
  contractId

  kindService
  directionService


  constructor(
    private fb: FormBuilder,
    private institutionServise: InstitutionService,
    private classifireService: Classifier_listService,
    private ar: ActivatedRoute,
    private router: Router
  ) {
    this.kindService = classifireService.classifierEducationServiceKindList()
    this.directionService = classifireService.classifierServiceDirectionList()



    this.setForm()

  }

  ngOnInit() {
    this.ar.params.subscribe((params:Params) => {
      this.institutionId = params['institutionId']
      this.contractId = params['contractId']

        if (!this.institutionId)
          return

        this.institutionServise.institutionGet(this.institutionId).subscribe(data => {
          let res = new Response(data);
          this._institution = new Institution(res.data)
          this.setForm()
        })

        if (!this.contractId) {
          this.setForm()
        } else {
          this.institutionServise.buildingGet(this.contractId).subscribe(data => {
            let res = new Response(data);
            this._service = new EducationService(res.data)
            this.setForm()
          })
        }
      }
    );
  }

  setForm() {
    let s = this._service
    this.form = this.fb.group({
      kind: [s.kind],
      name: [s.name],
      direction: [s.direction],
    })
  }

  onSubmit() {
    console.log('this.form', this.form.value)  
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/education-services'])
  }

}
