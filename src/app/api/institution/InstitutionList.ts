/**
 * Список образовательнх организаций и ЮР лица
 */

import { Pagination } from '../common/Pagination';
import { InstitutionShort } from '../common/InstitutionShort';


export class InstitutionList extends Pagination
{
    items: InstitutionShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new InstitutionShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}