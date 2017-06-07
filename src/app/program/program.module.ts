import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProgramComponent } from './program.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { MapListComponent } from './map-list/map-list.component';
import { ViewComponent } from './view/view.component'; 

const routes:Routes = [
  {path: 'program', children: [
    {path: 'list', component: ListComponent, pathMatch: 'full'},
    {path: 'edit', component: EditComponent, pathMatch: 'full'},
    {path: 'edit/:id', component: EditComponent, pathMatch: 'full'},
    {path: 'view/:id', component: ViewComponent, pathMatch: 'full'},        
    {path: '', component: MapListComponent, pathMatch: 'full'},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  declarations: [ProgramComponent, EditComponent, ListComponent, MapListComponent, ViewComponent],
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
