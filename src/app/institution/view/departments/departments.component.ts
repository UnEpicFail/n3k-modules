import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InstitutionFull } from '../../../api/institution/InstitutionFull';
import { Response } from '../../../api/common/Response';
import { Department } from '../../../api/institution/Department';
import { InstitutionService } from '../../../api/institution'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent{

  private _institution: InstitutionFull;
  private _department;
  private _contacts = {};
  private _parentName = ''

  @Input()
  set institution(institution: InstitutionFull) {
    if (institution){
      this._institution = institution
      this.departmentsTree = this.getDepartmentTree(this._institution.departments)
      this.selectDepartment(this.departmentsTree[0].identity.id)
    }
  }  

  selectedDepartment

  departmentsTree

  constructor(private is: InstitutionService) {}

  getDepartmentTree(departments){
    let _departments = departments.sort(function(a,b){
      return a.parent.id ? 1 : -1
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
    this.selectedDepartment = id
    this.is.departmentGet(id).subscribe(res => {
      let _res = new Response(res)
      this._department = _res.data
      this._department.contacts.map(contact=>{
        this._contacts[contact.type.id] = contact.value
      })
      if (this._department.parent.id)
        this._parentName = this.getPatentNameById(this._department.parent.id);
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
    for(let i=0, max_i = this._institution.departments.length; i < max_i; i+=1) {
      if(this._institution.departments[i].identity.id === id){
        return this._institution.departments[i].name
      }
    }
    return ''
  }
}
