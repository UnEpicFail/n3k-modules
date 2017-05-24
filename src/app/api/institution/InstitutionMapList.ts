/**
 * Список образовательнх организаций и ЮР лица для карты
 */

import { InstitutionMapPoint } from './InstitutionMapPoint';


export class InstitutionMapList
{
    items: InstitutionMapPoint[]; /**/

    constructor(json) {
        json = (json || {})
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new InstitutionMapPoint(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}