/**
 * Список образовательнх организаций и ЮР лица
 */

import { Pagination } from '../common/Pagination';
import { InstitutionShort } from '../common/InstitutionShort';


export class InstitutionList extends Pagination
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    items: InstitutionShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this.isEmpty(json)
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(new InstitutionShort(json["items"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (json === null || typeof json !== 'object'){
            return true
        }

        let res = true 
        Object.keys(json).map(i => {
            if (i !== '_isEmpty') {
                if (Array.isArray(json[i])){
                    json[i].map(j => {
                        res = res && this.isEmpty(json[i][j])
                    })
                } else if (typeof json[i] === 'object') {
                    res = res && this.isEmpty(json[i])
                } else {
                    res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
                }
            }
        })
        return res
    }
}