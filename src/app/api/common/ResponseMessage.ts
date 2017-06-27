/**
 * Сообщение от сервера
 */



export class ResponseMessage
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    type: number; /**/
    text: string; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.type = json["type"] || null;
		this.text = json["text"] || null;
       
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