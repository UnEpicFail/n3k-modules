/**
 * Сущность идентифицируемая в сторонней системе выступающей клиентом
 */



export class CID
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    external_key: string; /*Идентификатор*/
    client_id: number; /*Идентификатор клиента системы*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.external_key = json["external_key"] || null;
		this.client_id = json["client_id"] || null;
       
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