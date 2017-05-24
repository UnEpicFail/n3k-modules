/**
 * Список зданий
 */

import { Pagination } from '../common/Pagination';
import { BuildingShort } from './BuildingShort';


export class BuildingList extends Pagination
{
    items: BuildingShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new BuildingShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}