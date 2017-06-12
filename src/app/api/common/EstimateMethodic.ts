/**
 * Методика оценки
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class EstimateMethodic
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    description: string; /*Описание*/
    type: ClassifierShort; /**/
    system: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.description = json["description"] || null;
		this.type = new ClassifierShort(json["type"]) ;
		this.system = new ClassifierShort(json["system"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}