import { Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class OverlayService {

  layer
  onDown
  filler
  constructor(
    private renderer: Renderer2
  ) { 
    
  }

  up (onDown) {
    this.onDown = onDown
    // this.filler = filler
    // console.log('filler', filler)   

    this.layer = this.renderer.createElement('div')
    this.renderer.setStyle (this.layer, 'position', 'fixed')
    this.renderer.setStyle (this.layer, 'left', '0px')
    this.renderer.setStyle (this.layer, 'top', '0px')
    this.renderer.setStyle (this.layer, 'right', '0px')
    this.renderer.setStyle (this.layer, 'bottom', '0px')
    this.renderer.setStyle (this.layer, 'z-index', '3001')
    this.renderer.setStyle (this.layer, 'background-color', 'rgba(128, 128, 128, 0.5)')
    
    // this.renderer.appendChild(this.layer, this.filler)
    
    this.renderer.appendChild(document.body, this.layer)
    
    this.renderer.listen (this.layer, 'click', event=>{
      this.down();  
    })

    return ()=>{this.down()}
  }

  down () {
    //this.renderer.destroyNode(this.layer)
    this.onDown()
    this.layer.remove();
  }

}
