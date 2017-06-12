/**
 * 
 */

import { BuildingShort } from './BuildingShort';
import { Capacity } from '../common/Capacity';
import { Address } from '../common/Address';
import { ClassifierShort } from '../common/ClassifierShort';
import { Room } from './Room';
import { PlaceEquipment } from './PlaceEquipment';


export class Building extends BuildingShort
{
    capacity: Capacity; /**/
    address: Address; /**/
    type: ClassifierShort; /**/
    terrain: ClassifierShort; /**/
    rooms: Room[]; /*Помещения*/
    equipment: PlaceEquipment[]; /*Оснащение*/

    constructor(json) {
        json = (json || {})
        super(json)
		this.capacity = json["capacity"] ? new Capacity(json["capacity"]) : null ;
		this.address = json["address"] ? new Address(json["address"]) : null ;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.terrain = json["terrain"] ? new ClassifierShort(json["terrain"]) : null ;
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