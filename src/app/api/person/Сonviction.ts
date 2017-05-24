/**
 * Судимость
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class Сonviction
{
    criminal_item: string; /*Статья*/
    punishment_period: string; /*Срок*/
    date_start: string; /*Дата начала отбытия срока*/
    date_end: string; /*Дата окончания отбытия срока*/
    punishment: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.criminal_item = json["criminal_item"] || null;
		this.punishment_period = json["punishment_period"] || null;
		this.date_start = json["date_start"] || null;
		this.date_end = json["date_end"] || null;
		this.punishment = new ClassifierShort(json["punishment"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}