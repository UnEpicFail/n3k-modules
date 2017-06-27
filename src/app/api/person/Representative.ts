/**
 * Родитель/законный представитель
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { PersonShort } from '../common/PersonShort';
import { RepresentativeDocument } from './RepresentativeDocument';
import { ClassifierShort } from '../common/ClassifierShort';


export class Representative
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    parent: PersonShort; /**/
    document: RepresentativeDocument; /**/
    type: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.parent = new PersonShort(json["parent"]) ;
		this.document = new RepresentativeDocument(json["document"]) ;
		this.type = new ClassifierShort(json["type"]) ;
       
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