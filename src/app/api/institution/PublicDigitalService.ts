/**
 * 
 */

import { PublicDigitalServiceShort } from './PublicDigitalServiceShort';
import { Identity } from '../common/Identity';


export class PublicDigitalService extends PublicDigitalServiceShort
{
    institution_identity: Identity; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.institution_identity = json["institution_identity"] ? new Identity(json["institution_identity"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}