import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs'

import { Response } from './common/Response'
import { Institution } from './institution/Institution';
import { InstitutionFull } from './institution/InstitutionFull';
import { EducationService } from './institution/EducationService';
import { Building } from './institution/Building';
import { Department } from './institution/Department';
import { Innovation } from './institution/Innovation';
import { EducationContract } from './institution/EducationContract';
import { PublicDigitalService } from './institution/PublicDigitalService';
import { Territory } from './institution/Territory';

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
            organization: {
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
                // founders_type: {
                //   id: 1,
                //   name: 'Муниципальное образование'
                // },
                type_of_ownership: {
                    id: 1,
                    name: 'Муниципальная'
                },
                address: {
                    origin_address: 'Средний пр-кт, 20, 199004, г. Санкт-Петербург'
                },
                founders_type: {
                    id: 1,
                    name: 'Сад'
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
            contacts: [
            {
                type:{
                id: 1,
                name: 'site'
                },
                value: 'spbstu.ru'
            },
            {
                type:{
                id: 2,
                name: 'phone'
                },
                value: '88123237728'
            }
            ],
            description: 'Политехнический университет - многофункциональное государственное высшее учебное заведение. В 2010 году он получил статус национального исследовательского университета, что явилось признанием его роли и возможностей как в области подготовки кадров, так и в мультидисциплинарных научных исследованиях и разработках. В рейтинге технических университетов России Политехнический неизменно занимает ведущие позиции.',
            education_area: [
            {
                origin_address: 'Московский 1'
            },
            {
                origin_address: 'Московский 2'
            },
            {
                origin_address: 'Московский 3'
            },
            {
                origin_address: 'Московский 4'
            },
            ],
            region: {
            id: 1,
            name: 'Санкт-Петербург'
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
        let _path = '/institutions/building/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
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
        let _path = '/institutions/department/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
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
        let _path = '/institutions/innovation/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
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
        let _path = '/institutions/education_contract/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
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
        let _path = '/institutions/territory/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
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
        let _path = '/institutions/institution/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
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
     * Получает список образовательных услуг для УФТТ 3.0 в постраничном разбиении
     * @method
     * @name educationServiceList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public educationServiceList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/education_service/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает список зданий в постраничном разбиении
     * @method
     * @name buildingList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public buildingList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/building/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает список подразделений в постраничном разбиении
     * @method
     * @name departmentList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public departmentList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/department/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает список иноваций в постраничном разбиении
     * @method
     * @name innovationList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public innovationList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/innovation/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает список договоров на осуществление образовательной деятельности в постраничном разбиении
     * @method
     * @name educationContractList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public educationContractList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/education_contract/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
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
        let _path = '/institutions/public_digital_service/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
    }
    /**
     * Получает список территорий в постраничном разбиении
     * @method
     * @name territoryList
     *
     * @param {number} p_limit - Количество записей 
     * @param {number} p_page - Страница выдачи 
     * @param {string} p_query - Поисковая строка 
     * @param {string} p_institutions - Образовательные организации 
     * @param {string} p_deleted - Показывать удаленные 
     */
    public territoryList(
        p_limit?: number,
        p_page?: number,
        p_query?: string,
        p_institutions?: string,
        p_deleted?: string,
    ) {
        let _path = '/institutions/territory/list';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        if (typeof p_limit !== 'undefined')
            _params.search.append('p_limit', ''+p_limit); 
        if (typeof p_page !== 'undefined')
            _params.search.append('p_page', ''+p_page); 
        if (typeof p_query !== 'undefined')
            _params.search.append('p_query', ''+p_query); 
        if (typeof p_institutions !== 'undefined')
            _params.search.append('p_institutions', ''+p_institutions); 
        if (typeof p_deleted !== 'undefined')
            _params.search.append('p_deleted', ''+p_deleted); 


        return this.http['get'](_path, _params)
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