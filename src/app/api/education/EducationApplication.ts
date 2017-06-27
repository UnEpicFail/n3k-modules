/**
 * 
 */

import { Document } from '../common/Document';
import { ClassifierShort } from '../common/ClassifierShort';


export class EducationApplication extends Document
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    current_status: ClassifierShort[]; /*Языки, изучаемые факультативно или в кружках*/
    stage: ClassifierShort; /**/
    preferential_category: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.current_status = []
		if(json["current_status"]){
			for (let i in json["current_status"]){
				this.current_status.push(new ClassifierShort(json["current_status"][i]))
			}
		}
		this.stage = new ClassifierShort(json["stage"]) ;
		this.preferential_category = new ClassifierShort(json["preferential_category"]) ;
       
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