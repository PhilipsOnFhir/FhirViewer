import {Component, OnInit} from '@angular/core';
import {SmartOnFhirService} from "./fhir-util/smart-on-fhir.service";
import {CurrentPatientService} from "./services/current-patient.service";
import {Patient} from "./fhir/dstu3/Patient";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientUtil} from "./fhir-util/dstu3-util/patient-util";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit {
  //availableAndReady: boolean = false;
  showSpinner:boolean = true;
  private appState : AppStateEnum = AppStateEnum.SERVER_UNKNOWN;

  constructor(
    private sofs : SmartOnFhirService,
    private currentPatientService: CurrentPatientService,
    private route: ActivatedRoute,
    private router: Router,
    private _AcLocation: Location,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    let path = this._AcLocation.path();
    console.log(path);

    let pathSegments: string[] = new Array(0);
    if ( this.router.parseUrl(path).root.children['primary'] ) {
      this.router.parseUrl(path).root.children['primary'].segments.forEach(a =>
        pathSegments.push(a.path)
      );
    }
    console.log(pathSegments);

    let fs    = this.router.parseUrl(path).queryParamMap.get('fs');

    this.sofs.initialize( fs, path).subscribe(
      data => console.log(data),
      error => {
        this.showSpinner = false;
        this.appState = AppStateEnum.SERVER_UNKNOWN;
      },
      () => {
        console.log("initialisation ready")
        this.showSpinner = false;
        this.appState = AppStateEnum.READY;
        this.router.navigate(pathSegments, { queryParams:{fs: this.sofs.getUrl()}} );
      }
    );

    this.route.url.subscribe(urlSegment => {
      console.log(urlSegment);
    });
  }

  hasCurrentPatient(): boolean {
    let currentPatient:Patient = this.currentPatientService.getPatient();
    return currentPatient!=null;
  }

  getCurrentPatientString(): string {
    let currentPatient:Patient = this.currentPatientService.getPatient();
    let restult: string = ( currentPatient ?  PatientUtil.getPreferredName(currentPatient) : "---" );
    return restult;
  }

  selectPatient(){
    this.router.navigate(["fhir","Patient"], { queryParamsHandling: 'preserve' });
  }
  clearPatient(){
    this.currentPatientService.clearPatient();
  }

  selectHome() {
    this.router.navigate(["fhir" ], { queryParamsHandling: 'preserve' });
  }

  selectBack() {
    this._AcLocation.back();
  }

  selectContext() {
    this.router.navigate(["context" ], { queryParamsHandling: 'preserve' });
  }


  isServerKnown() {
    return this.appState === AppStateEnum.SERVER_UNKNOWN;
  }

  isLaunching() {
    return this.appState === AppStateEnum.LAUNCHING;
  }

  isReady() {
    return this.appState === AppStateEnum.READY;
  }
}

enum AppStateEnum {
  SERVER_UNKNOWN,
  READY,
  LAUNCHING
};
