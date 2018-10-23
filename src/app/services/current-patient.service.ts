import { Injectable } from '@angular/core';
import {Patient} from '../fhir/dstu3/Patient';
import {SmartOnFhirService} from '../fhir-util/smart-on-fhir.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Resource} from '../fhir/dstu3/Resource';
import {ContextResource} from '../fhir-util/context.service';
import {Encounter} from '../fhir/dstu3/Encounter';

@Injectable({
  providedIn: 'root'
})
export class CurrentPatientService {
  private patient: Patient = null;
  private encounter: Encounter = null;

  constructor( private sofs: SmartOnFhirService, private router: Router, private activatedRoute: ActivatedRoute) {}

  setPatient( patient: Patient ) {
    this.patient = patient;
    this.router.navigate([],
      { relativeTo: this.activatedRoute,
        queryParams: { subject: this.patient.resourceType + '/' + this.patient.id },
        queryParamsHandling: 'merge'
      }
    );

  }

  getPatient(): Patient {
    return this.patient;
  }

  clearPatient() {
    this.patient = null;
  }

  hasPatient() {
    return this.patient != null;
  }

  getEncounter(): Patient {
    return this.patient;
  }

  clearEncounter() {
    this.encounter = null;
  }

  hasEncounter() {
    return this.encounter != null;
  }

  updateQueryParams( queryParmas: ParamMap ) {
    console.log( queryParmas )
    const subjectParam = queryParmas.get('subject');
    if ( subjectParam ) {
      if (!this.patient || this.patient.id !== subjectParam) {
        this.sofs.getResource(subjectParam).subscribe(resource => {
          console.log('param based patient update');
          this.patient = resource as Patient;
        });
      }
    }

    const encounterParam = queryParmas.get('encounter');
    if (encounterParam) {
      if ((!this.encounter || this.encounter.id !== encounterParam)) {
        this.sofs.getResource(subjectParam).subscribe(resource =>
          this.encounter = resource as Encounter
        );
      }
    }
  }

}
