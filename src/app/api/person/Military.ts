/**
 * Информация о военной обязонности
 */



export class Military
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    is_duty: boolean; /*Военнообязаный*/
    date_start: string; /*Дата начала службы*/
    date_end: string; /*Дата окончания службы*/
    rank: string; /*Воинское звание*/
    specialty: string; /*Военная специальность*/
    unit: string; /*Воиннская часть*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
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