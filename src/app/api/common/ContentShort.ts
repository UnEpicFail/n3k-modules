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
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.description = json["description"] || null;
		this.level = json["level"] ? new ClassifierShort(json["level"]) : null ;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.parent = json["parent"] ? new Identity(json["parent"]) : null ;
		this.subject = json["subject"] ? new SubjectShort(json["subject"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}