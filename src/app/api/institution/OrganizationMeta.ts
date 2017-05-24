/**
 * Мета данные организации - ЮР лицо
 */



export class OrganizationMeta
{
    id: string; /*Идентификатор БД*/
    previous_ogrn: string[]; /*Предыдущие ОГРН*/
    description: string; /*Описание юридического лица*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.previous_ogrn = []
		if(json["previous_ogrn"]){
			for (let i in json["previous_ogrn"]){
				this.previous_ogrn.push(json["previous_ogrn"][i] || null)
			}
		}
		this.description = json["description"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}