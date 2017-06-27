/**
 * Судимость
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class Сonviction
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    criminal_item: string; /*Статья*/
    punishment_period: string; /*Срок*/
    date_start: string; /*Дата начала отбытия срока*/
    date_end: string; /*Дата окончания отбытия срока*/
    punishment: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.criminal_item = json["criminal_item"] || null;
		this.punishment_period = json["punishment_period"] || null;
		this.date_start = json["date_start"] || null;
		this.date_end = json["date_end"] || null;
		this.punishment = new ClassifierShort(json["punishment"]) ;
       
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