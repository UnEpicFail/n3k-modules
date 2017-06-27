/**
 * Короткое описание образовательного материала
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';
import { SubjectShort } from './SubjectShort';


export class ContentShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    description: string; /*Описание*/
    level: ClassifierShort; /**/
    type: ClassifierShort; /**/
    parent: Identity; /**/
    subject: SubjectShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.description = json["description"] || null;
		this.level = new ClassifierShort(json["level"]) ;
		this.type = new ClassifierShort(json["type"]) ;
		this.parent = new Identity(json["parent"]) ;
		this.subject = new SubjectShort(json["subject"]) ;
       
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