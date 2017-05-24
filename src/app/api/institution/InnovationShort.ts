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
    name: string; /*Название*/
    level: ClassifierShort; /**/
    activity_direction: ClassifierShort; /**/
    activity_start: string; /*Дата начала деятельности*/
    activity_end: string; /*Дата окончания деятельности*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.name = json["name"] || null;
		this.level = new ClassifierShort(json["level"]);
		this.activity_direction = new ClassifierShort(json["activity_direction"]);
		this.activity_start = json["activity_start"] || null;
		this.activity_end = json["activity_end"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}