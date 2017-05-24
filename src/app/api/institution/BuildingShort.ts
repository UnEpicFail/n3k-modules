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
    name: string; /*Наименование*/
    address: AddressShort; /**/
    is_head: string; /*Является головным зданием*/
    status: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.name = json["name"] || null;
		this.address = new AddressShort(json["address"]);
		this.is_head = json["is_head"] || null;
		this.status = new ClassifierShort(json["status"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}