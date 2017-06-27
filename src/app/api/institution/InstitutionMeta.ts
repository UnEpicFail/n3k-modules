/**
 * Мета данные ОО
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class InstitutionMeta
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор БД*/
    reorganization_name: string; /*Дополнительное наименование (на момент реорганизации)*/
    additional_name: string; /*Дополнительное наименование образовательной организации*/
    occupied_place: number; /*Фактическая наполняемость*/
    total_place: number; /*Предельная наполняемость*/
    educational_program_url: string; /*Ссылка на образовательную программу на официальном сайте*/
    electronic_diary_vendor: string; /*Организация разработчика "Электронного дневника"*/
    electronic_diary_name: string; /*Название информационной системы "Электронного дневника"*/
    electronic_diary_url: string; /*Ссылка для входа на сервис "Электронный дневник"*/
    is_first_class: boolean; /*Будет запись в 1 класс в текущем году*/
    is_site_initialized: boolean; /*Сайт инициализирован*/
    employee_count: number; /*Общее количество сотрудников*/
    statute_url: string; /*Ссылка на устав*/
    direction_for_ip: string; /*Направление подготвки, специальности, профессии (кроме общего образования)*/
    has_bookkeeping: boolean; /*Наличие бухгалтерии*/
    is_small_setted: boolean; /*Малокомплектное (для школ)*/
    schedule_string: string; /*Режим (часы, дни)*/
    has_it_teachers: boolean; /*Наличие требуемой численности преподователей общепрофессиональных и специальных дисциплин, связанных с ИТ*/
    is_budget_transfered: boolean; /*Переведено на нормативно-бюджетное финансирование*/
    fgos_scoring: ClassifierShort[]; /*Использование современных оценочных процедур для оценки достижений по ФГОС*/
    site_characteristics: ClassifierShort[]; /*Характеристики сайта ОО*/
    description: string; /*Описание*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.reorganization_name = json["reorganization_name"] || null;
		this.additional_name = json["additional_name"] || null;
		this.occupied_place = json["occupied_place"] || null;
		this.total_place = json["total_place"] || null;
		this.educational_program_url = json["educational_program_url"] || null;
		this.electronic_diary_vendor = json["electronic_diary_vendor"] || null;
		this.electronic_diary_name = json["electronic_diary_name"] || null;
		this.electronic_diary_url = json["electronic_diary_url"] || null;
		this.is_first_class = json["is_first_class"] || null;
		this.is_site_initialized = json["is_site_initialized"] || null;
		this.employee_count = json["employee_count"] || null;
		this.statute_url = json["statute_url"] || null;
		this.direction_for_ip = json["direction_for_ip"] || null;
		this.has_bookkeeping = json["has_bookkeeping"] || null;
		this.is_small_setted = json["is_small_setted"] || null;
		this.schedule_string = json["schedule_string"] || null;
		this.has_it_teachers = json["has_it_teachers"] || null;
		this.is_budget_transfered = json["is_budget_transfered"] || null;
		this.fgos_scoring = []
		if(json["fgos_scoring"]){
			for (let i in json["fgos_scoring"]){
				this.fgos_scoring.push(new ClassifierShort(json["fgos_scoring"][i]))
			}
		}
		this.site_characteristics = []
		if(json["site_characteristics"]){
			for (let i in json["site_characteristics"]){
				this.site_characteristics.push(new ClassifierShort(json["site_characteristics"][i]))
			}
		}
		this.description = json["description"] || null;
       
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