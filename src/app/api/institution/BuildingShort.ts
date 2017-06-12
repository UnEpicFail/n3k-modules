/**
 * Здание, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { AddressShort } from '../common/AddressShort';
import { ClassifierShort } from '../common/ClassifierShort';


export class BuildingShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    institution_identity: Identity; /**/
    name: string; /*Наименование*/
    address: AddressShort; /**/
    is_head: string; /*Является головным зданием*/
    status: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.institution_identity = json["institution_identity"] ? new Identity(json["institution_identity"]) : null ;
		this.name = json["name"] || null;
		this.address = json["address"] ? new AddressShort(json["address"]) : null ;
		this.is_head = json["is_head"] || null;
		this.status = json["status"] ? new ClassifierShort(json["status"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}