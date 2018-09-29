import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SmartOnFhirService} from "../../fhir-util/smart-on-fhir.service";
import {Resource} from "../../fhir/dstu3/Resource";
import {Patient} from "../../fhir/dstu3/Patient";
import {DomainResource} from "../../fhir/dstu3/DomainResource";
import {ContextService} from "../../fhir-util/context.service";

@Component({
  selector: 'app-resource-selector-component',
  templateUrl: './resource-selector.component.html',
  styleUrls: ['./resource-selector.component.sass']
})
export class ResourceSelectorComponent implements OnInit {
  private resourceJson: any  | null;
  resourceType: string | null;
  private resources: Resource[] = null;//new Array<Resource>(0);
  private currentPatient: Patient =null;
  private selectedPatient: Patient = null;
  private next: string;
  private previous: string;
  resource: DomainResource = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sofs: SmartOnFhirService,
    private contextService: ContextService
  ) { }

  ngOnInit() {
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');
    console.log( "Resource Selector - "+this.resourceType );
    this.retrieveResourceList();

    this.route.url.subscribe(urlSegment => {
      console.log(urlSegment);
      this.resourceType = this.route.snapshot.paramMap.get('resourceType');
    });

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  search( searchString: string ){
    console.log(searchString);
    // this.resources=null;
    this.resource=null;
    this.sofs.searchResources(this.resourceType, searchString)
      .subscribe( res => {
          this.resource = res;
          // this.processBundle(res);
        })
      }

  getEverything() {
    this.sofs.doOperation("Patient", "everything", "")
      .subscribe(res => {
        console.log(res);
        let cp = this.contextService.postContextResource(res);
        this.router.navigate(["fhir", res.resourceType, cp.id], {queryParamsHandling: 'preserve'});
      }, err => {
        console.log(err);
      });
  }

  doExport() {
    this.sofs.doOperationAsync("Patient", "export", "")
      .subscribe(res => {
        console.log(res);
        let contentLocation = res.headers.get('Content-Location');
        // console.log(res.headers.get('Content-Location'));
        // console.log(res.headers.get('Content-Type'));
        let cp = this.contextService.postContextResource(res.body);
        if (contentLocation) {
          this.router.navigate(["async"], {
            queryParamsHandling: 'merge',
            queryParams: {cl: res.headers.get('Content-Location')}
          });
        }
        else {
          this.router.navigate(["fhir", res.body.resourceType, cp.id], {queryParamsHandling: 'preserve'});
        }

      }, err => {
        console.log(err);
      });
  }

  private retrieveResourceList() {
    this.sofs.getResources(this.resourceType)
      .subscribe(res => {
        // this.processBundle(res);
        // this.getNext( bundle );
      });
  }
}
