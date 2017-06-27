/**
 * Оснащение
 */

import { EntityState } from '../common/EntityState';


export class Equipment
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор БД*/
    parent: number; /*Идентификатор родителя БД*/
    entity_state: EntityState; /**/
    code: string; /*Код*/
    name: string; /*Наименование*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.parent = json["parent"] || null;
		this.entity_state = new EntityState(json["entity_state"]) ;
		this.code = json["code"] || null;
		this.name = json["name"] || null;
       
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