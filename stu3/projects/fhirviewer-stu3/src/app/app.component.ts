import {Component, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {FhirCastService} from "../../../smartonfhir-stu3/src/lib/service/fhir-cast.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DisplayTypeEnum} from "./resource-display/resource-display.component";
import {SmartOnFhirService} from "../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service";
import {MatSelectChange} from "@angular/material";
import {skip} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private initialised: boolean = false;
  private format: DisplayTypeEnum = DisplayTypeEnum.NICE;
  private formatStr = "";
  private formats = [ DisplayTypeEnum.PERFORM, DisplayTypeEnum.NICE, DisplayTypeEnum.STRUCT, DisplayTypeEnum.JSON ];
  issSet: boolean = false;

  constructor(
    private sofs: SmartOnFhirService,
    private fhircast: FhirCastService,
    private router: Router,
    private route: ActivatedRoute ){
    // this.router.routeReuseStrategy.shouldReuseRoute = function(){
    //   return false;
    // }
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let format = params.get("format");
      this.formatStr = ( format? format:DisplayTypeEnum.NICE);
      this.format = this.format as DisplayTypeEnum;
      let iss = params.get("iss");
      console.log(params);
      console.log(iss);
      console.log(format);
      if( iss ){

        this.sofs.initialize( environment.client.id, environment.client.secret, "fhircast" ).subscribe(
          next=>{ console.log(next) },
          err => { console.log(err) },
          () => {
            this.initialised = this.sofs.isInitialized();

            // let topicId = this.sofs.getToken()["cast-hub"];
            // this.fhircast.login( "http://localhost:9444/api/fhircast/websub/"+topicId, topicId);
            // this.fhircast.subscribe().subscribe(next => {
            //   console.log(next);
            //   this.events.unshift(next);
            // })
          }
        );
      }
    });
  }

  formatChange(event: MatSelectChange) {
    console.log(event);
    // this.router.navigate(["fhir", res.resourceType, res.id ], { queryParamsHandling: 'preserve' });
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        format: this.format
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
    });
  }

  selectHapi() {
    let iss = environment.fhirserver.url;
    this.router.navigate(["fhir"], {
      queryParamsHandling: 'merge',
      queryParams: {iss: iss}
    });
  }
}
