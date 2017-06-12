/**
 * Публикация
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';


export class Publication
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    image_url: string; /*Ссылка на основную картинку*/
    title: string; /*Заголовок*/
    body: string; /*Описание*/

    constructor(json) {
        json = (json || {})
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.image_url = json["image_url"] || null;
		this.title = json["title"] || null;
		this.body = json["body"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}