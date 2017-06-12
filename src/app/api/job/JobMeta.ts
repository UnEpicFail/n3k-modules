/**
 * Мета данные сотрудника
 */

import { ClassifierShort } from '../common/ClassifierShort';
import { Experience } from './Experience';


export class JobMeta
{
    employment: number; /*Занятость*/
    load: number; /*Нагрузка*/
    is_young_specialist: string; /*Молодой специалист*/
    compatibility: ClassifierShort; /**/
    experience: Experience; /**/
    is_gph_contract: string; /*Работает по договору ГПХ*/
    qualification_category: ClassifierShort; /**/
    has_individual_employment_plan: string; /*Наличие индивидуального плана трудоустройства*/
    has_effective_contract: string; /*Наличие эффективного контракта*/
    is_quota_workstation_contract: string; /*Трудоустройство на квотированное или специально рабочее место*/
    mentoring: ClassifierShort; /**/
    young_ward_count: number; /*Наставничество (количество курируемых молодых специалистов)*/
    professional_community: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
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
}