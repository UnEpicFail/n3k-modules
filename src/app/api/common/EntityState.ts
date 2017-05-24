/**
 * Состояние сущности
 */



export class EntityState
{
    created_at: string; /*Когда создана*/
    update_at: string; /*Когда обновлена*/
    deleted_at: string; /*Когда была удалена сущность*/

    constructor(json) {
        json = (json || {})
		this.created_at = json["created_at"] || null;
		this.update_at = json["update_at"] || null;
		this.deleted_at = json["deleted_at"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}