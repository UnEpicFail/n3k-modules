/**
 * Используемая образовательная технология
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';


export class EducationTechnology
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название техрнологии*/
    author: string; /*Автор*/
    date_from: string; /*Дата начала использования*/
    date_to: string; /*Дата окнчания использования*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.author = json["author"] || null;
		this.date_from = json["date_from"] || null;
		this.date_to = json["date_to"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}