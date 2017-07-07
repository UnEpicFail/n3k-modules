import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  classifierId
  itemId

  constructor(
    private location: Location,
    private router: Router,
    private ar: ActivatedRoute
  ) { 
    ar.params.subscribe(params => {
      this.classifierId = params.classifierId
      this.itemId = params.itemsId
    })
  }

  ngOnInit() {
  }

  backToClassifier() {
    this.router.navigate(['classifier','view', this.classifierId])
  }

  onCancel() {
    this.location.back();
  }

  onSubmit() {

  }

}
