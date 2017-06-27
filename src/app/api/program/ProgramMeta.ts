/**
 * Мета данные образовательной программы
 */



export class ProgramMeta
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*идентификатор*/
    is_acredited: boolean; /*Акредитована*/
    is_short_term_education_contract: boolean; /*Признак краткосрочного обучения по договорам*/
    is_use_dot: boolean; /*Использует ДОТ*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.is_acredited = json["is_acredited"] || null;
		this.is_short_term_education_contract = json["is_short_term_education_contract"] || null;
		this.is_use_dot = json["is_use_dot"] || null;
       
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