import { Injectable } from '@angular/core';
import {Patient} from "../fhir/dstu3/Patient";

@Injectable({
  providedIn: 'root'
})
export class CurrentPatientService {
  private patient : Patient = null;
  constructor() { }

  setPatient( patient:Patient ){
    this.patient = patient;
  }

  getPatient():Patient {
    return this.patient;
  }

  clearPatient() {
    this.patient = null;
  }

  hasPatient() {
    return this.patient!=null;
  }
}
