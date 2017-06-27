/**
 * Список программ
 */

import { Pagination } from '../common/Pagination';
import { ProgramShort } from '../common/ProgramShort';


export class ProgramList extends Pagination
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    items: ProgramShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this.isEmpty(json)
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