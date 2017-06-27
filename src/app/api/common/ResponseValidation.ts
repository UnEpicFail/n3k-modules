/**
 * Структура ошибок валидации запроса
 */



export class ResponseValidation
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    field: string[]; /**/
    type: string; /**/
    text: string; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
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