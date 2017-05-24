/**
 * Мета данные записи об обучении
 */



export class EducationResultMeta
{
    is_extended_validation: string; /*Продлен срок аттестации*/
    validation_end_date: string; /*Дата окончания аттестации*/
    subject_area: string; /*Предметная область*/
    is_fgos_professional_development: string; /*Признак повышения квалификации по ФГОС*/
    is_ovz_education: string; /*Признак обучения по работе с инвалидами, обучающимися с ОВЗ*/
    is_ikt_training: string; /*Признак повышения квалификации по использованию ИКТ*/
    course_topic: string; /*Тема курсов*/

    constructor(json) {
        json = (json || {})
		this.is_extended_validation = json["is_extended_validation"] || null;
		this.validation_end_date = json["validation_end_date"] || null;
		this.subject_area = json["subject_area"] || null;
		this.is_fgos_professional_development = json["is_fgos_professional_development"] || null;
		this.is_ovz_education = json["is_ovz_education"] || null;
		this.is_ikt_training = json["is_ikt_training"] || null;
		this.course_topic = json["course_topic"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}