/**
 * 
 */

import { Document } from '../common/Document';


export class LongTreatmentDocument extends Document
{

    constructor(json) {
        json = (json || {})
        super(json)
       
    }

    keys() {
        return Object.keys(this)
    }
}