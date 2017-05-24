/**
 * Справочник
 */

import { Pagination } from '../common/Pagination';
import { ClassifierShort } from '../common/ClassifierShort';


export class ClassifierList extends Pagination
{
    items: ClassifierShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new ClassifierShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}