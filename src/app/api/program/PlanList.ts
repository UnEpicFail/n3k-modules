/**
 * Список учeбных планов
 */

import { Pagination } from '../common/Pagination';
import { PlanShort } from '../common/PlanShort';


export class PlanList extends Pagination
{
    items: PlanShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new PlanShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}