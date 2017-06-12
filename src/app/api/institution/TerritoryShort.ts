/**
 * Территория, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';


export class TerritoryShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Наименование*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}