/**
 * Мета данные портфолио
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class PortfolioMeta
{
    academic_degree: ClassifierShort; /**/
    academic_title: ClassifierShort; /**/
    scientific_adviser: string; /*Научный руководитель*/
    product: string; /*Продукт*/
    education_level: ClassifierShort; /**/
    sport_event_type: ClassifierShort; /**/
    sport_kind: ClassifierShort; /**/
    art_kind: ClassifierShort; /**/
    sport_result: ClassifierShort; /**/

    constructor(json) {
        json = (json || {})
		this.academic_degree = new ClassifierShort(json["academic_degree"]);
		this.academic_title = new ClassifierShort(json["academic_title"]);
		this.scientific_adviser = json["scientific_adviser"] || null;
		this.product = json["product"] || null;
		this.education_level = new ClassifierShort(json["education_level"]);
		this.sport_event_type = new ClassifierShort(json["sport_event_type"]);
		this.sport_kind = new ClassifierShort(json["sport_kind"]);
		this.art_kind = new ClassifierShort(json["art_kind"]);
		this.sport_result = new ClassifierShort(json["sport_result"]);
       
    }

    keys() {
        return Object.keys(this)
    }
}