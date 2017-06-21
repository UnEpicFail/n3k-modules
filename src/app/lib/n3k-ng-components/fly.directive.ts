import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[fly]'
})
export class N3kNgFlyDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    setTimeout(() => {
      renderer.setStyle(el.nativeElement, 'width', el.nativeElement.parentNode.offsetWidth+'px')
      renderer.setStyle(el.nativeElement, 'position', 'fixed')
      renderer.setStyle(el.nativeElement, 'bottom', '0px')
      renderer.setStyle(el.nativeElement, 'display', 'block')
      renderer.setStyle(el.nativeElement, 'background-color', '#CBCBCB')
    })
    //console.log('el.nativeElement', el.nativeElement)
  }

}
