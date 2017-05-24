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
    {path: 'archive', component: ArchiveComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'edit', component: EditComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'view/:id', component: ViewComponent},
    {path: '', component: ActiveComponent},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ViewComponent, EditComponent, ActiveComponent, PlanComponent, ArchiveComponent]
})
export class GroupModule { 
  static getRoutes() {
    return routes[0];
  }

}
