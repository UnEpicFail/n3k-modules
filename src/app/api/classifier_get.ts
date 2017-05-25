import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class Classifier_getService {

    constructor(public http: Http) { }

    /**
     * 
     * @method
     * @name classifierOktmoGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOktmoGet(
        id: number,
    ) {
        let _path = '/classifiers/oktmo/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkoguGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOkoguGet(
        id: number,
    ) {
        let _path = '/classifiers/okogu/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTypeOfOwnershipGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierTypeOfOwnershipGet(
        id: number,
    ) {
        let _path = '/classifiers/type-of-ownership/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierFoundersTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierFoundersTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/founders-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionStatusGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierInstitutionStatusGet(
        id: number,
    ) {
        let _path = '/classifiers/institution-status/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOrganizationStatusGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOrganizationStatusGet(
        id: number,
    ) {
        let _path = '/classifiers/organization-status/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDistrictGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDistrictGet(
        id: number,
    ) {
        let _path = '/classifiers/district/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierRegionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierRegionGet(
        id: number,
    ) {
        let _path = '/classifiers/region/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkopfGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOkopfGet(
        id: number,
    ) {
        let _path = '/classifiers/okopf/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkfsGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOkfsGet(
        id: number,
    ) {
        let _path = '/classifiers/okfs/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkvedGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOkvedGet(
        id: number,
    ) {
        let _path = '/classifiers/okved/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierCountryGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierCountryGet(
        id: number,
    ) {
        let _path = '/classifiers/country/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierContactTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierContactTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/contact_type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPublicAdministrationFormGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPublicAdministrationFormGet(
        id: number,
    ) {
        let _path = '/classifiers/public-administration-form/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSignificanceLevelGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSignificanceLevelGet(
        id: number,
    ) {
        let _path = '/classifiers/significance-level/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInnovationActivityDirectionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierInnovationActivityDirectionGet(
        id: number,
    ) {
        let _path = '/classifiers/innovation-activity-direction/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInnovationLevelGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierInnovationLevelGet(
        id: number,
    ) {
        let _path = '/classifiers/innovation-level/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationContractSubjectGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationContractSubjectGet(
        id: number,
    ) {
        let _path = '/classifiers/education-contract-subject/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPublicDigitalServiceGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPublicDigitalServiceGet(
        id: number,
    ) {
        let _path = '/classifiers/public-digital-service/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierFgosScoringGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierFgosScoringGet(
        id: number,
    ) {
        let _path = '/classifiers/fgos-scoring/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSiteCharacteristicGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSiteCharacteristicGet(
        id: number,
    ) {
        let _path = '/classifiers/site-characteristic/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierRoomTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierRoomTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/room-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBuildingTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierBuildingTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/building-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBuildingStatusGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierBuildingStatusGet(
        id: number,
    ) {
        let _path = '/classifiers/building-status/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDepartmentKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDepartmentKindGet(
        id: number,
    ) {
        let _path = '/classifiers/department-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobPositionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierJobPositionGet(
        id: number,
    ) {
        let _path = '/classifiers/job-position/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDocumentTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDocumentTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/document-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDocumentStatusGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDocumentStatusGet(
        id: number,
    ) {
        let _path = '/classifiers/document-status/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationServiceKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationServiceKindGet(
        id: number,
    ) {
        let _path = '/classifiers/education-service-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierImplementEducationServiceGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierImplementEducationServiceGet(
        id: number,
    ) {
        let _path = '/classifiers/education-implement-service/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationDirectionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationDirectionGet(
        id: number,
    ) {
        let _path = '/classifiers/education-direction/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationShiftGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationShiftGet(
        id: number,
    ) {
        let _path = '/classifiers/education-shift/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierInstitutionTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/institution-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierInstitutionKindGet(
        id: number,
    ) {
        let _path = '/classifiers/institution-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTerrainKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierTerrainKindGet(
        id: number,
    ) {
        let _path = '/classifiers/terrain-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierLanguageGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierLanguageGet(
        id: number,
    ) {
        let _path = '/classifiers/language/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationLevelGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationLevelGet(
        id: number,
    ) {
        let _path = '/classifiers/education-level/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierMealTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierMealTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/meal-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierFinancingTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierFinancingTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/financing-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationServiceGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationServiceGet(
        id: number,
    ) {
        let _path = '/classifiers/education-service/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzGroupTypesGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOvzGroupTypesGet(
        id: number,
    ) {
        let _path = '/classifiers/ovz-group-types/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJurisdictionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierJurisdictionGet(
        id: number,
    ) {
        let _path = '/classifiers/jurisdiction/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierRepresentativeTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierRepresentativeTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/representative-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierCitizenshipTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierCitizenshipTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/citizenship-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierHealthGroupGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierHealthGroupGet(
        id: number,
    ) {
        let _path = '/classifiers/health-group/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportGroupGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSportGroupGet(
        id: number,
    ) {
        let _path = '/classifiers/sport-group/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOccupationalInjuriesGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOccupationalInjuriesGet(
        id: number,
    ) {
        let _path = '/classifiers/occupational-injuries/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzCategoryGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOvzCategoryGet(
        id: number,
    ) {
        let _path = '/classifiers/ovz-category/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzEducationKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierOvzEducationKindGet(
        id: number,
    ) {
        let _path = '/classifiers/ovz-education-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierLongTreatmentEducationKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierLongTreatmentEducationKindGet(
        id: number,
    ) {
        let _path = '/classifiers/long-treatment-education-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierHealthViolationGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierHealthViolationGet(
        id: number,
    ) {
        let _path = '/classifiers/health-violation/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityCategoryGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDisabilityCategoryGet(
        id: number,
    ) {
        let _path = '/classifiers/disability-category/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityCauseGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDisabilityCauseGet(
        id: number,
    ) {
        let _path = '/classifiers/disability-сause/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityGroupGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDisabilityGroupGet(
        id: number,
    ) {
        let _path = '/classifiers/disability-group/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierHardSituationGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierHardSituationGet(
        id: number,
    ) {
        let _path = '/classifiers/hard-situation/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierСonvictionPunishment
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierСonvictionPunishment(
        id: number,
    ) {
        let _path = '/classifiers/conviction-punishment/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSexGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSexGet(
        id: number,
    ) {
        let _path = '/classifiers/sex/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDeviantBehaviorGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDeviantBehaviorGet(
        id: number,
    ) {
        let _path = '/classifiers/deviant-behavior/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisciplineGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDisciplineGet(
        id: number,
    ) {
        let _path = '/classifiers/discipline/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSpecifyGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSpecifyGet(
        id: number,
    ) {
        let _path = '/classifiers/specify/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationStageGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationStageGet(
        id: number,
    ) {
        let _path = '/classifiers/education-orientation/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationComponentGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationComponentGet(
        id: number,
    ) {
        let _path = '/classifiers/education-component/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfessionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierProfessionGet(
        id: number,
    ) {
        let _path = '/classifiers/profession/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierCompetenceGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierCompetenceGet(
        id: number,
    ) {
        let _path = '/classifiers/competence/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierAdaptivesGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierAdaptivesGet(
        id: number,
    ) {
        let _path = '/classifiers/adaptives/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfileGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierProfileGet(
        id: number,
    ) {
        let _path = '/classifiers/profile/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierQualificationGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierQualificationGet(
        id: number,
    ) {
        let _path = '/classifiers/qualification/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierServiceDirectionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierServiceDirectionGet(
        id: number,
    ) {
        let _path = '/classifiers/service-direction/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSportGet(
        id: number,
    ) {
        let _path = '/classifiers/sport/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierImplementFormGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierImplementFormGet(
        id: number,
    ) {
        let _path = '/classifiers/implement-form/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationFormGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationFormGet(
        id: number,
    ) {
        let _path = '/classifiers/education-form/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierArtGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierArtGet(
        id: number,
    ) {
        let _path = '/classifiers/art/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupCategoryGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierGroupCategoryGet(
        id: number,
    ) {
        let _path = '/classifiers/group-category/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupPlaceGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierGroupPlaceGet(
        id: number,
    ) {
        let _path = '/classifiers/group-place/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierStayModeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierStayModeGet(
        id: number,
    ) {
        let _path = '/classifiers/stay-mode/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupStatusGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierGroupStatusGet(
        id: number,
    ) {
        let _path = '/classifiers/group-status/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEstimateWeightGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEstimateWeightGet(
        id: number,
    ) {
        let _path = '/classifiers/estimate-weight/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSkillGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSkillGet(
        id: number,
    ) {
        let _path = '/classifiers/skill/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationContentTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationContentTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/education-content-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTaskControlFormGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierTaskControlFormGet(
        id: number,
    ) {
        let _path = '/classifiers/task-control-form/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationEndingReasonGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationEndingReasonGet(
        id: number,
    ) {
        let _path = '/classifiers/education-ending-reason/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationAdditionalCharacteristicGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierEducationAdditionalCharacteristicGet(
        id: number,
    ) {
        let _path = '/classifiers/education-additional-characteristic/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPostGraduationSupportActualResultGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPostGraduationSupportActualResultGet(
        id: number,
    ) {
        let _path = '/classifiers/post-graduation-support-actual-result/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPostGraduationSupportIntentionGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPostGraduationSupportIntentionGet(
        id: number,
    ) {
        let _path = '/classifiers/post-graduation-support-intention/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierApplicationPreferentialCategoryGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierApplicationPreferentialCategoryGet(
        id: number,
    ) {
        let _path = '/classifiers/application-preferential-category/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobCompatibilityGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierJobCompatibilityGet(
        id: number,
    ) {
        let _path = '/classifiers/job-compatibility/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierQualificationCategoryGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierQualificationCategoryGet(
        id: number,
    ) {
        let _path = '/classifiers/qualification-category/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierMentoringGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierMentoringGet(
        id: number,
    ) {
        let _path = '/classifiers/mentoring/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfessionalCommunityGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierProfessionalCommunityGet(
        id: number,
    ) {
        let _path = '/classifiers/professional-community/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobStatusGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierJobStatusGet(
        id: number,
    ) {
        let _path = '/classifiers/job-status/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTeacherSupportGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierTeacherSupportGet(
        id: number,
    ) {
        let _path = '/classifiers/teacher-support/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierAcademicDegreeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierAcademicDegreeGet(
        id: number,
    ) {
        let _path = '/classifiers/academic-degree/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierAcademicTitleGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierAcademicTitleGet(
        id: number,
    ) {
        let _path = '/classifiers/academic-title/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportResultGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierSportResultGet(
        id: number,
    ) {
        let _path = '/classifiers/sport-result/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRecordTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPortfolioRecordTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/portfolio-record-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRecordKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPortfolioRecordKindGet(
        id: number,
    ) {
        let _path = '/classifiers/portfolio-record-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioInvolvementLevelGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPortfolioInvolvementLevelGet(
        id: number,
    ) {
        let _path = '/classifiers/portfolio-involvement-level/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioActivityKindGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPortfolioActivityKindGet(
        id: number,
    ) {
        let _path = '/classifiers/portfolio-activity-kind/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioAwardGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPortfolioAwardGet(
        id: number,
    ) {
        let _path = '/classifiers/portfolio-award/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRankGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierPortfolioRankGet(
        id: number,
    ) {
        let _path = '/classifiers/portfolio-rank/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierContractorTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierContractorTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/budget-contractor-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBudgetTransactionOperationGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierBudgetTransactionOperationGet(
        id: number,
    ) {
        let _path = '/classifiers/budget-transaction-operation/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierBudgetTransactionTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierBudgetTransactionTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/budget-transaction-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTermsOfEmploymentGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierTermsOfEmploymentGet(
        id: number,
    ) {
        let _path = '/classifiers/terms-of-employment/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierDismissalTypeGet
     *
     * @param {number} *id - Идентификатор записи 
     */
    public classifierDismissalTypeGet(
        id: number,
    ) {
        let _path = '/classifiers/dismissal-type/get/{id}';
        let _body = '';
        _path = _path.replace(/{id}/ig, (typeof id !== 'string')?JSON.stringify(id):id);
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['get'](_path, _params)
    }
}