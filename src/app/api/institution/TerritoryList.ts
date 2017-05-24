/**
 * Список территорий
 */

import { Pagination } from '../common/Pagination';
import { TerritoryShort } from './TerritoryShort';


export class TerritoryList extends Pagination
{
    items: TerritoryShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new TerritoryShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}