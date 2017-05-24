/**
 * Мета данные предмета
 */



export class SubjectMeta
{
    schoolbook: string; /*Учебник*/

    constructor(json) {
        json = (json || {})
		this.schoolbook = json["schoolbook"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}