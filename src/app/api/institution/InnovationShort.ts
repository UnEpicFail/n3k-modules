/**
 * Иновация, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';


export class InnovationShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    institution_identity: Identity; /**/
    name: string; /*Название*/
    level: ClassifierShort; /**/
    activity_direction: ClassifierShort; /**/
    activity_start: string; /*Дата начала деятельности*/
    activity_end: string; /*Дата окончания деятельности*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.institution_identity = json["institution_identity"] ? new Identity(json["institution_identity"]) : null ;
		this.name = json["name"] || null;
		this.level = json["level"] ? new ClassifierShort(json["level"]) : null ;
		this.activity_direction = json["activity_direction"] ? new ClassifierShort(json["activity_direction"]) : null ;
		this.activity_start = json["activity_start"] || null;
		this.activity_end = json["activity_end"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}