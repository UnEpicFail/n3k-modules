/**
 * Значение/вариант ответа для поля
 */



export class FieldValue
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор в БД*/
    weight: number; /*Вес ответа*/
    title: number; /*Номер версии*/
    sort: number; /*Порядок сортировки*/
    is_correct: boolean; /*Является правильным ответом*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.weight = json["weight"] || null;
		this.title = json["title"] || null;
		this.sort = json["sort"] || null;
		this.is_correct = json["is_correct"] || null;
       
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