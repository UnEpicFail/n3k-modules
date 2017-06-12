/**
 * Адрес ФИАС
 */

import { FiasAddressPart } from './FiasAddressPart';


export class FiasAddress
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
		this.region = json["region"] ? new FiasAddressPart(json["region"]) : null ;
		this.okrug = json["okrug"] ? new FiasAddressPart(json["okrug"]) : null ;
		this.district = json["district"] ? new FiasAddressPart(json["district"]) : null ;
		this.city = json["city"] ? new FiasAddressPart(json["city"]) : null ;
		this.incity = json["incity"] ? new FiasAddressPart(json["incity"]) : null ;
		this.municipality = json["municipality"] ? new FiasAddressPart(json["municipality"]) : null ;
		this.street = json["street"] ? new FiasAddressPart(json["street"]) : null ;
		this.building = json["building"] ? new FiasAddressPart(json["building"]) : null ;
		this.flat = json["flat"] ? new FiasAddressPart(json["flat"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}