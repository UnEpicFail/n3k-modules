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
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.position_name = json["position_name"] || null;
		this.position = new ClassifierShort(json["position"]);
		this.person = new PersonShort(json["person"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}