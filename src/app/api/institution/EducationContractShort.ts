/**
 * Договор с учереждениями на осуществление образовательной деятельности, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';


export class EducationContractShort
{
    identity: Identity; /**/
    entity_state: EntityState; /**/
    institution_identity: Identity; /**/
    subject: ClassifierShort; /**/
    group_count: number; /*Количество групп*/
    contragent_institution: string; /*Название учереждения с которым подписан договор*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.institution_identity = new Identity(json["institution_identity"]) ;
		this.subject = new ClassifierShort(json["subject"]) ;
		this.group_count = json["group_count"] || null;
		this.contragent_institution = json["contragent_institution"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}