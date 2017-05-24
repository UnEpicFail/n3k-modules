/**
 * 
 */



export class Level
{

    constructor(json) {
        json = (json || {})
       
    }

    keys() {
        return Object.keys(this)
    }
}