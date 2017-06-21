import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { YaCoreModule } from '../angular2-yandex-maps/core.module';

import { N3kNgGridModule } from '../lib/n3k-ng-grid/n3k-ng-grid.module';
import { N3kNgComponentsModule } from '../lib/n3k-ng-components/n3k-ng-components.module';
import { N3kNgPipesModule } from '../lib/n3k-ng-pipes/n3k-ng-pipes.module';

import { InstitutionService } from '../api/institution'
import { Classifier_listService } from '../api/classifier_list';

import { InstitutionComponent } from './institution.component';
import { ViewComponent} from './view/view.component';
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
import { AddressComponent } from './edit/address/address.component';
import { OrganizationComponent } from './edit/organization-form/organization-form.component';
import { PersonComponent } from './edit/person/person.component';
import { JobComponent } from './edit/job/job.component';
import { WorkTimeComponent } from './edit/work-time/work-time.component';
import { MealsComponent } from './edit/meals/meals.component';
import { CapacityComponent } from './edit/capacity/capacity.component';
import { MetaFormComponent } from './edit/meta-form/meta-form.component';
import { PublicAdministrationFormComponent } from './edit/public-administration-form/public-administration-form.component';
import { ContactsFormComponent } from './edit/contacts-form/contacts-form.component';

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
    ReactiveFormsModule,
    CommonModule,
    N3kNgGridModule,
    N3kNgComponentsModule,
    N3kNgPipesModule,
    YaCoreModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  declarations: [
    InstitutionComponent,
    ViewComponent, 
    EditComponent, 
    ListComponent, 
    MapListComponent,
    CommonComponent,
    BuildingsComponent,
    ContractsComponent,
    EducationServicesComponent,
    ElectronicServicesComponent,
    InnovationsComponent,
    DepartmentsComponent,
    TerritoryComponent,
    AddressComponent,
    OrganizationComponent,
    PersonComponent,
    JobComponent,
    WorkTimeComponent,
    MealsComponent,
    CapacityComponent,
    MetaFormComponent,
    PublicAdministrationFormComponent,
    ContactsFormComponent,
  ],
  exports: [],
  providers: [InstitutionService, Classifier_listService],
  schemas: [],
})
export class InstitutionModule { 
  static getRoutes() {
    return routes[0];
  }
}
