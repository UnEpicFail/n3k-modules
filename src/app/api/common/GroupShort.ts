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
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.name = json["name"] || null;
		this.institution = new InstitutionShort(json["institution"]);
		this.program = new ProgramShort(json["program"]);
		this.age = new Age(json["age"]);
		this.date_from = json["date_from"] || null;
		this.date_to = json["date_to"] || null;
		this.stage = new ClassifierShort(json["stage"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}