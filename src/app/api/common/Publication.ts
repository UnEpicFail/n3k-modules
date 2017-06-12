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
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.image_url = json["image_url"] || null;
		this.title = json["title"] || null;
		this.body = json["body"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}