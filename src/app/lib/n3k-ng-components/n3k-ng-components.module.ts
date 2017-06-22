import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { CloneRefDirective, ClonnerComponent } from './clonner/clonner.component';
import { InputComponent } from './input/input.component';
import { AnchorMenuComponent, AnchornTargetRefDirective } from './anchor-menu/anchor-menu.component';;
import { WysiwygComponent } from './wysiwyg/wysiwyg.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxComponent } from './checkbox/checkbox.component'

import { N3kNgFlyDirective } from './fly.directive';
 
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
    WysiwygComponent,
    DatepickerComponent,
    N3kNgFlyDirective,
    CheckboxComponent,
  ],
  exports: [ 
    SelectComponent, 
    ClonnerComponent, 
    InputComponent, 
    CloneRefDirective, 
    AnchorMenuComponent,
    AnchornTargetRefDirective,
    WysiwygComponent,
    DatepickerComponent,
    N3kNgFlyDirective,
    CheckboxComponent,
  ]
})
export class N3kNgComponentsModule { }
