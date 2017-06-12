/**
 * Методика оценки
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class EstimateMethodic
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    description: string; /*Описание*/
    type: ClassifierShort; /**/
    system: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.description = json["description"] || null;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.system = json["system"] ? new ClassifierShort(json["system"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}