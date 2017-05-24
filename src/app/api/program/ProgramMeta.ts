/**
 * Мета данные образовательной программы
 */

import { Identity } from '../common/Identity';


export class ProgramMeta
{
    identity: Identity; /**/
    is_acredited: string; /*Акредитована*/
    is_short_term_education_contract: string; /*Признак краткосрочного обучения по договорам*/
    is_use_dot: string; /*Использует ДОТ*/

    constructor(json) {
        json = (json || {})
		this.identity = new Identity(json["identity"]);
		this.is_acredited = json["is_acredited"] || null;
		this.is_short_term_education_contract = json["is_short_term_education_contract"] || null;
		this.is_use_dot = json["is_use_dot"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}