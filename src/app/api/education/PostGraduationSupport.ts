/**
 * Поствыпускное сопровождение
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class PostGraduationSupport
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    intention: ClassifierShort; /**/
    actual_result: ClassifierShort; /**/
    institution_name: string; /*Наименование образовательной организации*/
    institution_type: ClassifierShort; /**/
    stage: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.intention = new ClassifierShort(json["intention"]) ;
		this.actual_result = new ClassifierShort(json["actual_result"]) ;
		this.institution_name = json["institution_name"] || null;
		this.institution_type = new ClassifierShort(json["institution_type"]) ;
		this.stage = new ClassifierShort(json["stage"]) ;
       
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