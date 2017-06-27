/**
 * Справочник
 */

import { Pagination } from '../common/Pagination';
import { ClassifierShort } from '../common/ClassifierShort';


export class ClassifierList extends Pagination
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    items: ClassifierShort[]; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
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

    isEmpty(json) {
        if (typeof json !== 'object'){
            return true
        }
        
        let res = true 
        Object.keys(json).map(i => {
            if (Array.isArray(json[i])){
                json[i].map(j => {
                    res = res && this.isEmpty(json[i][j])
                })
            } else if (typeof json[i] === 'object') {
                res = res && this.isEmpty(json[i])
            } else {
                res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
            }
        })
        return res
    }
}