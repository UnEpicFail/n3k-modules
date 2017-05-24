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
		this.oktmo = new ClassifierShort(json["oktmo"]);
		this.okogu = json["okogu"] || null;
		this.owner = new PersonShort(json["owner"]);
		this.head = new PersonShort(json["head"]);
		this.type_of_ownership = new ClassifierShort(json["type_of_ownership"]);
		this.founders_type = new ClassifierShort(json["founders_type"]);
		this.status = new ClassifierShort(json["status"]);
		this.address = new Address(json["address"]);
		this.district = new ClassifierShort(json["district"]);
		this.region = new ClassifierShort(json["region"]);
		this.okopf = new ClassifierShort(json["okopf"]);
		this.okfs = new ClassifierShort(json["okfs"]);
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
		this.meta = new OrganizationMeta(json["meta"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}