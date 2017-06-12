/**
 * Описание состояния здоровья персоны
 */

import { ClassifierShort } from '../common/ClassifierShort';
import { HealthGroupDocument } from './HealthGroupDocument';
import { LongTreatmentDocument } from './LongTreatmentDocument';
import { PmpkOvzDocument } from './PmpkOvzDocument';
import { HealthEducationKindDocument } from './HealthEducationKindDocument';


export class Health
{
    date: string; /*Дата на которую фиксируется информация*/
    group: ClassifierShort; /**/
    group_document: HealthGroupDocument; /**/
    sport_group: ClassifierShort; /**/
    is_need_adaptive: string; /*Наличие потребности в адаптивной программе обучения*/
    is_need_long_treatment: string; /*Наличие потребности в длительном лечении*/
    long_treatment_document: LongTreatmentDocument; /**/
    is_need_tutor: string; /*Наличие потребности в тьюторе*/
    is_need_assistant: string; /*Наличие потребности в ассистенте*/
    occupational_injuries: ClassifierShort; /**/
    ovz_category: ClassifierShort; /**/
    pmpk_ovz_document: PmpkOvzDocument; /**/
    ovz_education_kind: ClassifierShort; /**/
    long_treatment_education_kind: ClassifierShort; /**/
    education_kind_document: HealthEducationKindDocument; /**/
    violations: ClassifierShort[]; /*Нарушения здоровья*/

    constructor(json) {
        json = (json || {})
		this.date = json["date"] || null;
		this.group = json["group"] ? new ClassifierShort(json["group"]) : null ;
		this.group_document = json["group_document"] ? new HealthGroupDocument(json["group_document"]) : null ;
		this.sport_group = json["sport_group"] ? new ClassifierShort(json["sport_group"]) : null ;
		this.is_need_adaptive = json["is_need_adaptive"] || null;
		this.is_need_long_treatment = json["is_need_long_treatment"] || null;
		this.long_treatment_document = json["long_treatment_document"] ? new LongTreatmentDocument(json["long_treatment_document"]) : null ;
		this.is_need_tutor = json["is_need_tutor"] || null;
		this.is_need_assistant = json["is_need_assistant"] || null;
		this.occupational_injuries = json["occupational_injuries"] ? new ClassifierShort(json["occupational_injuries"]) : null ;
		this.ovz_category = json["ovz_category"] ? new ClassifierShort(json["ovz_category"]) : null ;
		this.pmpk_ovz_document = json["pmpk_ovz_document"] ? new PmpkOvzDocument(json["pmpk_ovz_document"]) : null ;
		this.ovz_education_kind = json["ovz_education_kind"] ? new ClassifierShort(json["ovz_education_kind"]) : null ;
		this.long_treatment_education_kind = json["long_treatment_education_kind"] ? new ClassifierShort(json["long_treatment_education_kind"]) : null ;
		this.education_kind_document = json["education_kind_document"] ? new HealthEducationKindDocument(json["education_kind_document"]) : null ;
		this.violations = []
		if(json["violations"]){
			for (let i in json["violations"]){
				this.violations.push(new ClassifierShort(json["violations"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}