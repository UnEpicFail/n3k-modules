import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class ClassifierService {

    constructor(public http: Http) { }

    /**
     * 
     * @method
     * @name classifierList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     */
    public classifierList(
        p_limit?: number,
        p_page?: number,
    ) {
        let _path = '/classifiers/classifier/list';
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


        return this.http['get'](_path, _params)
    }
}