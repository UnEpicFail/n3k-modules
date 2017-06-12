/**
 * Точка на карте образовательной организации и ЮР лица
 */

import { Identity } from '../common/Identity';


export class InstitutionMapPoint
{
    identity: Identity; /**/
    longitude: number; /*Долгота*/
    latitude: number; /*Широта*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.longitude = json["longitude"] || null;
		this.latitude = json["latitude"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}