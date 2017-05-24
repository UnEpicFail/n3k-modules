/**
 * Форма
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { FormVersion } from './FormVersion';


export class Form
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    code: string; /*Код формы*/
    versions: FormVersion[]; /*Версии формы*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.entity_state = new EntityState(json["entity_state"]);
		this.code = json["code"] || null;
		this.versions = []
		if(json["versions"]){
			for (let i in json["versions"]){
				this.versions.push(new FormVersion(json["versions"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}