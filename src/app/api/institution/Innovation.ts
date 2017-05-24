/**
 * 
 */

import { InnovationShort } from './InnovationShort';
import { Identity } from '../common/Identity';
import { InnovationDocument } from './InnovationDocument';


export class Innovation extends InnovationShort
{
    institution_identity: Identity; /**/
    document: InnovationDocument; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.institution_identity = new Identity(json["institution_identity"]);
		this.document = new InnovationDocument(json["document"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}