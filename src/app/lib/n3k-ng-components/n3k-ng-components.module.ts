import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { CloneRefDirective, ClonnerComponent } from './clonner/clonner.component';
import { InputComponent } from './input/input.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ SelectComponent, ClonnerComponent, InputComponent, CloneRefDirective ],
  exports: [ SelectComponent, ClonnerComponent, InputComponent, CloneRefDirective ]
})
export class N3kNgComponentsModule { }
