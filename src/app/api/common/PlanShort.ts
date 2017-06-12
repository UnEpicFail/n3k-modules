/**
 * Короткое описание учебный план
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';


export class PlanShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    stages: ClassifierShort[]; /*Этапы освоения образовательной программы доступные в плане*/
    direction: ClassifierShort; /**/
    professions: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
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
}