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
		this.identity = json["identity"] ? new Identity(json["identity"]) : null ;
		this.entity_state = json["entity_state"] ? new EntityState(json["entity_state"]) : null ;
		this.datetime = json["datetime"] || null;
		this.person = json["person"] ? new PersonShort(json["person"]) : null ;
		this.type = json["type"] ? new ClassifierShort(json["type"]) : null ;
		this.kind = json["kind"] ? new ClassifierShort(json["kind"]) : null ;
		this.event_level = json["event_level"] ? new ClassifierShort(json["event_level"]) : null ;
		this.involvement_level = json["involvement_level"] ? new ClassifierShort(json["involvement_level"]) : null ;
		this.activity_kind = json["activity_kind"] ? new ClassifierShort(json["activity_kind"]) : null ;
		this.awards = []
		if(json["awards"]){
			for (let i in json["awards"]){
				this.awards.push(new ClassifierShort(json["awards"][i]))
			}
		}
		this.rank = json["rank"] ? new ClassifierShort(json["rank"]) : null ;
		this.documents = []
		if(json["documents"]){
			for (let i in json["documents"]){
				this.documents.push(new PortfolioDocument(json["documents"][i]))
			}
		}
		this.name = json["name"] || null;
		this.result = json["result"] || null;
		this.score = json["score"] ? new EstimateShort(json["score"]) : null ;
		this.comment = json["comment"] || null;
		this.participation_form = json["participation_form"] || null;
		this.meta = json["meta"] ? new PortfolioMeta(json["meta"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}