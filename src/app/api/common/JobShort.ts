/**
 * Сотрудник краткое описание
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';
import { PersonShort } from './PersonShort';


export class JobShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    position_name: string; /*Название должности*/
    position: ClassifierShort; /**/
    person: PersonShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.position_name = json["position_name"] || null;
		this.position = new ClassifierShort(json["position"]) ;
		this.person = new PersonShort(json["person"]) ;
       
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