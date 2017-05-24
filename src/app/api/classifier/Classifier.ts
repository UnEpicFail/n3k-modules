/**
 * 
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class Classifier extends ClassifierShort
{
    code: string; /*Код*/
    is_deleted: string; /*Удален*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.code = json["code"] || null;
		this.is_deleted = json["is_deleted"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}