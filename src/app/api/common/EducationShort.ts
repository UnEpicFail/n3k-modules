/**
 * Сокращенная запись об обучении
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { PersonShort } from './PersonShort';
import { ProgramShort } from './ProgramShort';
import { GroupShort } from './GroupShort';


export class EducationShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    person: PersonShort; /**/
    program: ProgramShort; /**/
    group: GroupShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.person = new PersonShort(json["person"]) ;
		this.program = new ProgramShort(json["program"]) ;
		this.group = new GroupShort(json["group"]) ;
       
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