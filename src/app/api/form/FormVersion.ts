/**
 * Версия формы
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { Field } from './Field';


export class FormVersion
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    number: number; /*Номер версии*/
    date_from: string; /*Дата начала работы*/
    date_to: string; /*Дата окончания*/
    name: string; /*Наименование формы*/
    comment: string; /*Комментарий к форме*/
    fields: Field[]; /*Поля формы*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.number = json["number"] || null;
		this.date_from = json["date_from"] || null;
		this.date_to = json["date_to"] || null;
		this.name = json["name"] || null;
		this.comment = json["comment"] || null;
		this.fields = []
		if(json["fields"]){
			for (let i in json["fields"]){
				this.fields.push(new Field(json["fields"][i]))
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