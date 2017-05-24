/**
 * Список инноваций
 */

import { Pagination } from '../common/Pagination';
import { InnovationShort } from './InnovationShort';


export class InnovationList extends Pagination
{
    items: InnovationShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new InnovationShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}