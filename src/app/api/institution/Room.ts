/**
 * Помещение
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';
import { RoomSeat } from './RoomSeat';
import { PlaceEquipment } from './PlaceEquipment';


export class Room
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    number: string; /*Номер помещения*/
    type: ClassifierShort; /**/
    name: string; /*Наименование*/
    seats: RoomSeat[]; /*Посадочные места в помещении*/
    equipment: PlaceEquipment[]; /*Оснащение*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.number = json["number"] || null;
		this.type = new ClassifierShort(json["type"]) ;
		this.name = json["name"] || null;
		this.seats = []
		if(json["seats"]){
			for (let i in json["seats"]){
				this.seats.push(new RoomSeat(json["seats"][i]))
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