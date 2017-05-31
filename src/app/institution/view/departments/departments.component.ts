import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InstitutionFull } from '../../../api/institution/InstitutionFull';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  @Input()
  institution: InstitutionFull

  selecredDepartment

  departmentsList: {}[]

  constructor() {
    
  }

  ngOnInit() {
  }

}
