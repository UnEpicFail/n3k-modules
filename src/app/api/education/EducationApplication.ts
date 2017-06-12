/**
 * 
 */

import { Document } from '../common/Document';
import { ClassifierShort } from '../common/ClassifierShort';


export class EducationApplication extends Document
{
    current_status: ClassifierShort[]; /*Языки, изучаемые факультативно или в кружках*/
    stage: ClassifierShort; /**/
    preferential_category: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        super(json)
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
}