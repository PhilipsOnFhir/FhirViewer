import {Component, Input, OnInit} from '@angular/core';
import {Bundle, DomainResource} from "fhir2angular-stu3";
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bundle-display',
  templateUrl: './bundle-display.component.html',
  styleUrls: ['./bundle-display.component.css']
})
export class BundleDisplayComponent implements OnInit {
  @Input() resource
  private bundle: Bundle;
  resources: DomainResource[] = null;//new Array<Resource>(0);
  next: string;
  previous: string;

  constructor( private sofs: SmartOnFhirService, private router: Router) { }

  ngOnInit() {
    this.bundle = this.resource as Bundle;
    this.processBundle(this.resource);
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

  openResource(res: DomainResource) {
    this.router.navigate(["fhir", res.resourceType, res.id ], { queryParamsHandling: 'preserve' });
  }
}
