import { Component, Input, EventEmitter, Output, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OverlayService } from '../overlay.service'

@Component({
  selector: 'n3-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers: [OverlayService]
})
export class TabComponent implements OnInit{

  _tabs
  _root
  _base
  params: string[] = []
  
  overflowedTabs = []
  overlayDown
  moreListUp = false
  overflowedTabsList
  liquiding
  @Input() 
  set tabs(tabs) {
    this._tabs = tabs
  }

  @Input()
  set root(root) {
    this._root = root
  }

  @Input()
  set base(base) {
    this._base = base;
  }

  @Output() change = new EventEmitter()

  constructor(
    private el: ElementRef,
    private router: Router,
    private renderer: Renderer2,
    private overlay: OverlayService
  ) {
    router.events.subscribe(params => {
      if (params instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          this.params = tree.fragment.split('/') 
          this.change.emit(this.params)
        }
      }
    })

    this.liquiding = () => {
      let moreBtn = this.el.nativeElement.children[0].children[0].offsetWidth
      let containerWidth = this.el.nativeElement.children[0].offsetWidth - moreBtn - 20
      let summWidth = 0
      let list = this.el.nativeElement.children[0].children
      let overflowIndex
      let i = 0;
      let max_i = list.length
      let overflowed = false
      for ( i = 1; i < max_i; i+=1 ) {
        summWidth += list[i].offsetWidth + 50;
        if (summWidth > containerWidth) {
          overflowIndex = i
          break;
        }
      }
      if(overflowIndex){
        this.overflowedTabs = this._tabs.slice(overflowIndex - 1)
      } else {
        this.overflowedTabs = []
      }
    }

    window.addEventListener('resize', this.liquiding);
  }

  ngOnInit() {
    setTimeout(()=>{
      this.liquiding()
      if (typeof this.params[0] === 'undefined') {
        if(this._base){
          this.openTab(this._base)
        }
      } else {
        this.openTab(this.params[0])
      }
    })
  }

  openTab(id) {
    if (this.moreListUp) {
      this.overlayDown()
    }
    let index = this.getIndexById(id)
    if (typeof index === 'number' && this._tabs.length - this.overflowedTabs.length <= index ) {
      this._tabs.unshift(this._tabs.splice(index, 1)[0])
      this.liquiding();
    }
    this.router.navigate([this._root], {fragment:id, queryParamsHandling:"preserve"} )
  }

  trigger() {    
    this.overflowedTabsList = this.el.nativeElement.children[1].children[0]
    this.moreListUp = true;
    setTimeout(()=>{

      this.renderer.setStyle(this.overflowedTabsList, 'top', this.getPosition())
      this.overlayDown = this.overlay.up(() =>{
        this.moreListUp = false
        this.renderer.appendChild(this.el.nativeElement.children[1], this.overflowedTabsList)
      })
      this.renderer.setStyle(this.overflowedTabsList, 'left', this.el.nativeElement.offsetLeft+'px')
      this.renderer.appendChild(document.body, this.overflowedTabsList)
    })
  }

  getPosition() {
    return this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight + this.getClosestColumn(this.el.nativeElement) + 'px'
  }

  getClosestColumn (el){
    if (!el.parentNode.getAttribute){
      return 0
    }
    if (el.parentNode.getAttribute('column')) {
      return el.parentNode.offsetTop
    } else {
      return this.getClosestColumn(el.parentNode)
    }
  }

  getIndexById(id) {
    for (let i = 0, max_i = this._tabs.length; i < max_i; i += 1){
      if (this._tabs[i].id === id) {
        return i
      }
    }
    return false
  }

}
