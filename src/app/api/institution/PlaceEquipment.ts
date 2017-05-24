/**
 * Оснащение конктретного места
 */

import { Equipment } from './Equipment';


export class PlaceEquipment
{
    id: string; /*Идентификатор БД*/
    equipment: Equipment; /**/
    quantity: number; /*Количество*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.equipment = new Equipment(json["equipment"]);
		this.quantity = json["quantity"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}