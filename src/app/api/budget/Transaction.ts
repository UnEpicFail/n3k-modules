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
}