/**
 * Мета данные персоны
 */



export class PersonMeta
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    previous_firstname: string; /*Предыдущее имя*/
    previous_surname: string; /*Предыдущая фамилия*/
    previous_middlename: string; /*Предыдущее отчество*/
    change_name_reason: string; /*Причина смены ФИО*/
    is_pensioner: boolean; /*Пенсионер*/
    is_well_maintained_apartment: boolean; /*Проживает в благоустроенной квартире*/
    is_labor_exchange: boolean; /*Стоит на бирже труда*/
    last_medical_commission_date: string; /*Дата последней мед коммиссии*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.previous_firstname = json["previous_firstname"] || null;
		this.previous_surname = json["previous_surname"] || null;
		this.previous_middlename = json["previous_middlename"] || null;
		this.change_name_reason = json["change_name_reason"] || null;
		this.is_pensioner = json["is_pensioner"] || null;
		this.is_well_maintained_apartment = json["is_well_maintained_apartment"] || null;
		this.is_labor_exchange = json["is_labor_exchange"] || null;
		this.last_medical_commission_date = json["last_medical_commission_date"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (json === null || typeof json !== 'object'){
            return true
        }

        let res = true 
        Object.keys(json).map(i => {
            if (i !== '_isEmpty') {
                if (Array.isArray(json[i])){
                    json[i].map(j => {
                        res = res && this.isEmpty(json[i][j])
                    })
                } else if (typeof json[i] === 'object') {
                    res = res && this.isEmpty(json[i])
                } else {
                    res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
                }
            }
        })
        return res
    }
}