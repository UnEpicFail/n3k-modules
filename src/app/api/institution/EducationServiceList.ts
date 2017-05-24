/**
 * Список образовательных услугу для УФТТ 3.0
 */

import { Pagination } from '../common/Pagination';
import { EducationServiceShort } from './EducationServiceShort';


export class EducationServiceList extends Pagination
{
    items: EducationServiceShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new EducationServiceShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}