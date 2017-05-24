/**
 * Описание инвалидности персоны
 */

import { ClassifierShort } from '../common/ClassifierShort';
import { DisabilityStartDocument } from './DisabilityStartDocument';
import { DisabilityEndDocument } from './DisabilityEndDocument';


export class Disability
{
    category: ClassifierShort; /**/
    сause: ClassifierShort; /**/
    group: ClassifierShort; /**/
    date_start: string; /*Дата начала срока действия инвалидности*/
    date_end: string; /*Дата завершения срока действия инвалидности*/
    document_start: DisabilityStartDocument; /**/
    document_end: DisabilityEndDocument; /**/

    constructor(json) {
        json = (json || {})
		this.category = new ClassifierShort(json["category"]);
		this.сause = new ClassifierShort(json["сause"]);
		this.group = new ClassifierShort(json["group"]);
		this.date_start = json["date_start"] || null;
		this.date_end = json["date_end"] || null;
		this.document_start = new DisabilityStartDocument(json["document_start"]);
		this.document_end = new DisabilityEndDocument(json["document_end"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}