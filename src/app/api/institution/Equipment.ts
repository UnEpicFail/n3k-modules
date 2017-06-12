/**
 * Оснащение
 */

import { EntityState } from '../common/EntityState';


export class Equipment
{
    id: number; /*Идентификатор БД*/
    parent: number; /*Идентификатор родителя БД*/
    entity_state: EntityState; /**/
    code: string; /*Код*/
    name: string; /*Наименование*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.parent = json["parent"] || null;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.code = json["code"] || null;
		this.name = json["name"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}