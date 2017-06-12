/**
 * Сотрудник
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { JobDocument } from './JobDocument';
import { PersonShort } from '../common/PersonShort';
import { OrganizationShort } from '../common/OrganizationShort';
import { DepartmentShort } from '../common/DepartmentShort';
import { JobMeta } from './JobMeta';


export class Job
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    position_name: string; /*Название должности*/
    position: ClassifierShort; /**/
    terms_of_employment: ClassifierShort; /**/
    dismissal_type: ClassifierShort; /**/
    date_from: string; /*Дата начала работы*/
    date_to: string; /*Дата окончания*/
    status: ClassifierShort; /**/
    documents: JobDocument[]; /*Массив документов сотрудника*/
    person: PersonShort; /**/
    organization: OrganizationShort; /**/
    rate: number; /*Ставка*/
    department: DepartmentShort; /**/
    meta: JobMeta; /**/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.position_name = json["position_name"] || null;
		this.position = json["position"] ? new ClassifierShort(json["position"]) : null ;
		this.terms_of_employment = json["terms_of_employment"] ? new ClassifierShort(json["terms_of_employment"]) : null ;
		this.dismissal_type = json["dismissal_type"] ? new ClassifierShort(json["dismissal_type"]) : null ;
		this.date_from = json["date_from"] || null;
		this.date_to = json["date_to"] || null;
		this.status = json["status"] ? new ClassifierShort(json["status"]) : null ;
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new JobDocument(json["documents"][i]))
			}
		}
		this.person = json["person"] ? new PersonShort(json["person"]) : null ;
		this.organization = json["organization"] ? new OrganizationShort(json["organization"]) : null ;
		this.rate = json["rate"] || null;
		this.department = json["department"] ? new DepartmentShort(json["department"]) : null ;
		this.meta = json["meta"] ? new JobMeta(json["meta"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}