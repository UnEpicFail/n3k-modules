/**
 * 
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class Classifier extends ClassifierShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    code: string; /*Код*/
    is_deleted: boolean; /*Удален*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.code = json["code"] || null;
		this.is_deleted = json["is_deleted"] || null;
       
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