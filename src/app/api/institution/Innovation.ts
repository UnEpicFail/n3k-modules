/**
 * 
 */

import { InnovationShort } from './InnovationShort';
import { InnovationDocument } from './InnovationDocument';


export class Innovation extends InnovationShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    document: InnovationDocument[]; /*Приказ*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.document = []
		if(json["document"]){
			for (let i in json["document"]){
				this.document.push(new InnovationDocument(json["document"][i]))
			}
		}
       
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