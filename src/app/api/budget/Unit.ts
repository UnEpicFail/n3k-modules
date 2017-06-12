/**
 * Статья бюджета
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';


export class Unit
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    number: string; /*Номер*/
    name: string; /*Название*/
    parent: Identity; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.number = json["number"] || null;
		this.name = json["name"] || null;
		this.parent = json["parent"] ? new Identity(json["parent"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}