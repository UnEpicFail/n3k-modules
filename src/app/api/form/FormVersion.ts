/**
 * Версия формы
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { Field } from './Field';


export class FormVersion
{
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
}