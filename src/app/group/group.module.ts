import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ActiveComponent } from './active/active.component';
import { PlanComponent } from './plan/plan.component';
import { ArchiveComponent } from './archive/archive.component'; 

const routes:Routes = [
  {path: 'group', children: [
    {path: 'archive', component: ArchiveComponent, pathMatch: 'full'},
    {path: 'plan', component: PlanComponent, pathMatch: 'full'},
    {path: 'edit', component: EditComponent, pathMatch: 'full'},
    {path: 'edit/:id', component: EditComponent, pathMatch: 'full'},
    {path: 'view/:id', component: ViewComponent, pathMatch: 'full'},
    {path: '', component: ActiveComponent, pathMatch: 'full'},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  declarations: [ViewComponent, EditComponent, ActiveComponent, PlanComponent, ArchiveComponent]
})
export class GroupModule { 
  static getRoutes() {
    return routes[0];
  }

}
