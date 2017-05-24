/**
 * Информация о военной обязонности
 */



export class Military
{
    is_duty: string; /*Военнообязаный*/
    date_start: string; /*Дата начала службы*/
    date_end: string; /*Дата окончания службы*/
    rank: string; /*Воинское звание*/
    specialty: string; /*Военная специальность*/
    unit: string; /*Воиннская часть*/

    constructor(json) {
        json = (json || {})
		this.is_duty = json["is_duty"] || null;
		this.date_start = json["date_start"] || null;
		this.date_end = json["date_end"] || null;
		this.rank = json["rank"] || null;
		this.specialty = json["specialty"] || null;
		this.unit = json["unit"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}