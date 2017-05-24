/**
 * 
 */

import { EducationServiceShort } from './EducationServiceShort';


export class EducationService extends EducationServiceShort
{

    constructor(json) {
        json = (json || {})
        super(json)
       
    }

    keys() {
        return Object.keys(this)
    }
}