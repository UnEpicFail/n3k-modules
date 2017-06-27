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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.methodology = json["methodology"] || null;
		this.description = json["description"] || null;
		this.level = new ClassifierShort(json["level"]) ;
		this.direction = new ClassifierShort(json["direction"]) ;
		this.profession = new ClassifierShort(json["profession"]) ;
		this.type = new ClassifierShort(json["type"]) ;
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
		this.parent = new ContentShort(json["parent"]) ;
		this.subject = new SubjectShort(json["subject"]) ;
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