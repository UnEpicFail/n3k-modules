/**
 * Список справочников
 */



export class ListOfClassifiers
{

    constructor(json) {
        json = (json || {})
       
    }

    keys() {
        return Object.keys(this)
    }
}