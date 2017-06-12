/**
 * 
 */

import { Document } from '../common/Document';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { InstitutionShort } from '../common/InstitutionShort';
import { Duration } from '../common/Duration';
import { EducationResultMeta } from './EducationResultMeta';


export class EducationResult extends Document
{
    person: EntityState; /**/
    profession: ClassifierShort; /**/
    postition: ClassifierShort; /**/
    institution_name: string; /*Наименование образовательной организации*/
    institution: InstitutionShort; /**/
    qualification_category: InstitutionShort; /**/
    duration: Duration; /**/
    has_achievement: string; /*Документ об образовании и о квалификации с отличием*/
    meta: EducationResultMeta; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.person = json["person"] ? new EntityState(json["person"]) : null ;
		this.profession = json["profession"] ? new ClassifierShort(json["profession"]) : null ;
		this.postition = json["postition"] ? new ClassifierShort(json["postition"]) : null ;
		this.institution_name = json["institution_name"] || null;
		this.institution = json["institution"] ? new InstitutionShort(json["institution"]) : null ;
		this.qualification_category = json["qualification_category"] ? new InstitutionShort(json["qualification_category"]) : null ;
		this.duration = json["duration"] ? new Duration(json["duration"]) : null ;
		this.has_achievement = json["has_achievement"] || null;
		this.meta = json["meta"] ? new EducationResultMeta(json["meta"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}