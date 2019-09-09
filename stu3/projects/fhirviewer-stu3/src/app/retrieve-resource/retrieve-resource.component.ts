import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Resource} from "fhir2angular-stu3/lib/Resource";
import {SmartOnFhirService} from "../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";

@Component({
  selector: 'app-retrieve-resource',
  templateUrl: './retrieve-resource.component.html',
  styleUrls: ['./retrieve-resource.component.css']
})
export class RetrieveResourceComponent implements OnInit {
  private resourceType: string = null;
  private resourceId: string = null;
  private resource: Resource;
  private format: string = 'plain';
  private operation: string;
  error: boolean = false;

  constructor( private sofs: SmartOnFhirService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      let format = params.get("format")
      this.format = ( format? format:'nice')
    });

    this.resourceType = this.route.snapshot.paramMap.get('resourceType');
    this.resourceId = this.route.snapshot.paramMap.get('resourceId');
    this.operation = this.route.snapshot.paramMap.get('operation');
    console.log("retrieve resource");


    if ( !this.resourceType){
      this.sofs.getCapabilityStatement()
        .subscribe(res => this.setResource(res), e => this.error=true )
    } else if( !this.resourceId ) {
      this.sofs.searchResources(this.resourceType, "")
        .subscribe(res => this.setResource(res), e => this.error=true )
    } else if( !this.operation ) {
      this.sofs.getResourceById(this.resourceType, this.resourceId )
        .subscribe(res => this.setResource(res), e => this.error=true )
    } else{
      this.sofs.getResourceById(this.resourceType, this.resourceId )
        .subscribe(res => this.setResource(res), e => this.error=true )
    }
  }

  setResource(res: Resource) {
    this.resource = res;
    this.sofs.setContainedResourceSource(res);
  }

}
