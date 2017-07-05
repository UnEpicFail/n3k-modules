import { Component, OnInit, ElementRef } from '@angular/core';
import { PositionService } from '../position.service'

@Component({
  selector: 'n3-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public el: ElementRef, private ps: PositionService) { 
    ps.addHeader(this);
  }

  ngOnInit() {
  }

}
