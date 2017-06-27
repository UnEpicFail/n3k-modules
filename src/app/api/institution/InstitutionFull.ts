/**
 * 
 */

import { Institution } from './Institution';
import { EducationService } from './EducationService';
import { Building } from './Building';
import { Territory } from './Territory';
import { Department } from './Department';
import { Innovation } from './Innovation';
import { EducationContract } from './EducationContract';
import { PublicDigitalService } from './PublicDigitalService';


export class InstitutionFull extends Institution
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    education_services: EducationService[]; /*Образовательные услуги*/
    buildings: Building[]; /*Здания*/
    territory: Territory[]; /*Территория*/
    departments: Department[]; /*Подразделения*/
    innovations: Innovation[]; /*Иновации*/
    education_contracts: EducationContract[]; /*Договора на осуществление образовательной деятельности*/
    public_digital_services: PublicDigitalService[]; /*Оказание гос. и муниципал. услуг в электронном виде*/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.education_services = []
		if(json["education_services"]){
			for (let i in json["education_services"]){
				this.education_services.push(new EducationService(json["education_services"][i]))
			}
		}
		this.buildings = []
		if(json["buildings"]){
			for (let i in json["buildings"]){
				this.buildings.push(new Building(json["buildings"][i]))
			}
		}
		this.territory = []
		if(json["territory"]){
			for (let i in json["territory"]){
				this.territory.push(new Territory(json["territory"][i]))
			}
		}
		this.departments = []
		if(json["departments"]){
			for (let i in json["departments"]){
				this.departments.push(new Department(json["departments"][i]))
			}
		}
		this.innovations = []
		if(json["innovations"]){
			for (let i in json["innovations"]){
				this.innovations.push(new Innovation(json["innovations"][i]))
			}
		}
		this.education_contracts = []
		if(json["education_contracts"]){
			for (let i in json["education_contracts"]){
				this.education_contracts.push(new EducationContract(json["education_contracts"][i]))
			}
		}
		this.public_digital_services = []
		if(json["public_digital_services"]){
			for (let i in json["public_digital_services"]){
				this.public_digital_services.push(new PublicDigitalService(json["public_digital_services"][i]))
			}
		}
       
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