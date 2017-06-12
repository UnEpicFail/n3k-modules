/**
 * Мета данные образовательной программы
 */



export class ProgramMeta
{
    id: number; /*идентификатор*/
    is_acredited: string; /*Акредитована*/
    is_short_term_education_contract: string; /*Признак краткосрочного обучения по договорам*/
    is_use_dot: string; /*Использует ДОТ*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.is_acredited = json["is_acredited"] || null;
		this.is_short_term_education_contract = json["is_short_term_education_contract"] || null;
		this.is_use_dot = json["is_use_dot"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}