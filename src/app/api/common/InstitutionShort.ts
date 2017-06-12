/**
 * Короткое описание образовательной организации и ЮР лица для списка образовательных организаций
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { OrganizationShort } from './OrganizationShort';
import { ClassifierShort } from './ClassifierShort';
import { Contact } from './Contact';
import { AddressShort } from './AddressShort';


export class InstitutionShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    organization: OrganizationShort; /**/
    name: string; /*Краткое наименование*/
    full_name: string; /*Наименование образовательной организации*/
    type: ClassifierShort; /**/
    status: ClassifierShort; /**/
    direction: ClassifierShort[]; /*Направленность образовательной организации*/
    contacts: Contact[]; /*Контактная информация*/
    address: AddressShort; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.organization = json["organization"] ? new OrganizationShort(json["organization"]) : null ;
		this.name = json["name"] || null;
		this.full_name = json["full_name"] || null;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.status = json["status"] ? new ClassifierShort(json["status"]) : null ;
		this.direction = []
		if(json["direction"]){
			for (let i in json["direction"]){
				this.direction.push(new ClassifierShort(json["direction"][i]))
			}
		}
		this.contacts = []
		if(json["contacts"]){
			for (let i in json["contacts"]){
				this.contacts.push(new Contact(json["contacts"][i]))
			}
		}
		this.address = json["address"] ? new AddressShort(json["address"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}