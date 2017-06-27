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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.person = new PersonShort(json["person"]) ;
		this.program = new ProgramShort(json["program"]) ;
		this.institution = new InstitutionShort(json["institution"]) ;
		this.group = new GroupShort(json["group"]) ;
		this.date_from = json["date_from"] || null;
		this.date_to = json["date_to"] || null;
		this.plan = new PlanShort(json["plan"]) ;
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new EducationDocument(json["documents"][i]))
			}
		}
		this.form = new ClassifierShort(json["form"]) ;
		this.education_result = new EducationResult(json["education_result"]) ;
		this.education_application = new EducationApplication(json["education_application"]) ;
		this.implement_form = new ClassifierShort(json["implement_form"]) ;
		this.financing = new Financing(json["financing"]) ;
		this.language = new ClassifierShort(json["language"]) ;
		this.stay_mode = new ClassifierShort(json["stay_mode"]) ;
		this.ending_reason = new ClassifierShort(json["ending_reason"]) ;
		this.meta = new EducationMeta(json["meta"]) ;
       
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