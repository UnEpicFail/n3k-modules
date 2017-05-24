/**
 * 
 */

import { EducationContractShort } from './EducationContractShort';
import { EducationContractDocument } from './EducationContractDocument';


export class EducationContract extends EducationContractShort
{
    document: EducationContractDocument; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.document = new EducationContractDocument(json["document"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}