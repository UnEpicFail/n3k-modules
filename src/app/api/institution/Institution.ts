/**
 * 
 */

import { InstitutionShort } from '../common/InstitutionShort';
import { Organization } from './Organization';
import { JobShort } from '../common/JobShort';
import { ClassifierShort } from '../common/ClassifierShort';
import { WorkTime } from '../common/WorkTime';
import { Address } from '../common/Address';
import { Meal } from '../common/Meal';
import { Capacity } from '../common/Capacity';
import { InstitutionDocument } from './InstitutionDocument';
import { PublicAdministration } from './PublicAdministration';
import { Publication } from '../common/Publication';
import { InstitutionMeta } from './InstitutionMeta';


export class Institution extends InstitutionShort
{
    organization: Organization; /**/
    head: JobShort; /**/
    region: ClassifierShort; /**/
    shift: ClassifierShort[]; /*Смены*/
    status_date: string; /*Дата последней смены статуса*/
    kind: ClassifierShort; /**/
    terrain: ClassifierShort; /**/
    work_time: WorkTime[]; /*Время работы*/
    education_language: ClassifierShort; /**/
    education_area: Address[]; /*Адреса обслуживаемой территории*/
    levels: ClassifierShort[]; /*Уровни образования*/
    meals: Meal[]; /*Питание доступное в образовательной организации*/
    implement_education_services: ClassifierShort[]; /*Образовательные услуги по реализации образовательных программ*/
    ovz_group_types: ClassifierShort[]; /*Типы групп ОВЗ доступные в ОО*/
    foundation_date: string; /*Дата образования организации*/
    description: string; /*Описание*/
    address: Address; /**/
    district: ClassifierShort; /**/
    jurisdiction: ClassifierShort; /**/
    capacity: Capacity; /**/
    documents: InstitutionDocument[]; /*Массив документов для организации*/
    public_administration: PublicAdministration; /**/
    publication: Publication; /**/
    meta: InstitutionMeta; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.organization = new Organization(json["organization"]);
		this.head = new JobShort(json["head"]);
		this.region = new ClassifierShort(json["region"]);
		this.shift = []
		if(json["shift"]){
			for (let i in json["shift"]){
				this.shift.push(new ClassifierShort(json["shift"][i]))
			}
		}
		this.status_date = json["status_date"] || null;
		this.kind = new ClassifierShort(json["kind"]);
		this.terrain = new ClassifierShort(json["terrain"]);
		this.work_time = []
		if(json["work_time"]){
			for (let i in json["work_time"]){
				this.work_time.push(new WorkTime(json["work_time"][i]))
			}
		}
		this.education_language = new ClassifierShort(json["education_language"]);
		this.education_area = []
		if(json["education_area"]){
			for (let i in json["education_area"]){
				this.education_area.push(new Address(json["education_area"][i]))
			}
		}
		this.levels = []
		if(json["levels"]){
			for (let i in json["levels"]){
				this.levels.push(new ClassifierShort(json["levels"][i]))
			}
		}
		this.meals = []
		if(json["meals"]){
			for (let i in json["meals"]){
				this.meals.push(new Meal(json["meals"][i]))
			}
		}
		this.implement_education_services = []
		if(json["implement_education_services"]){
			for (let i in json["implement_education_services"]){
				this.implement_education_services.push(new ClassifierShort(json["implement_education_services"][i]))
			}
		}
		this.ovz_group_types = []
		if(json["ovz_group_types"]){
			for (let i in json["ovz_group_types"]){
				this.ovz_group_types.push(new ClassifierShort(json["ovz_group_types"][i]))
			}
		}
		this.foundation_date = json["foundation_date"] || null;
		this.description = json["description"] || null;
		this.address = new Address(json["address"]);
		this.district = new ClassifierShort(json["district"]);
		this.jurisdiction = new ClassifierShort(json["jurisdiction"]);
		this.capacity = new Capacity(json["capacity"]);
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new InstitutionDocument(json["documents"][i]))
			}
		}
		this.public_administration = new PublicAdministration(json["public_administration"]);
		this.publication = new Publication(json["publication"]);
		this.meta = new InstitutionMeta(json["meta"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}