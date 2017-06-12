/**
 * Запись об обучении
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { PersonShort } from '../common/PersonShort';
import { ProgramShort } from '../common/ProgramShort';
import { InstitutionShort } from '../common/InstitutionShort';
import { GroupShort } from '../common/GroupShort';
import { PlanShort } from '../common/PlanShort';
import { EducationDocument } from './EducationDocument';
import { ClassifierShort } from '../common/ClassifierShort';
import { EducationResult } from './EducationResult';
import { EducationApplication } from './EducationApplication';
import { Financing } from '../common/Financing';
import { EducationMeta } from './EducationMeta';


export class Education
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    person: PersonShort; /**/
    program: ProgramShort; /**/
    institution: InstitutionShort; /**/
    group: GroupShort; /**/
    date_from: string; /*Дата начала обучения*/
    date_to: string; /*Дата окончания обучения*/
    plan: PlanShort; /**/
    documents: EducationDocument[]; /*Массив документов обучающегося*/
    form: ClassifierShort; /**/
    education_result: EducationResult; /**/
    education_application: EducationApplication; /**/
    implement_form: ClassifierShort; /**/
    financing: Financing; /**/
    language: ClassifierShort; /**/
    stay_mode: ClassifierShort; /**/
    ending_reason: ClassifierShort; /**/
    meta: EducationMeta; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.person = json["person"] ? new PersonShort(json["person"]) : null ;
		this.program = json["program"] ? new ProgramShort(json["program"]) : null ;
		this.institution = json["institution"] ? new InstitutionShort(json["institution"]) : null ;
		this.group = json["group"] ? new GroupShort(json["group"]) : null ;
		this.date_from = json["date_from"] || null;
		this.date_to = json["date_to"] || null;
		this.plan = json["plan"] ? new PlanShort(json["plan"]) : null ;
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new EducationDocument(json["documents"][i]))
			}
		}
		this.form = json["form"] ? new ClassifierShort(json["form"]) : null ;
		this.education_result = json["education_result"] ? new EducationResult(json["education_result"]) : null ;
		this.education_application = json["education_application"] ? new EducationApplication(json["education_application"]) : null ;
		this.implement_form = json["implement_form"] ? new ClassifierShort(json["implement_form"]) : null ;
		this.financing = json["financing"] ? new Financing(json["financing"]) : null ;
		this.language = json["language"] ? new ClassifierShort(json["language"]) : null ;
		this.stay_mode = json["stay_mode"] ? new ClassifierShort(json["stay_mode"]) : null ;
		this.ending_reason = json["ending_reason"] ? new ClassifierShort(json["ending_reason"]) : null ;
		this.meta = json["meta"] ? new EducationMeta(json["meta"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}