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
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.type = new ClassifierShort(json["type"]) ;
		this.institution = new InstitutionShort(json["institution"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}