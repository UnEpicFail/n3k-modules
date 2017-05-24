/**
 * Государственные и муниципальные услуги в электронном виде, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';


export class PublicDigitalServiceShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    service: ClassifierShort; /**/
    epgu_url: string; /*Ссылка на ЕПГУ*/
    rpgu_url: string; /*Ссылка на РПГУ*/
    documentation_url: string; /*Ссылка на порядок оказания*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.service = new ClassifierShort(json["service"]);
		this.epgu_url = json["epgu_url"] || null;
		this.rpgu_url = json["rpgu_url"] || null;
		this.documentation_url = json["documentation_url"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}