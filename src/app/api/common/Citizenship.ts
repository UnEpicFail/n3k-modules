/**
 * Граданство
 */

import { ClassifierShort } from './ClassifierShort';


export class Citizenship
{
    country: ClassifierShort; /**/
    type: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.country = json["country"] ? new ClassifierShort(json["country"]) : null ;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}