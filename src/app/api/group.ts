import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Group } from './group/Group';

@Injectable()
export class GroupService {

    constructor(public http: Http) { }

    /**
     * Получает группу по ее id
     * @method
     * @name groupGet
     *
     * @param {string} *id - Идентификатор группы 
     */
    public groupGet(
        id: string,
    ) {
        let _path = '/group/group/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Удаляет/восстанавливает группы, по списку id/состояние записи
     * @method
     * @name groupDeleteRestore
     *
     */
    public groupDeleteRestore(
    ) {
        let _path = '/group/group/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['post'](_path, _params)
    }
    /**
     * Получает список групп в постраничном разбиении
     * @method
     * @name groupList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_districts - Районы 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_education_specifies - Специализация 
     * @param {string} p_programs - Образовательная программа 
     * @param {string} p_stages - Этапы обучения 
     * @param {string} p_education_forms - Формы обучения 
     * @param {string} p_implement_forms - Формы реализации образовательной программы 
     * @param {string} p_stay_modes - Режимы пребывания 
     * @param {string} p_shifts - Смены 
     * @param {string} p_statuses - Статусы группы 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public groupList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_districts?: string,
        p_institutions?: string,
        p_education_levels?: string,
        p_education_specifies?: string,
        p_programs?: string,
        p_stages?: string,
        p_education_forms?: string,
        p_implement_forms?: string,
        p_stay_modes?: string,
        p_shifts?: string,
        p_statuses?: string,
        p_deleted?: string,
    ) {
        let _path = '/group/group/list';
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
        if (typeof p_districts !== 'undefined')
            _params.search.append('p_districts', ''+p_districts); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_education_specifies !== 'undefined')
            _params.search.append('p_education_specifies', ''+p_education_specifies); 
        if (typeof p_programs !== 'undefined')
            _params.search.append('p_programs', ''+p_programs); 
        if (typeof p_stages !== 'undefined')
            _params.search.append('p_stages', ''+p_stages); 
        if (typeof p_education_forms !== 'undefined')
            _params.search.append('p_education_forms', ''+p_education_forms); 
        if (typeof p_implement_forms !== 'undefined')
            _params.search.append('p_implement_forms', ''+p_implement_forms); 
        if (typeof p_stay_modes !== 'undefined')
            _params.search.append('p_stay_modes', ''+p_stay_modes); 
        if (typeof p_shifts !== 'undefined')
            _params.search.append('p_shifts', ''+p_shifts); 
        if (typeof p_statuses !== 'undefined')
            _params.search.append('p_statuses', ''+p_statuses); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает ссылку для скачивания файла экспорта списка групп
     * @method
     * @name groupExport
     *
     * @param {string[]} *format - Формат выгрузки [XLS,XLSX,PDF]
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_districts - Районы 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_education_specifies - Специализация 
     * @param {string} p_programs - Образовательная программа 
     * @param {string} p_stages - Этапы обучения 
     * @param {string} p_education_forms - Формы обучения 
     * @param {string} p_implement_forms - Формы реализации образовательной программы 
     * @param {string} p_stay_modes - Режимы пребывания 
     * @param {string} p_shifts - Смены 
     * @param {string} p_statuses - Статусы группы 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public groupExport(
        format: string[],
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_districts?: string,
        p_institutions?: string,
        p_education_levels?: string,
        p_education_specifies?: string,
        p_programs?: string,
        p_stages?: string,
        p_education_forms?: string,
        p_implement_forms?: string,
        p_stay_modes?: string,
        p_shifts?: string,
        p_statuses?: string,
        p_deleted?: string,
    ) {
        let _path = '/group/group/export/{format}';
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
        if (typeof p_districts !== 'undefined')
            _params.search.append('p_districts', ''+p_districts); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_education_specifies !== 'undefined')
            _params.search.append('p_education_specifies', ''+p_education_specifies); 
        if (typeof p_programs !== 'undefined')
            _params.search.append('p_programs', ''+p_programs); 
        if (typeof p_stages !== 'undefined')
            _params.search.append('p_stages', ''+p_stages); 
        if (typeof p_education_forms !== 'undefined')
            _params.search.append('p_education_forms', ''+p_education_forms); 
        if (typeof p_implement_forms !== 'undefined')
            _params.search.append('p_implement_forms', ''+p_implement_forms); 
        if (typeof p_stay_modes !== 'undefined')
            _params.search.append('p_stay_modes', ''+p_stay_modes); 
        if (typeof p_shifts !== 'undefined')
            _params.search.append('p_shifts', ''+p_shifts); 
        if (typeof p_statuses !== 'undefined')
            _params.search.append('p_statuses', ''+p_statuses); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Сохраняет группу
     * @method
     * @name groupSave
     *
     * @param {Group} *body -   
     */
    public groupSave(
        body: Group,
    ) {
        let _path = '/group/group';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
}