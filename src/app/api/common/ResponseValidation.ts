/**
 * Структура ошибок валидации запроса
 */



export class ResponseValidation
{
    field: string[]; /**/
    type: string; /**/
    text: string; /**/

    constructor(json) {
        json = (json || {})
		this.field = []
		if(json["field"]){
			for (let i in json["field"]){
				this.field.push(json["field"][i] || null)
			}
		}
		this.type = json["type"] || null;
		this.text = json["text"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}