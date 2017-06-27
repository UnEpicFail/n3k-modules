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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    person: EntityState; /**/
    profession: ClassifierShort; /**/
    postition: ClassifierShort; /**/
    institution_name: string; /*Наименование образовательной организации*/
    institution: InstitutionShort; /**/
    qualification_category: InstitutionShort; /**/
    duration: Duration; /**/
    has_achievement: boolean; /*Документ об образовании и о квалификации с отличием*/
    meta: EducationResultMeta; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this.isEmpty(json)
		this.person = new EntityState(json["person"]) ;
		this.profession = new ClassifierShort(json["profession"]) ;
		this.postition = new ClassifierShort(json["postition"]) ;
		this.institution_name = json["institution_name"] || null;
		this.institution = new InstitutionShort(json["institution"]) ;
		this.qualification_category = new InstitutionShort(json["qualification_category"]) ;
		this.duration = new Duration(json["duration"]) ;
		this.has_achievement = json["has_achievement"] || null;
		this.meta = new EducationResultMeta(json["meta"]) ;
       
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