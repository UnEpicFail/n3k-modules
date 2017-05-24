/**
 * Список программ
 */

import { Pagination } from '../common/Pagination';
import { ProgramShort } from '../common/ProgramShort';


export class ProgramList extends Pagination
{
    items: ProgramShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new ProgramShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}