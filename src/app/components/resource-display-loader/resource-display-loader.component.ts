import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SmartOnFhirService} from "../../fhir-util/smart-on-fhir.service";

@Component({
  selector: 'app-resource-display-loader',
  templateUrl: './resource-display-loader.component.html',
  styleUrls: ['./resource-display-loader.component.sass']
})
export class ResourceDisplayLoaderComponent implements OnInit {

  private resourceType: string | null;
  private resourceId: string | null;
  resource: any  | null;

  constructor( private route: ActivatedRoute, private router: Router, private fhirService: SmartOnFhirService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {
    this.setValues();

    this.route.url.subscribe(urlSegment => {
      console.log(urlSegment);
      this.setValues();
      });
  }

  setValues(){
    this.resourceType = this.route.snapshot.paramMap.get('resourceType');
    this.resourceId   = this.route.snapshot.paramMap.get('resourceId');

    console.log( "Resource Display - "+this.resourceType+":"+this.resourceId);
    this.fhirService.getResource(this.resourceType+"/"+this.resourceId)
      .subscribe( res => {
        console.log(res);
        this.resource = res;
        this.fhirService.setContainedResourceSource( this.resource );
      });
  }
}
