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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.organization = new OrganizationShort(json["organization"]) ;
		this.name = json["name"] || null;
		this.full_name = json["full_name"] || null;
		this.type = new ClassifierShort(json["type"]) ;
		this.status = new ClassifierShort(json["status"]) ;
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
		this.address = new AddressShort(json["address"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (json === null || typeof json !== 'object'){
            return true
        }

        let res = true 
        Object.keys(json).map(i => {
            if (i !== '_isEmpty') {
                if (Array.isArray(json[i])){
                    json[i].map(j => {
                        res = res && this.isEmpty(json[i][j])
                    })
                } else if (typeof json[i] === 'object') {
                    res = res && this.isEmpty(json[i])
                } else {
                    res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
                }
            }
        })
        return res
    }
}