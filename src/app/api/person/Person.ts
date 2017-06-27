/**
 * 
 */

import { PersonShort } from '../common/PersonShort';
import { Address } from '../common/Address';
import { Contact } from '../common/Contact';
import { Representative } from './Representative';
import { Health } from './Health';
import { Disability } from './Disability';
import { HardSituation } from './HardSituation';
import { Сonviction } from './Сonviction';
import { Military } from './Military';
import { ClassifierShort } from '../common/ClassifierShort';
import { PersonMeta } from './PersonMeta';


export class Person extends PersonShort
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    birth_place: string; /*Место рождения*/
    death_place: string; /*Дата смерти*/
    registration_address: Address; /**/
    residential_address: Address; /**/
    temporary_address: Address; /**/
    contacts: Contact[]; /*Контактная информация*/
    representatives: Representative[]; /*Законные представители*/
    health: Health[]; /*Сведенья о здоровье*/
    disability: Disability[]; /*Сведенья о группе инвалидности*/
    hard_situation: HardSituation[]; /*Описание тяжелой жизненной ситуации*/
    convictions: Сonviction[]; /*Судимость*/
    military: Military[]; /*Военная обязанность*/
    deviant_behavior: ClassifierShort[]; /*Девиантное поведение*/
    meta: PersonMeta; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.birth_place = json["birth_place"] || null;
		this.death_place = json["death_place"] || null;
		this.registration_address = new Address(json["registration_address"]) ;
		this.residential_address = new Address(json["residential_address"]) ;
		this.temporary_address = new Address(json["temporary_address"]) ;
		this.contacts = []
		if(json["contacts"]){
			for (let i in json["contacts"]){
				this.contacts.push(new Contact(json["contacts"][i]))
			}
		}
		this.representatives = []
		if(json["representatives"]){
			for (let i in json["representatives"]){
				this.representatives.push(new Representative(json["representatives"][i]))
			}
		}
		this.health = []
		if(json["health"]){
			for (let i in json["health"]){
				this.health.push(new Health(json["health"][i]))
			}
		}
		this.disability = []
		if(json["disability"]){
			for (let i in json["disability"]){
				this.disability.push(new Disability(json["disability"][i]))
			}
		}
		this.hard_situation = []
		if(json["hard_situation"]){
			for (let i in json["hard_situation"]){
				this.hard_situation.push(new HardSituation(json["hard_situation"][i]))
			}
		}
		this.convictions = []
		if(json["convictions"]){
			for (let i in json["convictions"]){
				this.convictions.push(new Сonviction(json["convictions"][i]))
			}
		}
		this.military = []
		if(json["military"]){
			for (let i in json["military"]){
				this.military.push(new Military(json["military"][i]))
			}
		}
		this.deviant_behavior = []
		if(json["deviant_behavior"]){
			for (let i in json["deviant_behavior"]){
				this.deviant_behavior.push(new ClassifierShort(json["deviant_behavior"][i]))
			}
		}
		this.meta = new PersonMeta(json["meta"]) ;
       
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