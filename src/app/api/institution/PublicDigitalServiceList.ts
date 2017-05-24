/**
 * Список услуги в электронном виде
 */

import { Pagination } from '../common/Pagination';
import { PublicDigitalServiceShort } from './PublicDigitalServiceShort';


export class PublicDigitalServiceList extends Pagination
{
    items: PublicDigitalServiceShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new PublicDigitalServiceShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}