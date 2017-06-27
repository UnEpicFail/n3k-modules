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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.leader = []
		if(json["leader"]){
			for (let i in json["leader"]){
				this.leader.push(new PersonShort(json["leader"][i]))
			}
		}
		this.examinator = new ProgramShort(json["examinator"]) ;
		this.place = new Address(json["place"]) ;
		this.content = new ContentShort(json["content"]) ;
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

    isEmpty(json) {
        if (json === null || typeof json !== 'object'){
            return true
        }

        let res = true 
        Object.keys(json).map(i => {
            if (i !== '_isEmpty') {
                if (Array.isArray(json[i])){
                    json[i].map(j => {
                        res = res && this.isEmpty(json[i][j])
                    })
                } else if (typeof json[i] === 'object') {
                    res = res && this.isEmpty(json[i])
                } else {
                    res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
                }
            }
        })
        return res
    }
}