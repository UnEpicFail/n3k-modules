/**
 * Версия формы
 */



export class FieldGroup
{
    id: number; /*Идентификатор в БД*/
    title: number; /*Номер версии*/
    sort: number; /*Порядок сортировки*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.title = json["title"] || null;
		this.sort = json["sort"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}