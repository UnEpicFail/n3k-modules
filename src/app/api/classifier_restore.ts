import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class Classifier_restoreService {

    constructor(public http: Http) { }

    /**
     * 
     * @method
     * @name classifierOktmoRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOktmoRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/oktmo/restore';
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
     * @name classifierOkoguRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkoguRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/okogu/restore';
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
     * @name classifierTypeOfOwnershipRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTypeOfOwnershipRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/type-of-ownership/restore';
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
     * @name classifierFoundersTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierFoundersTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/founders-type/restore';
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
     * @name classifierInstitutionStatusRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInstitutionStatusRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/institution-status/restore';
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
     * @name classifierOrganizationStatusRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOrganizationStatusRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/organization-status/restore';
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
     * @name classifierDistrictRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDistrictRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/district/restore';
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
     * @name classifierRegionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierRegionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/region/restore';
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
     * @name classifierOkopfRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkopfRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/okopf/restore';
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
     * @name classifierOkfsRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkfsRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/okfs/restore';
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
     * @name classifierOkvedRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOkvedRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/okved/restore';
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
     * @name classifierCountryRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierCountryRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/country/restore';
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
     * @name classifierContactTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierContactTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/contact_type/restore';
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
     * @name classifierPublicAdministrationFormRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPublicAdministrationFormRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/public-administration-form/restore';
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
     * @name classifierSignificanceLevelRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSignificanceLevelRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/significance-level/restore';
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
     * @name classifierInnovationActivityDirectionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInnovationActivityDirectionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/innovation-activity-direction/restore';
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
     * @name classifierInnovationLevelRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInnovationLevelRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/innovation-level/restore';
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
     * @name classifierEducationContractSubjectRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationContractSubjectRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-contract-subject/restore';
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
     * @name classifierPublicDigitalServiceRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPublicDigitalServiceRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/public-digital-service/restore';
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
     * @name classifierFgosScoringRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierFgosScoringRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/fgos-scoring/restore';
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
     * @name classifierSiteCharacteristicRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSiteCharacteristicRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/site-characteristic/restore';
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
     * @name classifierRoomTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierRoomTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/room-type/restore';
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
     * @name classifierBuildingTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBuildingTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/building-type/restore';
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
     * @name classifierBuildingStatusRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBuildingStatusRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/building-status/restore';
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
     * @name classifierDepartmentKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDepartmentKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/department-kind/restore';
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
     * @name classifierJobPositionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJobPositionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/job-position/restore';
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
     * @name classifierDocumentTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDocumentTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/document-type/restore';
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
     * @name classifierDocumentStatusRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDocumentStatusRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/document-status/restore';
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
     * @name classifierEducationServiceKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationServiceKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-service-kind/restore';
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
     * @name classifierImplementEducationServiceRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierImplementEducationServiceRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-implement-service/restore';
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
     * @name classifierEducationDirectionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationDirectionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-direction/restore';
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
     * @name classifierEducationShiftRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationShiftRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-shift/restore';
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
     * @name classifierInstitutionTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInstitutionTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/institution-type/restore';
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
     * @name classifierInstitutionKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierInstitutionKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/institution-kind/restore';
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
     * @name classifierTerrainKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTerrainKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/terrain-kind/restore';
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
     * @name classifierWorkTimeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierWorkTimeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/work-time/restore';
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
     * @name classifierLanguageRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierLanguageRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/language/restore';
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
     * @name classifierEducationLevelRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationLevelRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-level/restore';
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
     * @name classifierMealPaymentRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierMealPaymentRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/meal-payment/restore';
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
     * @name classifierEducationServiceRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationServiceRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-service/restore';
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
     * @name classifierOvzGroupTypesRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOvzGroupTypesRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/ovz-group-types/restore';
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
     * @name classifierJurisdictionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJurisdictionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/jurisdiction/restore';
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
     * @name classifierRepresentativeTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierRepresentativeTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/representative-type/restore';
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
     * @name classifierCitizenshipTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierCitizenshipTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/citizenship-type/restore';
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
     * @name classifierHealthGroupRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierHealthGroupRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/health-group/restore';
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
     * @name classifierSportGroupRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSportGroupRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/sport-group/restore';
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
     * @name classifierOccupationalInjuriesRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOccupationalInjuriesRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/occupational-injuries/restore';
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
     * @name classifierOvzCategoryRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOvzCategoryRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/ovz-category/restore';
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
     * @name classifierOvzEducationKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierOvzEducationKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/ovz-education-kind/restore';
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
     * @name classifierLongTreatmentEducationKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierLongTreatmentEducationKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/long-treatment-education-kind/restore';
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
     * @name classifierHealthViolationRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierHealthViolationRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/health-violation/restore';
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
     * @name classifierDisabilityCategoryRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisabilityCategoryRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/disability-category/restore';
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
     * @name classifierDisabilityCauseRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisabilityCauseRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/disability-сause/restore';
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
     * @name classifierDisabilityGroupRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisabilityGroupRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/disability-group/restore';
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
     * @name classifierHardSituationRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierHardSituationRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/hard-situation/restore';
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
        let _path = '/classifiers/conviction-punishment/restore';
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
     * @name classifierSexRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSexRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/sex/restore';
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
     * @name classifierDeviantBehaviorRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDeviantBehaviorRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/deviant-behavior/restore';
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
     * @name classifierDisciplineRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDisciplineRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/discipline/restore';
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
     * @name classifierSpecifyRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSpecifyRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/specify/restore';
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
     * @name classifierEducationStageRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationStageRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-orientation/restore';
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
     * @name classifierEducationComponentRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationComponentRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-component/restore';
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
     * @name classifierProfessionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierProfessionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/profession/restore';
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
     * @name classifierCompetenceRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierCompetenceRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/competence/restore';
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
     * @name classifierAdaptivesRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierAdaptivesRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/adaptives/restore';
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
     * @name classifierProfileRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierProfileRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/profile/restore';
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
     * @name classifierQualificationRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierQualificationRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/qualification/restore';
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
     * @name classifierServiceDirectionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierServiceDirectionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/service-direction/restore';
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
     * @name classifierSportRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSportRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/sport/restore';
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
     * @name classifierImplementFormRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierImplementFormRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/implement-form/restore';
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
     * @name classifierEducationFormRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationFormRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-form/restore';
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
     * @name classifierArtRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierArtRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/art/restore';
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
     * @name classifierGroupCategoryRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierGroupCategoryRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/group-category/restore';
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
     * @name classifierGroupPlaceRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierGroupPlaceRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/group-place/restore';
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
     * @name classifierStayModeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierStayModeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/stay-mode/restore';
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
     * @name classifierGroupStatusRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierGroupStatusRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/group-status/restore';
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
     * @name classifierEstimateWeightRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEstimateWeightRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/estimate-weight/restore';
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
     * @name classifierSkillRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSkillRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/skill/restore';
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
     * @name classifierEducationContentTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationContentTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-content-type/restore';
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
     * @name classifierTaskControlFormRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTaskControlFormRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/task-control-form/restore';
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
     * @name classifierEducationEndingReasonRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationEndingReasonRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-ending-reason/restore';
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
     * @name classifierEducationAdditionalCharacteristicRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierEducationAdditionalCharacteristicRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/education-additional-characteristic/restore';
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
     * @name classifierPostGraduationSupportActualResultRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPostGraduationSupportActualResultRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/post-graduation-support-actual-result/restore';
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
     * @name classifierPostGraduationSupportIntentionRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPostGraduationSupportIntentionRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/post-graduation-support-intention/restore';
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
     * @name classifierApplicationPreferentialCategoryRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierApplicationPreferentialCategoryRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/application-preferential-category/restore';
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
     * @name classifierJobCompatibilityRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJobCompatibilityRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/job-compatibility/restore';
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
     * @name classifierQualificationCategoryRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierQualificationCategoryRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/qualification-category/restore';
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
     * @name classifierMentoringRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierMentoringRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/mentoring/restore';
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
     * @name classifierProfessionalCommunityRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierProfessionalCommunityRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/professional-community/restore';
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
     * @name classifierJobStatusRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierJobStatusRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/job-status/restore';
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
     * @name classifierTeacherSupportRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTeacherSupportRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/teacher-support/restore';
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
     * @name classifierAcademicDegreeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierAcademicDegreeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/academic-degree/restore';
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
     * @name classifierAcademicTitleRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierAcademicTitleRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/academic-title/restore';
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
     * @name classifierSportResultRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierSportResultRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/sport-result/restore';
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
     * @name classifierPortfolioRecordTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioRecordTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-record-type/restore';
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
     * @name classifierPortfolioRecordKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioRecordKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-record-kind/restore';
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
     * @name classifierPortfolioInvolvementLevelRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioInvolvementLevelRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-involvement-level/restore';
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
     * @name classifierPortfolioActivityKindRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioActivityKindRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-activity-kind/restore';
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
     * @name classifierPortfolioAwardRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioAwardRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-award/restore';
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
     * @name classifierPortfolioRankRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierPortfolioRankRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/portfolio-rank/restore';
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
     * @name classifierContractorTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierContractorTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/budget-contractor-type/restore';
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
     * @name classifierBudgetTransactionOperationRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBudgetTransactionOperationRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/budget-transaction-operation/restore';
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
     * @name classifierBudgetTransactionTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierBudgetTransactionTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/budget-transaction-type/restore';
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
     * @name classifierTermsOfEmploymentRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierTermsOfEmploymentRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/terms-of-employment/restore';
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
     * @name classifierDismissalTypeRestore
     *
     * @param {string} *p_ids - Идентификаторы 
     */
    public classifierDismissalTypeRestore(
        p_ids: string,
    ) {
        let _path = '/classifiers/dismissal-type/restore';
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