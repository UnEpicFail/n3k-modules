/**
 * Структура ответа
 */

import { ResponseMessage } from './ResponseMessage';
import { ResponseValidation } from './ResponseValidation';


export class Response
{
    data: {}; /*Данные полученные от сервера*/
    messages: ResponseMessage[]; /**/
    validations: ResponseValidation[]; /**/

    constructor(json) {
        json = (json || {})
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
}