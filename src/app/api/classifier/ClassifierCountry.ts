/**
 * 
 */

import { Classifier } from './Classifier';


export class ClassifierCountry extends Classifier
{
    alfa2: string; /*Сокращение 2 буквы*/
    alfa3: string; /*Сокращение 3 буквы*/
    full_name: string; /*Полное название*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.alfa2 = json["alfa2"] || null;
		this.alfa3 = json["alfa3"] || null;
		this.full_name = json["full_name"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}