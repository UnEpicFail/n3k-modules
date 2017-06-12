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
		this.academic_degree = json["academic_degree"] ? new ClassifierShort(json["academic_degree"]) : null ;
		this.academic_title = json["academic_title"] ? new ClassifierShort(json["academic_title"]) : null ;
		this.scientific_adviser = json["scientific_adviser"] || null;
		this.product = json["product"] || null;
		this.education_level = json["education_level"] ? new ClassifierShort(json["education_level"]) : null ;
		this.sport_event_type = json["sport_event_type"] ? new ClassifierShort(json["sport_event_type"]) : null ;
		this.sport_kind = json["sport_kind"] ? new ClassifierShort(json["sport_kind"]) : null ;
		this.art_kind = json["art_kind"] ? new ClassifierShort(json["art_kind"]) : null ;
		this.sport_result = json["sport_result"] ? new ClassifierShort(json["sport_result"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}