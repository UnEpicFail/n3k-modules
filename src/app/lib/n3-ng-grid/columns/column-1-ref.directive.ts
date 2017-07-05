import { Directive, Renderer2, ElementRef,} from '@angular/core';
import { ColumnRefDirective } from './column-ref.directive';

@Directive({
  selector: 'n3-columns column-1'
})
export class Column1RefDirective extends ColumnRefDirective{

  constructor(renderer: Renderer2, el: ElementRef) {
    super(renderer, el)
    renderer.addClass(el.nativeElement, 'column-1');
  }
}

