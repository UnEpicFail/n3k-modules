import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'n3-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  _tabs
  _root
  params: string[] = []
  selectedTab

  @Input() 
  set tabs(tabs) {
    this._tabs = tabs
  }

  @Input()
  set root(root) {
    this._root = root
  }

  @Output() change = new EventEmitter()

  constructor(
    private router: Router
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
  }

  public openTab(id) {
    this.router.navigate([this._root], {fragment:id, queryParamsHandling:"preserve"} )
  }

}
