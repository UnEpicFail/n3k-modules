import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { YaCoreModule } from '../angular2-yandex-maps/core.module';

import { N3kNgGridModule } from '../lib/n3k-ng-grid.module';

import { InstitutionService } from '../api/institution'
import { Classifier_listService } from '../api/classifier_list';

import { ViewComponent, ToWeekDays, ToTime, YesNo } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { MapListComponent } from './map-list/map-list.component';
import { CommonComponent } from './view/common/common.component';
import { BuildingsComponent } from './view/buildings/buildings.component';
import { ContractsComponent } from './view/contracts/contracts.component';
import { EducationServicesComponent } from './view/education-services/education-services.component';
import { ElectronicServicesComponent } from './view/electronic-services/electronic-services.component';
import { InnovationsComponent } from './view/innovations/innovations.component';
import { DepartmentsComponent } from './view/departments/departments.component';
import { TerritoryComponent } from './view/territory/territory.component';

const routes:Routes = [
  {path: 'institution', children: [
    {path: 'list', component: ListComponent},
    {path: 'list/:filter', component: ListComponent},
    {path: 'edit', component: EditComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'view/:id/:tab', component: ViewComponent},      
    {path: '', component: MapListComponent},
    {path: ':filter', component: MapListComponent},
  ]}
]

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    N3kNgGridModule,
    YaCoreModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  declarations: [
    ViewComponent, 
    EditComponent, 
    ListComponent, 
    MapListComponent,
    ToTime,
    ToWeekDays,
    YesNo,
    CommonComponent,
    BuildingsComponent,
    ContractsComponent,
    EducationServicesComponent,
    ElectronicServicesComponent,
    InnovationsComponent,
    DepartmentsComponent,
    TerritoryComponent,
  ],
  exports: [ToTime, ToWeekDays, YesNo],
  providers: [InstitutionService,Classifier_listService],
  schemas: [],
})
export class InstitutionModule { 
  static getRoutes() {
    return routes[0];
  }
}
