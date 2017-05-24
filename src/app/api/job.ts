import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { DeleteRestore } from './common/DeleteRestore';

@Injectable()
export class JobService {

    constructor(public http: Http) { }

    /**
     * Получает запись о работе по ее id
     * @method
     * @name jobGet
     *
     * @param {string} *id - Идентификатор записи о работе 
     */
    public jobGet(
        id: string,
    ) {
        let _path = '/job/job/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает запись о работе по ее id
     * @method
     * @name teacherGet
     *
     * @param {string} *id - Идентификатор учителя 
     */
    public teacherGet(
        id: string,
    ) {
        let _path = '/job/teacher/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Удаляет/восстанавливает запись о работе, по списку id/состояние записи
     * @method
     * @name jobDeleteRestore
     *
     * @param {DeleteRestore[]} *body -   
     */
    public jobDeleteRestore(
        body: DeleteRestore[],
    ) {
        let _path = '/job/job/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Удаляет/восстанавливает учителя, по списку id/состояние записи
     * @method
     * @name teacherDeleteRestore
     *
     * @param {DeleteRestore[]} *body -   
     */
    public teacherDeleteRestore(
        body: DeleteRestore[],
    ) {
        let _path = '/job/teacher/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Получает список записей о работе в разрезе должностей в постраничном разбиении
     * @method
     * @name jobListByPosition
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_persons - Идентификаторы персон 
     * @param {string} p_job_statuses - Статусы сотрудника 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_institution_types - Типы образовательной организации 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_districts - Районы 
     * @param {string} p_job_positions - Должность 
     * @param {string} p_is_ovz_teacher - Обучает детей с ОВЗ 
     * @param {string} p_is_ovz_correction_class_teacher - Обучает детей с ОВЗ, обучающимися в специальных классах 
     * @param {string} p_is_ovz_regular_class_teacher - Обучает детей с ОВЗ, обучающимися в обычных классах 
     * @param {string} p_has_compatibility - Наличие совместительства 
     * @param {string} p_employment_date_from - Дата приема на работу С 
     * @param {string} p_employment_date_to - Дата приема на работу По 
     * @param {string} p_dismissal_date_from - Дата увольнения С 
     * @param {string} p_dismissal_date_to - Дата увольнения По 
     * @param {string} p_sex - Пол 
     * @param {string} p_citizenship - Страна гражданства 
     * @param {string} p_birth_date_from - Дата рождения С 
     * @param {string} p_birth_date_to - Дата рождения По 
     * @param {string} p_disability_group - Группа инвалидности 
     * @param {string} p_disability_cause - Причина инвалидности 
     * @param {string} p_last_medical_commission_date_from - Дата последней мед коммиссии С 
     * @param {string} p_last_medical_commission_date_to - Дата последней мед коммиссии По 
     * @param {number} p_experience_from - Стаж 
     * @param {string} p_is_pensioner - Является пенсонером 
     * @param {string} p_is_young_specialist - Является молодым специалистом 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public jobListByPosition(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_persons?: string,
        p_job_statuses?: string,
        p_education_levels?: string,
        p_institution_types?: string,
        p_institutions?: string,
        p_districts?: string,
        p_job_positions?: string,
        p_is_ovz_teacher?: string,
        p_is_ovz_correction_class_teacher?: string,
        p_is_ovz_regular_class_teacher?: string,
        p_has_compatibility?: string,
        p_employment_date_from?: string,
        p_employment_date_to?: string,
        p_dismissal_date_from?: string,
        p_dismissal_date_to?: string,
        p_sex?: string,
        p_citizenship?: string,
        p_birth_date_from?: string,
        p_birth_date_to?: string,
        p_disability_group?: string,
        p_disability_cause?: string,
        p_last_medical_commission_date_from?: string,
        p_last_medical_commission_date_to?: string,
        p_experience_from?: number,
        p_is_pensioner?: string,
        p_is_young_specialist?: string,
        p_deleted?: string,
    ) {
        let _path = '/job/job/list-by-position';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_persons !== 'undefined')
            _params.search.append('p_persons', ''+p_persons); 
        if (typeof p_job_statuses !== 'undefined')
            _params.search.append('p_job_statuses', ''+p_job_statuses); 
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_institution_types !== 'undefined')
            _params.search.append('p_institution_types', ''+p_institution_types); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_districts !== 'undefined')
            _params.search.append('p_districts', ''+p_districts); 
        if (typeof p_job_positions !== 'undefined')
            _params.search.append('p_job_positions', ''+p_job_positions); 
        if (typeof p_is_ovz_teacher !== 'undefined')
            _params.search.append('p_is_ovz_teacher', ''+p_is_ovz_teacher); 
        if (typeof p_is_ovz_correction_class_teacher !== 'undefined')
            _params.search.append('p_is_ovz_correction_class_teacher', ''+p_is_ovz_correction_class_teacher); 
        if (typeof p_is_ovz_regular_class_teacher !== 'undefined')
            _params.search.append('p_is_ovz_regular_class_teacher', ''+p_is_ovz_regular_class_teacher); 
        if (typeof p_has_compatibility !== 'undefined')
            _params.search.append('p_has_compatibility', ''+p_has_compatibility); 
        if (typeof p_employment_date_from !== 'undefined')
            _params.search.append('p_employment_date_from', ''+p_employment_date_from); 
        if (typeof p_employment_date_to !== 'undefined')
            _params.search.append('p_employment_date_to', ''+p_employment_date_to); 
        if (typeof p_dismissal_date_from !== 'undefined')
            _params.search.append('p_dismissal_date_from', ''+p_dismissal_date_from); 
        if (typeof p_dismissal_date_to !== 'undefined')
            _params.search.append('p_dismissal_date_to', ''+p_dismissal_date_to); 
        if (typeof p_sex !== 'undefined')
            _params.search.append('p_sex', ''+p_sex); 
        if (typeof p_citizenship !== 'undefined')
            _params.search.append('p_citizenship', ''+p_citizenship); 
        if (typeof p_birth_date_from !== 'undefined')
            _params.search.append('p_birth_date_from', ''+p_birth_date_from); 
        if (typeof p_birth_date_to !== 'undefined')
            _params.search.append('p_birth_date_to', ''+p_birth_date_to); 
        if (typeof p_disability_group !== 'undefined')
            _params.search.append('p_disability_group', ''+p_disability_group); 
        if (typeof p_disability_cause !== 'undefined')
            _params.search.append('p_disability_cause', ''+p_disability_cause); 
        if (typeof p_last_medical_commission_date_from !== 'undefined')
            _params.search.append('p_last_medical_commission_date_from', ''+p_last_medical_commission_date_from); 
        if (typeof p_last_medical_commission_date_to !== 'undefined')
            _params.search.append('p_last_medical_commission_date_to', ''+p_last_medical_commission_date_to); 
        if (typeof p_experience_from !== 'undefined')
            _params.search.append('p_experience_from', ''+p_experience_from); 
        if (typeof p_is_pensioner !== 'undefined')
            _params.search.append('p_is_pensioner', ''+p_is_pensioner); 
        if (typeof p_is_young_specialist !== 'undefined')
            _params.search.append('p_is_young_specialist', ''+p_is_young_specialist); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает список записей о работе в разрезе персон в постраничном разбиении
     * @method
     * @name jobListByPerson
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_persons - Идентификаторы персон 
     * @param {string} p_job_statuses - Статусы сотрудника 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_institution_types - Типы образовательной организации 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_districts - Районы 
     * @param {string} p_job_positions - Должность 
     * @param {string} p_is_ovz_teacher - Обучает детей с ОВЗ 
     * @param {string} p_is_ovz_correction_class_teacher - Обучает детей с ОВЗ, обучающимися в специальных классах 
     * @param {string} p_is_ovz_regular_class_teacher - Обучает детей с ОВЗ, обучающимися в обычных классах 
     * @param {string} p_has_compatibility - Наличие совместительства 
     * @param {string} p_employment_date_from - Дата приема на работу С 
     * @param {string} p_employment_date_to - Дата приема на работу По 
     * @param {string} p_dismissal_date_from - Дата увольнения С 
     * @param {string} p_dismissal_date_to - Дата увольнения По 
     * @param {string} p_sex - Пол 
     * @param {string} p_citizenship - Страна гражданства 
     * @param {string} p_birth_date_from - Дата рождения С 
     * @param {string} p_birth_date_to - Дата рождения По 
     * @param {string} p_disability_group - Группа инвалидности 
     * @param {string} p_disability_cause - Причина инвалидности 
     * @param {string} p_last_medical_commission_date_from - Дата последней мед коммиссии С 
     * @param {string} p_last_medical_commission_date_to - Дата последней мед коммиссии По 
     * @param {number} p_experience_from - Стаж 
     * @param {string} p_is_pensioner - Является пенсонером 
     * @param {string} p_is_young_specialist - Является молодым специалистом 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public jobListByPerson(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_persons?: string,
        p_job_statuses?: string,
        p_education_levels?: string,
        p_institution_types?: string,
        p_institutions?: string,
        p_districts?: string,
        p_job_positions?: string,
        p_is_ovz_teacher?: string,
        p_is_ovz_correction_class_teacher?: string,
        p_is_ovz_regular_class_teacher?: string,
        p_has_compatibility?: string,
        p_employment_date_from?: string,
        p_employment_date_to?: string,
        p_dismissal_date_from?: string,
        p_dismissal_date_to?: string,
        p_sex?: string,
        p_citizenship?: string,
        p_birth_date_from?: string,
        p_birth_date_to?: string,
        p_disability_group?: string,
        p_disability_cause?: string,
        p_last_medical_commission_date_from?: string,
        p_last_medical_commission_date_to?: string,
        p_experience_from?: number,
        p_is_pensioner?: string,
        p_is_young_specialist?: string,
        p_deleted?: string,
    ) {
        let _path = '/job/job/list-by-person';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_persons !== 'undefined')
            _params.search.append('p_persons', ''+p_persons); 
        if (typeof p_job_statuses !== 'undefined')
            _params.search.append('p_job_statuses', ''+p_job_statuses); 
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_institution_types !== 'undefined')
            _params.search.append('p_institution_types', ''+p_institution_types); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_districts !== 'undefined')
            _params.search.append('p_districts', ''+p_districts); 
        if (typeof p_job_positions !== 'undefined')
            _params.search.append('p_job_positions', ''+p_job_positions); 
        if (typeof p_is_ovz_teacher !== 'undefined')
            _params.search.append('p_is_ovz_teacher', ''+p_is_ovz_teacher); 
        if (typeof p_is_ovz_correction_class_teacher !== 'undefined')
            _params.search.append('p_is_ovz_correction_class_teacher', ''+p_is_ovz_correction_class_teacher); 
        if (typeof p_is_ovz_regular_class_teacher !== 'undefined')
            _params.search.append('p_is_ovz_regular_class_teacher', ''+p_is_ovz_regular_class_teacher); 
        if (typeof p_has_compatibility !== 'undefined')
            _params.search.append('p_has_compatibility', ''+p_has_compatibility); 
        if (typeof p_employment_date_from !== 'undefined')
            _params.search.append('p_employment_date_from', ''+p_employment_date_from); 
        if (typeof p_employment_date_to !== 'undefined')
            _params.search.append('p_employment_date_to', ''+p_employment_date_to); 
        if (typeof p_dismissal_date_from !== 'undefined')
            _params.search.append('p_dismissal_date_from', ''+p_dismissal_date_from); 
        if (typeof p_dismissal_date_to !== 'undefined')
            _params.search.append('p_dismissal_date_to', ''+p_dismissal_date_to); 
        if (typeof p_sex !== 'undefined')
            _params.search.append('p_sex', ''+p_sex); 
        if (typeof p_citizenship !== 'undefined')
            _params.search.append('p_citizenship', ''+p_citizenship); 
        if (typeof p_birth_date_from !== 'undefined')
            _params.search.append('p_birth_date_from', ''+p_birth_date_from); 
        if (typeof p_birth_date_to !== 'undefined')
            _params.search.append('p_birth_date_to', ''+p_birth_date_to); 
        if (typeof p_disability_group !== 'undefined')
            _params.search.append('p_disability_group', ''+p_disability_group); 
        if (typeof p_disability_cause !== 'undefined')
            _params.search.append('p_disability_cause', ''+p_disability_cause); 
        if (typeof p_last_medical_commission_date_from !== 'undefined')
            _params.search.append('p_last_medical_commission_date_from', ''+p_last_medical_commission_date_from); 
        if (typeof p_last_medical_commission_date_to !== 'undefined')
            _params.search.append('p_last_medical_commission_date_to', ''+p_last_medical_commission_date_to); 
        if (typeof p_experience_from !== 'undefined')
            _params.search.append('p_experience_from', ''+p_experience_from); 
        if (typeof p_is_pensioner !== 'undefined')
            _params.search.append('p_is_pensioner', ''+p_is_pensioner); 
        if (typeof p_is_young_specialist !== 'undefined')
            _params.search.append('p_is_young_specialist', ''+p_is_young_specialist); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
}