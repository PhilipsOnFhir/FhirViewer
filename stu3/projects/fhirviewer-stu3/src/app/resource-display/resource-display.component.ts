import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Resource} from "fhir2angular-stu3";
import {ResourceUtil} from "../../../../smartonfhir-stu3/src/lib/fhir-stu3/util/resource-util";

@Component({
  selector: 'app-resource-display',
  templateUrl: './resource-display.component.html',
  styleUrls: ['./resource-display.component.css']
})
export class ResourceDisplayComponent implements OnInit {
  @Input() resource: any  | null;
  @Input() format: DisplayTypeEnum = DisplayTypeEnum.NICE;
  private summary: string;

  constructor( private cRef: ChangeDetectorRef ) { }

  ngOnInit() {
    this.summary = ResourceUtil.getSummary(this.resource);
  }

  switchResource(res: any) {
    console.log(res);
    this.resource = res;
    this.summary = ResourceUtil.getSummary(this.resource);
    this.cRef.detectChanges();
  }
}

export enum DisplayTypeEnum{
  NICE = 'nice',
  SHORT = 'short',
  STRUCT = 'struct',
  JSON = 'json',
  PERFORM = 'perform'
}
