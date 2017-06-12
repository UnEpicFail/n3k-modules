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
		this.specify = json["specify"] ? new ClassifierShort(json["specify"]) : null ;
		this.is_deep = json["is_deep"] || null;
		this.duration = json["duration"] ? new Duration(json["duration"]) : null ;
		this.component = json["component"] ? new ClassifierShort(json["component"]) : null ;
		this.meta = json["meta"] ? new SubjectMeta(json["meta"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}