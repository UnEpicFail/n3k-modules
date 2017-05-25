/**
 * Посадочные места в помещении
 */



export class RoomSeat
{
    id: number; /*Идентификатор в БД*/
    row_number: number; /*Номер ряда*/
    seats: number; /*Количество мест в ряду*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.row_number = json["row_number"] || null;
		this.seats = json["seats"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}