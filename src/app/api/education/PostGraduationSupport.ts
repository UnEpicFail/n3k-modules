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
		this.intention = new ClassifierShort(json["intention"]) ;
		this.actual_result = new ClassifierShort(json["actual_result"]) ;
		this.institution_name = json["institution_name"] || null;
		this.institution_type = new ClassifierShort(json["institution_type"]) ;
		this.stage = new ClassifierShort(json["stage"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}