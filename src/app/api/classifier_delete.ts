import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class Classifier_deleteService {

    constructor(public http: Http) { }

    /**
     * 
     * @method
     * @name classifierOktmoDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOktmoDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/oktmo/delete';
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
     * 
     * @method
     * @name classifierOkoguDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkoguDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/okogu/delete';
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
     * 
     * @method
     * @name classifierTypeOfOwnershipDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTypeOfOwnershipDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/type-of-ownership/delete';
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
     * 
     * @method
     * @name classifierFoundersTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierFoundersTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/founders-type/delete';
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
     * 
     * @method
     * @name classifierInstitutionStatusDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInstitutionStatusDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/institution-status/delete';
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
     * 
     * @method
     * @name classifierOrganizationStatusDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOrganizationStatusDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/organization-status/delete';
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
     * 
     * @method
     * @name classifierDistrictDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDistrictDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/district/delete';
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
     * 
     * @method
     * @name classifierRegionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierRegionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/region/delete';
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
     * 
     * @method
     * @name classifierOkopfDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkopfDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/okopf/delete';
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
     * 
     * @method
     * @name classifierOkfsDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkfsDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/okfs/delete';
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
     * 
     * @method
     * @name classifierOkvedDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkvedDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/okved/delete';
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
     * 
     * @method
     * @name classifierCountryDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierCountryDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/country/delete';
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
     * 
     * @method
     * @name classifierContactTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierContactTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/contact_type/delete';
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
     * 
     * @method
     * @name classifierPublicAdministrationFormDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPublicAdministrationFormDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/public-administration-form/delete';
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
     * 
     * @method
     * @name classifierSignificanceLevelDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSignificanceLevelDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/significance-level/delete';
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
     * 
     * @method
     * @name classifierInnovationActivityDirectionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInnovationActivityDirectionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/innovation-activity-direction/delete';
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
     * 
     * @method
     * @name classifierInnovationLevelDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInnovationLevelDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/innovation-level/delete';
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
     * 
     * @method
     * @name classifierEducationContractSubjectDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationContractSubjectDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-contract-subject/delete';
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
     * 
     * @method
     * @name classifierPublicDigitalServiceDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPublicDigitalServiceDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/public-digital-service/delete';
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
     * 
     * @method
     * @name classifierFgosScoringDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierFgosScoringDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/fgos-scoring/delete';
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
     * 
     * @method
     * @name classifierSiteCharacteristicDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSiteCharacteristicDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/site-characteristic/delete';
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
     * 
     * @method
     * @name classifierRoomTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierRoomTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/room-type/delete';
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
     * 
     * @method
     * @name classifierBuildingTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBuildingTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/building-type/delete';
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
     * 
     * @method
     * @name classifierBuildingStatusDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBuildingStatusDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/building-status/delete';
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
     * 
     * @method
     * @name classifierDepartmentKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDepartmentKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/department-kind/delete';
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
     * 
     * @method
     * @name classifierJobPositionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJobPositionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/job-position/delete';
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
     * 
     * @method
     * @name classifierDocumentTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDocumentTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/document-type/delete';
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
     * 
     * @method
     * @name classifierDocumentStatusDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDocumentStatusDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/document-status/delete';
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
     * 
     * @method
     * @name classifierEducationServiceKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationServiceKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-service-kind/delete';
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
     * 
     * @method
     * @name classifierImplementEducationServiceDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierImplementEducationServiceDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-implement-service/delete';
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
     * 
     * @method
     * @name classifierEducationDirectionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationDirectionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-direction/delete';
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
     * 
     * @method
     * @name classifierEducationShiftDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationShiftDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-shift/delete';
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
     * 
     * @method
     * @name classifierInstitutionTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInstitutionTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/institution-type/delete';
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
     * 
     * @method
     * @name classifierInstitutionKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInstitutionKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/institution-kind/delete';
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
     * 
     * @method
     * @name classifierTerrainKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTerrainKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/terrain-kind/delete';
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
     * 
     * @method
     * @name classifierWorkTimeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierWorkTimeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/work-time/delete';
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
     * 
     * @method
     * @name classifierLanguageDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierLanguageDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/language/delete';
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
     * 
     * @method
     * @name classifierEducationLevelDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationLevelDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-level/delete';
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
     * 
     * @method
     * @name classifierMealPaymentDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierMealPaymentDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/meal-payment/delete';
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
     * 
     * @method
     * @name classifierEducationServiceDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationServiceDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-service/delete';
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
     * 
     * @method
     * @name classifierOvzGroupTypesDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOvzGroupTypesDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/ovz-group-types/delete';
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
     * 
     * @method
     * @name classifierJurisdictionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJurisdictionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/jurisdiction/delete';
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
     * 
     * @method
     * @name classifierRepresentativeTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierRepresentativeTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/representative-type/delete';
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
     * 
     * @method
     * @name classifierCitizenshipTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierCitizenshipTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/citizenship-type/delete';
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
     * 
     * @method
     * @name classifierHealthGroupDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierHealthGroupDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/health-group/delete';
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
     * 
     * @method
     * @name classifierSportGroupDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSportGroupDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/sport-group/delete';
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
     * 
     * @method
     * @name classifierOccupationalInjuriesDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOccupationalInjuriesDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/occupational-injuries/delete';
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
     * 
     * @method
     * @name classifierOvzCategoryDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOvzCategoryDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/ovz-category/delete';
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
     * 
     * @method
     * @name classifierOvzEducationKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOvzEducationKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/ovz-education-kind/delete';
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
     * 
     * @method
     * @name classifierLongTreatmentEducationKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierLongTreatmentEducationKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/long-treatment-education-kind/delete';
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
     * 
     * @method
     * @name classifierHealthViolationDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierHealthViolationDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/health-violation/delete';
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
     * 
     * @method
     * @name classifierDisabilityCategoryDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisabilityCategoryDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/disability-category/delete';
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
     * 
     * @method
     * @name classifierDisabilityCauseDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisabilityCauseDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/disability-сause/delete';
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
     * 
     * @method
     * @name classifierDisabilityGroupDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisabilityGroupDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/disability-group/delete';
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
     * 
     * @method
     * @name classifierHardSituationDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierHardSituationDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/hard-situation/delete';
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
     * 
     * @method
     * @name classifierСonvictionPunishment
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierСonvictionPunishment(
        p_ids: string,
    ) {
        let _path = '/classifiers/conviction-punishment/delete';
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
     * 
     * @method
     * @name classifierSexDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSexDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/sex/delete';
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
     * 
     * @method
     * @name classifierDeviantBehaviorDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDeviantBehaviorDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/deviant-behavior/delete';
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
     * 
     * @method
     * @name classifierDisciplineDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisciplineDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/discipline/delete';
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
     * 
     * @method
     * @name classifierSpecifyDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSpecifyDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/specify/delete';
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
     * 
     * @method
     * @name classifierEducationStageDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationStageDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-orientation/delete';
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
     * 
     * @method
     * @name classifierEducationComponentDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationComponentDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-component/delete';
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
     * 
     * @method
     * @name classifierProfessionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierProfessionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/profession/delete';
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
     * 
     * @method
     * @name classifierCompetenceDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierCompetenceDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/competence/delete';
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
     * 
     * @method
     * @name classifierAdaptivesDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierAdaptivesDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/adaptives/delete';
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
     * 
     * @method
     * @name classifierProfileDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierProfileDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/profile/delete';
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
     * 
     * @method
     * @name classifierQualificationDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierQualificationDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/qualification/delete';
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
     * 
     * @method
     * @name classifierServiceDirectionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierServiceDirectionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/service-direction/delete';
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
     * 
     * @method
     * @name classifierSportDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSportDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/sport/delete';
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
     * 
     * @method
     * @name classifierImplementFormDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierImplementFormDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/implement-form/delete';
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
     * 
     * @method
     * @name classifierEducationFormDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationFormDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-form/delete';
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
     * 
     * @method
     * @name classifierArtDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierArtDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/art/delete';
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
     * 
     * @method
     * @name classifierGroupCategoryDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierGroupCategoryDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/group-category/delete';
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
     * 
     * @method
     * @name classifierGroupPlaceDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierGroupPlaceDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/group-place/delete';
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
     * 
     * @method
     * @name classifierStayModeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierStayModeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/stay-mode/delete';
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
     * 
     * @method
     * @name classifierGroupStatusDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierGroupStatusDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/group-status/delete';
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
     * 
     * @method
     * @name classifierEstimateWeightDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEstimateWeightDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/estimate-weight/delete';
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
     * 
     * @method
     * @name classifierSkillDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSkillDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/skill/delete';
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
     * 
     * @method
     * @name classifierEducationContentTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationContentTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-content-type/delete';
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
     * 
     * @method
     * @name classifierTaskControlFormDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTaskControlFormDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/task-control-form/delete';
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
     * 
     * @method
     * @name classifierEducationEndingReasonDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationEndingReasonDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-ending-reason/delete';
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
     * 
     * @method
     * @name classifierEducationAdditionalCharacteristicDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationAdditionalCharacteristicDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-additional-characteristic/delete';
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
     * 
     * @method
     * @name classifierPostGraduationSupportActualResultDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPostGraduationSupportActualResultDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/post-graduation-support-actual-result/delete';
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
     * 
     * @method
     * @name classifierPostGraduationSupportIntentionDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPostGraduationSupportIntentionDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/post-graduation-support-intention/delete';
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
     * 
     * @method
     * @name classifierApplicationPreferentialCategoryDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierApplicationPreferentialCategoryDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/application-preferential-category/delete';
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
     * 
     * @method
     * @name classifierJobCompatibilityDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJobCompatibilityDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/job-compatibility/delete';
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
     * 
     * @method
     * @name classifierQualificationCategoryDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierQualificationCategoryDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/qualification-category/delete';
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
     * 
     * @method
     * @name classifierMentoringDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierMentoringDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/mentoring/delete';
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
     * 
     * @method
     * @name classifierProfessionalCommunityDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierProfessionalCommunityDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/professional-community/delete';
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
     * 
     * @method
     * @name classifierJobStatusDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJobStatusDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/job-status/delete';
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
     * 
     * @method
     * @name classifierTeacherSupportDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTeacherSupportDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/teacher-support/delete';
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
     * 
     * @method
     * @name classifierAcademicDegreeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierAcademicDegreeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/academic-degree/delete';
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
     * 
     * @method
     * @name classifierAcademicTitleDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierAcademicTitleDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/academic-title/delete';
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
     * 
     * @method
     * @name classifierSportResultDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSportResultDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/sport-result/delete';
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
     * 
     * @method
     * @name classifierPortfolioRecordTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioRecordTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-record-type/delete';
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
     * 
     * @method
     * @name classifierPortfolioRecordKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioRecordKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-record-kind/delete';
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
     * 
     * @method
     * @name classifierPortfolioInvolvementLevelDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioInvolvementLevelDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-involvement-level/delete';
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
     * 
     * @method
     * @name classifierPortfolioActivityKindDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioActivityKindDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-activity-kind/delete';
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
     * 
     * @method
     * @name classifierPortfolioAwardDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioAwardDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-award/delete';
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
     * 
     * @method
     * @name classifierPortfolioRankDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioRankDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-rank/delete';
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
     * 
     * @method
     * @name classifierContractorTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierContractorTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/budget-contractor-type/delete';
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
     * 
     * @method
     * @name classifierBudgetTransactionOperationDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBudgetTransactionOperationDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/budget-transaction-operation/delete';
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
     * 
     * @method
     * @name classifierBudgetTransactionTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBudgetTransactionTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/budget-transaction-type/delete';
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
     * 
     * @method
     * @name classifierTermsOfEmploymentDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTermsOfEmploymentDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/terms-of-employment/delete';
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
     * 
     * @method
     * @name classifierDismissalTypeDelete
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDismissalTypeDelete(
        p_ids: string,
    ) {
        let _path = '/classifiers/dismissal-type/delete';
        let _body = '';
        let _params = {
            headers: new Headers(),
            search: new URLSearchParams(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 
        _params.search.append('p_ids', ''+p_ids); 


        return this.http['delete'](_path, _params)
    }
}