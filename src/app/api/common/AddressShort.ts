/**
 * Адрес краткое описание
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';


export class AddressShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    origin_address: string; /*Текстовое представление адреса*/
    longitude: number; /*Долгота*/
    latitude: number; /*Широта*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.origin_address = json["origin_address"] || null;
		this.longitude = json["longitude"] || null;
		this.latitude = json["latitude"] || null;
       
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