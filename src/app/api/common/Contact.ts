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
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.type = new ClassifierShort(json["type"]);
		this.value = json["value"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}