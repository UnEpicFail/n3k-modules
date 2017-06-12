/**
 * Контактная информация
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class Contact
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    type: ClassifierShort; /**/
    value: string; /*Значение*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.value = json["value"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}