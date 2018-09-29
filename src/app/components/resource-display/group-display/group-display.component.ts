import {Component, Input, OnInit} from '@angular/core';
import {DomainResource} from "../../../fhir/dstu3/DomainResource";
import {SmartOnFhirService} from "../../../fhir-util/smart-on-fhir.service";
import {Router} from "@angular/router";
import {Group} from "../../../fhir/dstu3/Group";

@Component({
  selector: 'app-group-display',
  templateUrl: './group-display.component.html',
  styleUrls: ['./group-display.component.sass']
})
export class GroupDisplayComponent implements OnInit {

  @Input() resource: DomainResource;
  group: Group;

  constructor(private sofs: SmartOnFhirService, private router: Router) {
  }

  ngOnInit() {
    this.group = this.resource as Group;
    console.log(JSON.stringify(this.resource));
  }

  doExport() {
    this.sofs.doOperationAsync("Group/" + this.resource.id, "export", "")
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
          this.router.navigate(["fhir", res.body.resourceType, this.resource.id], {queryParamsHandling: 'preserve'});
        }

      }, err => {
        console.log(err);
      });
  }
}
