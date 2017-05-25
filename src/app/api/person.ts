import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Person } from './person/Person';

@Injectable()
export class PersonService {

    constructor(public http: Http) { }

    /**
     * Получает персону по ее id
     * @method
     * @name personGet
     *
     * @param {string} *id - Идентификатор персоны 
     */
    public personGet(
        id: string,
    ) {
        let _path = '/person/person/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Удаляет/восстанавливает персоны, по списку id/состояние записи
     * @method
     * @name personDeleteRestore
     *
     */
    public personDeleteRestore(
    ) {
        let _path = '/person/person/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['post'](_path, _params)
    }
    /**
     * Получает список персон в постраничном разбиении
     * @method
     * @name personList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_role - Роль персоны в системе образования [Никогда не учился,Обучающийся,Сотрудник,Родитель&#x2F;Законный представитель]
     * @param {string} p_sex - Пол 
     * @param {string} p_citizenship - Страна гражданства 
     * @param {string} p_birth_date_from - Дата рождения С 
     * @param {string} p_birth_date_to - Дата рождения По 
     * @param {string} p_hard_situation - Трудная жизненная ситуация 
     * @param {string} p_healt_group - Медицинская группа здоровья 
     * @param {string} p_healt_sport_group - Медицинская группа для занятий физкультурой 
     * @param {string} p_disability_group - Группа инвалидности 
     * @param {string} p_disability_cause - Причина инвалидности 
     * @param {string} p_is_need_adaptive - Наличие потребности в адаптивной программе обучения 
     * @param {string} p_is_need_long_treatment - Наличие потребности в длительном лечении 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public personList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_role?: string,
        p_sex?: string,
        p_citizenship?: string,
        p_birth_date_from?: string,
        p_birth_date_to?: string,
        p_hard_situation?: string,
        p_healt_group?: string,
        p_healt_sport_group?: string,
        p_disability_group?: string,
        p_disability_cause?: string,
        p_is_need_adaptive?: string,
        p_is_need_long_treatment?: string,
        p_deleted?: string,
    ) {
        let _path = '/person/person/list';
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
        if (typeof p_role !== 'undefined')
            _params.search.append('p_role', ''+p_role); 
        if (typeof p_sex !== 'undefined')
            _params.search.append('p_sex', ''+p_sex); 
        if (typeof p_citizenship !== 'undefined')
            _params.search.append('p_citizenship', ''+p_citizenship); 
        if (typeof p_birth_date_from !== 'undefined')
            _params.search.append('p_birth_date_from', ''+p_birth_date_from); 
        if (typeof p_birth_date_to !== 'undefined')
            _params.search.append('p_birth_date_to', ''+p_birth_date_to); 
        if (typeof p_hard_situation !== 'undefined')
            _params.search.append('p_hard_situation', ''+p_hard_situation); 
        if (typeof p_healt_group !== 'undefined')
            _params.search.append('p_healt_group', ''+p_healt_group); 
        if (typeof p_healt_sport_group !== 'undefined')
            _params.search.append('p_healt_sport_group', ''+p_healt_sport_group); 
        if (typeof p_disability_group !== 'undefined')
            _params.search.append('p_disability_group', ''+p_disability_group); 
        if (typeof p_disability_cause !== 'undefined')
            _params.search.append('p_disability_cause', ''+p_disability_cause); 
        if (typeof p_is_need_adaptive !== 'undefined')
            _params.search.append('p_is_need_adaptive', ''+p_is_need_adaptive); 
        if (typeof p_is_need_long_treatment !== 'undefined')
            _params.search.append('p_is_need_long_treatment', ''+p_is_need_long_treatment); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает ссылку для скачивания файла экспорта списка персон
     * @method
     * @name personExport
     *
     * @param {string} *format - Формат выгрузки [XLS,XLSX,PDF]
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_role - Роль персоны в системе образования [Никогда не учился,Обучающийся,Сотрудник,Родитель&#x2F;Законный представитель]
     * @param {string} p_sex - Пол 
     * @param {string} p_citizenship - Страна гражданства 
     * @param {string} p_birth_date_from - Дата рождения С 
     * @param {string} p_birth_date_to - Дата рождения По 
     * @param {string} p_hard_situation - Трудная жизненная ситуация 
     * @param {string} p_healt_group - Медицинская группа здоровья 
     * @param {string} p_healt_sport_group - Медицинская группа для занятий физкультурой 
     * @param {string} p_disability_group - Группа инвалидности 
     * @param {string} p_disability_cause - Причина инвалидности 
     * @param {string} p_is_need_adaptive - Наличие потребности в адаптивной программе обучения 
     * @param {string} p_is_need_long_treatment - Наличие потребности в длительном лечении 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public personExport(
        format: string,
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_role?: string,
        p_sex?: string,
        p_citizenship?: string,
        p_birth_date_from?: string,
        p_birth_date_to?: string,
        p_hard_situation?: string,
        p_healt_group?: string,
        p_healt_sport_group?: string,
        p_disability_group?: string,
        p_disability_cause?: string,
        p_is_need_adaptive?: string,
        p_is_need_long_treatment?: string,
        p_deleted?: string,
    ) {
        let _path = '/person/person/export/{format}';
        let _body = '';
        _path = _path.replace(/{format}/ig, (typeof format !== 'string')?JSON.stringify(format):format);
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
        if (typeof p_role !== 'undefined')
            _params.search.append('p_role', ''+p_role); 
        if (typeof p_sex !== 'undefined')
            _params.search.append('p_sex', ''+p_sex); 
        if (typeof p_citizenship !== 'undefined')
            _params.search.append('p_citizenship', ''+p_citizenship); 
        if (typeof p_birth_date_from !== 'undefined')
            _params.search.append('p_birth_date_from', ''+p_birth_date_from); 
        if (typeof p_birth_date_to !== 'undefined')
            _params.search.append('p_birth_date_to', ''+p_birth_date_to); 
        if (typeof p_hard_situation !== 'undefined')
            _params.search.append('p_hard_situation', ''+p_hard_situation); 
        if (typeof p_healt_group !== 'undefined')
            _params.search.append('p_healt_group', ''+p_healt_group); 
        if (typeof p_healt_sport_group !== 'undefined')
            _params.search.append('p_healt_sport_group', ''+p_healt_sport_group); 
        if (typeof p_disability_group !== 'undefined')
            _params.search.append('p_disability_group', ''+p_disability_group); 
        if (typeof p_disability_cause !== 'undefined')
            _params.search.append('p_disability_cause', ''+p_disability_cause); 
        if (typeof p_is_need_adaptive !== 'undefined')
            _params.search.append('p_is_need_adaptive', ''+p_is_need_adaptive); 
        if (typeof p_is_need_long_treatment !== 'undefined')
            _params.search.append('p_is_need_long_treatment', ''+p_is_need_long_treatment); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Сохраняет персону
     * @method
     * @name personSave
     *
     * @param {Person} *body -   
     */
    public personSave(
        body: Person,
    ) {
        let _path = '/person/person';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
}