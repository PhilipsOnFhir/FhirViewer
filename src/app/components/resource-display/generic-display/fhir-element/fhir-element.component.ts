import {Component, Input, OnInit} from '@angular/core';
import {SmartOnFhirService} from "../../../../fhir-util/smart-on-fhir.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fhir-element',
  templateUrl: './fhir-element.component.html',
  styleUrls: ['./fhir-element.component.sass']
})
export class FhirElementComponent implements OnInit {

  @Input() element;
  @Input() library:boolean;

  private fhirElements = Array(0);
  private isObject;

  constructor( private sofs : SmartOnFhirService, private router: Router ) { }

  ngOnInit() {
    // this.name = Object.getOwnPropertyDescriptor( this.fhirElement).
    this.isObject = typeof this.element === 'object';
    Object.entries( this.element )
      .forEach( a => {
        let tmp = new A();
        tmp.name=a[0];
        tmp.isObject = typeof a[1] === 'object';
        tmp.object = a;
        tmp.value = a[1];
        tmp.isReference = a[0]=== "reference";
        if ( typeof a[1] === 'string' ){
          let hyperlinkStr : string = a[1] as string;
          tmp.isHyperlink = hyperlinkStr.startsWith("http");
        } else {
          tmp.isHyperlink = false;
        }
        tmp.isData = (tmp.name === "data");
        if ( tmp.isData ){
          // tmp.decodedData = atob(tmp.value);
          // tmp.decodedData.replace("\n","<br\>");
          tmp.isDecoded = false;
          // console.log(tmp.decodedData);
        }

        this.fhirElements.push( tmp );
      });
    // console.log(this.fhirElements);
  }

  openReference(value: string) {
    console.log("open Ref  "+value);
    let values = value.split("/");
    this.router.navigate(["fhir",values[0], values[1] ], { queryParamsHandling: 'preserve' });
  }

  openHyperlink(value: string) {
    console.log("open http  "+value);
    window.open( value );
  }

  toggleData(a: any) {
    if ( a.isDecoded ) {
      a.isDecoded=false;
    }
    else {
      a.isDecoded=true;
      if (!a.decodedData){
        a.decodedData = atob(a.value);
        // console.log(a.decodedData);
      }
    }

  }
}

class A{
  object: any; name:string; isObject:boolean;value; isReference: boolean;isHyperlink; isData: boolean; isDecoded: boolean;
  decodedData :string;
}
