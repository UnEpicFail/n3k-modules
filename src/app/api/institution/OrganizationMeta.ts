/**
 * Мета данные организации - ЮР лицо
 */



export class OrganizationMeta
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор БД*/
    previous_ogrn: string[]; /*Предыдущие ОГРН*/
    description: string; /*Описание юридического лица*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this._isEmpty = this.isEmpty(json)
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