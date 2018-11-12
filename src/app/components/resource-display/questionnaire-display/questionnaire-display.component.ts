import {Component, Input, OnInit} from '@angular/core';
import {Resource} from '../../../fhir/dstu3/Resource';
import {Questionnaire} from '../../../fhir/dstu3/Questionnaire';
import {QuestionnaireResponse} from '../../../fhir/dstu3/QuestionnaireResponse';
import {Reference} from '../../../fhir/dstu3/Reference';
import {QuestionnaireResponse_Item} from '../../../fhir/dstu3/QuestionnaireResponse_Item';
import {Questionnaire_Item} from '../../../fhir/dstu3/Questionnaire_Item';
import {QuestionnaireResponse_Answer} from '../../../fhir/dstu3/QuestionnaireResponse_Answer';
import {QuestionnaireResponseStatusEnum} from '../../../fhir/dstu3/QuestionnaireResponseStatusEnum';
import {ContextService} from '../../../fhir-util/context.service';
import {Router} from '@angular/router';
import {DomainResource} from '../../../fhir/dstu3/DomainResource';
import {CurrentPatientService} from '../../../services/current-patient.service';
import {QuestionnaireUtil} from '../../../fhir-util/dstu3-util/questionaire-util';
import {Parameters} from '../../../fhir/dstu3/Parameters';
import {Parameters_Parameter} from '../../../fhir/dstu3/Parameters_Parameter';
import {SmartOnFhirService} from '../../../fhir-util/smart-on-fhir.service';

@Component({
  selector: 'app-questionnaire-display',
  templateUrl: './questionnaire-display.component.html',
  styleUrls: ['./questionnaire-display.component.sass']
})
export class QuestionnaireDisplayComponent implements  OnInit {

  @Input()  resource: Resource|null;
  questionnaire: Questionnaire|null;
  title: string | '';

  constructor( private sofs: SmartOnFhirService, private contextService: ContextService, private router: Router, private currentPatient: CurrentPatientService ) {

  }

  ngOnInit(): void {
    this.questionnaire = this.resource as Questionnaire;
    this.title = ( this.questionnaire.title && this.questionnaire.title.length > 0 ? this.questionnaire.title : this.questionnaire.id );
  }



  fillIn() {
    console.log('fill in');
    let qr: QuestionnaireResponse =  QuestionnaireUtil.createQuestionnaireResponse( this.currentPatient, this.questionnaire );
    if ( this.currentPatient.hasPatient() ) {
        // try populate
        const questionnaireParameter: Parameters_Parameter = new Parameters_Parameter();
        questionnaireParameter.name = 'questionnaire';
        questionnaireParameter.resource = this.questionnaire;

        const subjectParameter: Parameters_Parameter = new Parameters_Parameter();
        subjectParameter.name = 'subject';
        const patientReference = new Reference();
        patientReference.reference = this.currentPatient.getPatient().id;
        subjectParameter.valueReference = patientReference;

        const parameters: Parameters = new Parameters();
        parameters.parameter = new Array(0);
        parameters.parameter.push(questionnaireParameter);
        parameters.parameter.push(subjectParameter);
        parameters.resourceType = Parameters.def;

        this.sofs.doPostOperation(Questionnaire.def, 'populate', parameters).subscribe(
            response => {
                console.log(response);
                const res = this.contextService.postContextResource(response);
                qr = res as QuestionnaireResponse;
                // this.router.navigate(["fhir", response.resourceType, cp.id], { queryParamsHandling: 'preserve' });
                // es.retrieveActive = false;
                const qrPosted: DomainResource = this.contextService.postContextResource(qr);
                // console.log( qrPosted );
                this.router.navigate(['fhir', QuestionnaireResponse.def, qrPosted.id], { queryParamsHandling: 'preserve' });
            },
            error => {
                console.log(error);
                // es.retrieveActive = false;
                const qrPosted: DomainResource = this.contextService.postContextResource(qr);
                // console.log( qrPosted );
                this.router.navigate(['fhir', QuestionnaireResponse.def, qrPosted.id], { queryParamsHandling: 'preserve' });
            }
        );
    } else {
        const qrPosted: DomainResource = this.contextService.postContextResource(qr);
        console.log( qrPosted );
        this.router.navigate(['fhir', QuestionnaireResponse.def, qrPosted.id], { queryParamsHandling: 'preserve' });
    }

  }
}
