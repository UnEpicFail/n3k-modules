/**
 * Короткое описание оценки
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';
import { ClassifierShort } from './ClassifierShort';
import { EstimateMethodic } from './EstimateMethodic';


export class EstimateShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Название*/
    comment: string; /*Комментарий*/
    weight: ClassifierShort; /**/
    value: string; /*Значение*/
    methodic: EstimateMethodic; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.comment = json["comment"] || null;
		this.weight = new ClassifierShort(json["weight"]) ;
		this.value = json["value"] || null;
		this.methodic = new EstimateMethodic(json["methodic"]) ;
       
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