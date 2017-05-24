/**
 * Вместительность, наполненность
 */



export class Capacity
{
    total: number; /*Предельная наполняемость*/
    current: number; /*Фактическая наполненность*/
    vacant: number; /*Количество вакантных мест*/
    budget: number; /*Количество мест на бюджете*/
    contract: number; /*Количество контрактных мест*/
    target: number; /*Целевая наполненность*/

    constructor(json) {
        json = (json || {})
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
}