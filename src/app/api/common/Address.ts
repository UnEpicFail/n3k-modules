/**
 * 
 */

import { AddressShort } from './AddressShort';
import { ClassifierShort } from './ClassifierShort';
import { FiasAddess } from './FiasAddess';


export class Address extends AddressShort
{
    postal_index: string; /*Почтовый индекс*/
    country: ClassifierShort; /**/
    region: ClassifierShort; /**/
    district: ClassifierShort; /**/
    fias: FiasAddess; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.postal_index = json["postal_index"] || null;
		this.country = new ClassifierShort(json["country"]);
		this.region = new ClassifierShort(json["region"]);
		this.district = new ClassifierShort(json["district"]);
		this.fias = new FiasAddess(json["fias"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}