/**
 * 
 */

import { AddressShort } from './AddressShort';
import { ClassifierShort } from './ClassifierShort';
import { FiasAddress } from './FiasAddress';


export class Address extends AddressShort
{
    postal_index: string; /*Почтовый индекс*/
    country: ClassifierShort; /**/
    region: ClassifierShort; /**/
    district: ClassifierShort; /**/
    fias: FiasAddress; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.postal_index = json["postal_index"] || null;
		this.country = json["country"] ? new ClassifierShort(json["country"]) : null ;
		this.region = json["region"] ? new ClassifierShort(json["region"]) : null ;
		this.district = json["district"] ? new ClassifierShort(json["district"]) : null ;
		this.fias = json["fias"] ? new FiasAddress(json["fias"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}