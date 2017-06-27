/**
 * Точка на карте образовательной организации и ЮР лица
 */

import { Identity } from '../common/Identity';


export class InstitutionMapPoint
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    longitude: number; /*Долгота*/
    latitude: number; /*Широта*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.longitude = json["longitude"] || null;
		this.latitude = json["latitude"] || null;
       
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