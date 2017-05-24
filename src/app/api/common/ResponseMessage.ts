/**
 * Сообщение от сервера
 */



export class ResponseMessage
{
    type: number; /**/
    text: string; /**/

    constructor(json) {
        json = (json || {})
		this.type = json["type"] || null;
		this.text = json["text"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}