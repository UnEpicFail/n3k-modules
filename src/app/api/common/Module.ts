/**
 * Объект описывающий доступный модуль
 */



export class Module
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    name: string; /*Имя*/
    version: string; /*Версия модуля*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.name = json["name"] || null;
		this.version = json["version"] || null;
       
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