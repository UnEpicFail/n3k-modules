import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Classifier } from './classifier/Classifier';
import { ClassifierCountry } from './classifier/ClassifierCountry';

@Injectable()
export class Classifier_saveService {

    constructor(public http: Http) { }

    /**
     * 
     * @method
     * @name classifierOktmoSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOktmoSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/oktmo/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkoguSave
     *
     */
    public classifierOkoguSave(
    ) {
        let _path = '/classifiers/okogu/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 


        return this.http['post'](_path, _params)
    }
    /**
     * 
     * @method
     * @name classifierTypeOfOwnershipSave
     *
     * @param {Classifier} *body -   
     */
    public classifierTypeOfOwnershipSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/type-of-ownership/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierFoundersTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierFoundersTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/founders-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionStatusSave
     *
     * @param {Classifier} *body -   
     */
    public classifierInstitutionStatusSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/institution-status/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOrganizationStatusSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOrganizationStatusSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/organization-status/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDistrictSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDistrictSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/district/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierRegionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierRegionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/region/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkopfSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOkopfSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/okopf/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkfsSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOkfsSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/okfs/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOkvedSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOkvedSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/okved/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierCountrySave
     *
     * @param {ClassifierCountry} *body -   
     */
    public classifierCountrySave(
        body: ClassifierCountry,
    ) {
        let _path = '/classifiers/country/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierContactTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierContactTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/contact_type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPublicAdministrationFormSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPublicAdministrationFormSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/public-administration-form/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSignificanceLevelSave
     *
     * @param {Classifier} *body -   
     */
    public classifierSignificanceLevelSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/significance-level/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierInnovationActivityDirectionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierInnovationActivityDirectionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/innovation-activity-direction/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierInnovationLevelSave
     *
     * @param {Classifier} *body -   
     */
    public classifierInnovationLevelSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/innovation-level/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationContractSubjectSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationContractSubjectSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-contract-subject/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPublicDigitalServiceSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPublicDigitalServiceSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/public-digital-service/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierFgosScoringSave
     *
     * @param {Classifier} *body -   
     */
    public classifierFgosScoringSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/fgos-scoring/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSiteCharacteristicSave
     *
     * @param {Classifier} *body -   
     */
    public classifierSiteCharacteristicSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/site-characteristic/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierRoomTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierRoomTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/room-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierBuildingTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierBuildingTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/building-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierBuildingStatusSave
     *
     * @param {Classifier} *body -   
     */
    public classifierBuildingStatusSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/building-status/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDepartmentKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDepartmentKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/department-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobPositionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierJobPositionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/job-position/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDocumentTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDocumentTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/document-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDocumentStatusSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDocumentStatusSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/document-status/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationServiceKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationServiceKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-service-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierImplementEducationServiceSave
     *
     * @param {Classifier} *body -   
     */
    public classifierImplementEducationServiceSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-implement-service/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationDirectionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationDirectionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-direction/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationShiftSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationShiftSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-shift/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierInstitutionTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/institution-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierInstitutionKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierInstitutionKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/institution-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierTerrainKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierTerrainKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/terrain-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierLanguageSave
     *
     * @param {Classifier} *body -   
     */
    public classifierLanguageSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/language/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationLevelSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationLevelSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-level/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierMealTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierMealTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/meal-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierFinancingTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierFinancingTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/financing-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationServiceSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationServiceSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-service/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzGroupTypesSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOvzGroupTypesSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/ovz-group-types/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierJurisdictionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierJurisdictionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/jurisdiction/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierRepresentativeTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierRepresentativeTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/representative-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierCitizenshipTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierCitizenshipTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/citizenship-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierHealthGroupSave
     *
     * @param {Classifier} *body -   
     */
    public classifierHealthGroupSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/health-group/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportGroupSave
     *
     * @param {Classifier} *body -   
     */
    public classifierSportGroupSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/sport-group/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOccupationalInjuriesSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOccupationalInjuriesSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/occupational-injuries/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzCategorySave
     *
     * @param {Classifier} *body -   
     */
    public classifierOvzCategorySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/ovz-category/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierOvzEducationKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierOvzEducationKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/ovz-education-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierLongTreatmentEducationKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierLongTreatmentEducationKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/long-treatment-education-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierHealthViolationSave
     *
     * @param {Classifier} *body -   
     */
    public classifierHealthViolationSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/health-violation/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityCategorySave
     *
     * @param {Classifier} *body -   
     */
    public classifierDisabilityCategorySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/disability-category/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityCauseSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDisabilityCauseSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/disability-сause/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisabilityGroupSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDisabilityGroupSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/disability-group/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierHardSituationSave
     *
     * @param {Classifier} *body -   
     */
    public classifierHardSituationSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/hard-situation/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierСonvictionPunishment
     *
     * @param {Classifier} *body -   
     */
    public classifierСonvictionPunishment(
        body: Classifier,
    ) {
        let _path = '/classifiers/conviction-punishment/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSexSave
     *
     * @param {Classifier} *body -   
     */
    public classifierSexSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/sex/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDeviantBehaviorSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDeviantBehaviorSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/deviant-behavior/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDisciplineSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDisciplineSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/discipline/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSpecifySave
     *
     * @param {Classifier} *body -   
     */
    public classifierSpecifySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/specify/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationStageSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationStageSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-orientation/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationComponentSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationComponentSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-component/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfessionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierProfessionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/profession/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierCompetenceSave
     *
     * @param {Classifier} *body -   
     */
    public classifierCompetenceSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/competence/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierAdaptivesSave
     *
     * @param {Classifier} *body -   
     */
    public classifierAdaptivesSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/adaptives/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfileSave
     *
     * @param {Classifier} *body -   
     */
    public classifierProfileSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/profile/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierQualificationSave
     *
     * @param {Classifier} *body -   
     */
    public classifierQualificationSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/qualification/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierServiceDirectionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierServiceDirectionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/service-direction/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportSave
     *
     * @param {Classifier} *body -   
     */
    public classifierSportSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/sport/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierImplementFormSave
     *
     * @param {Classifier} *body -   
     */
    public classifierImplementFormSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/implement-form/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationFormSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationFormSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-form/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierArtSave
     *
     * @param {Classifier} *body -   
     */
    public classifierArtSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/art/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupCategorySave
     *
     * @param {Classifier} *body -   
     */
    public classifierGroupCategorySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/group-category/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupPlaceSave
     *
     * @param {Classifier} *body -   
     */
    public classifierGroupPlaceSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/group-place/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierStayModeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierStayModeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/stay-mode/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierGroupStatusSave
     *
     * @param {Classifier} *body -   
     */
    public classifierGroupStatusSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/group-status/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEstimateWeightSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEstimateWeightSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/estimate-weight/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSkillSave
     *
     * @param {Classifier} *body -   
     */
    public classifierSkillSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/skill/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationContentTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationContentTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-content-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierTaskControlFormSave
     *
     * @param {Classifier} *body -   
     */
    public classifierTaskControlFormSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/task-control-form/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationEndingReasonSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationEndingReasonSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-ending-reason/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierEducationAdditionalCharacteristicSave
     *
     * @param {Classifier} *body -   
     */
    public classifierEducationAdditionalCharacteristicSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/education-additional-characteristic/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPostGraduationSupportActualResultSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPostGraduationSupportActualResultSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/post-graduation-support-actual-result/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPostGraduationSupportIntentionSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPostGraduationSupportIntentionSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/post-graduation-support-intention/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierApplicationPreferentialCategorySave
     *
     * @param {Classifier} *body -   
     */
    public classifierApplicationPreferentialCategorySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/application-preferential-category/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobCompatibilitySave
     *
     * @param {Classifier} *body -   
     */
    public classifierJobCompatibilitySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/job-compatibility/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierQualificationCategorySave
     *
     * @param {Classifier} *body -   
     */
    public classifierQualificationCategorySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/qualification-category/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierMentoringSave
     *
     * @param {Classifier} *body -   
     */
    public classifierMentoringSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/mentoring/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierProfessionalCommunitySave
     *
     * @param {Classifier} *body -   
     */
    public classifierProfessionalCommunitySave(
        body: Classifier,
    ) {
        let _path = '/classifiers/professional-community/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierJobStatusSave
     *
     * @param {Classifier} *body -   
     */
    public classifierJobStatusSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/job-status/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierTeacherSupportSave
     *
     * @param {Classifier} *body -   
     */
    public classifierTeacherSupportSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/teacher-support/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierAcademicDegreeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierAcademicDegreeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/academic-degree/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierAcademicTitleSave
     *
     * @param {Classifier} *body -   
     */
    public classifierAcademicTitleSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/academic-title/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierSportResultSave
     *
     * @param {Classifier} *body -   
     */
    public classifierSportResultSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/sport-result/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRecordTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPortfolioRecordTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/portfolio-record-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRecordKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPortfolioRecordKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/portfolio-record-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioInvolvementLevelSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPortfolioInvolvementLevelSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/portfolio-involvement-level/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioActivityKindSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPortfolioActivityKindSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/portfolio-activity-kind/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioAwardSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPortfolioAwardSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/portfolio-award/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierPortfolioRankSave
     *
     * @param {Classifier} *body -   
     */
    public classifierPortfolioRankSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/portfolio-rank/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierContractorTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierContractorTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/budget-contractor-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierBudgetTransactionOperationSave
     *
     * @param {Classifier} *body -   
     */
    public classifierBudgetTransactionOperationSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/budget-transaction-operation/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierBudgetTransactionTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierBudgetTransactionTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/budget-transaction-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierTermsOfEmploymentSave
     *
     * @param {Classifier} *body -   
     */
    public classifierTermsOfEmploymentSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/terms-of-employment/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
    /**
     * 
     * @method
     * @name classifierDismissalTypeSave
     *
     * @param {Classifier} *body -   
     */
    public classifierDismissalTypeSave(
        body: Classifier,
    ) {
        let _path = '/classifiers/dismissal-type/save';
        let _body = '';
        let _params = {
            headers: new Headers(),
        }
        _params.headers.append('X-Requested-With', 'XMLHttpRequest'); 

        _body += JSON.stringify(body);

        return this.http['post'](_path, _body, _params)
    }
}