import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observation} from "../../../fhir/dstu3/Observation";
import {Procedure} from "../../../fhir/dstu3/Procedure";
import {CarePlan} from "../../../fhir/dstu3/CarePlan";
import {Encounter} from "../../../fhir/dstu3/Encounter";
import {MatSlideToggleChange} from "@angular/material";
import {CurrentPatientService} from "../../../services/current-patient.service";
import {Patient} from "../../../fhir/dstu3/Patient";
import {EpisodeOfCare} from "../../../fhir/r4/EpisodeOfCare";
import {ProcedureRequest} from "../../../fhir/dstu3/ProcedureRequest";
import {Condition} from "../../../fhir/dstu3/Condition";

@Component({
  selector: 'app-resource-selector-filter',
  templateUrl: './resource-selector-filter.component.html',
  styleUrls: ['./resource-selector-filter.component.sass']
})
export class ResourceSelectorFilterComponent implements OnInit {

  @Input()  resourceType: string | null;
  @Output() searchString: EventEmitter<string> = new EventEmitter<string>();
  private supportsPatientSearch: boolean =false;
  private searchParam = new Map<String,String>();

  constructor( private currentPatientService: CurrentPatientService ) { }

  ngOnInit() {
    this.supportsPatientSearch = this.determineSupportsPatientSearch();
    this.patientSearchChange( {"checked":false});

  }

  buttonEvent( event ){
    console.log(event);

    this.searchParam.set(event.message,event.value);
    this.searchString.emit(this.createSearchString());
  }

  createSearchString(): string {
    let str:string;
    str="";
    this.searchParam.forEach( ( value, key ) => {
      str += (str.length==0?"?":":");
      str += key+"="+value;
    });
    console.log(str);
    return str;
  }

  determineSupportsPatientSearch(): boolean{
    let result : boolean = false;
    let patientSearchObservation: string[] =
      [ Observation.def , Encounter.def, CarePlan.def, Procedure.def, EpisodeOfCare.def, ProcedureRequest.def, Condition.def  ];
    patientSearchObservation.filter( res => this.resourceType===res ).forEach( res => result=true);
    result = this.currentPatientService.getPatient() && result;
    return result;
  }

  patientSearchChange( event ) {
    console.log(event);
    let patient: Patient = this.currentPatientService.getPatient();

    if ( event.checked && patient && this.supportsPatientSearch ){
      this.searchParam.set("patient", Patient.def+"/"+patient.id );
    } else {
      this.searchParam.delete("patient");
    }
    console.log(this.searchParam);
    this.searchString.emit(this.createSearchString());
  }

}
