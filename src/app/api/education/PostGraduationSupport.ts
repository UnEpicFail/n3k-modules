/**
 * Поствыпускное сопровождение
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class PostGraduationSupport
{
    intention: ClassifierShort; /**/
    actual_result: ClassifierShort; /**/
    institution_name: string; /*Наименование образовательной организации*/
    institution_type: ClassifierShort; /**/
    stage: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.intention = json["intention"] ? new ClassifierShort(json["intention"]) : null ;
		this.actual_result = json["actual_result"] ? new ClassifierShort(json["actual_result"]) : null ;
		this.institution_name = json["institution_name"] || null;
		this.institution_type = json["institution_type"] ? new ClassifierShort(json["institution_type"]) : null ;
		this.stage = json["stage"] ? new ClassifierShort(json["stage"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}