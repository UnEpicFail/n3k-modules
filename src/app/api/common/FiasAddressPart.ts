/**
 * Часть адреса ФИАС
 */



export class FiasAddressPart
{
    code: string; /*ФИАС Код ареса*/
    name: string; /*Адрес тестом*/

    constructor(json) {
        json = (json || {})
		this.code = json["code"] || null;
		this.name = json["name"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}