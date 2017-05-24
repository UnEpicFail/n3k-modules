import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

import { N3kNgGridModule } from '../lib/n3k-ng-grid.module'

import { ViewComponent } from './view/view.component';
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
    RouterModule.forRoot(routes),
  ],
  declarations: [
    ViewComponent, 
    EditComponent, 
    ListComponent, 
    MapListComponent,
  ],
  schemas: []
})
export class InstitutionModule { 
  static getRoutes() {
    return routes[0];
  }
}
