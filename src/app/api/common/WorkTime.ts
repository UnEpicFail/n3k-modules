/**
 * Рабочее время
 */



export class WorkTime
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор в БД*/
    begin_time: string; /*Время начала работы*/
    end_time: string; /*Время окончания работы*/
    week_days: number[]; /*Название*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
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