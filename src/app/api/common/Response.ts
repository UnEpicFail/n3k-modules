/**
 * Структура ответа
 */

import { ResponseMessage } from './ResponseMessage';
import { ResponseValidation } from './ResponseValidation';


export class Response
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    data: {}; /*Данные полученные от сервера*/
    messages: ResponseMessage[]; /**/
    validations: ResponseValidation[]; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.data = json["data"] || {};
		this.messages = []
		if(json["messages"]){
			for (let i in json["messages"]){
				this.messages.push(new ResponseMessage(json["messages"][i]))
			}
		}
		this.validations = []
		if(json["validations"]){
			for (let i in json["validations"]){
				this.validations.push(new ResponseValidation(json["validations"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (json === null || typeof json !== 'object'){
            return true
        }

        let res = true 
        Object.keys(json).map(i => {
            if (i !== '_isEmpty') {
                if (Array.isArray(json[i])){
                    json[i].map(j => {
                        res = res && this.isEmpty(json[i][j])
                    })
                } else if (typeof json[i] === 'object') {
                    res = res && this.isEmpty(json[i])
                } else {
                    res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
                }
            }
        })
        return res
    }
}