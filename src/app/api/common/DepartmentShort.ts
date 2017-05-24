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
    name: string; /*Наименование*/
    parent: Identity; /**/
    kind: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.name = json["name"] || null;
		this.parent = new Identity(json["parent"]);
		this.kind = new ClassifierShort(json["kind"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}