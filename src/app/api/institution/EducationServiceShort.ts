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
    institution_identity: Identity; /**/
    kind: ClassifierShort; /**/
    name: string; /*Наименование*/
    direction: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.institution_identity = json["institution_identity"] ? new Identity(json["institution_identity"]) : null ;
		this.kind = json["kind"] ? new ClassifierShort(json["kind"]) : null ;
		this.name = json["name"] || null;
		this.direction = json["direction"] ? new ClassifierShort(json["direction"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}