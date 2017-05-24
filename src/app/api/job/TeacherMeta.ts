/**
 * Мета данные учителя
 */

import { ClassifierShort } from '../common/ClassifierShort';
import { EducationTechnology } from './EducationTechnology';


export class TeacherMeta
{
    is_using_pc_in_education: string; /*Использует ПК в учебном процессе*/
    teacher_support: ClassifierShort[]; /*Поддержка педагогических работников*/
    education_technology: EducationTechnology[]; /*Используемые образовательные технология*/
    is_ovz_correction_class: string; /*Является учителем в специальных (коррекционных) классах Для детей с ограниченными возможностями здоровья при общеобразовательных учреждениях*/
    is_ovz_regular_class: string; /*Обучает детей с ОВЗ, обучающимися в обычных классах*/
    is_ovz_payment: string; /*Получение доплаты за обучение детей с ОВЗ*/
    is_preschool: string; /*Работает с дошкольными группами*/
    has_adaptive_physical_training_skill: string; /*Наличие образования по специальности «Адаптивная физическая культура и спорт»*/
    assessment: string; /*Результаты аттестации*/

    constructor(json) {
        json = (json || {})
		this.is_using_pc_in_education = json["is_using_pc_in_education"] || null;
		this.teacher_support = []
		if(json["teacher_support"]){
			for (let i in json["teacher_support"]){
				this.teacher_support.push(new ClassifierShort(json["teacher_support"][i]))
			}
		}
		this.education_technology = []
		if(json["education_technology"]){
			for (let i in json["education_technology"]){
				this.education_technology.push(new EducationTechnology(json["education_technology"][i]))
			}
		}
		this.is_ovz_correction_class = json["is_ovz_correction_class"] || null;
		this.is_ovz_regular_class = json["is_ovz_regular_class"] || null;
		this.is_ovz_payment = json["is_ovz_payment"] || null;
		this.is_preschool = json["is_preschool"] || null;
		this.has_adaptive_physical_training_skill = json["has_adaptive_physical_training_skill"] || null;
		this.assessment = json["assessment"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}