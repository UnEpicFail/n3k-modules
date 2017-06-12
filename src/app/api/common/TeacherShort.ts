/**
 * Учитель краткое описание
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { JobShort } from './JobShort';


export class TeacherShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    job: JobShort[]; /*Работа/Сотрудник*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.job = []
		if(json["job"]){
			for (let i in json["job"]){
				this.job.push(new JobShort(json["job"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}