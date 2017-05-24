/**
 * 
 */

import { Document } from './Document';


export class IdentityDocument extends Document
{

    constructor(json) {
        json = (json || {})
        super(json)
       
    }

    keys() {
        return Object.keys(this)
    }
}