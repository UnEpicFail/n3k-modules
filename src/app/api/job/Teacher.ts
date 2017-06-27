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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    job: Job[]; /*Работа/Сотрудник*/
    subjects: SubjectShort[]; /*Преподоваемые предметы*/
    institution: InstitutionShort; /**/
    meta: TeacherMeta; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
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
		this.institution = new InstitutionShort(json["institution"]) ;
		this.meta = new TeacherMeta(json["meta"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (typeof json !== 'object'){
            return true
        }
        
        let res = true 
        Object.keys(json).map(i => {
            if (Array.isArray(json[i])){
                json[i].map(j => {
                    res = res && this.isEmpty(json[i][j])
                })
            } else if (typeof json[i] === 'object') {
                res = res && this.isEmpty(json[i])
            } else {
                res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
            }
        })
        return res
    }
}