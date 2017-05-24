import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { MapListComponent } from './map-list/map-list.component';
import { ViewComponent } from './view/view.component'; 

const routes:Routes = [
  {path: 'program', children: [
    {path: 'list', component: ListComponent},
    {path: 'edit', component: EditComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'view/:id', component: ViewComponent},        
    {path: '', component: MapListComponent},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [EditComponent, ListComponent, MapListComponent, ViewComponent]
})
export class ProgramModule { 
  static getRoutes() {
    return routes[0];
  }
}
