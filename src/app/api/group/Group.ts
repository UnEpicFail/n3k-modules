/**
 * 
 */

import { GroupShort } from '../common/GroupShort';
import { Capacity } from '../common/Capacity';
import { ClassifierShort } from '../common/ClassifierShort';
import { WorkTime } from '../common/WorkTime';
import { Meal } from '../common/Meal';
import { TeacherShort } from '../common/TeacherShort';


export class Group extends GroupShort
{
    capacity: Capacity; /**/
    category: ClassifierShort[]; /*Категория группы (для ДОО)*/
    place: ClassifierShort; /**/
    implement_form: ClassifierShort; /**/
    education_form: ClassifierShort; /**/
    stay_mode: ClassifierShort; /**/
    work_time: WorkTime[]; /*Время работы*/
    shifts: ClassifierShort[]; /*Смена*/
    meal: Meal[]; /*Питание*/
    is_sleep: string; /*Организация девного сна*/
    is_ready_for_completion: string; /*Готова для комплектования*/
    is_finish: string; /*Выпускная*/
    status: ClassifierShort; /**/
    specify: ClassifierShort; /**/
    parent: GroupShort; /**/
    head: TeacherShort; /**/

    constructor(json) {
        json = (json || {})
        super(json)
		this.capacity = json["capacity"] ? new Capacity(json["capacity"]) : null ;
		this.category = []
		if(json["category"]){
			for (let i in json["category"]){
				this.category.push(new ClassifierShort(json["category"][i]))
			}
		}
		this.place = json["place"] ? new ClassifierShort(json["place"]) : null ;
		this.implement_form = json["implement_form"] ? new ClassifierShort(json["implement_form"]) : null ;
		this.education_form = json["education_form"] ? new ClassifierShort(json["education_form"]) : null ;
		this.stay_mode = json["stay_mode"] ? new ClassifierShort(json["stay_mode"]) : null ;
		this.work_time = []
		if(json["work_time"]){
			for (let i in json["work_time"]){
				this.work_time.push(new WorkTime(json["work_time"][i]))
			}
		}
		this.shifts = []
		if(json["shifts"]){
			for (let i in json["shifts"]){
				this.shifts.push(new ClassifierShort(json["shifts"][i]))
			}
		}
		this.meal = []
		if(json["meal"]){
			for (let i in json["meal"]){
				this.meal.push(new Meal(json["meal"][i]))
			}
		}
		this.is_sleep = json["is_sleep"] || null;
		this.is_ready_for_completion = json["is_ready_for_completion"] || null;
		this.is_finish = json["is_finish"] || null;
		this.status = json["status"] ? new ClassifierShort(json["status"]) : null ;
		this.specify = json["specify"] ? new ClassifierShort(json["specify"]) : null ;
		this.parent = json["parent"] ? new GroupShort(json["parent"]) : null ;
		this.head = json["head"] ? new TeacherShort(json["head"]) : null ;
       
    }

    keys() {
        return Object.keys(this)
    }
}