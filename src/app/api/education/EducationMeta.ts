/**
 * Мета данные записи об обучении
 */

import { ClassifierShort } from '../common/ClassifierShort';
import { Meal } from '../common/Meal';
import { PostGraduationSupport } from './PostGraduationSupport';


export class EducationMeta
{
    long_treatment_education_kind: ClassifierShort; /**/
    ovz_education_kind: ClassifierShort; /**/
    independent_language_subjects: ClassifierShort[]; /*Языки, изучаемые как самостоятельный предмет*/
    optionally_studied_language: ClassifierShort[]; /*Языки, изучаемые факультативно или в кружках*/
    fogs_information: string; /*Информация об обучении по ФГОС*/
    is_visit_extended_day_group: string; /*Посещение группы продленного дня*/
    is_needs_delivery: string; /*Нуждается в подвозе*/
    is_daily_delivery_provided: string; /*Обеспечен ежедневный подвоз*/
    shift: ClassifierShort; /**/
    meal: Meal; /**/
    hours_of_stay: number; /*Количество часов пребывания*/
    finishing_ear: number; /*Ожидаемый год выпуска*/
    is_scholarship_availability: string; /*Наличие стипендии*/
    has_other_material_support: string; /*Наличие стипендии*/
    has_scholarship_fund_support: string; /*Наличие материальной поддержки из стипендиального фонда*/
    is_hostel_needed: string; /*Наличие материальной поддержки из стипендиального фонда*/
    is_opk_education_contract: string; /*Признак обучения на основе контракта в соответствии с государственным планом Подготовки специалистов для организаций ОПК*/
    is_individual_training_plan: string; /*Индивидуальный план обучения*/
    is_use_dot: string; /*Применение дистанционных образовательных технологий*/
    is_dot_only: string; /*Обучение с использованием исключительно дистанционных образовательных технологий*/
    is_use_specialized_equipment: string; /*Использование специализированного оборудования*/
    is_use_network_form: string; /*Применение сетевой формы реализации образовательных программ*/
    application_for_admission_url: string; /*Гипер ссылка на заявление на приём*/
    is_gia_admitted: string; /*Допущен до ГИА*/
    is_resigned_for_the_second_year: string; /*Оставлен на повторный год обучения*/
    additional_characteristics: ClassifierShort[]; /*Дополнительные характеристики*/
    post_graduation_support: PostGraduationSupport[]; /*Поствыпускное сопровождение*/

    constructor(json) {
        json = (json || {})
		this.long_treatment_education_kind = new ClassifierShort(json["long_treatment_education_kind"]);
		this.ovz_education_kind = new ClassifierShort(json["ovz_education_kind"]);
		this.independent_language_subjects = []
		if(json["independent_language_subjects"]){
			for (let i in json["independent_language_subjects"]){
				this.independent_language_subjects.push(new ClassifierShort(json["independent_language_subjects"][i]))
			}
		}
		this.optionally_studied_language = []
		if(json["optionally_studied_language"]){
			for (let i in json["optionally_studied_language"]){
				this.optionally_studied_language.push(new ClassifierShort(json["optionally_studied_language"][i]))
			}
		}
		this.fogs_information = json["fogs_information"] || null;
		this.is_visit_extended_day_group = json["is_visit_extended_day_group"] || null;
		this.is_needs_delivery = json["is_needs_delivery"] || null;
		this.is_daily_delivery_provided = json["is_daily_delivery_provided"] || null;
		this.shift = new ClassifierShort(json["shift"]);
		this.meal = new Meal(json["meal"]);
		this.hours_of_stay = json["hours_of_stay"] || null;
		this.finishing_ear = json["finishing_ear"] || null;
		this.is_scholarship_availability = json["is_scholarship_availability"] || null;
		this.has_other_material_support = json["has_other_material_support"] || null;
		this.has_scholarship_fund_support = json["has_scholarship_fund_support"] || null;
		this.is_hostel_needed = json["is_hostel_needed"] || null;
		this.is_opk_education_contract = json["is_opk_education_contract"] || null;
		this.is_individual_training_plan = json["is_individual_training_plan"] || null;
		this.is_use_dot = json["is_use_dot"] || null;
		this.is_dot_only = json["is_dot_only"] || null;
		this.is_use_specialized_equipment = json["is_use_specialized_equipment"] || null;
		this.is_use_network_form = json["is_use_network_form"] || null;
		this.application_for_admission_url = json["application_for_admission_url"] || null;
		this.is_gia_admitted = json["is_gia_admitted"] || null;
		this.is_resigned_for_the_second_year = json["is_resigned_for_the_second_year"] || null;
		this.additional_characteristics = []
		if(json["additional_characteristics"]){
			for (let i in json["additional_characteristics"]){
				this.additional_characteristics.push(new ClassifierShort(json["additional_characteristics"][i]))
			}
		}
		this.post_graduation_support = []
		if(json["post_graduation_support"]){
			for (let i in json["post_graduation_support"]){
				this.post_graduation_support.push(new PostGraduationSupport(json["post_graduation_support"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}