import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class CommonService {

    constructor(public http: Http) { }

    /**
     * Получает список доступных модулей для данной инсталяции
     * @method
     * @name commonModules
     *
     */
    public commonModules(
    ) {
        let _path = '/common/resource/module';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['options'](_path, _params)
    }
    /**
     * Получает переводы для переданного языка
     * @method
     * @name commonTranslations
     *
     * @param {string} *lang - Язык перевода 
     */
    public commonTranslations(
        lang: string,
    ) {
        let _path = '/common/resource/translations/{lang}';
        let _body = '';
        _path = _path.replace(/{lang}/ig, (typeof lang !== 'string')?JSON.stringify(lang):lang);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
}