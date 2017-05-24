/**
 * Описание тяжелой жизненной ситуации персоны
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class HardSituation
{
    situation: ClassifierShort; /**/
    date_start: string; /*Дата начала срока действия ситуации*/
    date_end: string; /*Дата завершения срока действия ситуации*/

    constructor(json) {
        json = (json || {})
		this.situation = new ClassifierShort(json["situation"]);
		this.date_start = json["date_start"] || null;
		this.date_end = json["date_end"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}