/**
 * Оснащение конктретного места
 */

import { Equipment } from './Equipment';


export class PlaceEquipment
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор БД*/
    equipment: Equipment; /**/
    quantity: number; /*Количество*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.equipment = new Equipment(json["equipment"]) ;
		this.quantity = json["quantity"] || null;
       
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