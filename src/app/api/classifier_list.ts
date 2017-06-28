import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs'

import { Response } from './common/Response';
import { Pagination } from './common/Pagination';
import { ClassifierShort } from './common/ClassifierShort';


@Injectable()
export class Classifier_listService {

    constructor(public http: Http) { }

    fakeClassifireData(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ){
        let items = []
        for(let i= 1; i<201; i+=1){
            items.push(new ClassifierShort({id: i, name:`Значение из справочника ${i}`}),)
        }
        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data:new Pagination(
                    {
                        before: (p_page - 1 >= 0) ? p_page - 1 : null,
                        current: p_page,
                        last: items.length / p_limit - 1,
                        next: (p_page +  1 <= items.length / p_limit - 1) ? p_page + 1 : null,
                        total_pages: items.length / p_limit,
                        total_items: items.length,
                        items: items.slice(p_page*p_limit, (p_page+1)*p_limit)
                    }
              )}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;
    }

    /**
     * 
     * @method
     * @name classifierOktmoList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOktmoList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        
        return this.fakeClassifireData 

        // let _path = '/classifiers/oktmo/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkoguList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOkoguList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/okogu/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTypeOfOwnershipList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierTypeOfOwnershipList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData 
        // let _path = '/classifiers/type-of-ownership/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierFoundersTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierFoundersTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData 

        // let _path = '/classifiers/founders-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionStatusList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierInstitutionStatusList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/institution-status/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOrganizationStatusList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOrganizationStatusList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData 

        // let _path = '/classifiers/organization-status/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDistrictList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDistrictList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/district/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierRegionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierRegionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData
        
        // let _path = '/classifiers/region/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkopfList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOkopfList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/okopf/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkfsList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOkfsList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/okfs/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkvedList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOkvedList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData

        // let _path = '/classifiers/okved/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierCountryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierCountryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

         return this.fakeClassifireData
        
        // let _path = '/classifiers/country/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierContactTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierContactTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/contact_type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPublicAdministrationFormList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPublicAdministrationFormList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/public-administration-form/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSignificanceLevelList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSignificanceLevelList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/significance-level/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInnovationActivityDirectionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierInnovationActivityDirectionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/innovation-activity-direction/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInnovationLevelList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierInnovationLevelList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/innovation-level/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationContractSubjectList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationContractSubjectList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {


        return this.fakeClassifireData;

        // let _path = '/classifiers/education-contract-subject/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPublicDigitalServiceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPublicDigitalServiceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/public-digital-service/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierFgosScoringList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierFgosScoringList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/fgos-scoring/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSiteCharacteristicList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSiteCharacteristicList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData

        // let _path = '/classifiers/site-characteristic/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierRoomTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierRoomTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/room-type/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBuildingTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierBuildingTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/building-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBuildingStatusList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierBuildingStatusList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/building-status/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDepartmentKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDepartmentKindList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/department-kind/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobPositionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierJobPositionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData

        // let _path = '/classifiers/job-position/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDocumentTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDocumentTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/document-type/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDocumentStatusList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDocumentStatusList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/document-status/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationServiceKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationServiceKindList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-service-kind/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierImplementEducationServiceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierImplementEducationServiceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/education-implement-service/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationDirectionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationDirectionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/education-direction/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationShiftList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationShiftList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-shift/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierInstitutionTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/institution-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierInstitutionKindList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {


        return this.fakeClassifireData;

        // let _path = '/classifiers/institution-kind/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTerrainKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierTerrainTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/terrain-kind/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierLanguageList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierLanguageList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/language/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationLevelList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationLevelList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-level/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierMealTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierMealTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData

        // let _path = '/classifiers/meal-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierFinancingTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierFinancingTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;
        
        // let _path = '/classifiers/financing-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationServiceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationServiceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/education-service/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzGroupTypesList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOvzGroupTypesList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/ovz-group-types/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJurisdictionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierJurisdictionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/jurisdiction/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierRepresentativeTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierRepresentativeTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/representative-type/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierCitizenshipTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierCitizenshipTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/citizenship-type/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierHealthGroupList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierHealthGroupList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/health-group/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportGroupList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSportGroupList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/sport-group/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOccupationalInjuriesList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOccupationalInjuriesList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/occupational-injuries/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzCategoryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOvzCategoryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/ovz-category/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzEducationKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierOvzEducationKindList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/ovz-education-kind/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierLongTreatmentEducationKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierLongTreatmentEducationKindList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/long-treatment-education-kind/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierHealthViolationList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierHealthViolationList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/health-violation/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityCategoryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDisabilityCategoryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/disability-category/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityCauseList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDisabilityCauseList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/disability-сause/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityGroupList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDisabilityGroupList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/disability-group/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierHardSituationList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierHardSituationList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/hard-situation/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierСonvictionPunishment
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierСonvictionPunishment(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/conviction-punishment/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSexList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSexList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/sex/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDeviantBehaviorList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDeviantBehaviorList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/deviant-behavior/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisciplineList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDisciplineList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/discipline/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSpecifyList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSpecifyList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/specify/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationStageList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationStageList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {
        let _path = '/classifiers/education-orientation/list';
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
        if (typeof p_sort_direction !== 'undefined')
            _params.search.append('p_sort_direction', ''+p_sort_direction); 
        if (typeof p_sort_field !== 'undefined')
            _params.search.append('p_sort_field', ''+p_sort_field); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationComponentList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationComponentList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-component/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfessionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierProfessionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/profession/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierCompetenceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierCompetenceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/competence/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierAdaptivesList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierAdaptivesList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/adaptives/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfileList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierProfileList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/profile/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierQualificationList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierQualificationList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/qualification/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierServiceDirectionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierServiceDirectionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/service-direction/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSportList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/sport/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierImplementFormList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierImplementFormList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/implement-form/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationFormList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationFormList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-form/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierArtList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierArtList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/art/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupCategoryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierGroupCategoryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/group-category/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupPlaceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierGroupPlaceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/group-place/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierStayModeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierStayModeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/stay-mode/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupStatusList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierGroupStatusList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/group-status/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEstimateWeightList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEstimateWeightList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/estimate-weight/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSkillList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSkillList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/skill/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationContentTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationContentTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-content-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTaskControlFormList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierTaskControlFormList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/task-control-form/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationEndingReasonList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationEndingReasonList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-ending-reason/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationAdditionalCharacteristicList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierEducationAdditionalCharacteristicList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/education-additional-characteristic/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPostGraduationSupportActualResultList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPostGraduationSupportActualResultList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/post-graduation-support-actual-result/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPostGraduationSupportIntentionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPostGraduationSupportIntentionList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/post-graduation-support-intention/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierApplicationPreferentialCategoryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierApplicationPreferentialCategoryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/application-preferential-category/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobCompatibilityList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierJobCompatibilityList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/job-compatibility/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierQualificationCategoryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierQualificationCategoryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/qualification-category/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierMentoringList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierMentoringList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/mentoring/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfessionalCommunityList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierProfessionalCommunityList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/professional-community/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobStatusList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierJobStatusList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/job-status/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTeacherSupportList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierTeacherSupportList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/teacher-support/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierAcademicDegreeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierAcademicDegreeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/academic-degree/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierAcademicTitleList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierAcademicTitleList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/academic-title/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportResultList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierSportResultList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/sport-result/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRecordTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPortfolioRecordTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/portfolio-record-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRecordKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPortfolioRecordKindList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/portfolio-record-kind/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioInvolvementLevelList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPortfolioInvolvementLevelList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/portfolio-involvement-level/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioActivityKindList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPortfolioActivityKindList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/portfolio-activity-kind/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioAwardList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPortfolioAwardList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/portfolio-award/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRankList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierPortfolioRankList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/portfolio-rank/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierContractorTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierContractorTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/budget-contractor-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBudgetTransactionOperationList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierBudgetTransactionOperationList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/budget-transaction-operation/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBudgetTransactionTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierBudgetTransactionTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/budget-transaction-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTermsOfEmploymentList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierTermsOfEmploymentList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/terms-of-employment/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDismissalTypeList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_sort_direction - Направление сортировок [DESC,ASC]
     * @param {string} p_sort_field - Поля для сортировок 
     */
    public classifierDismissalTypeList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_sort_direction?: string,
        p_sort_field?: string,
    ) {

        return this.fakeClassifireData;

        // let _path = '/classifiers/dismissal-type/list';
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
        // if (typeof p_sort_direction !== 'undefined')
        //     _params.search.append('p_sort_direction', ''+p_sort_direction); 
        // if (typeof p_sort_field !== 'undefined')
        //     _params.search.append('p_sort_field', ''+p_sort_field); 


        // return this.http['get'](_path, _params)
    }
}