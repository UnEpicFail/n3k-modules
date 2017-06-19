import { 
  Component, 
  Input, 
  Directive, 
  ElementRef, 
  Renderer,
  QueryList
} from '@angular/core';

import { PositionService } from '../../n3k-ng-grid/position.service'


@Directive({
  selector: 'anchor-target'
})

export class AnchornTargetRefDirective {
   
  @Input('name') name

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  getPosition(){
    return this.el.nativeElement.offsetTop
  }
}

@Component({
  selector: 'anchor-menu',
  templateUrl: './anchor-menu.component.html',
  styleUrls: ['./anchor-menu.component.css']
})
export class AnchorMenuComponent {

  _list: {}[] = []
  @Input('list')
  set list(list) {
    this._list = (list || [])
  }

  _anchors: QueryList<AnchornTargetRefDirective> 
  @Input('anchors')
  set anchors(anchors) {
    if(anchors){
      this._anchors = anchors
    }
  }

  neck

  constructor(
    private ps: PositionService, 
    private renderer: Renderer
  ) {
    this.ps.neck.subscribe(neck => {
      this.neck = neck
    })
  }

  navigate(target) {
    this._anchors.forEach(anchor => {
      if(anchor.name === target){
        window.scrollTo(0, this.neck.el.nativeElement.offsetTop + this.neck.el.nativeElement.offsetHeight + anchor.getPosition())
      }
    })
  }

}
