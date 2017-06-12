/**
 * Короткое описание оценки
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';
import { EstimateMethodic } from './EstimateMethodic';


export class EstimateShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    comment: string; /*Комментарий*/
    weight: ClassifierShort; /**/
    value: string; /*Значение*/
    methodic: EstimateMethodic; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.comment = json["comment"] || null;
		this.weight = json["weight"] ? new ClassifierShort(json["weight"]) : null ;
		this.value = json["value"] || null;
		this.methodic = json["methodic"] ? new EstimateMethodic(json["methodic"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}