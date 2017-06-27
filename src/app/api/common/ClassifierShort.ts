/**
 * Базовое понятие значения справочника
 */



export class ClassifierShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*ИД*/
    code: string; /*Код*/
    name: string; /*Название*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.code = json["code"] || null;
		this.name = json["name"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (typeof json !== 'object'){
            return true
        }
        
        let res = true 
        Object.keys(json).map(i => {
            if (Array.isArray(json[i])){
                json[i].map(j => {
                    res = res && this.isEmpty(json[i][j])
                })
            } else if (typeof json[i] === 'object') {
                res = res && this.isEmpty(json[i])
            } else {
                res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
            }
        })
        return res
    }
}