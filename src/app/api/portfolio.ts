import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { DeleteRestore } from './common/DeleteRestore';
import { Portfolio } from './portfolio/Portfolio';

@Injectable()
export class PortfolioService {

    constructor(public http: Http) { }

    /**
     * Получает запись портфолио по его id
     * @method
     * @name portfolioGet
     *
     * @param {string} *id - Идентификатор портфолио 
     */
    public portfolioGet(
        id: string,
    ) {
        let _path = '/portfolio/portfolio/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Удаляет/восстанавливает записи портфолио, по списку id/состояние записи
     * @method
     * @name portfolioDeleteRestore
     *
     * @param {DeleteRestore[]} *body -   
     */
    public portfolioDeleteRestore(
        body: DeleteRestore[],
    ) {
        let _path = '/portfolio/portfolio/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Получает список записей портфолио в постраничном разбиении
     * @method
     * @name portfolioList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_persons - Идентификаторы персон 
     * @param {string} p_portfolio_event_levels - Уровень мероприятия 
     * @param {string} p_portfolio_kinds - Вид записи в портфолио 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public portfolioList(
        p_limit?: number,
        p_page?: number,
        p_education_levels?: string,
        p_persons?: string,
        p_portfolio_event_levels?: string,
        p_portfolio_kinds?: string,
        p_deleted?: string,
    ) {
        let _path = '/portfolio/portfolio/list';
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
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_persons !== 'undefined')
            _params.search.append('p_persons', ''+p_persons); 
        if (typeof p_portfolio_event_levels !== 'undefined')
            _params.search.append('p_portfolio_event_levels', ''+p_portfolio_event_levels); 
        if (typeof p_portfolio_kinds !== 'undefined')
            _params.search.append('p_portfolio_kinds', ''+p_portfolio_kinds); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает ссылку для скачивания файла экспорта списка записей портфолио
     * @method
     * @name portfolioExport
     *
     * @param {string} *format - Формат выгрузки [XLS,XLSX,PDF]
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_persons - Идентификаторы персон 
     * @param {string} p_portfolio_event_levels - Уровень мероприятия 
     * @param {string} p_portfolio_kinds - Вид записи в портфолио 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public portfolioExport(
        format: string,
        p_limit?: number,
        p_page?: number,
        p_education_levels?: string,
        p_persons?: string,
        p_portfolio_event_levels?: string,
        p_portfolio_kinds?: string,
        p_deleted?: string,
    ) {
        let _path = '/portfolio/portfolio/export/{format}';
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
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_persons !== 'undefined')
            _params.search.append('p_persons', ''+p_persons); 
        if (typeof p_portfolio_event_levels !== 'undefined')
            _params.search.append('p_portfolio_event_levels', ''+p_portfolio_event_levels); 
        if (typeof p_portfolio_kinds !== 'undefined')
            _params.search.append('p_portfolio_kinds', ''+p_portfolio_kinds); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Сохраняет персону
     * @method
     * @name portfolioSave
     *
     * @param {Portfolio} *body -   
     */
    public portfolioSave(
        body: Portfolio,
    ) {
        let _path = '/portfolio/portfolio';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
}