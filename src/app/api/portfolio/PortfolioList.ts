/**
 * Список записей портфолио
 */

import { Pagination } from '../common/Pagination';
import { PortfolioShort } from '../common/PortfolioShort';


export class PortfolioList extends Pagination
{
    items: PortfolioShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new PortfolioShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}