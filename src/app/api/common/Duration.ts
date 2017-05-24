/**
 * Длительность
 */



export class Duration
{
    year: number; /*В годах*/
    month: number; /*В месяцах*/
    hour: number; /*В часах*/

    constructor(json) {
        json = (json || {})
		this.year = json["year"] || null;
		this.month = json["month"] || null;
		this.hour = json["hour"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}