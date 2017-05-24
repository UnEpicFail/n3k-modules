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
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.number = json["number"] || null;
		this.name = json["name"] || null;
		this.parent = new Identity(json["parent"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}