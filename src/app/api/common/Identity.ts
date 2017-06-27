/**
 * Сущность идентифицируемая в системе образования
 */

import { CID } from './CID';


export class Identity
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор в БД*/
    uid: string; /*Идентификатор в региональном сегменте*/
    guid: string; /*Идентификатор в федеральном сегменте*/
    cid: CID[]; /*Идентификаторы внешних систем*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
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