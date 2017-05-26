import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

//import { YaCoreModule }  from '';

import { YaCoreModule } from '../angular2-yandex-maps/core.module';

import { N3kNgGridModule } from '../lib/n3k-ng-grid.module'

import { ViewComponent, ToWeekDays, ToTime, YesNo } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { MapListComponent } from './map-list/map-list.component';

const routes:Routes = [
  {path: 'institution', children: [
    {path: 'list', component: ListComponent},
    {path: 'list/:filter', component: ListComponent},
    {path: 'edit', component: EditComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'view/:id', component: ViewComponent},        
    {path: '', component: MapListComponent},
    {path: ':filter', component: MapListComponent},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    N3kNgGridModule,
    YaCoreModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  declarations: [
    ViewComponent, 
    EditComponent, 
    ListComponent, 
    MapListComponent,
    ToTime,
    ToWeekDays,
    YesNo,
  ],
  exports: [ToTime, ToWeekDays, YesNo],
  providers: [],
  schemas: []
})
export class InstitutionModule { 
  static getRoutes() {
    return routes[0];
  }
}
