import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { OverlayService } from '../overlay.service'


@Component({
  selector: 'n3k-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
  providers: [ OverlayService ]
})
export class PagerComponent implements OnInit {

  popUp

  pager = {
    ranges: [
      '1 - 20',
      '21 - 40',
      '41 - 60'
    ],
    page: 1,
    total_items: 60
  }
  _selected:boolean = false;

  overlayDown
  constructor (
    private el: ElementRef,
    private renderer: Renderer2,
    private overlay: OverlayService
  ) {
    
  }

  ngOnInit() {
    this.popUp = this.el.nativeElement.children[1].children[0]
  }

  trigger() {
    this.overlayDown = this.overlay.up(() =>{
      this.renderer.appendChild(this.el.nativeElement.children[1], this.popUp)
    })
    this.renderer.setStyle(this.popUp, 'left', this.el.nativeElement.parentNode.offsetLeft+'px')
    this.renderer.appendChild(document.body, this.popUp)
  }

}
