/**
 * 
 */

import { BuildingShort } from './BuildingShort';
import { Identity } from '../common/Identity';
import { Capacity } from '../common/Capacity';
import { Address } from '../common/Address';
import { ClassifierShort } from '../common/ClassifierShort';
import { Room } from './Room';
import { PlaceEquipment } from './PlaceEquipment';


export class Building extends BuildingShort
{
    institution_identity: Identity; /**/
    capacity: Capacity; /**/
    address: Address; /**/
    type: ClassifierShort; /**/
    terrain: ClassifierShort; /**/
    rooms: Room[]; /*Помещения*/
    equipment: PlaceEquipment[]; /*Оснащение*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.institution_identity = new Identity(json["institution_identity"]);
		this.capacity = new Capacity(json["capacity"]);
		this.address = new Address(json["address"]);
		this.type = new ClassifierShort(json["type"]);
		this.terrain = new ClassifierShort(json["terrain"]);
		this.rooms = []
		if(json["rooms"]){
			for (let i in json["rooms"]){
				this.rooms.push(new Room(json["rooms"][i]))
			}
		}
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