import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {SmartOnFhirService} from "../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {FhirCastService} from "../../../smartonfhir-stu3/src/lib/service/fhir-cast.service";
import {ContextService} from "../../../smartonfhir-stu3/src/lib/service/context.service";
import {MaterialModule} from "./material/material.module";
import { RetrieveResourceComponent } from './retrieve-resource/retrieve-resource.component';
import { GenericDisplayComponent } from './resource-display/generic-display/generic-display.component';
import { GenericDisplayElementComponent } from './resource-display/generic-display/generic-display-element/generic-display-element.component';
import { ResourceDisplayComponent } from './resource-display/resource-display.component';
import { CapabilityStatementDisplayComponent } from './resource-display/capability-statement-display/capability-statement-display.component';
import { AsyncSessionComponent } from './async-session/async-session.component';
import { FileSaverModule } from 'ngx-filesaver';
import {AsyncResultDialog} from "./async-session/async-result-dialog.component";
import { PatientDisplayComponent } from './resource-display/patient-display/patient-display.component';
import { BundleDisplayComponent } from './resource-display/bundle-display/bundle-display.component';
import { GroupDisplayComponent } from './resource-display/group-display/group-display.component';
import { QuestionnaireDisplayComponent } from './resource-display/questionnaire-display/questionnaire-display.component';
import { QuestionnaireResponseDisplayComponent } from './resource-display/questionnaire-response-display/questionnaire-response-display.component';
import { QuestionnaireResponseItemDisplayComponent } from './resource-display/questionnaire-response-display/questionnaire-response-item-display/questionnaire-response-item-display.component';
import {MarkdownModule, MarkedOptions} from "ngx-markdown";
import {FormsModule} from "@angular/forms";
import { ObservationDisplayComponent } from './resource-display/observation-display/observation-display.component';
import { ContextDisplayComponent } from './context-display/context-display.component';
import { PlanDefinitionDisplayComponent } from './resource-display/plan-definition-display/plan-definition-display.component';
import { RequestGroupDisplayComponent } from './resource-display/request-group-display/request-group-display.component';
import { CareplanDisplayComponent } from './resource-display/careplan-display/careplan-display.component';
import { CarePlanActivityDisplayComponent } from './resource-display/careplan-display/care-plan-activity-display/care-plan-activity-display.component';
import { AnnotationDisplayComponent } from './resource-display/annotation-display/annotation-display.component';
import { RequestGroupActionDisplayComponent } from './resource-display/request-group-display/request-group-action-display/request-group-action-display.component';
import {MatTreeModule} from "@angular/material";

const appRoutes: Routes = [
  { path: 'launch', component: AppComponent },
  {path:  'async', component: AsyncSessionComponent },
  { path: 'fhir', component: RetrieveResourceComponent },
  { path: 'fhir/:resourceType', component: RetrieveResourceComponent },
  { path: 'fhir/:resourceType/:resourceId', component: RetrieveResourceComponent},
  { path: 'fhir/:resourceType/:resourceId/:operation', component: RetrieveResourceComponent},
  { path: 'context', component: ContextDisplayComponent },
  { path: 'context/:resourceType/:resourceId', component: ContextDisplayComponent },
  { path: '', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RetrieveResourceComponent,
    GenericDisplayComponent,
    GenericDisplayElementComponent,
    ResourceDisplayComponent,
    CapabilityStatementDisplayComponent,
    AsyncSessionComponent,
    AsyncResultDialog,
    PatientDisplayComponent,
    BundleDisplayComponent,
    GroupDisplayComponent,
    QuestionnaireDisplayComponent,
    QuestionnaireResponseDisplayComponent,
    QuestionnaireResponseItemDisplayComponent,
    ObservationDisplayComponent,
    ContextDisplayComponent,
    PlanDefinitionDisplayComponent,
    RequestGroupDisplayComponent,
    CareplanDisplayComponent,
    CarePlanActivityDisplayComponent,
    AnnotationDisplayComponent,
    RequestGroupActionDisplayComponent
  ],
  entryComponents: [AsyncResultDialog],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxJsonViewerModule,
    FileSaverModule,
    MarkdownModule.forRoot({
        markedOptions: {
          provide: MarkedOptions,
          useValue: {
            gfm: true,
            breaks: true,
          },
        }
      },
    ),
    MatTreeModule,
  ],
  providers: [SmartOnFhirService, FhirCastService, ContextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
