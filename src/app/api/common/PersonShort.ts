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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
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
		this.sex = new ClassifierShort(json["sex"]) ;
		this.citizenship = new Citizenship(json["citizenship"]) ;
       
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