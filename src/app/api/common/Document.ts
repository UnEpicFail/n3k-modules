/**
 * Абстрактный документ
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class Document
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.series = json["series"] || null;
		this.number = json["number"] || null;
		this.reg_number = json["reg_number"] || null;
		this.reg_date = json["reg_date"] || null;
		this.issue_date = json["issue_date"] || null;
		this.issued_by = json["issued_by"] || null;
		this.valid_from = json["valid_from"] || null;
		this.valid_to = json["valid_to"] || null;
		this.description = json["description"] || null;
		this.type = new ClassifierShort(json["type"]) ;
		this.status = new ClassifierShort(json["status"]) ;
       
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