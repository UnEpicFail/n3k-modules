/**
 * Мета данные портфолио
 */

import { ClassifierShort } from '../common/ClassifierShort';


export class PortfolioMeta
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
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
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.academic_degree = new ClassifierShort(json["academic_degree"]) ;
		this.academic_title = new ClassifierShort(json["academic_title"]) ;
		this.scientific_adviser = json["scientific_adviser"] || null;
		this.product = json["product"] || null;
		this.education_level = new ClassifierShort(json["education_level"]) ;
		this.sport_event_type = new ClassifierShort(json["sport_event_type"]) ;
		this.sport_kind = new ClassifierShort(json["sport_kind"]) ;
		this.art_kind = new ClassifierShort(json["art_kind"]) ;
		this.sport_result = new ClassifierShort(json["sport_result"]) ;
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (typeof json !== 'object'){
            return true
        }
        
        let res = true 
        Object.keys(json).map(i => {
            if (Array.isArray(json[i])){
                json[i].map(j => {
                    res = res && this.isEmpty(json[i][j])
                })
            } else if (typeof json[i] === 'object') {
                res = res && this.isEmpty(json[i])
            } else {
                res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
            }
        })
        return res
    }
}