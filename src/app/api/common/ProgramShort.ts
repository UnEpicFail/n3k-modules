/**
 * Короткое описание образовательной программы
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';


export class ProgramShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Краткое наименование образовательной программы*/

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