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
		this.country = new ClassifierShort(json["country"]) ;
		this.type = new ClassifierShort(json["type"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }
}