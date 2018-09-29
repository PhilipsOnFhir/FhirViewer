import {Component, OnInit} from '@angular/core';
import {Resource} from "../../fhir/dstu3/Resource";
import {ActivatedRoute, Router} from "@angular/router";
import {ContextService} from "../../fhir-util/context.service";
import {Bundle} from "../../fhir/dstu3/Bundle";

@Component({
  selector: 'app-context-selector',
  templateUrl: './context-selector.component.html',
  styleUrls: ['./context-selector.component.sass']
})
export class ContextSelectorComponent implements OnInit {

  contextId: string | null;
  resource: Resource;
  bundle: Bundle;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contextService: ContextService
  ) {
    this.contextId   = this.route.snapshot.paramMap.get('contextId');
    // force reloading
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {
    this.route.url.subscribe(urlSegment => {
      // console.log(urlSegment);
      this.contextId   = this.route.snapshot.paramMap.get('contextId');
      this.resource = this.contextService.getResource(this.contextId);
      console.log(this.resource);
    });

    this.resource = this.contextService.getResource(this.contextId);
    this.bundle = this.contextService.getContextBundle();

    console.log(this.resource);
    console.log(this.bundle);
  }
}
