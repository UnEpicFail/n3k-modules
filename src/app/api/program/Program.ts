/**
 * 
 */

import { ProgramShort } from '../common/ProgramShort';
import { InstitutionShort } from '../common/InstitutionShort';
import { ClassifierShort } from '../common/ClassifierShort';
import { EstimateShort } from '../common/EstimateShort';
import { Duration } from '../common/Duration';
import { Financing } from '../common/Financing';
import { Age } from '../common/Age';
import { Publication } from '../common/Publication';
import { ProgramMeta } from './ProgramMeta';
import { ProgramDocument } from './ProgramDocument';
import { PlanShort } from '../common/PlanShort';


export class Program extends ProgramShort
{
    code: string; /*Код*/
    institution: InstitutionShort; /**/
    level: ClassifierShort; /**/
    stages: ClassifierShort[]; /*Этапы освоения образовательной программы образования доступные в программе*/
    adaptives: ClassifierShort[]; /*Адаптивность*/
    directions: ClassifierShort[]; /*Направленности доступная в программе*/
    profiles: ClassifierShort[]; /*Профиль*/
    specifies: ClassifierShort[]; /*Специализация*/
    professions: ClassifierShort[]; /*Профессия/Специальность*/
    qualifications: ClassifierShort[]; /*Квалификация*/
    service_directions: ClassifierShort[]; /*Направления образовательных услуг*/
    sports: ClassifierShort[]; /*Виды спорта*/
    implement_forms: ClassifierShort[]; /*Форма реализации*/
    forms: ClassifierShort[]; /*Форма обучения*/
    scores: EstimateShort[]; /*Проходной бал*/
    is_short: string; /*Сокращенная программа*/
    arts: ClassifierShort[]; /*Виды искуства*/
    duration: Duration; /**/
    financing: Financing; /**/
    age: Age; /**/
    capacity: Age; /**/
    publication: Publication; /**/
    meta: ProgramMeta; /**/
    documents: ProgramDocument[]; /*Массив документов программы*/
    plans: PlanShort[]; /*Массив учебных планов*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.code = json["code"] || null;
		this.institution = new InstitutionShort(json["institution"]);
		this.level = new ClassifierShort(json["level"]);
		this.stages = []
		if(json["stages"]){
			for (let i in json["stages"]){
				this.stages.push(new ClassifierShort(json["stages"][i]))
			}
		}
		this.adaptives = []
		if(json["adaptives"]){
			for (let i in json["adaptives"]){
				this.adaptives.push(new ClassifierShort(json["adaptives"][i]))
			}
		}
		this.directions = []
		if(json["directions"]){
			for (let i in json["directions"]){
				this.directions.push(new ClassifierShort(json["directions"][i]))
			}
		}
		this.profiles = []
		if(json["profiles"]){
			for (let i in json["profiles"]){
				this.profiles.push(new ClassifierShort(json["profiles"][i]))
			}
		}
		this.specifies = []
		if(json["specifies"]){
			for (let i in json["specifies"]){
				this.specifies.push(new ClassifierShort(json["specifies"][i]))
			}
		}
		this.professions = []
		if(json["professions"]){
			for (let i in json["professions"]){
				this.professions.push(new ClassifierShort(json["professions"][i]))
			}
		}
		this.qualifications = []
		if(json["qualifications"]){
			for (let i in json["qualifications"]){
				this.qualifications.push(new ClassifierShort(json["qualifications"][i]))
			}
		}
		this.service_directions = []
		if(json["service_directions"]){
			for (let i in json["service_directions"]){
				this.service_directions.push(new ClassifierShort(json["service_directions"][i]))
			}
		}
		this.sports = []
		if(json["sports"]){
			for (let i in json["sports"]){
				this.sports.push(new ClassifierShort(json["sports"][i]))
			}
		}
		this.implement_forms = []
		if(json["implement_forms"]){
			for (let i in json["implement_forms"]){
				this.implement_forms.push(new ClassifierShort(json["implement_forms"][i]))
			}
		}
		this.forms = []
		if(json["forms"]){
			for (let i in json["forms"]){
				this.forms.push(new ClassifierShort(json["forms"][i]))
			}
		}
		this.scores = []
		if(json["scores"]){
			for (let i in json["scores"]){
				this.scores.push(new EstimateShort(json["scores"][i]))
			}
		}
		this.is_short = json["is_short"] || null;
		this.arts = []
		if(json["arts"]){
			for (let i in json["arts"]){
				this.arts.push(new ClassifierShort(json["arts"][i]))
			}
		}
		this.duration = new Duration(json["duration"]);
		this.financing = new Financing(json["financing"]);
		this.age = new Age(json["age"]);
		this.capacity = new Age(json["capacity"]);
		this.publication = new Publication(json["publication"]);
		this.meta = new ProgramMeta(json["meta"]);
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new ProgramDocument(json["documents"][i]))
			}
		}
		this.plans = []
		if(json["plans"]){
			for (let i in json["plans"]){
				this.plans.push(new PlanShort(json["plans"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}