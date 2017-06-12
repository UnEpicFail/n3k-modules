/**
 * Оснащение конктретного места
 */

import { Equipment } from './Equipment';


export class PlaceEquipment
{
    id: number; /*Идентификатор БД*/
    equipment: Equipment; /**/
    quantity: number; /*Количество*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.equipment = json["equipment"] ? new Equipment(json["equipment"]) : null ;
		this.quantity = json["quantity"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}