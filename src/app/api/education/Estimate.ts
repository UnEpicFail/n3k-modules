/**
 * Оценка
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { InstitutionShort } from '../common/InstitutionShort';
import { ClassifierShort } from '../common/ClassifierShort';
import { EstimateMethodic } from '../common/EstimateMethodic';
import { EducationShort } from '../common/EducationShort';
import { TeacherShort } from '../common/TeacherShort';


export class Estimate
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    task: Identity; /**/
    comment: string; /*Комментарий*/
    institution: InstitutionShort; /**/
    weight: ClassifierShort; /**/
    value: string; /*Значение*/
    methodic: EstimateMethodic; /**/
    student: EducationShort; /**/
    teacher: TeacherShort; /**/
    date: string; /*Дата когда была выставлена оценка*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.task = json["task"] ? new Identity(json["task"]) : null ;
		this.comment = json["comment"] || null;
		this.institution = json["institution"] ? new InstitutionShort(json["institution"]) : null ;
		this.weight = json["weight"] ? new ClassifierShort(json["weight"]) : null ;
		this.value = json["value"] || null;
		this.methodic = json["methodic"] ? new EstimateMethodic(json["methodic"]) : null ;
		this.student = json["student"] ? new EducationShort(json["student"]) : null ;
		this.teacher = json["teacher"] ? new TeacherShort(json["teacher"]) : null ;
		this.date = json["date"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}