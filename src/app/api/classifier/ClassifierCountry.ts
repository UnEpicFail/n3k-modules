/**
 * 
 */

import { Classifier } from './Classifier';


export class ClassifierCountry extends Classifier
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    alfa2: string; /*Сокращение 2 буквы*/
    alfa3: string; /*Сокращение 3 буквы*/
    full_name: string; /*Полное название*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this.isEmpty(json)
		this.alfa2 = json["alfa2"] || null;
		this.alfa3 = json["alfa3"] || null;
		this.full_name = json["full_name"] || null;
       
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