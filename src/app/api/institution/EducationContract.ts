/**
 * 
 */

import { EducationContractShort } from './EducationContractShort';
import { EducationContractDocument } from './EducationContractDocument';


export class EducationContract extends EducationContractShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    document: EducationContractDocument[]; /*Документы*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.document = []
		if(json["document"]){
			for (let i in json["document"]){
				this.document.push(new EducationContractDocument(json["document"][i]))
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