import {Component, Input, OnInit} from '@angular/core';
import {DomainResource} from "../../../fhir/dstu3/DomainResource";
import {Resource} from "../../../fhir/dstu3/Resource";
import {Bundle} from "../../../fhir/dstu3/Bundle";
import {SmartOnFhirService} from "../../../fhir-util/smart-on-fhir.service";
import {Patient} from "../../../fhir/dstu3/Patient";
import {CurrentPatientService} from "../../../services/current-patient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bundle-display',
  templateUrl: './bundle-display.component.html',
  styleUrls: ['./bundle-display.component.sass']
})
export class BundleDisplayComponent implements OnInit {
  @Input() resource: DomainResource;
  bundle: Bundle;
  resources: DomainResource[] = null;//new Array<Resource>(0);
  next: string;
  previous: string;
  currentPatient: Patient;

  constructor( private router:Router, private  sofs: SmartOnFhirService, private currentPatientService: CurrentPatientService ) { }

  ngOnInit() {
    this.bundle = this.resource as Bundle;
    this.processBundle(this.resource);
    this.currentPatient = this.currentPatientService.getPatient();
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  selectPatient( resource:Resource){
    let patient:Patient = resource as Patient;
    this.currentPatient = patient;
    this.currentPatientService.setPatient(patient);
  }

  private processBundle(res ) {
    console.log(res);
    let resourcesTmp: DomainResource[] = Array(0);
    let bundle: Bundle = res as Bundle;
    if (bundle.entry) {
      bundle.entry.forEach(entry => {

        let resource = entry.resource as DomainResource;
        resourcesTmp.push(resource);
      });
    }
    this.resource = res;
    this.bundle = bundle;
    this.resources = resourcesTmp;
    this.next = null;
    this.previous = null;
    if ( bundle.link ) {
      bundle.link.forEach(link => {
        if (link.relation && link.relation === "next") {
          this.next = link.url;
        }
        if (link.relation && link.relation === "previous") {
          this.previous = link.url;
        }
      })
      // this.getNext( bundle );
    }
  }

  doPrevious() {
    this.sofs.getResource(this.previous)
      .subscribe( res => {
        this.processBundle(res);
      });
  }

  doNext() {
    this.sofs.getResource(this.next)
      .subscribe( res => {
        this.processBundle(res);
      });
  }
}
