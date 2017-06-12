/**
 * Короткое описание персоны
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { IdentityDocument } from './IdentityDocument';
import { ClassifierShort } from './ClassifierShort';
import { Citizenship } from './Citizenship';


export class PersonShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    firstname: string; /*Имя*/
    surname: string; /*Фамилия*/
    middlename: string; /*Отчество*/
    birth_date: string; /*Дата рождения*/
    death_date: string; /*Дата смерти*/
    identity_documents: IdentityDocument[]; /*Документы удостоверяющие личность*/
    sex: ClassifierShort; /**/
    citizenship: Citizenship; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.firstname = json["firstname"] || null;
		this.surname = json["surname"] || null;
		this.middlename = json["middlename"] || null;
		this.birth_date = json["birth_date"] || null;
		this.death_date = json["death_date"] || null;
		this.identity_documents = []
		if(json["identity_documents"]){
			for (let i in json["identity_documents"]){
				this.identity_documents.push(new IdentityDocument(json["identity_documents"][i]))
			}
		}
		this.sex = json["sex"] ? new ClassifierShort(json["sex"]) : null ;
		this.citizenship = json["citizenship"] ? new Citizenship(json["citizenship"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}