import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoPipe } from './yes-no.pipe';
import { ToTimePipe } from './to-time.pipe';
import { ToWeekDaysPipe } from './to-week-days.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YesNoPipe, ToTimePipe, ToWeekDaysPipe],
  exports: [YesNoPipe, ToTimePipe, ToWeekDaysPipe]
})
export class N3NgPipesModule { }
