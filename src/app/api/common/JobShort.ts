/**
 * Сотрудник краткое описание
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';
import { PersonShort } from './PersonShort';


export class JobShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    position_name: string; /*Название должности*/
    position: ClassifierShort; /**/
    person: PersonShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.position_name = json["position_name"] || null;
		this.position = json["position"] ? new ClassifierShort(json["position"]) : null ;
		this.person = json["person"] ? new PersonShort(json["person"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}