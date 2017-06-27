/**
 * Организация питания
 */

import { ClassifierShort } from './ClassifierShort';


export class Meal
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор в БД*/
    meal_type: ClassifierShort; /**/
    financing_type: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.meal_type = new ClassifierShort(json["meal_type"]) ;
		this.financing_type = new ClassifierShort(json["financing_type"]) ;
       
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