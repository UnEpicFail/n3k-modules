/**
 * Орган общественного управления
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class PublicAdministration
{
    id: string; /*Идентификатор БД*/
    form: ClassifierShort; /**/
    foundation_cause: string; /*Основание для создания*/
    foundation_date: string; /*Дата создания*/
    liquidation_date: string; /*Дата ликвидации*/
    powers: string; /*Полномочия*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.form = new ClassifierShort(json["form"]);
		this.foundation_cause = json["foundation_cause"] || null;
		this.foundation_date = json["foundation_date"] || null;
		this.liquidation_date = json["liquidation_date"] || null;
		this.powers = json["powers"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}