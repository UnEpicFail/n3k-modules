/**
 * Встреча/Урок/Событие
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { PersonShort } from '../common/PersonShort';
import { ProgramShort } from '../common/ProgramShort';
import { Address } from '../common/Address';
import { ContentShort } from '../common/ContentShort';
import { GroupShort } from '../common/GroupShort';
import { Schedule } from './Schedule';


export class Meeting
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    leader: PersonShort[]; /*Кто проводит*/
    examinator: ProgramShort; /**/
    place: Address; /**/
    content: ContentShort; /**/
    groups: GroupShort[]; /*Группы*/
    students: PersonShort[]; /*Студенты вне групп*/
    schedule: Schedule[]; /*Записи планировщика*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.leader = []
		if(json["leader"]){
			for (let i in json["leader"]){
				this.leader.push(new PersonShort(json["leader"][i]))
			}
		}
		this.examinator = json["examinator"] ? new ProgramShort(json["examinator"]) : null ;
		this.place = json["place"] ? new Address(json["place"]) : null ;
		this.content = json["content"] ? new ContentShort(json["content"]) : null ;
		this.groups = []
		if(json["groups"]){
			for (let i in json["groups"]){
				this.groups.push(new GroupShort(json["groups"][i]))
			}
		}
		this.students = []
		if(json["students"]){
			for (let i in json["students"]){
				this.students.push(new PersonShort(json["students"][i]))
			}
		}
		this.schedule = []
		if(json["schedule"]){
			for (let i in json["schedule"]){
				this.schedule.push(new Schedule(json["schedule"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}