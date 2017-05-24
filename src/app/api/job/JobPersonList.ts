/**
 * Список записей о работе в разрезе персон
 */

import { Pagination } from '../common/Pagination';
import { JobShort } from '../common/JobShort';


export class JobPersonList extends Pagination
{
    items: JobShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new JobShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}