/**
 * 
 */

import { TerritoryShort } from './TerritoryShort';
import { PlaceEquipment } from './PlaceEquipment';


export class Territory extends TerritoryShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    equipment: PlaceEquipment[]; /*Оснащение*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this.isEmpty(json)
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