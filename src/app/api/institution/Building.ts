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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    capacity: Capacity; /**/
    address: Address; /**/
    type: ClassifierShort; /**/
    terrain: ClassifierShort; /**/
    rooms: Room[]; /*Помещения*/
    equipment: PlaceEquipment[]; /*Оснащение*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this.isEmpty(json)
		this.capacity = new Capacity(json["capacity"]) ;
		this.address = new Address(json["address"]) ;
		this.type = new ClassifierShort(json["type"]) ;
		this.terrain = new ClassifierShort(json["terrain"]) ;
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

    isEmpty(json) {
        if (json === null || typeof json !== 'object'){
            return true
        }

        let res = true 
        Object.keys(json).map(i => {
            if (i !== '_isEmpty') {
                if (Array.isArray(json[i])){
                    json[i].map(j => {
                        res = res && this.isEmpty(json[i][j])
                    })
                } else if (typeof json[i] === 'object') {
                    res = res && this.isEmpty(json[i])
                } else {
                    res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
                }
            }
        })
        return res
    }
}