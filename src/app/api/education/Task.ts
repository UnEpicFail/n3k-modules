/**
 * Задача/задание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { EstimateMethodic } from '../common/EstimateMethodic';


export class Task
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    is_require: string; /*Обязательный*/
    control_form: ClassifierShort; /**/
    parent: Identity; /**/
    variants: Task[]; /*Варианты задачи/задания*/
    description: string; /*Описание*/
    code: string; /*Код*/
    methodics: EstimateMethodic[]; /*Методики оценки*/
    difficulty: string; /*Сложность*/
    decision: string; /*Способ решения*/
    solution: string; /*Решения/Правильный ответ*/
    competence: ClassifierShort[]; /*Компетенция*/
    skills: ClassifierShort[]; /*Значния/Умения*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.is_require = json["is_require"] || null;
		this.control_form = json["control_form"] ? new ClassifierShort(json["control_form"]) : null ;
		this.parent = json["parent"] ? new Identity(json["parent"]) : null ;
		this.variants = []
		if(json["variants"]){
			for (let i in json["variants"]){
				this.variants.push(new Task(json["variants"][i]))
			}
		}
		this.description = json["description"] || null;
		this.code = json["code"] || null;
		this.methodics = []
		if(json["methodics"]){
			for (let i in json["methodics"]){
				this.methodics.push(new EstimateMethodic(json["methodics"][i]))
			}
		}
		this.difficulty = json["difficulty"] || null;
		this.decision = json["decision"] || null;
		this.solution = json["solution"] || null;
		this.competence = []
		if(json["competence"]){
			for (let i in json["competence"]){
				this.competence.push(new ClassifierShort(json["competence"][i]))
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