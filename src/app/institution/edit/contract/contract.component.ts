
import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { Classifier_listService } from '../../../api/classifier_list'
import { InstitutionService } from '../../../api/institution'
import { Response } from '../../../api/common/Response'
import { Institution } from '../../../api/institution/Institution'
import { EducationContract } from '../../../api/institution/EducationContract'

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  institutionId
  _institution: Institution = new Institution({})
  _contract: EducationContract = new EducationContract({})
  contractId

  subjectService

  constructor(
    private fb: FormBuilder,
    private institutionServise: InstitutionService,
    private classifireService: Classifier_listService,
    private ar: ActivatedRoute,
    private router: Router
  ) { 

    this.subjectService = classifireService.classifierEducationContractSubjectList()

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
          this._contract = new EducationContract(res.data)
          this.setForm()
        })
      }

    });
  }

  setForm () {
    let c = this._contract
    this.form = this.fb.group({
      document: [c.document],
      subject: [c.subject],
      group_count: [c.group_count],
      contragent_institution: [c.contragent_institution],
    })
  }

  onSubmit() {
    console.log('this.form', this.form.value)  
  }

  back() {
    this.router.navigate(['/institution/view/'+this.institutionId+'/contracts'])
  }

}
