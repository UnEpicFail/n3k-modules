/**
 * Граданство
 */

import { ClassifierShort } from './ClassifierShort';


export class Citizenship
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    country: ClassifierShort; /**/
    type: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.country = new ClassifierShort(json["country"]) ;
		this.type = new ClassifierShort(json["type"]) ;
       
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