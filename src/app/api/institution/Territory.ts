/**
 * 
 */

import { TerritoryShort } from './TerritoryShort';
import { Identity } from '../common/Identity';
import { PlaceEquipment } from './PlaceEquipment';


export class Territory extends TerritoryShort
{
    institution_identity: Identity; /**/
    equipment: PlaceEquipment[]; /*Оснащение*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.institution_identity = json["institution_identity"] ? new Identity(json["institution_identity"]) : null ;
		this.equipment = []
		if(json["equipment"]){
			for (let i in json["equipment"]){
				this.equipment.push(new PlaceEquipment(json["equipment"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}