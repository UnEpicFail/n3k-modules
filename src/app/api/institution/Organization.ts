/**
 * 
 */

import { OrganizationShort } from '../common/OrganizationShort';
import { ClassifierShort } from '../common/ClassifierShort';
import { PersonShort } from '../common/PersonShort';
import { Address } from '../common/Address';
import { Contact } from '../common/Contact';
import { OrganizationMeta } from './OrganizationMeta';


export class Organization extends OrganizationShort
{
    okpo: string; /*ОКПО*/
    okato: string; /*ОКATO*/
    kpp: string; /*КПП*/
    oktmo: ClassifierShort; /**/
    okogu: string; /*ОКОГУ*/
    owner: PersonShort; /**/
    head: PersonShort; /**/
    type_of_ownership: ClassifierShort; /**/
    founders_type: ClassifierShort; /**/
    status: ClassifierShort; /**/
    address: Address; /**/
    district: ClassifierShort; /**/
    region: ClassifierShort; /**/
    okopf: ClassifierShort; /**/
    okfs: ClassifierShort; /**/
    okved: ClassifierShort[]; /*Коды оквед*/
    contacts: Contact[]; /*Контактная информация*/
    meta: OrganizationMeta; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.okpo = json["okpo"] || null;
		this.okato = json["okato"] || null;
		this.kpp = json["kpp"] || null;
		this.oktmo = json["oktmo"] ? new ClassifierShort(json["oktmo"]) : null ;
		this.okogu = json["okogu"] || null;
		this.owner = json["owner"] ? new PersonShort(json["owner"]) : null ;
		this.head = json["head"] ? new PersonShort(json["head"]) : null ;
		this.type_of_ownership = json["type_of_ownership"] ? new ClassifierShort(json["type_of_ownership"]) : null ;
		this.founders_type = json["founders_type"] ? new ClassifierShort(json["founders_type"]) : null ;
		this.status = json["status"] ? new ClassifierShort(json["status"]) : null ;
		this.address = json["address"] ? new Address(json["address"]) : null ;
		this.district = json["district"] ? new ClassifierShort(json["district"]) : null ;
		this.region = json["region"] ? new ClassifierShort(json["region"]) : null ;
		this.okopf = json["okopf"] ? new ClassifierShort(json["okopf"]) : null ;
		this.okfs = json["okfs"] ? new ClassifierShort(json["okfs"]) : null ;
		this.okved = []
		if(json["okved"]){
			for (let i in json["okved"]){
				this.okved.push(new ClassifierShort(json["okved"][i]))
			}
		}
		this.contacts = []
		if(json["contacts"]){
			for (let i in json["contacts"]){
				this.contacts.push(new Contact(json["contacts"][i]))
			}
		}
		this.meta = json["meta"] ? new OrganizationMeta(json["meta"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}