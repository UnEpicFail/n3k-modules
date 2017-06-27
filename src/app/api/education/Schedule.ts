/**
 * Планировщик, по аналогии с кроном
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';


export class Schedule
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    minute: number; /*Порядковый номер минуты*/
    hour: number; /*Порядковый номер часа*/
    day: number; /*Порядковый номер дня*/
    week: number; /*Порядковый номер недели*/
    month: number; /*Порядковый номер месяца*/
    year: number; /*Порядковый номер года*/
    week_day: number; /*Порядковый номер дня недели*/
    datetime_from: string; /*Дата начала*/
    datetime_to: string; /*Дата начала*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.minute = json["minute"] || null;
		this.hour = json["hour"] || null;
		this.day = json["day"] || null;
		this.week = json["week"] || null;
		this.month = json["month"] || null;
		this.year = json["year"] || null;
		this.week_day = json["week_day"] || null;
		this.datetime_from = json["datetime_from"] || null;
		this.datetime_to = json["datetime_to"] || null;
       
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