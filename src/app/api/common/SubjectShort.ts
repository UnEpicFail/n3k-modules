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
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.description = json["description"] || null;
		this.discipline = new ClassifierShort(json["discipline"]) ;
		this.stage = new ClassifierShort(json["stage"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}