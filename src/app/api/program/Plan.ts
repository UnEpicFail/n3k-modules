/**
 * 
 */

import { EntityState } from '../common/EntityState';
import { Subject } from './Subject';


export class Plan extends EntityState
{
    subjects: Subject[]; /*Предметы учебного плана*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.subjects = []
		if(json["subjects"]){
			for (let i in json["subjects"]){
				this.subjects.push(new Subject(json["subjects"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}