/**
 * Короткое описание подразделения
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class DepartmentShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    institution_identity: Identity; /**/
    name: string; /*Наименование*/
    parent: Identity; /**/
    kind: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.institution_identity = json["institution_identity"] ? new Identity(json["institution_identity"]) : null ;
		this.name = json["name"] || null;
		this.parent = json["parent"] ? new Identity(json["parent"]) : null ;
		this.kind = json["kind"] ? new ClassifierShort(json["kind"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}