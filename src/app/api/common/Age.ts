/**
 * Возрастная группа
 */



export class Age
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    from: number; /*От*/
    to: number; /*До*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.from = json["from"] || null;
		this.to = json["to"] || null;
       
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