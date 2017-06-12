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
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.person = new PersonShort(json["person"]) ;
		this.program = new ProgramShort(json["program"]) ;
		this.group = new GroupShort(json["group"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}