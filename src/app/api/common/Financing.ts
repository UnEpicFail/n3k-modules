/**
 * Финансирование
 */

import { ClassifierShort } from './ClassifierShort';


export class Financing
{
    source: string; /*Название источника*/
    type: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.source = json["source"] || null;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}