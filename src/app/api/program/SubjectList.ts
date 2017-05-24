/**
 * Список предметов
 */

import { Pagination } from '../common/Pagination';
import { SubjectShort } from '../common/SubjectShort';


export class SubjectList extends Pagination
{
    items: SubjectShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new SubjectShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}