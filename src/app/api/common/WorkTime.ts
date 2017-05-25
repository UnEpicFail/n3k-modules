/**
 * Рабочее время
 */



export class WorkTime
{
    id: number; /*Идентификатор в БД*/
    begin_time: string; /*Время начала работы*/
    end_time: string; /*Время окончания работы*/
    week_days: number[]; /*Название*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.begin_time = json["begin_time"] || null;
		this.end_time = json["end_time"] || null;
		this.week_days = []
		if(json["week_days"]){
			for (let i in json["week_days"]){
				this.week_days.push(json["week_days"][i] || null)
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}