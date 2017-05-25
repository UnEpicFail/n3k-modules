/**
 * Сущность идентифицируемая в системе образования
 */

import { CID } from './CID';


export class Identity
{
    id: number; /*Идентификатор в БД*/
    uid: string; /*Идентификатор в региональном сегменте*/
    guid: string; /*Идентификатор в федеральном сегменте*/
    cid: CID[]; /*Идентификаторы внешних систем*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.uid = json["uid"] || null;
		this.guid = json["guid"] || null;
		this.cid = []
		if(json["cid"]){
			for (let i in json["cid"]){
				this.cid.push(new CID(json["cid"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}