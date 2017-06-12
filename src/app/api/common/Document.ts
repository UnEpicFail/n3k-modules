/**
 * Абстрактный документ
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class Document
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    series: string; /*Серия*/
    number: string; /*Номер*/
    reg_number: string; /*Регистрационный номер*/
    reg_date: string; /*Дата регистрации (внесения регистровой записи)*/
    issue_date: string; /*Дата выпуска*/
    issued_by: string; /*Кто выпустил*/
    valid_from: string; /*Начало действия*/
    valid_to: string; /*Окончание действия*/
    description: string; /*Описание документа*/
    type: ClassifierShort; /**/
    status: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.series = json["series"] || null;
		this.number = json["number"] || null;
		this.reg_number = json["reg_number"] || null;
		this.reg_date = json["reg_date"] || null;
		this.issue_date = json["issue_date"] || null;
		this.issued_by = json["issued_by"] || null;
		this.valid_from = json["valid_from"] || null;
		this.valid_to = json["valid_to"] || null;
		this.description = json["description"] || null;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.status = json["status"] ? new ClassifierShort(json["status"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}