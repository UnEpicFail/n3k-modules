import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class BudgetService {

    constructor(public http: Http) { }

    /**
     * 
     * @method
     * @name tmp
     *
     */
    public tmp(
    ) {
        let _path = '/budget/institution-rest/institution';
        let _body = '';
        let _params = {
        }


        return this.http['get'](_path, _params)
    }
}