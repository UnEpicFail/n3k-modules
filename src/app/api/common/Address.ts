/**
 * 
 */

import { AddressShort } from './AddressShort';
import { ClassifierShort } from './ClassifierShort';
import { FiasAddress } from './FiasAddress';


export class Address extends AddressShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    postal_index: string; /*Почтовый индекс*/
    country: ClassifierShort; /**/
    region: ClassifierShort; /**/
    district: ClassifierShort; /**/
    fias: FiasAddress; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this.isEmpty(json)
		this.postal_index = json["postal_index"] || null;
		this.country = new ClassifierShort(json["country"]) ;
		this.region = new ClassifierShort(json["region"]) ;
		this.district = new ClassifierShort(json["district"]) ;
		this.fias = new FiasAddress(json["fias"]) ;
       
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