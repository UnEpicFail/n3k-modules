import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Program } from './program/Program';
import { Plan } from './program/Plan';
import { Subject } from './program/Subject';
import { ProgramList } from './program/ProgramList'

import { Observable } from 'rxjs'

import { Response } from './common/Response'

@Injectable()
export class ProgramService {

    constructor(public http: Http) { }

    /**
     * Получает программу по ее id
     * @method
     * @name programGet
     *
     * @param {number} *id - Идентификатор программы 
     */
    public programGet(
        id: number,
    ) {
        let _path = '/programs/program/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Устанавливает признак удаления для программы с идентификатором(ами) id
     * @method
     * @name programDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public programDelete(
        p_ids: string,
    ) {
        let _path = '/programs/program/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Снимает признак удалено для программы с идентификатором(ами) id
     * @method
     * @name programRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public programRestore(
        p_ids: string,
    ) {
        let _path = '/programs/program/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Получает список программ в постраничном разбиении
     * @method
     * @name programList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_districts - Районы 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_education_orientations - Направленность 
     * @param {string} p_education_specifies - Специализация 
     * @param {string} p_adaptives - Адаптивность 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public programList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_districts?: string,
        p_institutions?: string,
        p_education_levels?: string,
        p_education_orientations?: string,
        p_education_specifies?: string,
        p_adaptives?: string,
        p_deleted?: string,
    ) {

        let list = []

        for (let i=0; i<20; i+=1) {
            list.push({
                identity: {id: i+1},
                name:'Начальное общее образование с углубленным изучением английского языка',
            })
        } 
        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new ProgramList({
                items: list,
                before: 0,
                current: 1,
                last: 20,
                next: 2,
                total_pages: 20,
                total_items: 400
              })}))
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/programs/program/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_districts !== 'undefined')
        //     _params.search.append('p_districts', ''+p_districts); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_education_levels !== 'undefined')
        //     _params.search.append('p_education_levels', ''+p_education_levels); 
        // if (typeof p_education_orientations !== 'undefined')
        //     _params.search.append('p_education_orientations', ''+p_education_orientations); 
        // if (typeof p_education_specifies !== 'undefined')
        //     _params.search.append('p_education_specifies', ''+p_education_specifies); 
        // if (typeof p_adaptives !== 'undefined')
        //     _params.search.append('p_adaptives', ''+p_adaptives); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает ссылку для скачивания файла экспорта списка программ
     * @method
     * @name programExport
     *
     * @param {string} *format - Формат выгрузки [XLS,XLSX,PDF]
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_districts - Районы 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_education_orientations - Направленность 
     * @param {string} p_education_specifies - Специализация 
     * @param {string} p_adaptives - Адаптивность 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public programExport(
        format: string,
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_districts?: string,
        p_institutions?: string,
        p_education_levels?: string,
        p_education_orientations?: string,
        p_education_specifies?: string,
        p_adaptives?: string,
        p_deleted?: string,
    ) {
        let _path = '/programs/program/export/{format}';
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
        if (typeof p_education_orientations !== 'undefined')
            _params.search.append('p_education_orientations', ''+p_education_orientations); 
        if (typeof p_education_specifies !== 'undefined')
            _params.search.append('p_education_specifies', ''+p_education_specifies); 
        if (typeof p_adaptives !== 'undefined')
            _params.search.append('p_adaptives', ''+p_adaptives); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Сохраняет образовательную программа
     * @method
     * @name programSave
     *
     * @param {Program} *body -   
     */
    public programSave(
        body: Program,
    ) {
        let _path = '/programs/program';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Получает учбеный план по его id
     * @method
     * @name planGet
     *
     * @param {string} *id - Идентификатор учебного плана 
     */
    public planGet(
        id: string,
    ) {
        let _path = '/programs/plan/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Устанавливает признак удаления для учeбного плана с идентификатором(ами) id
     * @method
     * @name planDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public planDelete(
        p_ids: string,
    ) {
        let _path = '/programs/plan/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Снимает признак удалено для учебного плана с идентификатором(ами) id
     * @method
     * @name planRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public planRestore(
        p_ids: string,
    ) {
        let _path = '/programs/plan/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Получает список учeбных планов в постраничном разбиении
     * @method
     * @name planList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public planList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_deleted?: string,
    ) {
        let _path = '/programs/plan/list';
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
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Сохраняет учeбный план
     * @method
     * @name planSave
     *
     * @param {Plan} *body -   
     */
    public planSave(
        body: Plan,
    ) {
        let _path = '/programs/plan';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Получает предмет по его id
     * @method
     * @name subjectGet
     *
     * @param {string} *id - Идентификатор предмета 
     */
    public subjectGet(
        id: string,
    ) {
        let _path = '/programs/subject/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Устанавливает признак удаления для предмета с идентификатором(ами) id
     * @method
     * @name subjectDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public subjectDelete(
        p_ids: string,
    ) {
        let _path = '/programs/subject/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Снимает признак удалено для предмета с идентификатором(ами) id
     * @method
     * @name subjectRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public subjectRestore(
        p_ids: string,
    ) {
        let _path = '/programs/subject/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Получает список предметов в постраничном разбиении
     * @method
     * @name subjectList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_education_levels - Уровень образования 
     * @param {number[]} p_education_stages - Этапы оброзования 
     * @param {string[]} p_is_deep - Углубленное изучение 
     * @param {number[]} p_disciplines - Дисциплины 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public subjectList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_education_levels?: string,
        p_education_stages?: number[],
        p_is_deep?: string[],
        p_disciplines?: number[],
        p_deleted?: string,
    ) {
        let _path = '/programs/subject/list';
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
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_education_stages !== 'undefined')
            _params.search.append('p_education_stages', ''+p_education_stages); 
        if (typeof p_is_deep !== 'undefined')
            _params.search.append('p_is_deep', ''+p_is_deep); 
        if (typeof p_disciplines !== 'undefined')
            _params.search.append('p_disciplines', ''+p_disciplines); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Сохраняет предмет
     * @method
     * @name subjectSave
     *
     * @param {Subject} *body -   
     */
    public subjectSave(
        body: Subject,
    ) {
        let _path = '/programs/subject';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
}