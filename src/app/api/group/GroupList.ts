/**
 * Список персон
 */

import { Pagination } from '../common/Pagination';
import { GroupShort } from '../common/GroupShort';


export class GroupList extends Pagination
{
    items: GroupShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new GroupShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}