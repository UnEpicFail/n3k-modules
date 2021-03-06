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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    date: string; /*Дата на которую фиксируется информация*/
    group: ClassifierShort; /**/
    group_document: HealthGroupDocument; /**/
    sport_group: ClassifierShort; /**/
    is_need_adaptive: boolean; /*Наличие потребности в адаптивной программе обучения*/
    is_need_long_treatment: boolean; /*Наличие потребности в длительном лечении*/
    long_treatment_document: LongTreatmentDocument; /**/
    is_need_tutor: boolean; /*Наличие потребности в тьюторе*/
    is_need_assistant: boolean; /*Наличие потребности в ассистенте*/
    occupational_injuries: ClassifierShort; /**/
    ovz_category: ClassifierShort; /**/
    pmpk_ovz_document: PmpkOvzDocument; /**/
    ovz_education_kind: ClassifierShort; /**/
    long_treatment_education_kind: ClassifierShort; /**/
    education_kind_document: HealthEducationKindDocument; /**/
    violations: ClassifierShort[]; /*Нарушения здоровья*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.date = json["date"] || null;
		this.group = new ClassifierShort(json["group"]) ;
		this.group_document = new HealthGroupDocument(json["group_document"]) ;
		this.sport_group = new ClassifierShort(json["sport_group"]) ;
		this.is_need_adaptive = json["is_need_adaptive"] || null;
		this.is_need_long_treatment = json["is_need_long_treatment"] || null;
		this.long_treatment_document = new LongTreatmentDocument(json["long_treatment_document"]) ;
		this.is_need_tutor = json["is_need_tutor"] || null;
		this.is_need_assistant = json["is_need_assistant"] || null;
		this.occupational_injuries = new ClassifierShort(json["occupational_injuries"]) ;
		this.ovz_category = new ClassifierShort(json["ovz_category"]) ;
		this.pmpk_ovz_document = new PmpkOvzDocument(json["pmpk_ovz_document"]) ;
		this.ovz_education_kind = new ClassifierShort(json["ovz_education_kind"]) ;
		this.long_treatment_education_kind = new ClassifierShort(json["long_treatment_education_kind"]) ;
		this.education_kind_document = new HealthEducationKindDocument(json["education_kind_document"]) ;
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