/**
 * Организация питания
 */

import { ClassifierShort } from './ClassifierShort';


export class Meal
{
    id: string; /*Идентификатор в БД*/
    is_available: string; /*С питанием/Без питания*/
    hot_breakfast: ClassifierShort[]; /*Горячее питание (завтрак)*/
    hot_lunch: ClassifierShort[]; /*Горячее питание (Обед)*/
    hot_dinner: ClassifierShort[]; /*Горячее питание (Ужин)*/

    constructor(json) {
        json = (json || {})
		this.id = json["id"] || null;
		this.is_available = json["is_available"] || null;
		this.hot_breakfast = []
		if(json["hot_breakfast"]){
			for (let i in json["hot_breakfast"]){
				this.hot_breakfast.push(new ClassifierShort(json["hot_breakfast"][i]))
			}
		}
		this.hot_lunch = []
		if(json["hot_lunch"]){
			for (let i in json["hot_lunch"]){
				this.hot_lunch.push(new ClassifierShort(json["hot_lunch"][i]))
			}
		}
		this.hot_dinner = []
		if(json["hot_dinner"]){
			for (let i in json["hot_dinner"]){
				this.hot_dinner.push(new ClassifierShort(json["hot_dinner"][i]))
			}
		}
       
    }

    keys() {
        return Object.keys(this)
    }
}