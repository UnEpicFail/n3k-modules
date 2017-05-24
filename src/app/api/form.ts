import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class FormService {

    constructor(public http: Http) { }

    /**
     * Получает форму по ее id
     * @method
     * @name formGetById
     *
     * @param {string} *id - Идентификатор формы 
     * @param {number} version - Версия формы 
     */
    public formGetById(
        id: string,
        version?: number,
    ) {
        let _path = '/form/from/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof version !== 'undefined')
            _params.search.append('version', ''+version); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает форму по ее id
     * @method
     * @name formGetByCode
     *
     * @param {string} *code - Код формы 
     * @param {number} version - Версия формы 
     */
    public formGetByCode(
        code: string,
        version?: number,
    ) {
        let _path = '/form/from-by-code/{code}';
        let _body = '';
        _path = _path.replace(/{code}/ig, (typeof code !== 'string')?JSON.stringify(code):code);
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof version !== 'undefined')
            _params.search.append('version', ''+version); 


        return this.http['get'](_path, _params)
    }
}