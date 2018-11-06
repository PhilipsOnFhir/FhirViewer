import {EventEmitter, Injectable, Output} from '@angular/core';
import {Patient} from '../fhir/dstu3/Patient';
import {SmartOnFhirService} from '../fhir-util/smart-on-fhir.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Resource} from '../fhir/dstu3/Resource';
import {ContextResource} from '../fhir-util/context.service';
import {Encounter} from '../fhir/dstu3/Encounter';
import {RequestGroupResponseResult} from '../components/resource-display/request-group-display/request-group-display.component';

@Injectable({
  providedIn: 'root'
})
export class CurrentPatientService {
  private patient: Patient = null;
  private encounter: Encounter = null;
  @Output() patientUpdate  = new EventEmitter<Patient>();


  constructor( private sofs: SmartOnFhirService, private router: Router, private activatedRoute: ActivatedRoute) {}

  setPatient( patient: Patient ) {
    console.log(patient);
    this.patient = patient;
    this.patientUpdate.emit( patient )
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

  // clearPatient() {
  //   this.patient = null;
  //   this.patientUpdate.emit( this.patient )
  //   this.router.navigate([],
  //       { relativeTo: this.activatedRoute,
  //           queryParams: { subject: this.patient.resourceType + '/' + this.patient.id },
  //           queryParamsHandling: 'merge'
  //       }
  //   );
  // }

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
          this.setPatient( resource as Patient );
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
