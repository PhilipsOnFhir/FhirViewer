import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';

import {AppComponent} from './app.component';
import {SmartOnFhirService} from './fhir-util/smart-on-fhir.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ResourceSelectorComponent} from './components/resource-selector/resource-selector.component';
import {ResourceDisplayComponent} from './components/resource-display/resource-display.component';
import {MaterialModule} from './material/material.module';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {ResourceViewerComponent} from './components/resource-viewer/resource-viewer.component';
import {PatientViewerComponent} from './components/resource-display/patient-display/patient-viewer.component';
import {ResourceSelectorFilterComponent} from './components/resource-selector/resource-selector-filter/resource-selector-filter.component';
import {FormsModule} from '@angular/forms';
import {CancelButtonComponent} from './components/cancel-button/cancel-button.component';
import {QuestionnaireDisplayComponent} from './components/resource-display/questionnaire-display/questionnaire-display.component';
import {QuestionnaireDisplayItemComponent} from './components/resource-display/questionnaire-response-display/questionnaire-display-item/questionnaire-display-item.component';
import {ResourceOverviewComponent} from './components/resource-overview/resource-overview.component';
import {PlanDefinitionDisplayComponent} from './components/resource-display/plan-definition-display/plan-definition-display.component';
import {ContextSelectorComponent} from './components/context-selector/context-selector.component';
import {ContextService} from './fhir-util/context.service';
import {ResourceDisplayLoaderComponent} from './components/resource-display-loader/resource-display-loader.component';
import {CareplanDisplayComponent} from './components/resource-display/careplan-display/careplan-display.component';
import {AnnotationDisplayComponent} from './components/resource-display/annotation-display/annotation-display.component';
import {ResourceAccordianComponent} from './components/resource-accordian/resource-accordian.component';
import {RequestGroupDisplayComponent} from './components/resource-display/request-group-display/request-group-display.component';
import {RequestGroupActionDisplayComponent} from './components/resource-display/request-group-display/request-group-action-display/request-group-action-display.component';
import {QuestionnaireResponseDisplayComponent} from './components/resource-display/questionnaire-response-display/questionnaire-response-display.component';
import {MeasureDisplayComponent} from './components/resource-display/measure-display/measure-display.component';
import {FhirElementComponent} from './components/resource-display/generic-display/fhir-element/fhir-element.component';
import {GenericDisplayComponent} from './components/resource-display/generic-display/generic-display.component';
import {FhirServerSelectorComponent} from './components/fhir-server-selector/fhir-server-selector.component';
import {BundleDisplayComponent} from './components/resource-display/bundle-display/bundle-display.component';
import {CareplanActivityDisplayComponent} from './components/resource-display/careplan-display/careplan-activity-display/careplan-activity-display.component';
import {ActivityDefinitionDisplayComponent} from './components/resource-display/activity-definition-display/activity-definition-display.component';
import {AsyncSessionComponentComponent} from './components/async-session-component/async-session-component.component';
import {GroupDisplayComponent} from './components/resource-display/group-display/group-display.component';
import { OperationOutcomeDisplayComponent } from './components/resource-display/operation-outcome-display/operation-outcome-display.component';
import { FhirEditorComponent } from './components/fhir-editor/fhir-editor.component';
// import {EpicHttpInterceptor} from './interceptor/http-interceptor.service';

const appRoutes: Routes = [
  { path: 'select', component: FhirServerSelectorComponent },
  { path: 'context', component: ContextSelectorComponent },
  { path: 'context/:contextId', component: ContextSelectorComponent },
  { path: 'fhir', component: ResourceOverviewComponent },
  { path: 'fhir/:resourceType', component: ResourceSelectorComponent },
  { path: 'fhir/:resourceType/:resourceId', component: ResourceDisplayLoaderComponent},
  { path: 'async', component: AsyncSessionComponentComponent},
  { path: 'editor/:resourceType/:resourceId', component: FhirEditorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResourceSelectorComponent,
    ResourceDisplayComponent,
    ResourceViewerComponent,
    PatientViewerComponent,
    ResourceSelectorFilterComponent,
    CancelButtonComponent,
    QuestionnaireDisplayComponent,
    QuestionnaireDisplayItemComponent,
    ResourceOverviewComponent,
    PlanDefinitionDisplayComponent,
    ContextSelectorComponent,
    ResourceDisplayLoaderComponent,
    CareplanDisplayComponent,
    AnnotationDisplayComponent,
    CareplanActivityDisplayComponent,
    ResourceAccordianComponent,
    RequestGroupDisplayComponent,
    RequestGroupActionDisplayComponent,
    QuestionnaireResponseDisplayComponent,
    MeasureDisplayComponent,
    FhirElementComponent,
    GenericDisplayComponent,
    FhirServerSelectorComponent,
    BundleDisplayComponent,
    ActivityDefinitionDisplayComponent,
    AsyncSessionComponentComponent,
    GroupDisplayComponent,
    OperationOutcomeDisplayComponent,
    FhirEditorComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    ),
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
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,

    MaterialModule,
    NgxJsonViewerModule
  ],
  providers: [
    SmartOnFhirService,
    ContextService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: EpicHttpInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
