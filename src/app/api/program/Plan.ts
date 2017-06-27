/**
 * 
 */

import { PlanShort } from '../common/PlanShort';
import { Subject } from './Subject';


export class Plan extends PlanShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    subjects: Subject[]; /*Предметы учебного плана*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
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