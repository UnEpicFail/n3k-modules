import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { N3NgGridModule } from './lib/n3-ng-grid/n3-ng-grid.module';
import { N3NgComponentsModule } from './lib/n3-ng-components/n3-ng-components.module';

import { InstitutionModule } from './institution/institution.module';
import { GroupModule } from './group/group.module';
import { ProgramModule } from './program/program.module';
import { ClassifierModule } from './classifier/classifier.module';


const rourer = [
  {path:'journal',  children: [
    GroupModule.getRoutes(),
    ProgramModule.getRoutes(),
    {path: '', component: ProgramModule.getIndexComponent()},
  ]},
  InstitutionModule.getRoutes(),
  ClassifierModule.getRoutes()
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    N3NgGridModule,
    N3NgComponentsModule,
    InstitutionModule,
    ClassifierModule,
    ProgramModule,
    GroupModule,
    RouterModule.forRoot(rourer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
