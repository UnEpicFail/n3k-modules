/**
 * Короткое описание образовательного материала
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';
import { SubjectShort } from './SubjectShort';


export class ContentShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    description: string; /*Описание*/
    level: ClassifierShort; /**/
    type: ClassifierShort; /**/
    parent: Identity; /**/
    subject: SubjectShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.description = json["description"] || null;
		this.level = new ClassifierShort(json["level"]) ;
		this.type = new ClassifierShort(json["type"]) ;
		this.parent = new Identity(json["parent"]) ;
		this.subject = new SubjectShort(json["subject"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}