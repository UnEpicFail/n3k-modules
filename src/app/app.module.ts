import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { N3kNgGridModule } from './lib/n3k-ng-grid/n3k-ng-grid.module';
import { N3kNgComponentsModule } from './lib/n3k-ng-components/n3k-ng-components.module';

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
    N3kNgGridModule,
    N3kNgComponentsModule,
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
