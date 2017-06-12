/**
 * Контрагент участвующий в процессе бюджетирования и расходования средств
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { InstitutionShort } from '../common/InstitutionShort';


export class Contractor
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    type: ClassifierShort; /**/
    institution: InstitutionShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.name = json["name"] || null;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.institution = json["institution"] ? new InstitutionShort(json["institution"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}