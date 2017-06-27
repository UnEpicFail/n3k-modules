/**
 * Состояние сущности
 */



export class EntityState
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    created_at: string; /*Когда создана*/
    updated_at: string; /*Когда обновлена*/
    deleted_at: string; /*Когда была удалена сущность*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.created_at = json["created_at"] || null;
		this.updated_at = json["updated_at"] || null;
		this.deleted_at = json["deleted_at"] || null;
       
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