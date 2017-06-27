/**
 * Мета данные сотрудника
 */

import { ClassifierShort } from '../common/ClassifierShort';
import { Experience } from './Experience';


export class JobMeta
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    employment: number; /*Занятость*/
    load: number; /*Нагрузка*/
    is_young_specialist: boolean; /*Молодой специалист*/
    compatibility: ClassifierShort; /**/
    experience: Experience; /**/
    is_gph_contract: boolean; /*Работает по договору ГПХ*/
    qualification_category: ClassifierShort; /**/
    has_individual_employment_plan: boolean; /*Наличие индивидуального плана трудоустройства*/
    has_effective_contract: boolean; /*Наличие эффективного контракта*/
    is_quota_workstation_contract: boolean; /*Трудоустройство на квотированное или специально рабочее место*/
    mentoring: ClassifierShort; /**/
    young_ward_count: number; /*Наставничество (количество курируемых молодых специалистов)*/
    professional_community: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.employment = json["employment"] || null;
		this.load = json["load"] || null;
		this.is_young_specialist = json["is_young_specialist"] || null;
		this.compatibility = new ClassifierShort(json["compatibility"]) ;
		this.experience = new Experience(json["experience"]) ;
		this.is_gph_contract = json["is_gph_contract"] || null;
		this.qualification_category = new ClassifierShort(json["qualification_category"]) ;
		this.has_individual_employment_plan = json["has_individual_employment_plan"] || null;
		this.has_effective_contract = json["has_effective_contract"] || null;
		this.is_quota_workstation_contract = json["is_quota_workstation_contract"] || null;
		this.mentoring = new ClassifierShort(json["mentoring"]) ;
		this.young_ward_count = json["young_ward_count"] || null;
		this.professional_community = new ClassifierShort(json["professional_community"]) ;
       
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