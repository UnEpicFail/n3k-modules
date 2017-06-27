/**
 * Описание тяжелой жизненной ситуации персоны
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class HardSituation
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    situation: ClassifierShort; /**/
    date_start: string; /*Дата начала срока действия ситуации*/
    date_end: string; /*Дата завершения срока действия ситуации*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.situation = new ClassifierShort(json["situation"]) ;
		this.date_start = json["date_start"] || null;
		this.date_end = json["date_end"] || null;
       
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