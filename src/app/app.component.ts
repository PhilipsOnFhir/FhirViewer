import {Component, OnInit} from '@angular/core';
import {SmartOnFhirService} from './fhir-util/smart-on-fhir.service';
import {CurrentPatientService} from './services/current-patient.service';
import {Patient} from './fhir/dstu3/Patient';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientUtil} from './fhir-util/dstu3-util/patient-util';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit {
  // availableAndReady: boolean = false;
  showSpinner = true;
  private appState: AppStateEnum = AppStateEnum.SERVER_UNKNOWN;

  constructor(
    private sofs: SmartOnFhirService,
    private currentPatientService: CurrentPatientService,
    private route: ActivatedRoute,
    private router: Router,
    private _AcLocation: Location,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    const path = this._AcLocation.path();
    console.log(path);

    const pathSegments: string[] = new Array(0);
    if ( this.router.parseUrl(path).root.children['primary'] ) {
      this.router.parseUrl(path).root.children['primary'].segments.forEach(a =>
        pathSegments.push(a.path)
      );
    }
    console.log(pathSegments);

    const queryParamMap = this.router.parseUrl(path).queryParamMap;
    const fs = queryParamMap.get('fs');

    if ( !fs ) {
      this.router.navigate(['select' ], { queryParamsHandling: 'preserve' });
    }

    this.sofs.initialize( fs, path).subscribe(
      data => console.log(data),
      error => {
        this.showSpinner = false;
        this.appState = AppStateEnum.SERVER_UNKNOWN;
      },
      () => {
        console.log('initialisation ready');
        this.showSpinner = false;
        this.appState = AppStateEnum.READY;
        this.currentPatientService.updateQueryParams( queryParamMap );
        this.router.navigate(pathSegments, { queryParams: {fs: this.sofs.getUrl(), subject: queryParamMap.get('subject')}} );
      }
    );

    this.route.url.subscribe(urlSegment => {
      console.log(urlSegment);
    });
  }

  hasCurrentPatient(): boolean {
    const currentPatient: Patient = this.currentPatientService.getPatient();
    return currentPatient != null;
  }

  getCurrentPatientString(): string {
    const currentPatient: Patient = this.currentPatientService.getPatient();
    const result: string = ( currentPatient ?  PatientUtil.getPreferredName(currentPatient) : '---' );
    return result;
  }

  selectPatient() {
    this.router.navigate(['fhir', 'Patient'], { queryParamsHandling: 'preserve' });
  }

  clearPatient() {
    this.currentPatientService.clearPatient();
  }

  selectHome() {
    this.router.navigate(['fhir' ], { queryParamsHandling: 'preserve' });
  }

  selectBack() {
    this._AcLocation.back();
  }

  selectContext() {
    this.router.navigate(['context' ], { queryParamsHandling: 'preserve' });
  }


  isServerKnown() {
    return this.appState === AppStateEnum.SERVER_UNKNOWN;
  }

  isLaunching() {
    return this.appState === AppStateEnum.LAUNCHING;
  }

  isReady() {
    return this.sofs.isInitialized();
  }
}

enum AppStateEnum {
  SERVER_UNKNOWN,
  READY,
  LAUNCHING
}
