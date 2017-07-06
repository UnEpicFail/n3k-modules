import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs'

import { Response } from './common/Response'
import { Institution } from './institution/Institution';
import { InstitutionFull } from './institution/InstitutionFull';
import { InstitutionList } from './institution/InstitutionList';
import { EducationService } from './institution/EducationService';
import { EducationServiceShort } from './institution/EducationServiceShort';
import { EducationServiceList } from './institution/EducationServiceList';

import { Building } from './institution/Building';
import { Department } from './institution/Department';
import { DepartmentList } from './institution/DepartmentList';

import { Innovation } from './institution/Innovation';
import { InnovationShort } from './institution/InnovationShort';
import { InnovationList } from './institution/InnovationList';

import { EducationContract } from './institution/EducationContract';
import { PublicDigitalService } from './institution/PublicDigitalService';
import { PublicDigitalServiceList } from './institution/PublicDigitalServiceList';
import { PublicDigitalServiceShort } from './institution/PublicDigitalServiceShort';
import { Territory } from './institution/Territory';
import { TerritoryList } from './institution/TerritoryList';
import { TerritoryShort } from './institution/TerritoryShort';
import { Pagination } from './common/Pagination'
import { EducationContractList } from './institution/EducationContractList'
import { EducationContractShort } from './institution/EducationContractShort'


@Injectable()
export class InstitutionService {

    constructor(public http: Http) { }

    /**
     * Получает образовательную организацию и связанное юр. лицо по ее id
     * @method
     * @name institutionGet
     *
     * @param {string} *id - Идентификатор организации 
     */
    public institutionGet<Response>(
        id: string,
    ) {
        let institution = new InstitutionFull({
            head: {
                position: {
                    id: 1,
                    name: 'Директор'
                },
                person: {
                    firstname: 'Игорь',
                    surname: 'Петров',
                    middlename: 'Владимирович',
                }
            },
            buildings: [
                {
                    identity: {
                        id: 1
                    },
                    name: 'Школа',
                    is_head: 'true'
                },
                {
                    identity: {
                        id: 2
                    },
                    name: 'Детский сад',
                },
                {
                    identity: {
                        id: 3
                    },
                    name: 'Администрация',
                },
                {
                    identity: {
                        id: 4
                    },
                    name: 'Спорткомплекс',
                }
            ],
            departments: [
                {
                    identity :{
                        id: 4
                    }, 
                    parent: {
                        id: 1
                    },
                    name: 'Администрация'
                },
                {
                    identity :{
                        id: 5
                    }, 
                    parent: {
                        id: 1
                    },
                    name: 'Спорткомплекс'
                },
                {
                    identity :{
                        id: 1
                    },
                    name: 'Школа'
                },
                {
                    identity :{
                        id: 2
                    },
                    name: 'Детский сад'
                },
                {
                    identity :{
                        id: 3
                    },
                    name: 'Спорткомплекс'
                },
                

            ],
            organization: {
                name: 'Наименовние юридического лица!!!',
                owner: {
                    firstname: 'Игорь',
                    surname: 'Петров',
                    middlename: 'Владимирович',
                    citizenship: {
                    country: {
                        name:'Российская Федерация'
                    }
                    }
                },
                okved: [
                    {
                    id: 1,
                    name: '80.10.1 (дошкольное образование)'
                    }
                ],
                okato: '49210804000',
                inn: 5303001700,
                okpo: 41231123,
                okfs: {
                    id: 1,
                    name: '49210804000'
                },
                oktmo: {
                    id: 1,
                    name: '49210804000'
                },
                okopf: {
                    id: 1,
                    name: '2 09 03 «Бюджетные учреждения»'
                },
                ogrn: '1025301788423',
                kpp: '530301001',
                okogu: '49210804000',
                district: {
                    id: 1,
                    name: 'Санкт-Петербург'
                },
                region: {
                    id: 1,
                    name: 'Петроградский'
                },
                status: {
                    id: 1,
                    name: 'Муниципальная'
                },
                type_of_ownership: {
                    id: 1,
                    name: 'Муниципальная'
                },
                address: {
                    identity: {
                        id: 1
                    },
                    region: {
                        id: 1,
                        name: 'Санкт-Петербург'
                    },
                    origin_address: 'Средний пр-кт, 20, 199004, г. Санкт-Петербург',
                    fias: {
                        region: {
                            id: 1,
                            name: 'Ленинградская область'
                        },
                        okrug: {},
                        district: {
                            id: 1,
                            name: 'Выборгский район'
                        },
                        city: {
                            id: 1,
                            name: 'г. Выборг'
                        },
                        incity: {},
                        municipality: {},
                        street: {
                            id: 1,
                            name: 'ул. Ленина'
                        },
                        building: {
                            id: 1,
                            name: 'д. 30'
                        },
                        flat: {},
                    }
                },
                founders_type: {
                    id: 1,
                    name: 'Сад'
                },
                meta: {
                    previous_ogrn: ['1025301788422'],
                    description: 'Описание Юридического Лица'
                }
            },
            type: {
                id: 1,
                name: 'Дошкольная образовательные организации'
            },
            foundation_date: '12.12.2016',
            ovz_group_types: [
                {
                    id: 1,
                    name: 'Компенсирующий'
                },
                {
                    id: 2,
                    name: 'Общеразвивающие'
                }
            ],
            work_time: [
                {
                    id: 1,
                    begin_time: '08:00:00',
                    end_time: '17:00:00',
                    week_days: [1,2,3,4,5]
                }
            ],
            shift: [
                {
                    id: 1,
                    name: '1 смена'
                },
                {
                    id: 2,
                    name: '2 смена'
                }
            ],
            meta: {
                site_characteristics: [
                    {
                        id: 1,
                        name: 'Компенсирующий'
                    },
                    {
                        id: 2,
                        name: 'Общеразвивающие'
                    }
                ],
                fgos_scoring: [
                    {
                        id: 1,
                        name: 'ФГОС1'
                    }
                ],
                is_small_setted: true,
                has_bookkeeping: true,
                is_budget_transfered: true,
                has_it_teachers: true,
                schedule_string: 'Круглосуточно',
                direction_for_ip: 'Прямое',
                statute_url: 'http://netrika.ru/',
                employee_count: 23,
                is_first_class: true,
                electronic_diary_url: 'http://netrika.ru/',
                electronic_diary_name: 'КАИС КРО',
                electronic_diary_vendor: 'Нетрика',
                educational_program_url:'http://netrika.ru/',
                additional_name: 'Муниципальное бюджетное дошкольное образовательное учреждение детский сад №1',
                reorganization_name: 'Муниципальное бюджетное дошкольное образовательное учреждение детский сад №1',
                occupied_place: 234,
                total_place: 270,
            },
            education_services: [
                {
                    identity: {
                        id:1
                    },
                    name: 'Дошкольное образование'
                }
            ],
            meals: [
                {
                    id: 1,
                    meal_type: {
                        id: 1,
                        name: 'Горячее питание'
                    },
                    financing_type: {
                        id: 1,
                        name: 'Платное'
                    }
                }
            ],
            education_language: {
                id: 1, 
                name: 'Русский'
            },
            publication: {
                image_url: 'https://vignette2.wikia.nocookie.net/waha/images/d/d8/Altdorf3.jpg/revision/latest/scale-to-width-down/1000?cb=20110409091612&path-prefix=ru',
                title: 'БДОУ детский сад №1 комбинированного вида'
            },
            name: 'Детский сад №1',
            full_name: 'Муниципальное бюджетное дошкольное образовательное учреждение детский сад №1 комбинированного вида',
            status: {
                id: 1,
                name: 'Функционирует'
            },
            district: {
                id: 1,
                name: 'Выборгский район'
            },
            levels: [
                {
                    id: 1,
                    name: 'Высшее образование'
                }
            ],
            address: {
                identity: {
                    id: 1
                },
                region: {
                    id: 1,
                    name: 'Санкт-Петербург'
                },
                origin_address: 'Средний пр-кт, 20, 199004, г. Санкт-Петербург',
                fias: {
                    region: {
                        id: 1,
                        name: 'Ленинградская область'
                    },
                    okrug: {},
                    district: {
                        id: 1,
                        name: 'Выборгский район'
                    },
                    city: {
                        id: 1,
                        name: 'г. Выборг'
                    },
                    incity: {},
                    municipality: {},
                    street: {
                        id: 1,
                        name: 'ул. Ленина'
                    },
                    building: {
                        id: 1,
                        name: 'д. 30'
                    },
                    flat: {},
                }
            },
            contacts: [
                {
                    type:{
                        id: 1,
                        code: 'site',
                        name: 'site'
                    },
                    value: 'spbstu.ru'
                },
                {
                    type:{
                        id: 2,
                        code: 'phone',
                        name: 'phone'
                    },
                    value: '88123237728'
                }
            ],
            description: 'Политехнический университет - многофункциональное государственное высшее учебное заведение. В 2010 году он получил статус национального исследовательского университета, что явилось признанием его роли и возможностей как в области подготовки кадров, так и в мультидисциплинарных научных исследованиях и разработках. В рейтинге технических университетов России Политехнический неизменно занимает ведущие позиции.',
            education_area: [
                {
                    identity: {
                        id: 1
                    },
                    origin_address: 'Московский 1',
                    fias: {
                        region: {
                            id: 1,
                            name: 'Ленинградская область'
                        },
                        okrug: {},
                        district: {
                            id: 1,
                            name: 'Выборгский район'
                        },
                        city: {
                            id: 1,
                            name: 'г. Выборг'
                        },
                        incity: {},
                        municipality: {},
                        street: {
                            id: 1,
                            name: 'ул. Ленина'
                        },
                        building: {
                            id: 1,
                            name: 'д. 30'
                        },
                        flat: {},
                    }
                    
                },
                {   identity: {
                        id: 2
                    },
                    origin_address: 'Московский 2',
                    fias: {
                        region: {
                            id: 1,
                            name: 'Ленинградская область'
                        },
                        okrug: {},
                        district: {
                            id: 1,
                            name: 'Выборгский район'
                        },
                        city: {
                            id: 1,
                            name: 'г. Выборг'
                        },
                        incity: {},
                        municipality: {},
                        street: {
                            id: 1,
                            name: 'ул. Ленина'
                        },
                        building: {
                            id: 1,
                            name: 'д. 30'
                        },
                        flat: {},
                    }
                },
                {
                    identity: {
                        id: 3
                    },
                    origin_address: 'Московский 3',
                    fias: {
                        region: {
                            id: 1,
                            name: 'Ленинградская область'
                        },
                        okrug: {},
                        district: {
                            id: 1,
                            name: 'Выборгский район'
                        },
                        city: {
                            id: 1,
                            name: 'г. Выборг'
                        },
                        incity: {},
                        municipality: {},
                        street: {
                            id: 1,
                            name: 'ул. Ленина'
                        },
                        building: {
                            id: 1,
                            name: 'д. 30'
                        },
                        flat: {},
                    }
                },
                {
                    identity: {
                        id: 4
                    },
                    origin_address: 'Московский 4',
                    fias: {
                        region: {
                            id: 1,
                            name: 'Ленинградская область'
                        },
                        okrug: {},
                        district: {
                            id: 1,
                            name: 'Выборгский район'
                        },
                        city: {
                            id: 1,
                            name: 'г. Выборг'
                        },
                        incity: {},
                        municipality: {},
                        street: {
                            id: 1,
                            name: 'ул. Ленина'
                        },
                        building: {
                            id: 1,
                            name: 'д. 30'
                        },
                        flat: {},
                    }
                },
            ],
            region: {
                id: 1,
                name: 'Санкт-Петербург'
            },
            identity: {
                id: 1
            }
        })

        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data:institution}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/institutions/institution/{id}';
        // let _body = '';
        // _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        // let _params = {
        //     headers: new Headers(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает образовательную услугу для УФТТ 3.0 ее id
     * @method
     * @name educationServiceGet
     *
     * @param {string} *id - Идентификатор образовательной услуги 
     */
    public educationServiceGet(
        id: string,
    ) {
        let _path = '/institutions/education_service/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает здание по его id
     * @method
     * @name buildingGet
     *
     * @param {string} *id - Идентификатор здания 
     */
    public buildingGet(
        id: string,
    ) {

        let building = new Building({
            identity: {
                id: 3
            },
            name: 'Администрация',
            address: {
                postal_index: '199004',
                fias: {
                    city: {
                        name: 'г. Великий Новгород'
                    },
                    street: {
                        name: 'Средний пр-кт'
                    },
                    building: {
                        name: '20'
                    }
                },
                longitude: 38.6, /*Долгота*/
                latitude: 55.847, /*Широта*/

            },
            is_head: 'Нет',
            status: {
                id: 1,
                name: ' Функционирует'
            },
            capacity: {
                 total: 346
            },
            type: {
                id: 1,
                name: 'Одноэтажное'
            },
            terrain: {
                id: 1,
                name: 'Сельская'
            },
            rooms:[
                {
                    identity: {
                        id: 1
                    },
                    number: '', /*Номер помещения*/
                    type: {
                        id: 1,
                        name: ''
                    },
                    name: 'Наличие сети Wi-Fi', /*Наименование*/
                    seats: [
                       {
                            id: 1,
                            row_number: 1,
                            seats: 20
                       },
                       {
                            id: 2,
                            row_number: 2,
                            seats: 3
                       } 
                    ], /*Посадочные места в помещении*/
                    equipment: [
                        
                    ] /*Оснащение*/  
                },
                {
                    identity: {
                        id: 2
                    },
                    number: '', /*Номер помещения*/
                    type: {
                        id: 1,
                        name: ''
                    },
                    name: 'Наличие локальной вычислительной сети', /*Наименование*/
                    seats: [
                       {
                            id: 1,
                            row_number: 1,
                            seats: 20
                       },
                       {
                            id: 2,
                            row_number: 2,
                            seats: 1
                       } 
                    ], /*Посадочные места в помещении*/
                    equipment: [
                        
                    ] /*Оснащение*/  
                },
                {
                    identity: {
                        id: 3
                    },
                    number: '', /*Номер помещения*/
                    type: {
                        id: 1,
                        name: ''
                    },
                    name: 'Вентиляция', /*Наименование*/
                    seats: [
                       {
                            id: 1,
                            row_number: 1,
                            seats: 10
                       },
                       {
                            id: 2,
                            row_number: 2,
                            seats: 4
                       } 
                    ], /*Посадочные места в помещении*/
                    equipment: [
                        
                    ] /*Оснащение*/  
                },
                {
                    identity: {
                        id: 4
                    },
                    number: '', /*Номер помещения*/
                    type: {
                        id: 1,
                        name: ''
                    },
                    name: 'Вахтер', /*Наименование*/
                    seats: [
                       {
                            id: 1,
                            row_number: 1,
                            seats: 10
                       },
                       {
                            id: 2,
                            row_number: 2,
                            seats: 5
                       } 
                    ], /*Посадочные места в помещении*/
                    equipment: [
                        
                    ] /*Оснащение*/  
                }
            ],
            equipment: [

            ] /*Оснащение*/
        })


        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data:building}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/institutions/building/{id}';
        // let _body = '';
        // _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        // let _params = {
        //     headers: new Headers(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает подразделение по его id
     * @method
     * @name departmentGet
     *
     * @param {string} *id - Идентификатор подразделения 
     */
    public departmentGet(
        id: string,
    ) {
        let department = new Department({
            identity: {
                id: 4
            },
            name: 'Администрация',
            parent:{
                id: 1
            },
            kind: {
                id: 1,
                name: 'Администрация'
            },
            capacity: {
                total: 346,
            },
            head: {
                identity: {
                    id: 1
                },
                entity_state: {},
                position_name: 'Заведующий',
                position: {
                    id: 1,
                    name: 'Заведующий'
                },
                person: {
                    identity: {
                        id: 1
                    },
                    firstname: 'Ирина',
                    surname: 'Семенова',
                    middlename: 'Александровна'
                }
            },
            address: {
                origin_address: 'Средний пр-кт, 20, 199004, г. Великий Новгород',
                fias: {
                    region: {
                        id: 1,
                        name: 'Ленинградская область'
                    },
                    okrug: {},
                    district: {
                        id: 1,
                        name: 'Выборгский район'
                    },
                    city: {
                        id: 1,
                        name: 'г. Выборг'
                    },
                    incity: {},
                    municipality: {},
                    street: {
                        id: 1,
                        name: 'ул. Ленина'
                    },
                    building: {
                        id: 1,
                        name: 'д. 30'
                    },
                    flat: {},
                },
                longitude: 38.6, /*Долгота*/
                latitude: 55.847, /*Широта*/
            },
            contacts: [
                {
                    identity: {
                        id: 1
                    },
                    type: {
                        id: 1,
                        name: 'Телефон'
                    },
                    value: '88123237728'
                },
                {
                    identity: {
                        id: 2
                    },
                    type: {
                        id: 2,
                        name: 'email'
                    },
                    value: 'gymn024@mail.ru'
                },
                {
                    identity: {
                        id: 3
                    },
                    type: {
                        id: 3,
                        name: 'сайт'
                    },
                    value: 'gymn024.ru'
                },
                {
                    identity: {
                        id: 4
                    },
                    type: {
                        id: 4,
                        name: 'Дополнительный телефон'
                    },
                    value: '88123237728'
                },
                {
                    identity: {
                        id: 5
                    },
                    type: {
                        id: 5,
                        name: 'Факс'
                    },
                    value: '88123237728'
                },
            ],
            is_based_on_another_organization: 'Да', /*Разпологается на базе другого учреждения*/
            foundation_date: '12.12.2016', /*Дата создания*/
            liquidation_date: '12.12.2016', /*Дата ликвидации*/
        })



        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data:department}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;


        // let _path = '/institutions/department/{id}';
        // let _body = '';
        // _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        // let _params = {
        //     headers: new Headers(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает иновацию по его id
     * @method
     * @name innovationGet
     *
     * @param {string} *id - Идентификатор иновации 
     */
    public innovationGet(
        id: string,
    ) {

        let innovation = new Innovation({
            identity: {
                id: 1
            },
            entity_state: { 
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            name: 'Сбацай лишнее',
            level: {
                id: 1,
                name: 'Федеральный'
            },
            activity_direction: {
                id: 1,
                name: 'Занятия техническим творчеством и программированием (при Центрах новых информационных технологий, фаблабах – мастерских и др.)'
            },
            activity_start: '',
            activity_end: '',
            institution_identity: {
                id: 1
            },
            document: [{
                identity: {
                    id: 1
                },
                entity_state: {
                    created_at: '',
                    updated_at: '',
                    deleted_at: '',
                },
                series: '2634',
                number: '234153',
                reg_number: '2234124',
                reg_date: '20.12.2017',
                issue_date: '20.12.2017',
                issued_by: 'ГОУ СОШ №41',
                valid_from: '20.12.2017',
                valid_to: '20.12.2017',
                description: `Очевидно проверяется, что постоянная величина стремится к нулю. Художественный талант, в первом приближении, изменяем. Теорема, на первый взгляд, положительна. Типическое, в первом приближении, осмысленно иллюстрирует непосредственный степенной ряд. Система координат использует интеграл Дирихле.
                            Однако не все знают, что арифметическая прогрессия имитирует анормальный интеграл по ориентированной области. Художественный талант однородно трансформирует элитарный эпитет. Теорема Гаусса - Остроградского стремительно продолжает интеграл Фурье. Математический анализ, как следует из вышесказанного, изящно развивает сангвиник.
                            Социальная психология искусства вызывает комплекс априорной бисексуальности. Поле направлений последовательно. Умножение двух векторов (векторное) изящно соответствует изоморфный текст.`,
                type: {
                    id: 1,
                    name: ''
                },
                status: {
                    id: 1,
                    name: 'Действителен'
                },
            }]
        })


        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data:innovation}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/institutions/innovation/{id}';
        // let _body = '';
        // _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        // let _params = {
        //     headers: new Headers(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает договор на осуществление образовательной деятельности по его id
     * @method
     * @name educationContractGet
     *
     * @param {string} *id - Идентификатор договора 
     */
    public educationContractGet(
        id: string,
    ) {

        let educationContract = new EducationContract({
            identity: {
                id:1
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: ''
            },
            subject: {
                id: 1,
                name: 'Дуновение жожоба'
            },
            group_count: 2,
            contragent_institution: 'ГОУ СОШ № 41, ГОУ СОШ № 83',
            document: [{
                identity: {
                    id: 1
                },
                entity_state: {
                    created_at: '',
                    updated_at: '',
                    deleted_at: ''
                },
                series: '2634',
                number: '234153',
                reg_number: '2234124',
                reg_date: '20.12.2017',
                issue_date: '20.12.2017',
                issued_by: 'ГОУ СОШ №41',
                valid_from: '20.12.2017',
                valid_to: '20.12.2017',
                description: `Очевидно проверяется, что постоянная величина стремится к нулю. Художественный талант, в первом приближении, изменяем. Теорема, на первый взгляд, положительна. Типическое, в первом приближении, осмысленно иллюстрирует непосредственный степенной ряд. Система координат использует интеграл Дирихле.
                            Однако не все знают, что арифметическая прогрессия имитирует анормальный интеграл по ориентированной области. Художественный талант однородно трансформирует элитарный эпитет. Теорема Гаусса - Остроградского стремительно продолжает интеграл Фурье. Математический анализ, как следует из вышесказанного, изящно развивает сангвиник.
                            Социальная психология искусства вызывает комплекс априорной бисексуальности. Поле направлений последовательно. Умножение двух векторов (векторное) изящно соответствует изоморфный текст.`,
                type: {
                    id: 1,
                    name: ''
                },
                status: {
                    id: 1,
                    name: 'Действителен'
                }
            }]
        })


        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data:educationContract}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/institutions/education_contract/{id}';
        // let _body = '';
        // _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        // let _params = {
        //     headers: new Headers(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает услуги в электронном виде по id
     * @method
     * @name publicDigitalServiceGet
     *
     * @param {string} *id - Идентификатор услуги 
     */
    public publicDigitalServiceGet(
        id: string,
    ) {
        let _path = '/institutions/public_digital_service/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает территорию по id
     * @method
     * @name territoryGet
     *
     * @param {string} *id - Идентификатор территории 
     */
    public territoryGet(
        id: string,
    ) {

        let territory = new TerritoryShort({
            identity: {
                id: 1
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: ''
            },
            name: 'Приусадебная',
            institution_identity: {
                id: 2
            },
            equipment: [
                {
                    id: 1,
                    equipment: {
                        id: 1,
                        parent: '',
                        entity_state: {
                            created_at: '',
                            updated_at: '',
                            deleted_at: ''
                        },
                        code: '',
                        name: ''
                    },
                    quantity: 123
                }
            ]
        })

        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: 
                      territory}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/institutions/territory/{id}';
        // let _body = '';
        // _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        // let _params = {
        //     headers: new Headers(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Удаляет образовательные организации и связанное юр. лицо, по списку id
     * @method
     * @name institutionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public institutionDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/institution/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстанавливает образовательные организации и связанное юр. лицо, по списку id
     * @method
     * @name institutionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public institutionRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/institution/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Удаляет образовательные услуги для УФТТ 3.0, по списку id
     * @method
     * @name educationServiceDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public educationServiceDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/education_service/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстнавливает образовательные услуги для УФТТ 3.0, по списку id
     * @method
     * @name educationServiceRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public educationServiceRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/education_service/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Удаляет здания, по списку id
     * @method
     * @name buildingDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public buildingDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/building/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстанавливает здания, по списку id
     * @method
     * @name buildingRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public buildingRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/building/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Удаляет подразделения, по списку id
     * @method
     * @name departmentDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public departmentDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/department/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстанавливает подразделения, по списку id
     * @method
     * @name departmentRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public departmentRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/department/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Удаляет иновации, по списку id
     * @method
     * @name innovationDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public innovationDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/innovation/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстанавливает иновации, по списку id
     * @method
     * @name innovationRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public innovationRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/innovation/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Удаляет договора на осуществление образовательной деятельности, по списку id
     * @method
     * @name educationContractDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public educationContractDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/education_contract/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстанавливает договора на осуществление образовательной деятельности, по списку id
     * @method
     * @name educationContractRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public educationContractRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/education_contract/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Удаляет услуги в электронном виде, по списку id
     * @method
     * @name publicDigitalServiceDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public publicDigitalServiceDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/public_digital_service/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстанавливает услуги в электронном виде, по списку id
     * @method
     * @name publicDigitalServiceRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public publicDigitalServiceRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/public_digital_service/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Удаляет территорию, по списку id
     * @method
     * @name territoryDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public territoryDelete(
        p_ids: string,
    ) {
        let _path = '/institutions/territory/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Восстанавливает территорию, по списку id
     * @method
     * @name territoryRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public territoryRestore(
        p_ids: string,
    ) {
        let _path = '/institutions/territory/restore';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
    /**
     * Получает список образовательных организаций в постраничном разбиении
     * @method
     * @name institutionList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_regions - Регионы 
     * @param {string} p_districts - Районы 
     * @param {string} p_institution_types - Типы образовательной организации 
     * @param {string} p_institution_kinds - Вид образования 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_okopfs - ОКОПФ 
     * @param {string} p_okfses - ОКФС 
     * @param {string} p_institution_statuses - Статус образовательной организации 
     * @param {string} p_jurisdictions - Подведомственность 
     * @param {string} p_education_orientations - Направленность 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public institutionList(
        p_limit?: number,
        p_page?: number,
        p_query?: number[],
        p_regions?: number[],
        p_districts?: number[],
        p_institution_types?: number[],
        p_institution_kinds?: number[],
        p_education_levels?: number[],
        p_okopfs?: number[],
        p_okfses?: number[],
        p_institution_statuses?: number[],
        p_jurisdictions?: number[],
        p_education_orientations?: number[],
        p_deleted?: boolean,
    ) {

        let list = []

        for (let i=0; i<20; i+=1) {
            list.push({
                identity: {id: i+1},
                name:'Детский сад №1 "Калинка"',
                status: {id:1, name:'Функционирует'},
                address: {
                    origin_address: 'Ленинградская область. г. Выборг. ул. Ленина, д. 3'
                },
                contacts: [
                    {type:{id:1, code:'phone'}, value: '8813454332'},
                    {type:{id:2, code:'email'}, value: 'gboo1.ru'}
                ]
            })
        } 

        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new InstitutionList({
                items: list,
                before: 0,
                current: 1,
                last: 20,
                next: 2,
                total_pages: 20,
                total_items: 400
              })}))
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;


        // let _path = '/institutions/institution/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_regions !== 'undefined')
        //     _params.search.append('p_regions', ''+p_regions); 
        // if (typeof p_districts !== 'undefined')
        //     _params.search.append('p_districts', ''+p_districts); 
        // if (typeof p_institution_types !== 'undefined')
        //     _params.search.append('p_institution_types', ''+p_institution_types); 
        // if (typeof p_institution_kinds !== 'undefined')
        //     _params.search.append('p_institution_kinds', ''+p_institution_kinds); 
        // if (typeof p_education_levels !== 'undefined')
        //     _params.search.append('p_education_levels', ''+p_education_levels); 
        // if (typeof p_okopfs !== 'undefined')
        //     _params.search.append('p_okopfs', ''+p_okopfs); 
        // if (typeof p_okfses !== 'undefined')
        //     _params.search.append('p_okfses', ''+p_okfses); 
        // if (typeof p_institution_statuses !== 'undefined')
        //     _params.search.append('p_institution_statuses', ''+p_institution_statuses); 
        // if (typeof p_jurisdictions !== 'undefined')
        //     _params.search.append('p_jurisdictions', ''+p_jurisdictions); 
        // if (typeof p_education_orientations !== 'undefined')
        //     _params.search.append('p_education_orientations', ''+p_education_orientations); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список образовательных услуг для УФТТ 3.0 в постраничном разбиении
     * @method
     * @name educationServiceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {number[]} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public educationServiceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: number[],
        p_deleted?: string,
    ) {


        let educationService1 = new EducationServiceShort({
            identity: {
                id: 1
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            kind: {
                id: 1,
                name: 'занятия с психологом'
            },
            name: 'Реализация основной общеобразовательной программы дошкольного образования',
            direction: {
                id: 1,
                name: 'Химико-биологический'
            },
        })
        let educationService2 = new EducationServiceShort({
            identity: {
                id: 2
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            kind: {
                id: 1,
                name: 'занятия с психологом'
            },
            name: 'Реализация основной программы профессионального обучения - программы переподготовки рабочих',
            direction: {
                id: 1,
                name: 'Химико-биологический'
            },
        })
        let educationService3 = new EducationServiceShort({
            identity: {
                id: 3
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            kind: {
                id: 1,
                name: 'занятия с психологом'
            },
            name: 'Реализация дополнительных профессиональных программ повышения квалификации',
            direction: {
                id: 1,
                name: 'Химико-биологический'
            },
        })
        let educationService4 = new EducationServiceShort({
            identity: {
                id: 4
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            kind: {
                id: 1,
                name: 'занятия с психологом'
            },
            name: 'Реализация основной профессионьной образовательной программы среднего профессионального образования - программы подготовки квалифицированных рабочих, служащих',
            direction: {
                id: 1,
                name: 'Химико-биологический'
            },
        })
        let educationService5 = new EducationServiceShort({
            identity: {
                id: 5
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            kind: {
                id: 1,
                name: 'занятия с психологом'
            },
            name: 'Реализация основной программы профессионального обучения - программы переподготовки рабочих, служащих',
            direction: {
                id: 1,
                name: 'Химико-биологический'
            },
        })
        let educationService6 = new EducationServiceShort({
            identity: {
                id: 6
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            kind: {
                id: 1,
                name: 'занятия с психологом'
            },
            name: 'Реализация дополнительных профессиональных программ повышения квалификации',
            direction: {
                id: 1,
                name: 'Химико-биологический'
            },
        })
        let educationService7 = new EducationServiceShort({
            identity: {
                id: 7
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            kind: {
                id: 1,
                name: 'занятия с психологом'
            },
            name: 'Реализация основной профессиональной образовательной программы среднего профессионального образования - программы подготовки квалифицированных рабочих, служащих',
            direction: {
                id: 1,
                name: 'Химико-биологический'
            },
        })


        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new Pagination({
                  items: [
                      educationService1,
                      educationService2,
                      educationService3,
                      educationService4,
                      educationService5,
                      educationService6,
                      educationService7,
                  ]
              })}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/institutions/education_service/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список зданий в постраничном разбиении
     * @method
     * @name buildingList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {number[]} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public buildingList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: number[],
        p_deleted?: string,
    ) {

        let list = [
                {
                    identity: {
                        id: 1
                    },
                    name: 'Школа',
                    is_head: 'true'
                },
                {
                    identity: {
                        id: 2
                    },
                    name: 'Детский сад',
                },
                {
                    identity: {
                        id: 3
                    },
                    name: 'Администрация',
                },
                {
                    identity: {
                        id: 4
                    },
                    name: 'Спорткомплекс',
                }
            ]

        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new Pagination({
                  items: list
              })}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;

        // let _path = '/institutions/building/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список подразделений в постраничном разбиении
     * @method
     * @name departmentList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {number[]} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public departmentList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: number[],
        p_deleted?: string,
    ) {

        let list = [
                {
                    identity :{
                        id: 4
                    }, 
                    parent: {
                        id: 1
                    },
                    name: 'Администрация'
                },
                {
                    identity :{
                        id: 5
                    }, 
                    parent: {
                        id: 1
                    },
                    name: 'Спорткомплекс'
                },
                {
                    identity :{
                        id: 1
                    },
                    name: 'Школа'
                },
                {
                    identity :{
                        id: 2
                    },
                    name: 'Детский сад'
                },
                {
                    identity :{
                        id: 3
                    },
                    name: 'Спорткомплекс'
                },
                

            ]

            let res = new Observable(observer => {
                setTimeout(() => {
                    observer.next(new Response({data:new DepartmentList({items:list})}));
                }, 1000);

                setTimeout(() => {
                    observer.complete();
                }, 3000);
                })

                return res;

        // let _path = '/institutions/department/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список иноваций в постраничном разбиении
     * @method
     * @name innovationList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {number[]} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public innovationList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: number[],
        p_deleted?: string,
    ) {

        let innovation1 = new InnovationShort({
            identity: {
                id: 1
            },
            entity_state: { 
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            name: 'Сбацай лишнее',
            level: {
                id: 1,
                name: ''
            },
            activity_direction: {
                id: 1,
                name: ''
            },
            activity_start: '',
            activity_end: '',

        })
        let innivation2 = new InnovationShort({
            identity: {
                id: 2
            },
            entity_state: { 
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            name: 'Убей в себе кредит',
            level: {
                id: 1,
                name: ''
            },
            activity_direction: {
                id: 1,
                name: ''
            },
            activity_start: '',
            activity_end: '',

        })
        

        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new Pagination({
                  items: [
                      innovation1,
                      innivation2
                  ]
              })}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;



        // let _path = '/institutions/innovation/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список договоров на осуществление образовательной деятельности в постраничном разбиении
     * @method
     * @name educationContractList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {number:[]} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public educationContractList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: number[],
        p_deleted?: string,
    ) {

        let contract1 = new EducationContractShort({
            identity: {
                id: 1
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: ''
            },
            subject: {
                id:1,
                name:'Дуновение жожоба'
            },
            group_count: 123,
            contragent_institution: ''
        });

        let contract2 = new EducationContractShort({
            identity: {
                id: 2
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: ''
            },
            subject: {
                id:1,
                name:'Убей в себе кредит'
            },
            group_count: 123,
            contragent_institution: ''
        });
        
        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new Pagination({
                  items: [
                      contract1,
                      contract2
                  ]
              })}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;
        // let _path = '/institutions/education_contract/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список услуг в электронном виде в постраничном разбиении
     * @method
     * @name publicDigitalServiceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public publicDigitalServiceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: string,
        p_deleted?: string,
    ) {

        let publicDigitalService1 = new PublicDigitalServiceShort({
            identity: {
                id: 1
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            service: {
                id: 1,
                name: 'Подготовка к итоговой аттестации'
            },
            epgu_url: 'https://confluence.n3demo.ru/pages/viewpage.action?pageId=21169115',
            rpgu_url: 'https://confluence.n3demo.ru/pages/viewpage.action?pageId=21169115',
            documentation_url: 'https://confluence.n3demo.ru/pages/viewpage.action?pageId=21169115',
        })

        let publicDigitalService2 = new PublicDigitalServiceShort({
            identity: {
                id: 2
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: '',
            },
            service: {
                id: 2,
                name: 'Группы по адаптации детей к школьным условиям'
            },
            epgu_url: 'https://confluence.n3demo.ru/pages/viewpage.action?pageId=21169115',
            rpgu_url: 'https://confluence.n3demo.ru/pages/viewpage.action?pageId=21169115',
            documentation_url: 'https://confluence.n3demo.ru/pages/viewpage.action?pageId=21169115',
        })

        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new Pagination({
                  items: [
                      publicDigitalService1,
                      publicDigitalService2
                  ]
              })}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;


        // let _path = '/institutions/public_digital_service/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список территорий в постраничном разбиении
     * @method
     * @name territoryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {number[]} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public territoryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: number[],
        p_deleted?: string,
    ) {

        let territory1 = new TerritoryShort({
            identity: {
                id: 1
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: ''
            },
            name: 'Основная',
            institution_identity: {
                id: 1
            },
            equipment: [
                {
                    id: 1,
                    equipment: {
                        id: 1,
                        parent: '',
                        entity_state: {
                            created_at: '',
                            updated_at: '',
                            deleted_at: ''
                        },
                        code: '',
                        name: ''
                    },
                    quantity: 123
                }
            ]
        })
        let territory2 = new TerritoryShort({
            identity: {
                id: 2
            },
            entity_state: {
                created_at: '',
                updated_at: '',
                deleted_at: ''
            },
            name: 'Приусадебная',
            institution_identity: {
                id: 1
            },
            equipment: [
                {
                    id: 1,
                    equipment: {
                        id: 1,
                        parent: '',
                        entity_state: {
                            created_at: '',
                            updated_at: '',
                            deleted_at: ''
                        },
                        code: '',
                        name: ''
                    },
                    quantity: 123
                }
            ]
        })

        let res = new Observable(observer => {
          setTimeout(() => {
              observer.next(new Response({data: new Pagination({
                  items: [
                      territory1,
                      territory2
                  ]
              })}));
          }, 1000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
        })

        return res;


        // let _path = '/institutions/territory/list';
        // let _body = '';
        // let _params = {
        //     headers: new Headers(),
        //     search: new URLSearchParams(),
        // }
        // _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        // if (typeof p_limit !== 'undefined')
        //     _params.search.append('p_limit', ''+p_limit); 
        // if (typeof p_page !== 'undefined')
        //     _params.search.append('p_page', ''+p_page); 
        // if (typeof p_query !== 'undefined')
        //     _params.search.append('p_query', ''+p_query); 
        // if (typeof p_institutions !== 'undefined')
        //     _params.search.append('p_institutions', ''+p_institutions); 
        // if (typeof p_deleted !== 'undefined')
        //     _params.search.append('p_deleted', ''+p_deleted); 


        // return this.http['get'](_path, _params)
    }
    /**
     * Получает список образовательных организаций для вывода на карте
     * @method
     * @name institutionMap
     *
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_regions - Регионы 
     * @param {string} p_districts - Районы 
     * @param {string} p_institution_types - Типы образовательной организации 
     * @param {string} p_institution_kinds - Вид образования 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_okopfs - ОКОПФ 
     * @param {string} p_okfses - ОКФС 
     * @param {string} p_institution_statuses - Статус образовательной организации 
     * @param {string} p_jurisdictions - Подведомственность 
     * @param {string} p_education_orientations - Направленность 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public institutionMap(
        p_query?: string,
        p_regions?: string,
        p_districts?: string,
        p_institution_types?: string,
        p_institution_kinds?: string,
        p_education_levels?: string,
        p_okopfs?: string,
        p_okfses?: string,
        p_institution_statuses?: string,
        p_jurisdictions?: string,
        p_education_orientations?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/institution/map';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_regions !== 'undefined')
            _params.search.append('p_regions', ''+p_regions); 
        if (typeof p_districts !== 'undefined')
            _params.search.append('p_districts', ''+p_districts); 
        if (typeof p_institution_types !== 'undefined')
            _params.search.append('p_institution_types', ''+p_institution_types); 
        if (typeof p_institution_kinds !== 'undefined')
            _params.search.append('p_institution_kinds', ''+p_institution_kinds); 
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_okopfs !== 'undefined')
            _params.search.append('p_okopfs', ''+p_okopfs); 
        if (typeof p_okfses !== 'undefined')
            _params.search.append('p_okfses', ''+p_okfses); 
        if (typeof p_institution_statuses !== 'undefined')
            _params.search.append('p_institution_statuses', ''+p_institution_statuses); 
        if (typeof p_jurisdictions !== 'undefined')
            _params.search.append('p_jurisdictions', ''+p_jurisdictions); 
        if (typeof p_education_orientations !== 'undefined')
            _params.search.append('p_education_orientations', ''+p_education_orientations); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает ссылку для скачивания файла экспорта списка организаций
     * @method
     * @name institutionExport
     *
     * @param {string} *format - Формат выгрузки [XLS,XLSX,PDF]
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_regions - Регионы 
     * @param {string} p_districts - Районы 
     * @param {string} p_institution_types - Типы образовательной организации 
     * @param {string} p_institution_kinds - Вид образования 
     * @param {string} p_education_levels - Уровень образования 
     * @param {string} p_okopfs - ОКОПФ 
     * @param {string} p_okfses - ОКФС 
     * @param {string} p_institution_statuses - Статус образовательной организации 
     * @param {string} p_jurisdictions - Подведомственность 
     * @param {string} p_education_orientations - Направленность 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public institutionExport(
        format: string,
        p_query?: string,
        p_regions?: string,
        p_districts?: string,
        p_institution_types?: string,
        p_institution_kinds?: string,
        p_education_levels?: string,
        p_okopfs?: string,
        p_okfses?: string,
        p_institution_statuses?: string,
        p_jurisdictions?: string,
        p_education_orientations?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/institution/export/{format}';
        let _body = '';
        _path = _path.replace(/{format}/ig, (typeof format !== 'string')?JSON.stringify(format):format);
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_regions !== 'undefined')
            _params.search.append('p_regions', ''+p_regions); 
        if (typeof p_districts !== 'undefined')
            _params.search.append('p_districts', ''+p_districts); 
        if (typeof p_institution_types !== 'undefined')
            _params.search.append('p_institution_types', ''+p_institution_types); 
        if (typeof p_institution_kinds !== 'undefined')
            _params.search.append('p_institution_kinds', ''+p_institution_kinds); 
        if (typeof p_education_levels !== 'undefined')
            _params.search.append('p_education_levels', ''+p_education_levels); 
        if (typeof p_okopfs !== 'undefined')
            _params.search.append('p_okopfs', ''+p_okopfs); 
        if (typeof p_okfses !== 'undefined')
            _params.search.append('p_okfses', ''+p_okfses); 
        if (typeof p_institution_statuses !== 'undefined')
            _params.search.append('p_institution_statuses', ''+p_institution_statuses); 
        if (typeof p_jurisdictions !== 'undefined')
            _params.search.append('p_jurisdictions', ''+p_jurisdictions); 
        if (typeof p_education_orientations !== 'undefined')
            _params.search.append('p_education_orientations', ''+p_education_orientations); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает юр. лицо по id образовательной организации
     * @method
     * @name institutionGetOrganization
     *
     * @param {string} *id - Идентификатор образовательной организации 
     */
    public institutionGetOrganization(
        id: string,
    ) {
        let _path = '/institutions/institution/get-organization/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает идентификаторы образовательной организации по ИНН юр. лица
     * @method
     * @name institutionDuplicateInn
     *
     * @param {string} *inn - ИНН юр. лица 
     */
    public institutionDuplicateInn(
        inn: string,
    ) {
        let _path = '/institutions/institution/check-inn/{inn}';
        let _body = '';
        _path = _path.replace(/{inn}/ig, (typeof inn !== 'string')?JSON.stringify(inn):inn);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает идентификаторы образовательной организации по ОГРН юр. лица
     * @method
     * @name institutionDuplicateOgrn
     *
     * @param {string} *ogrn - ОГРН юр. лица 
     */
    public institutionDuplicateOgrn(
        ogrn: string,
    ) {
        let _path = '/institutions/institution/check-ogrn/{ogrn}';
        let _body = '';
        _path = _path.replace(/{ogrn}/ig, (typeof ogrn !== 'string')?JSON.stringify(ogrn):ogrn);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * Сохраняет образовательную организацию и связанное юридическое лицо
     * @method
     * @name institutionSave
     *
     * @param {Institution} *body -   
     */
    public institutionSave(
        body: Institution,
    ) {
        let _path = '/institutions/institution';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Сохраняет образовательную услугу для УФТТ 3.0
     * @method
     * @name educationServiceSave
     *
     * @param {EducationService} *body -   
     */
    public educationServiceSave(
        body: EducationService,
    ) {
        let _path = '/institutions/education_service';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Сохраняет здание
     * @method
     * @name buildingSave
     *
     * @param {Building} *body -   
     */
    public buildingSave(
        body: Building,
    ) {
        let _path = '/institutions/building';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Сохраняет подразделение
     * @method
     * @name departmentSave
     *
     * @param {Department} *body -   
     */
    public departmentSave(
        body: Department,
    ) {
        let _path = '/institutions/department';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Сохраняет иновацию
     * @method
     * @name innovationSave
     *
     * @param {Innovation} *body -   
     */
    public innovationSave(
        body: Innovation,
    ) {
        let _path = '/institutions/innovation';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Сохраняет договор на осуществление образовательной деятельности
     * @method
     * @name educationContractSave
     *
     * @param {EducationContract} *body -   
     */
    public educationContractSave(
        body: EducationContract,
    ) {
        let _path = '/institutions/education_contract';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Сохраняет услуги в электронном виде
     * @method
     * @name publicDigitalServiceSave
     *
     * @param {PublicDigitalService} *body -   
     */
    public publicDigitalServiceSave(
        body: PublicDigitalService,
    ) {
        let _path = '/institutions/public_digital_service';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * Сохраняет территорию
     * @method
     * @name territorySave
     *
     * @param {Territory} *body -   
     */
    public territorySave(
        body: Territory,
    ) {
        let _path = '/institutions/territory';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
}