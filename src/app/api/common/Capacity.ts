/**
 * Вместительность, наполненность
 */



export class Capacity
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    total: number; /*Предельная наполняемость*/
    current: number; /*Фактическая наполненность*/
    vacant: number; /*Количество вакантных мест*/
    budget: number; /*Количество мест на бюджете*/
    contract: number; /*Количество контрактных мест*/
    target: number; /*Целевая наполненность*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.total = json["total"] || null;
		this.current = json["current"] || null;
		this.vacant = json["vacant"] || null;
		this.budget = json["budget"] || null;
		this.contract = json["contract"] || null;
		this.target = json["target"] || null;
       
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