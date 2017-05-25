/**
 * Базовое понятие значения справочника
 */



export class ClassifierShort
{
    id: number; /*ИД*/
    code: string; /*Код*/
    name: string; /*Название*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.code = json["code"] || null;
		this.name = json["name"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}