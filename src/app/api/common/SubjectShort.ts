/**
 * Короткое описание предмет
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class SubjectShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    description: string; /*Описание*/
    discipline: ClassifierShort; /**/
    stage: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.description = json["description"] || null;
		this.discipline = json["discipline"] ? new ClassifierShort(json["discipline"]) : null ;
		this.stage = json["stage"] ? new ClassifierShort(json["stage"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}