import { Component, OnInit } from '@angular/core';
import {ContextService} from "../../../../smartonfhir-stu3/src/lib/service/context.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Bundle} from "fhir2angular-stu3";
import {Resource} from "fhir2angular-stu3";

@Component({
  selector: 'app-context-display',
  templateUrl: './context-display.component.html',
  styleUrls: ['./context-display.component.css']
})
export class ContextDisplayComponent implements OnInit {

  contextId: string | null;
  resource: Resource;
  bundle: Bundle;
  private contextType: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contextService: ContextService
  ) {
    this.contextType = this.route.snapshot.paramMap.get('resourceType');
    this.contextId   = this.route.snapshot.paramMap.get('resourceId');
    // force reloading
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {
    this.route.url.subscribe(urlSegment => {
      // console.log(urlSegment);
      this.contextType = this.route.snapshot.paramMap.get('resourceType');
      this.contextId   = this.route.snapshot.paramMap.get('resourceId');
      this.resource = this.contextService.getContextResource(this.contextType, this.contextId).resource;
      console.log(this.resource);
    });

    this.resource = this.contextService.getResource(this.contextType, this.contextId);
    this.bundle = this.contextService.getContextBundle();

    console.log(this.contextId);
    console.log(this.resource);
    console.log(this.bundle);
  }

}

