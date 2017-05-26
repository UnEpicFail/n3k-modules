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
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.name = json["name"] || null;
		this.task = new Identity(json["task"]);
		this.comment = json["comment"] || null;
		this.institution = new InstitutionShort(json["institution"]);
		this.weight = new ClassifierShort(json["weight"]);
		this.value = json["value"] || null;
		this.methodic = new EstimateMethodic(json["methodic"]);
		this.student = new EducationShort(json["student"]);
		this.teacher = new TeacherShort(json["teacher"]);
		this.date = json["date"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}