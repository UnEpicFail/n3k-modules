import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class FiasService {

    constructor(public http: Http) { }

    /**
     * Получение лога обновления базы ФИАС
     * @method
     * @name undefined
     *
     * @param {number} *limit - Ограничение количества элементов на страницу. По умолчанию 20 
     */
    public undefined(
        limit: number,
    ) {
        let _path = '/fias/api/getLog';
        let _body = '';
        let _params = {
            search: new URLSearchParams(),
        }
        _params.search.append('limit', ''+limit); 


        return this.http['get'](_path, _params)
    }
}