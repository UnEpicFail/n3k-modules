/**
 * Штатное расписание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { OrganizationShort } from '../common/OrganizationShort';


export class StaffingTable
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    position_name: string; /*Название должности*/
    position: ClassifierShort; /**/
    organization: OrganizationShort; /**/
    rate: number; /*Ставка*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.position_name = json["position_name"] || null;
		this.position = json["position"] ? new ClassifierShort(json["position"]) : null ;
		this.organization = json["organization"] ? new OrganizationShort(json["organization"]) : null ;
		this.rate = json["rate"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}