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
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.parent = json["parent"] ? new PersonShort(json["parent"]) : null ;
		this.document = json["document"] ? new RepresentativeDocument(json["document"]) : null ;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}