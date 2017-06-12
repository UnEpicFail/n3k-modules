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
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.comment = json["comment"] || null;
		this.weight = new ClassifierShort(json["weight"]) ;
		this.value = json["value"] || null;
		this.methodic = new EstimateMethodic(json["methodic"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}