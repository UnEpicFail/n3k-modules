/**
 * Запись портфолио
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';


export class PortfolioShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    datetime: string; /*Дата время проведения*/
    name: string; /*Название*/
    result: string; /*Результат*/
    comment: string; /*Коментарий*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.datetime = json["datetime"] || null;
		this.name = json["name"] || null;
		this.result = json["result"] || null;
		this.comment = json["comment"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}