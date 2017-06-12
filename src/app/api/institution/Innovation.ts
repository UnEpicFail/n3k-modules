/**
 * 
 */

import { InnovationShort } from './InnovationShort';
import { InnovationDocument } from './InnovationDocument';


export class Innovation extends InnovationShort
{
    document: InnovationDocument[]; /*Приказ*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.document = []
		if(json["document"]){
			for (let i in json["document"]){
				this.document.push(new InnovationDocument(json["document"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}