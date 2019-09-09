import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {CapabilityStatement} from "fhir2angular-stu3";
import {Router} from "@angular/router";
import {SmartOnFhirService} from "../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {Resource} from "fhir2angular-stu3";
import {ContextService} from "../../../../../smartonfhir-stu3/src/lib/service/context.service";

@Component({
  selector: 'app-capability-statement-display',
  templateUrl: './capability-statement-display.component.html',
  styleUrls: ['./capability-statement-display.component.css']
})
export class CapabilityStatementDisplayComponent implements OnInit {
  @Input()  resource: CapabilityStatement | null;

  resourceTypes: string[] = Array<string>(0);
  private capabilityStatement: CapabilityStatement;
  private exportPresent: boolean = false;

  constructor( private router: Router, private sofs: SmartOnFhirService, private context: ContextService) { }

  ngOnInit() {
    this.capabilityStatement = this.resource;
    this.capabilityStatement.rest
      .filter(rest => rest.mode === "server")
      .forEach(rest => {
        rest.resource.forEach(resource => {
          if (resource.type) {
            this.resourceTypes.push(resource.type);
          }
        })
      });

    // this.capabilityStatement.rest
    //   .filter(rest => rest.mode === "server")
    //   .forEach( rest => {
    //     rest.operation.forEach( operation => {
    //       if ( operation.name && operation.name === "export"){
    //         console.log(operation);
    //         this.exportPresent = true;
    //       }
    //       // console.log(operation);
    //     });
    //   });
    this.sofs.supportsSystemOperation("export").subscribe(
      found => this.exportPresent =found
    );
  }

  selectResourceType(rt: string) {
    this.router.navigate(["fhir",rt], { queryParamsHandling: 'preserve' });
  }

  doExport() {
    this.sofs.doGlobalOperationAsync("export")
      .subscribe(res => {
        console.log(res);
        let contentLocation = res.headers.get('Content-Location');
        if (contentLocation) {
          this.router.navigate(["async"], {
            queryParamsHandling: 'merge',
            queryParams: {cl: res.headers.get('Content-Location')}
          });
        }
        else {
          const cr = this.context.postContextResource(res.body);
          this.router.navigate(["fhir", cr.id ], {queryParamsHandling: 'preserve'});
        }

      }, err => {
        console.log(err);
      });
  }
}
