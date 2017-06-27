/**
 * Описание инвалидности персоны
 */

import { ClassifierShort } from '../common/ClassifierShort';
import { DisabilityStartDocument } from './DisabilityStartDocument';
import { DisabilityEndDocument } from './DisabilityEndDocument';


export class Disability
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    category: ClassifierShort; /**/
    сause: ClassifierShort; /**/
    group: ClassifierShort; /**/
    date_start: string; /*Дата начала срока действия инвалидности*/
    date_end: string; /*Дата завершения срока действия инвалидности*/
    document_start: DisabilityStartDocument; /**/
    document_end: DisabilityEndDocument; /**/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.category = new ClassifierShort(json["category"]) ;
		this.сause = new ClassifierShort(json["сause"]) ;
		this.group = new ClassifierShort(json["group"]) ;
		this.date_start = json["date_start"] || null;
		this.date_end = json["date_end"] || null;
		this.document_start = new DisabilityStartDocument(json["document_start"]) ;
		this.document_end = new DisabilityEndDocument(json["document_end"]) ;
       
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