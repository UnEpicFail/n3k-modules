import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

import { InstitutionFull } from '../../../api/institution/InstitutionFull';
import { Response } from '../../../api/common/Response';
import { Pagination } from '../../../api/common/Pagination';
import { DepartmentList } from '../../../api/institution/DepartmentList'
import { Department } from '../../../api/institution/Department';
import { InstitutionService } from '../../../api/institution'


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{

  private _institution: InstitutionFull;
  private _params: {
    tabName: string,
    selectedDepartment: string
  }
  public _departments
  public _department;

  private _contacts = {};
  private _parentName = ''

  @Input()
  set institution(institution: InstitutionFull) {
    if (institution){
      this._institution = institution
      this.is.departmentList(null, null, null, ''+this._institution.identity.id).subscribe(data => {   
        this._departments = new Pagination(new Response(data).data).items
        this.departmentsTree = this.getDepartmentTree(this._departments)
        if(this._params.selectedDepartment === '') {
          this.selectDepartment(this.departmentsTree[0].identity.id)
        }
      })
    }
  }

  @Input()
  set params (params: string[]) {
    this._params = {
      tabName: (params[0] || ''),
      selectedDepartment: (params[1] || '')
    }

    if (this._params.selectedDepartment !== '') {
      this.getDepartment(this._params.selectedDepartment)
    }
  }  

  departmentsTree
  loadDepartment = true

  constructor (
    private is: InstitutionService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    
  }

  getDepartmentTree(departments){
    let _departments = departments.sort(function(a,b){
      return a.parent ? 1 : -1
    })
    let map = {}, node, roots = [];
    for (let i = 0; i < _departments.length; i += 1) {
      node = _departments[i];
      node.childrens = [];
      map[node.identity.id] = i;
      if (node.parent.id !== null) {
        _departments[map[node.parent.id]].childrens.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots
  }

  selectDepartment(id) {
    this.router.navigate(['institution', 'view', this._institution.identity.id], {fragment: this._params.tabName+'/'+id})
  }

  getDepartment(id) {
    if (!this._departments) {
      setTimeout(()=>{
        this.getDepartment(id)
      },1)
      return;
    }
    this.loadDepartment = true
    this.is.departmentGet(id).subscribe(res => {
      let _res = new Response(res)
      this._department = _res.data
      this._department.contacts.map(contact=>{
        this._contacts[contact.type.id] = contact.value
      })
      if (this._department.parent.id)
        this._parentName = this.getPatentNameById(this._department.parent.id);
      this.loadDepartment = false
    })
  }

  getContactByType(id:number) {
    for(let i in this._department.contacts) {
      if (this._department.contacts[i].type.id === id){
        return this._department.contacts[i]
      }
    }
    return {}
  }

  getPatentNameById(id: number) {
    for(let i=0, max_i = this._departments.length; i < max_i; i+=1) {
      if(this._departments[i].identity.id === id){
        return this._departments[i].name
      }
    }
    return ''
  }
}
