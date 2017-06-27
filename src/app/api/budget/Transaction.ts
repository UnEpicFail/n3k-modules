/**
 * Проводка средств
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { Contractor } from './Contractor';
import { PaymentDocument } from './PaymentDocument';


export class Transaction
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    datetime_plan: string; /*Дата время планируемого проведения платежа*/
    datetime_fact: string; /*Дата время фактичкого проведения платежа*/
    operation: ClassifierShort; /**/
    type: ClassifierShort; /**/
    source: Contractor; /**/
    recipient: Contractor; /**/
    target: Contractor; /**/
    comment: string; /*Комментарий*/
    documents: PaymentDocument[]; /*Массив документов по проводке*/
    source_unit: Contractor; /**/
    target_unit: Contractor; /**/
    sum: number; /*Комментарий*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.datetime_plan = json["datetime_plan"] || null;
		this.datetime_fact = json["datetime_fact"] || null;
		this.operation = new ClassifierShort(json["operation"]) ;
		this.type = new ClassifierShort(json["type"]) ;
		this.source = new Contractor(json["source"]) ;
		this.recipient = new Contractor(json["recipient"]) ;
		this.target = new Contractor(json["target"]) ;
		this.comment = json["comment"] || null;
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new PaymentDocument(json["documents"][i]))
			}
		}
		this.source_unit = new Contractor(json["source_unit"]) ;
		this.target_unit = new Contractor(json["target_unit"]) ;
		this.sum = json["sum"] || null;
       
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