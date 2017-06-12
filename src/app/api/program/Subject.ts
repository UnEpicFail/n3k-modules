/**
 * 
 */

import { SubjectShort } from '../common/SubjectShort';
import { ClassifierShort } from '../common/ClassifierShort';
import { Duration } from '../common/Duration';
import { SubjectMeta } from './SubjectMeta';


export class Subject extends SubjectShort
{
    specify: ClassifierShort; /**/
    is_deep: string; /*Углубленное изучение*/
    duration: Duration; /**/
    component: ClassifierShort; /**/
    meta: SubjectMeta; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.specify = new ClassifierShort(json["specify"]) ;
		this.is_deep = json["is_deep"] || null;
		this.duration = new Duration(json["duration"]) ;
		this.component = new ClassifierShort(json["component"]) ;
		this.meta = new SubjectMeta(json["meta"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}