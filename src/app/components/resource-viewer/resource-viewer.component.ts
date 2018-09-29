import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomainResource} from "../../fhir/dstu3/DomainResource";
import {ResourceUtil} from "../../fhir-util/dstu3-util/resource-util";

@Component({
  selector: 'app-resource-viewer',
  templateUrl: './resource-viewer.component.html',
  styleUrls: ['./resource-viewer.component.sass']
})
export class ResourceViewerComponent implements OnInit {

  @Input() resource: DomainResource;
  summary: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {
    if ( this.resource ) {
      this.summary = ResourceUtil.getSummary( this.resource );
    }

  }

  openResource() {
    this.router.navigate(["fhir",this.resource.resourceType , this.resource.id], { queryParamsHandling: 'preserve' });
  }
}
