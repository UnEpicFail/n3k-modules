/**
 * Базовое понятие значения справочника
 */



export class ClassifierShort
{
    id: number; /*ИД*/
    name: string; /*Название*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.name = json["name"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}