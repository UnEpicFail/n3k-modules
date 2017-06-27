/**
 * Адрес ФИАС
 */

import { FiasAddressPart } from './FiasAddressPart';


export class FiasAddress
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this.isEmpty(json)
		this.code = json["code"] || null;
		this.region = new FiasAddressPart(json["region"]) ;
		this.okrug = new FiasAddressPart(json["okrug"]) ;
		this.district = new FiasAddressPart(json["district"]) ;
		this.city = new FiasAddressPart(json["city"]) ;
		this.incity = new FiasAddressPart(json["incity"]) ;
		this.municipality = new FiasAddressPart(json["municipality"]) ;
		this.street = new FiasAddressPart(json["street"]) ;
		this.building = new FiasAddressPart(json["building"]) ;
		this.flat = new FiasAddressPart(json["flat"]) ;
       
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