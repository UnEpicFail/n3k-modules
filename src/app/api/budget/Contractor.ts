/**
 * Контрагент участвующий в процессе бюджетирования и расходования средств
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { InstitutionShort } from '../common/InstitutionShort';


export class Contractor
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    type: ClassifierShort; /**/
    institution: InstitutionShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.type = new ClassifierShort(json["type"]) ;
		this.institution = new InstitutionShort(json["institution"]) ;
       
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