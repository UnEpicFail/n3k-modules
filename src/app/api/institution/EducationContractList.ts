/**
 * Список договоров на осуществление образовательной деятельности
 */

import { Pagination } from '../common/Pagination';
import { EducationContractShort } from './EducationContractShort';


export class EducationContractList extends Pagination
{
    items: EducationContractShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new EducationContractShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}