import { Component, 
  AfterContentInit, 
  ContentChild, 
  Input, 
  ElementRef,
  OnDestroy
} from '@angular/core';
import { Column1RefDirective } from './column-1-ref.directive'
import { Column2RefDirective } from './column-2-ref.directive'
import { Column3RefDirective } from './column-3-ref.directive'
import { PositionService } from '../position.service'

@Component({
  selector: 'n3-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements AfterContentInit , OnDestroy{

  columns: number
  height: string
  heights: number[] = [0]

  positions
  head 
  neck 
  footer
  body 
  scrollPosition
  getHeightTimeout

  @Input('context')
  context: string

  @ContentChild(Column1RefDirective)
  column1: Column1RefDirective

  @ContentChild(Column2RefDirective)
  column2: Column2RefDirective

  @ContentChild(Column3RefDirective)
  column3: Column3RefDirective

  constructor(public el: ElementRef, private ps: PositionService) {
    ps.addColumn(this)    
    // window.addEventListener('resize', ()=>{
    //   this.setHeight()
    // });
    // Убрал, так как добавил интервал который чекает высоту постояно, решение раково, но другого пока нет
  }

  ngAfterContentInit() {
    this.setHeight();
    setInterval(()=>{
      this.setHeight()
    }, 100);
  }

  setHeight() {
    if(this.getHeightTimeout)
      clearTimeout(this.getHeightTimeout)
    if ( typeof this.column3 !== 'undefined') {
      this.columns = 3;
      this.getHeightTimeout = setTimeout(()=>{
        this.heights = [
          this.column1.getHeight(), 
          this.column2.getHeight(), 
          this.column3.getHeight(), 
        ]
        this.height = this.heights.sort(function(a, b){return a-b}).slice(-1)[0] + 'px'
      }, 1)  
    } else if ( typeof this.column2 !== 'undefined') {
      this.columns = 2;
      this.getHeightTimeout = setTimeout(()=>{
        this.heights = [
          this.column1.getHeight(), 
          this.column2.getHeight(), 
        ]
        this.height = this.heights.sort(function(a, b){return a-b}).slice(-1)[0] + 'px'
      }, 1)    
    } else if ( typeof this.column1 !== 'undefined') {
      this.columns = 1;
      this.getHeightTimeout = setTimeout(()=>{
        this.heights = [
          this.column1.getHeight(), 
        ]
        this.height = this.heights.sort(function(a, b){return a-b}).slice(-1)[0] + 'px'
      }, 1)    
    } else {
       return;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', ()=>{
      this.setHeight()
    })
  }

}
