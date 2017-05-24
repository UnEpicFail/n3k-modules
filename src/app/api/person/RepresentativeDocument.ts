/**
 * 
 */

import { Document } from '../common/Document';


export class RepresentativeDocument extends Document
{

    constructor(json) {
        json = (json || {})
        super(json)
       
    }

    keys() {
        return Object.keys(this)
    }
}