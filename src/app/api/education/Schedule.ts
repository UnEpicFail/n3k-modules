/**
 * Планировщик, по аналогии с кроном
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';


export class Schedule
{
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
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
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
}