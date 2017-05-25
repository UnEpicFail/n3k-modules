/**
 * Сущность идентифицируемая в сторонней системе выступающей клиентом
 */



export class CID
{
    external_key: string; /*Идентификатор*/
    client_id: number; /*Идентификатор клиента системы*/

    constructor(json) {
        json = (json || {})
		this.external_key = json["external_key"] || null;
		this.client_id = json["client_id"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}