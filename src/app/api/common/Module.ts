/**
 * Объект описывающий доступный модуль
 */



export class Module
{
    name: string; /*Имя*/
    version: string; /*Версия модуля*/

    constructor(json) {
        json = (json || {})
		this.name = json["name"] || null;
		this.version = json["version"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}