/**
 * Адрес краткое описание
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';


export class AddressShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    origin_address: string; /*Текстовое представление адреса*/
    longitude: number; /*Долгота*/
    latitude: number; /*Широта*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.origin_address = json["origin_address"] || null;
		this.longitude = json["longitude"] || null;
		this.latitude = json["latitude"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}