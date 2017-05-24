/**
 * Сущность идентифицируемая в системе образования
 */



export class Identity
{
    id: string; /*Идентификатор в БД*/
    uid: string; /*Идентификатор в региональном сегменте*/
    guid: string; /*Идентификатор в федеральном сегменте*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.uid = json["uid"] || null;
		this.guid = json["guid"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}