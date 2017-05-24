/**
 * Образовательные услуги для УФТТ 3.0, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';


export class EducationServiceShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    kind: ClassifierShort; /**/
    name: string; /*Наименование*/
    direction: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.kind = new ClassifierShort(json["kind"]);
		this.name = json["name"] || null;
		this.direction = new ClassifierShort(json["direction"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}