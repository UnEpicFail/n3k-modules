/**
 * Организация питания
 */

import { ClassifierShort } from './ClassifierShort';


export class Meal
{
    id: number; /*Идентификатор в БД*/
    meal_type: ClassifierShort; /**/
    financing_type: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.meal_type = json["meal_type"] ? new ClassifierShort(json["meal_type"]) : null ;
		this.financing_type = json["financing_type"] ? new ClassifierShort(json["financing_type"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}