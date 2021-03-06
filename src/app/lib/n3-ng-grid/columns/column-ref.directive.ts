import { Directive, Renderer2, ElementRef,} from '@angular/core';

@Directive({
  selector: 'n3-columns column'
})
export class ColumnRefDirective{

  _height = 0;
  position = {
    top: 'auto',
    bottom: 'auto',
  }

  ownScroll:number = undefined

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'column');
    renderer.setAttribute(this.el.nativeElement, 'column', 'true') 
  }

  getHeight() {
    return window.getComputedStyle(this.el.nativeElement).display === 'none' ? 0 : this.el.nativeElement.offsetHeight
  }

  setPostion(top:string, bottom:string) {
    this.position.top = top
    this.position.bottom = bottom
    this.el.nativeElement.style.top = this.position.top
    this.el.nativeElement.style.bottom = this.position.bottom
  }

  setOwnScroll(scroll){
    this.ownScroll = scroll;
  }

}

