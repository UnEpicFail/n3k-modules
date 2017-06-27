/**
 * Иновация, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';


export class InnovationShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    institution_identity: Identity; /**/
    name: string; /*Название*/
    level: ClassifierShort; /**/
    activity_direction: ClassifierShort; /**/
    activity_start: string; /*Дата начала деятельности*/
    activity_end: string; /*Дата окончания деятельности*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.institution_identity = new Identity(json["institution_identity"]) ;
		this.name = json["name"] || null;
		this.level = new ClassifierShort(json["level"]) ;
		this.activity_direction = new ClassifierShort(json["activity_direction"]) ;
		this.activity_start = json["activity_start"] || null;
		this.activity_end = json["activity_end"] || null;
       
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