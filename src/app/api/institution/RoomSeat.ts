/**
 * Посадочные места в помещении
 */



export class RoomSeat
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор в БД*/
    row_number: number; /*Номер ряда*/
    seats: number; /*Количество мест в ряду*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.row_number = json["row_number"] || null;
		this.seats = json["seats"] || null;
       
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