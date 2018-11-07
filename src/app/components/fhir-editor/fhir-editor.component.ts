import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SmartOnFhirService} from '../../fhir-util/smart-on-fhir.service';
import {Questionnaire} from '../../fhir/dstu3/Questionnaire';
import {QuestionnaireUtil} from '../../fhir-util/dstu3-util/questionaire-util';
import {QuestionnaireResponse} from '../../fhir/dstu3/QuestionnaireResponse';
import {CurrentPatientService} from '../../services/current-patient.service';
import {QuestionnaireResponseStatusEnum} from '../../fhir/dstu3/QuestionnaireResponseStatusEnum';


/**
 * Goal - provide editor for FHIR - specifically the QuestionnaireResponse
 * Start based on QuestionnaireResponse:
 *  1. load QuestionnaireResponse
 *  2. present and edit
 *  3. submit - will store ... options:
 *        overwrite QR, set state to amended
 *        create new QR (POST) <--- choice
 * Start based on Questionnaire:
 *  1. Load Questionnaire
 *  2. Create QuestionnaireResponse
 *  3. present and edit
 *  3. submit - will store new QR (POST)
 */

@Component({
  selector: 'app-fhir-editor',
  templateUrl: './fhir-editor.component.html',
  styleUrls: ['./fhir-editor.component.sass']
})
export class FhirEditorComponent implements OnInit {

    private resourceType: string | null;
    private resourceId: string | null;
    resource: any  | null;
    questionnaireResponse: QuestionnaireResponse;
    hasbeenStored = false;

    constructor( private route: ActivatedRoute, private router: Router, private sofs: SmartOnFhirService, private currentPatient: CurrentPatientService) {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
    }

    ngOnInit() {
      // load resource
      this.route.url.subscribe(urlSegment => {
          console.log(urlSegment);
          this.resourceType = this.route.snapshot.paramMap.get('resourceType');
          this.resourceId   = this.route.snapshot.paramMap.get('resourceId');

          console.log( 'Resource Editor- ' + this.resourceType + ':' + this.resourceId);
          this.sofs.getResource(this.resourceType + '/' + this.resourceId)
              .subscribe( res => {
                  console.log(res);
                  this.resource = res;
                  this.sofs.setContainedResourceSource( this.resource );
                  if ( this.resourceType === Questionnaire.def ) {
                      // create QR
                      this.questionnaireResponse = QuestionnaireUtil.createQuestionnaireResponse( this.currentPatient, res );
                      this.questionnaireResponse.status = QuestionnaireResponseStatusEnum.IN_PROGRESS;
                  } else if ( this.resourceType === QuestionnaireResponse.def ) {
                      this.questionnaireResponse = JSON.parse( JSON.stringify(res));
                  }
              });
      });
    }

    store() {
        this.questionnaireResponse.status = QuestionnaireResponseStatusEnum.COMPLETED;
        if ( !this.hasbeenStored ){
            this.sofs.postResource(this.questionnaireResponse)
                .subscribe( res => {
                    console.log(res);
                    this.hasbeenStored = true;
                }, err => {
                    return console.log(err);
                });
        } else {
            this.sofs.putResource(this.questionnaireResponse)
                .subscribe( res => {
                    console.log(res);
                    this.hasbeenStored = true;
                }, err => {
                    return console.log(err);
                });
        }
    }
}
