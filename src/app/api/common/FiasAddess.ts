/**
 * Адрес ФИАС
 */

import { FiasAddressPart } from './FiasAddressPart';


export class FiasAddess
{
    code: string; /*Общий код фиас конечного адреса*/
    region: FiasAddressPart; /**/
    okrug: FiasAddressPart; /**/
    district: FiasAddressPart; /**/
    city: FiasAddressPart; /**/
    incity: FiasAddressPart; /**/
    municipality: FiasAddressPart; /**/
    street: FiasAddressPart; /**/
    building: FiasAddressPart; /**/
    flat: FiasAddressPart; /**/

    constructor(json) {
        json = (json || {})
		this.code = json["code"] || null;
		this.region = new FiasAddressPart(json["region"]);
		this.okrug = new FiasAddressPart(json["okrug"]);
		this.district = new FiasAddressPart(json["district"]);
		this.city = new FiasAddressPart(json["city"]);
		this.incity = new FiasAddressPart(json["incity"]);
		this.municipality = new FiasAddressPart(json["municipality"]);
		this.street = new FiasAddressPart(json["street"]);
		this.building = new FiasAddressPart(json["building"]);
		this.flat = new FiasAddressPart(json["flat"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}