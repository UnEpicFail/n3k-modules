/**
 * 
 */

import { Document } from '../common/Document';


export class ProgramDocument extends Document
{

    constructor(json) {
        json = (json || {})
        super(json)
       
    }

    keys() {
        return Object.keys(this)
    }
}