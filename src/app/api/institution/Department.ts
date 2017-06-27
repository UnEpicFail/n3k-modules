/**
 * 
 */

import { DepartmentShort } from '../common/DepartmentShort';
import { Capacity } from '../common/Capacity';
import { JobShort } from '../common/JobShort';
import { Address } from '../common/Address';
import { Contact } from '../common/Contact';


export class Department extends DepartmentShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    capacity: Capacity; /**/
    head: JobShort; /**/
    address: Address; /**/
    contacts: Contact[]; /*Контактная информация*/
    is_based_on_another_organization: boolean; /*Разпологается на базе другого учреждения*/
    foundation_date: string; /*Дата создания*/
    liquidation_date: string; /*Дата ликвидации*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.capacity = new Capacity(json["capacity"]) ;
		this.head = new JobShort(json["head"]) ;
		this.address = new Address(json["address"]) ;
		this.contacts = []
		if(json["contacts"]){
			for (let i in json["contacts"]){
				this.contacts.push(new Contact(json["contacts"][i]))
			}
		}
		this.is_based_on_another_organization = json["is_based_on_another_organization"] || null;
		this.foundation_date = json["foundation_date"] || null;
		this.liquidation_date = json["liquidation_date"] || null;
       
    }

    keys() {
        return Object.keys(this)
    }

    isEmpty(json) {
        if (typeof json !== 'object'){
            return true
        }
        
        let res = true 
        Object.keys(json).map(i => {
            if (Array.isArray(json[i])){
                json[i].map(j => {
                    res = res && this.isEmpty(json[i][j])
                })
            } else if (typeof json[i] === 'object') {
                res = res && this.isEmpty(json[i])
            } else {
                res =  res && (json[i] === null || typeof(json[i]) === 'undefined') 
            }
        })
        return res
    }
}