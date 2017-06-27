/**
 * 
 */

import { SubjectShort } from '../common/SubjectShort';
import { ClassifierShort } from '../common/ClassifierShort';
import { Duration } from '../common/Duration';
import { SubjectMeta } from './SubjectMeta';


export class Subject extends SubjectShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    specify: ClassifierShort; /**/
    is_deep: boolean; /*Углубленное изучение*/
    duration: Duration; /**/
    component: ClassifierShort; /**/
    meta: SubjectMeta; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.specify = new ClassifierShort(json["specify"]) ;
		this.is_deep = json["is_deep"] || null;
		this.duration = new Duration(json["duration"]) ;
		this.component = new ClassifierShort(json["component"]) ;
		this.meta = new SubjectMeta(json["meta"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (typeof json !== 'object'){
            return true
        }
        
        let res = true 
        Object.keys(json).map(i => {
            if (Array.isArray(json[i])){
                json[i].map(j => {
                    res = res && this.isEmpty(json[i][j])
                })
            } else if (typeof json[i] === 'object') {
                res = res && this.isEmpty(json[i])
            } else {
                res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
            }
        })
        return res
    }
}