/**
 * Орган общественного управления
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class PublicAdministration
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор БД*/
    form: ClassifierShort; /**/
    foundation_cause: string; /*Основание для создания*/
    foundation_date: string; /*Дата создания*/
    liquidation_date: string; /*Дата ликвидации*/
    powers: string; /*Полномочия*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.form = new ClassifierShort(json["form"]) ;
		this.foundation_cause = json["foundation_cause"] || null;
		this.foundation_date = json["foundation_date"] || null;
		this.liquidation_date = json["liquidation_date"] || null;
		this.powers = json["powers"] || null;
       
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