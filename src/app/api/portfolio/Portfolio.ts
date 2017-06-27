/**
 * Запись портфолио
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { PersonShort } from '../common/PersonShort';
import { ClassifierShort } from '../common/ClassifierShort';
import { PortfolioDocument } from './PortfolioDocument';
import { EstimateShort } from '../common/EstimateShort';
import { PortfolioMeta } from './PortfolioMeta';


export class Portfolio
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    datetime: string; /*Дата время проведения*/
    person: PersonShort; /**/
    type: ClassifierShort; /**/
    kind: ClassifierShort; /**/
    event_level: ClassifierShort; /**/
    involvement_level: ClassifierShort; /**/
    activity_kind: ClassifierShort; /**/
    awards: ClassifierShort[]; /*Награды*/
    rank: ClassifierShort; /**/
    documents: PortfolioDocument[]; /*Подтверждающие докуенты*/
    name: string; /*Название*/
    result: string; /*Результат*/
    score: EstimateShort; /**/
    comment: string; /*Коментарий*/
    participation_form: string; /*Форма участия*/
    meta: PortfolioMeta; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.datetime = json["datetime"] || null;
		this.person = new PersonShort(json["person"]) ;
		this.type = new ClassifierShort(json["type"]) ;
		this.kind = new ClassifierShort(json["kind"]) ;
		this.event_level = new ClassifierShort(json["event_level"]) ;
		this.involvement_level = new ClassifierShort(json["involvement_level"]) ;
		this.activity_kind = new ClassifierShort(json["activity_kind"]) ;
		this.awards = []
		if(json["awards"]){
			for (let i in json["awards"]){
				this.awards.push(new ClassifierShort(json["awards"][i]))
			}
		}
		this.rank = new ClassifierShort(json["rank"]) ;
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new PortfolioDocument(json["documents"][i]))
			}
		}
		this.name = json["name"] || null;
		this.result = json["result"] || null;
		this.score = new EstimateShort(json["score"]) ;
		this.comment = json["comment"] || null;
		this.participation_form = json["participation_form"] || null;
		this.meta = new PortfolioMeta(json["meta"]) ;
       
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