/**
 * Образовательный материал
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { ContentShort } from '../common/ContentShort';
import { SubjectShort } from '../common/SubjectShort';
import { Task } from './Task';


export class Content
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    methodology: string; /*Методология*/
    description: string; /*Описание*/
    level: ClassifierShort; /**/
    direction: ClassifierShort; /**/
    profession: ClassifierShort; /**/
    type: ClassifierShort; /**/
    adaptives: ClassifierShort[]; /*Адаптивность*/
    competence: ClassifierShort[]; /*Компетенция*/
    professions: ClassifierShort[]; /*Профессия/Специальность*/
    parent: ContentShort; /**/
    subject: SubjectShort; /**/
    tasks: Task[]; /*Задачи*/
    homework: Task[]; /*Домашняя работа*/
    skills: ClassifierShort[]; /*Знания/Умения*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.methodology = json["methodology"] || null;
		this.description = json["description"] || null;
		this.level = json["level"] ? new ClassifierShort(json["level"]) : null ;
		this.direction = json["direction"] ? new ClassifierShort(json["direction"]) : null ;
		this.profession = json["profession"] ? new ClassifierShort(json["profession"]) : null ;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.adaptives = []
		if(json["adaptives"]){
			for (let i in json["adaptives"]){
				this.adaptives.push(new ClassifierShort(json["adaptives"][i]))
			}
		}
		this.competence = []
		if(json["competence"]){
			for (let i in json["competence"]){
				this.competence.push(new ClassifierShort(json["competence"][i]))
			}
		}
		this.professions = []
		if(json["professions"]){
			for (let i in json["professions"]){
				this.professions.push(new ClassifierShort(json["professions"][i]))
			}
		}
		this.parent = json["parent"] ? new ContentShort(json["parent"]) : null ;
		this.subject = json["subject"] ? new SubjectShort(json["subject"]) : null ;
		this.tasks = []
		if(json["tasks"]){
			for (let i in json["tasks"]){
				this.tasks.push(new Task(json["tasks"][i]))
			}
		}
		this.homework = []
		if(json["homework"]){
			for (let i in json["homework"]){
				this.homework.push(new Task(json["homework"][i]))
			}
		}
		this.skills = []
		if(json["skills"]){
			for (let i in json["skills"]){
				this.skills.push(new ClassifierShort(json["skills"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}