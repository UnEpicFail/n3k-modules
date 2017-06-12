/**
 * 
 */

import { EducationContractShort } from './EducationContractShort';
import { EducationContractDocument } from './EducationContractDocument';


export class EducationContract extends EducationContractShort
{
    document: EducationContractDocument[]; /*Документы*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.document = []
		if(json["document"]){
			for (let i in json["document"]){
				this.document.push(new EducationContractDocument(json["document"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}