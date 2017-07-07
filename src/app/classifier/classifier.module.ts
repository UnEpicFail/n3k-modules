import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

import { ClassifierComponent } from './classifier.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

import { N3NgGridModule } from '../lib/n3-ng-grid/n3-ng-grid.module';
import { N3NgComponentsModule } from '../lib/n3-ng-components/n3-ng-components.module';
import { N3NgPipesModule } from '../lib/n3-ng-pipes/n3-ng-pipes.module';


const routes:Routes = [
  {path: 'classifier', children: [
    {path: 'view/:classifierId', component: ViewComponent},        
    {path: 'view/:classifierId/edit', component: EditComponent},        
    {path: 'view/:classifierId/edit/:itemId', component: EditComponent},        
    {path: '', component: ListComponent},
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    N3NgGridModule,
    N3NgComponentsModule,
    N3NgPipesModule,
  ],
  declarations: [ClassifierComponent, ListComponent, EditComponent, ViewComponent]
})
export class ClassifierModule { 
  static getRoutes() {
    return routes[0];
  }
}
