/**
 * Сокращенная запись об обучении
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { PersonShort } from './PersonShort';
import { ProgramShort } from './ProgramShort';
import { GroupShort } from './GroupShort';


export class EducationShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    person: PersonShort; /**/
    program: ProgramShort; /**/
    group: GroupShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.person = json["person"] ? new PersonShort(json["person"]) : null ;
		this.program = json["program"] ? new ProgramShort(json["program"]) : null ;
		this.group = json["group"] ? new GroupShort(json["group"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}