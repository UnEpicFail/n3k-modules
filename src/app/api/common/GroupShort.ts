/**
 * Короткое описание группа
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { InstitutionShort } from './InstitutionShort';
import { ProgramShort } from './ProgramShort';
import { Age } from './Age';
import { ClassifierShort } from './ClassifierShort';


export class GroupShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Наименование*/
    institution: InstitutionShort; /**/
    program: ProgramShort; /**/
    age: Age; /**/
    date_from: string; /*Дата начала работы*/
    date_to: string; /*Дата закрытия*/
    stage: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.institution = json["institution"] ? new InstitutionShort(json["institution"]) : null ;
		this.program = json["program"] ? new ProgramShort(json["program"]) : null ;
		this.age = json["age"] ? new Age(json["age"]) : null ;
		this.date_from = json["date_from"] || null;
		this.date_to = json["date_to"] || null;
		this.stage = json["stage"] ? new ClassifierShort(json["stage"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}