/**
 * Значение/вариант ответа для поля
 */



export class FieldValue
{
    id: number; /*Идентификатор в БД*/
    weight: number; /*Вес ответа*/
    title: number; /*Номер версии*/
    sort: number; /*Порядок сортировки*/
    is_correct: string; /*Является правильным ответом*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.weight = json["weight"] || null;
		this.title = json["title"] || null;
		this.sort = json["sort"] || null;
		this.is_correct = json["is_correct"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}