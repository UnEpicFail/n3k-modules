import { Component, OnInit } from '@angular/core';
import { InstitutionShort } from '../../api/common/InstitutionShort'
import { Router, ActivatedRoute } from '@angular/router';
// import { YaCoreModule, MapMouseEvent, MapClickMouseEvent, MarkerClaster }  from 'angular2-yandex-maps';


@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {

  list: InstitutionShort[] = []

  public searchSrt: string = ''

  constructor(private router: Router, private ar:ActivatedRoute) { 
    for (let i=0; i<20; i+=1){
      this.list.push(
        new InstitutionShort({
          name:'Детский сад №1 "Калинка"',
          status: {id:1, name:'Функционирует'},
          address: {
            origin_address: 'Ленинградская область. г. Выборг. ул. Ленина, д. 3'
          },
          contacts: [
            {type:{id:1, code:'phone'}, value: '8813454332'},
            {type:{id:2, code:'email'}, value: 'gboo1.ru'}
          ]
        })
      )
    }
  }

  ngOnInit() {
    this.ar.params.subscribe(params=>{
      //sconsole.log(params)
    })
  }

  private getFromArray(arr, code){
    for(let i in arr) {
      if (arr[i].type.code == code) {
        return arr[i].value
      }
    }
    return false;
  }

  private searchInputChange(){
    console.log('searchInputChange', this.searchSrt)
    this.router.navigate(['/institution/map-list',{search:'aaa',direction:'12'}])
  }

  
}
