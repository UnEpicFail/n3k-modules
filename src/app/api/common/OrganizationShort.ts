/**
 * Короткое описание организации - ЮР. лица
 */

import { Identity } from './Identity';
import { EntityState } from './EntityState';


export class OrganizationShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    name: string; /*Наименование юридического лица*/
    parent: Identity; /**/
    inn: string; /*ИНН*/
    ogrn: string; /*ОГРН*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.name = json["name"] || null;
		this.parent = new Identity(json["parent"]) ;
		this.inn = json["inn"] || null;
		this.ogrn = json["ogrn"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}