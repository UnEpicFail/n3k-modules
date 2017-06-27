/**
 * Государственные и муниципальные услуги в электронном виде, краткое описание
 */

import { Identity } from '../common/Identity';
import { EntityState } from '../common/EntityState';
import { ClassifierShort } from '../common/ClassifierShort';


export class PublicDigitalServiceShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    identity: Identity; /**/
    entity_state: EntityState; /**/
    institution_identity: Identity; /**/
    service: ClassifierShort; /**/
    epgu_url: string; /*Ссылка на ЕПГУ*/
    rpgu_url: string; /*Ссылка на РПГУ*/
    documentation_url: string; /*Ссылка на порядок оказания*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.identity = new Identity(json["identity"]) ;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.institution_identity = new Identity(json["institution_identity"]) ;
		this.service = new ClassifierShort(json["service"]) ;
		this.epgu_url = json["epgu_url"] || null;
		this.rpgu_url = json["rpgu_url"] || null;
		this.documentation_url = json["documentation_url"] || null;
       
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