import {Component, OnInit} from '@angular/core';
import {CapabilityStatement} from "../../fhir/dstu3/CapabilityStatement";
import {ActivatedRoute, Router} from "@angular/router";
import {SmartOnFhirService} from "../../fhir-util/smart-on-fhir.service";

@Component({
  selector: 'app-resource-overview',
  templateUrl: './resource-overview.component.html',
  styleUrls: ['./resource-overview.component.sass']
})
export class ResourceOverviewComponent implements OnInit {
  capabilityStatement: CapabilityStatement;
  resourceTypes: string[] = Array<string>(0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sofs: SmartOnFhirService
  ){
  }

  ngOnInit() {
    this.sofs.getCapabilityStatement().subscribe(cpst => {
      this.capabilityStatement = cpst;
      this.capabilityStatement.rest
        .filter(rest => rest.mode === "server")
        .forEach(rest => {
          rest.resource.forEach(resource => {
            if (resource.type) {
              this.resourceTypes.push(resource.type);
            }
          })
        })
    });

  }

  selectResourceType(rt: string) {
    this.router.navigate(["fhir",rt], { queryParamsHandling: 'preserve' });
  }

  doExport() {
    this.sofs.doGlobalOperationAsync("export")
      .subscribe(res => {
        console.log(res);
        let contentLocation = res.headers.get('Content-Location');
        // console.log(res.headers.get('Content-Location'));
        // console.log(res.headers.get('Content-Type'));
        // let cp = this.contextService.postContextResource(res.body);
        if (contentLocation) {
          this.router.navigate(["async"], {
            queryParamsHandling: 'merge',
            queryParams: {cl: res.headers.get('Content-Location')}
          });
        }
        else {
          this.router.navigate(["fhir", res.body.resourceType, "all"], {queryParamsHandling: 'preserve'});
        }

      }, err => {
        console.log(err);
      });
  }
}
