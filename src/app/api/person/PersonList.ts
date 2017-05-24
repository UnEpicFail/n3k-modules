/**
 * Список персон
 */

import { Pagination } from '../common/Pagination';
import { PersonShort } from '../common/PersonShort';


export class PersonList extends Pagination
{
    items: PersonShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new PersonShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}