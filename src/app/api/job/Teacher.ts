/**
 * Учитель
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { Job } from './Job';
import { SubjectShort } from '../common/SubjectShort';
import { InstitutionShort } from '../common/InstitutionShort';
import { TeacherMeta } from './TeacherMeta';


export class Teacher
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    job: Job[]; /*Работа/Сотрудник*/
    subjects: SubjectShort[]; /*Преподоваемые предметы*/
    institution: InstitutionShort; /**/
    meta: TeacherMeta; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.job = []
		if(json["job"]){
			for (let i in json["job"]){
				this.job.push(new Job(json["job"][i]))
			}
		}
		this.subjects = []
		if(json["subjects"]){
			for (let i in json["subjects"]){
				this.subjects.push(new SubjectShort(json["subjects"][i]))
			}
		}
		this.institution = json["institution"] ? new InstitutionShort(json["institution"]) : null ;
		this.meta = json["meta"] ? new TeacherMeta(json["meta"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}