/**
 * Ответ пагинтора
 */



export class Pagination
{
    items: {}[]; /*Набор записей для вывода на текущей странице*/
    before: number; /*Номер предыдущей страницы*/
    current: number; /*Текущая страница*/
    last: number; /*Номер последней страницы*/
    next: number; /*Номер следующей страницы*/
    total_pages: number; /*Общее число страниц*/
    total_items: number; /*Число записей в источнике*/

    constructor(json) {
        json = (json || {})
		this.items = []
		if(json["items"]){
			for (let i in json["items"]){
				this.items.push(json["items"][i] || {})
			}
		}
		this.before = json["before"] || null;
		this.current = json["current"] || null;
		this.last = json["last"] || null;
		this.next = json["next"] || null;
		this.total_pages = json["total_pages"] || null;
		this.total_items = json["total_items"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}