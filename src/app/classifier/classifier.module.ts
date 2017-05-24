import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 


import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes:Routes = [
  {path: 'classifier', children: [
    {path: 'edit', component: EditComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'view/:id', component: ViewComponent},        
    {path: '', component: ListComponent},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ListComponent, EditComponent, ViewComponent]
})
export class ClassifierModule { 
  static getRoutes() {
    return routes[0];
  }
}
