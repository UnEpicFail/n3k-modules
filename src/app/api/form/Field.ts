/**
 * Версия формы
 */

import { FieldGroup } from './FieldGroup';
import { FieldValue } from './FieldValue';


export class Field
{
    _isEmpty: boolean /*указывает на то пустой ли объект*/
    id: number; /*Идентификатор в БД*/
    code: string; /*Код поля*/
    sort: number; /*Порядок сортировки*/
    group: FieldGroup[]; /*Поля формы*/
    type: string; /*Тип*/
    label: string; /*Подпись*/
    title: string; /*Заголовок*/
    multiplicity: string; /*Множественность вариантов значений/ответов*/
    answers_count_limit: number; /*Ограничение на количество ответов/значений*/
    values: FieldValue[]; /*Значения/варианты ответа для поля*/

    constructor(json) {
        json = (json || {})
        this._isEmpty = this.isEmpty(json)
		this.id = json["id"] || null;
		this.code = json["code"] || null;
		this.sort = json["sort"] || null;
		this.group = []
		if(json["group"]){
			for (let i in json["group"]){
				this.group.push(new FieldGroup(json["group"][i]))
			}
		}
		this.type = json["type"] || null;
		this.label = json["label"] || null;
		this.title = json["title"] || null;
		this.multiplicity = json["multiplicity"] || null;
		this.answers_count_limit = json["answers_count_limit"] || null;
		this.values = []
		if(json["values"]){
			for (let i in json["values"]){
				this.values.push(new FieldValue(json["values"][i]))
			}
		}
       
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