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
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    capacity: Capacity; /**/
    category: ClassifierShort[]; /*Категория группы (для ДОО)*/
    place: ClassifierShort; /**/
    implement_form: ClassifierShort; /**/
    education_form: ClassifierShort; /**/
    stay_mode: ClassifierShort; /**/
    work_time: WorkTime[]; /*Время работы*/
    shifts: ClassifierShort[]; /*Смена*/
    meal: Meal[]; /*Питание*/
    is_sleep: boolean; /*Организация девного сна*/
    is_ready_for_completion: boolean; /*Готова для комплектования*/
    is_finish: boolean; /*Выпускная*/
    status: ClassifierShort; /**/
    specify: ClassifierShort; /**/
    parent: GroupShort; /**/
    head: TeacherShort; /**/

    constructor(json) {
        json = (json || {})
        super(json)
        this._isEmpty = this._isEmpty = this.isEmpty(json)
		this.capacity = new Capacity(json["capacity"]) ;
		this.category = []
		if(json["category"]){
			for (let i in json["category"]){
				this.category.push(new ClassifierShort(json["category"][i]))
			}
		}
		this.place = new ClassifierShort(json["place"]) ;
		this.implement_form = new ClassifierShort(json["implement_form"]) ;
		this.education_form = new ClassifierShort(json["education_form"]) ;
		this.stay_mode = new ClassifierShort(json["stay_mode"]) ;
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
		this.status = new ClassifierShort(json["status"]) ;
		this.specify = new ClassifierShort(json["specify"]) ;
		this.parent = new GroupShort(json["parent"]) ;
		this.head = new TeacherShort(json["head"]) ;
       
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