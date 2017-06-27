/**
 * Короткое описание учебный план
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class PlanShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    stages: ClassifierShort[]; /*Этапы освоения образовательной программы доступные в плане*/
    direction: ClassifierShort; /**/
    professions: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.stages = []
		if(json["stages"]){
			for (let i in json["stages"]){
				this.stages.push(new ClassifierShort(json["stages"][i]))
			}
		}
		this.direction = new ClassifierShort(json["direction"]) ;
		this.professions = new ClassifierShort(json["professions"]) ;
       
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