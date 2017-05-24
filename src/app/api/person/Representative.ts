/**
 * Родитель/законный представитель
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { PersonShort } from '../common/PersonShort';
import { RepresentativeDocument } from './RepresentativeDocument';
import { ClassifierShort } from '../common/ClassifierShort';


export class Representative
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    parent: PersonShort; /**/
    document: RepresentativeDocument; /**/
    type: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.parent = new PersonShort(json["parent"]);
		this.document = new RepresentativeDocument(json["document"]);
		this.type = new ClassifierShort(json["type"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}