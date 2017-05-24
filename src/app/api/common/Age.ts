/**
 * Возрастная группа
 */



export class Age
{
    from: number; /*От*/
    to: number; /*До*/

    constructor(json) {
        json = (json || {})
		this.from = json["from"] || null;
		this.to = json["to"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }
}