/**
 * Список подразделений
 */

import { Pagination } from '../common/Pagination';
import { DepartmentShort } from '../common/DepartmentShort';


export class DepartmentList extends Pagination
{
    items: DepartmentShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new DepartmentShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}