/**
 * Ответ пагинтора
 */



export class Pagination
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    items: {}[]; /*Набор записей для вывода на текущей странице*/
    before: number; /*Номер предыдущей страницы*/
    current: number; /*Текущая страница*/
    last: number; /*Номер последней страницы*/
    next: number; /*Номер следующей страницы*/
    total_pages: number; /*Общее число страниц*/
    total_items: number; /*Число записей в источнике*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
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