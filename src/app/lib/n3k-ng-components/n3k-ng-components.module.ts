import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { CloneRefDirective, ClonnerComponent } from './clonner/clonner.component';
import { InputComponent } from './input/input.component';
import { AnchorMenuComponent, AnchornTargetRefDirective } from './anchor-menu/anchor-menu.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ 
    SelectComponent,
    ClonnerComponent, 
    InputComponent, 
    CloneRefDirective, 
    AnchorMenuComponent,
    AnchornTargetRefDirective, 
  ],
  exports: [ 
    SelectComponent, 
    ClonnerComponent, 
    InputComponent, 
    CloneRefDirective, 
    AnchorMenuComponent,
    AnchornTargetRefDirective 
  ]
})
export class N3kNgComponentsModule { }
