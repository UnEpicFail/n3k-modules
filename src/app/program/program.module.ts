import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProgramComponent } from './program.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component'; 

import { YaCoreModule } from '../angular2-yandex-maps/core.module';
import { ProgramService } from '../api/program'
import { Classifier_listService } from '../api/classifier_list';
import { InstitutionService } from '../api/institution'

import { N3NgGridModule } from '../lib/n3-ng-grid/n3-ng-grid.module';
import { N3NgComponentsModule } from '../lib/n3-ng-components/n3-ng-components.module';
import { N3NgPipesModule } from '../lib/n3-ng-pipes/n3-ng-pipes.module';

const routes:Routes = [
  {path: 'program', children: [
    {path: 'edit', component: EditComponent, pathMatch: 'full'},
    {path: 'edit/:id', component: EditComponent, pathMatch: 'full'},
    {path: 'view/:id', component: ViewComponent, pathMatch: 'full'},        
    {path: '', component: ListComponent, pathMatch: 'full'},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    N3NgGridModule,
    N3NgComponentsModule,
    N3NgPipesModule,
    YaCoreModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProgramComponent,
    EditComponent,
    ListComponent,
    ViewComponent,
  ],
  providers: [ProgramService, Classifier_listService, InstitutionService]
})
export class ProgramModule { 
  static getRoutes() {
    return routes[0];
  }

  static getIndexComponent() {
    return ListComponent
  }

  static getIndexRoute() {
    return 'program'
  }
}
