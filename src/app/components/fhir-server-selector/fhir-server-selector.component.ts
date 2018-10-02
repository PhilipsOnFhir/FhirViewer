import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {st} from '@angular/core/src/render3';
import {SmartOnFhirService} from '../../fhir-util/smart-on-fhir.service';

@Component({
  selector: 'app-fhir-server-selector',
  templateUrl: './fhir-server-selector.component.html',
  styleUrls: ['./fhir-server-selector.component.sass']
})
export class FhirServerSelectorComponent implements OnInit {
  private fhirServers = new Set<string>();
  newFhirServer = '';

  constructor( private router: Router, private sofs: SmartOnFhirService ) { }

  ngOnInit() {
    // let storedServers = JSON.parse( window.localStorage.getItem("fhirServers") );
    // console.log(storedServers);
    this.retrieveFhirServers();
    // console.log(this.fhirServers);

    this.fhirServers.add( 'http://localhost:9001/cqf-ruler/baseDstu3' );
    this.fhirServers.add( 'http://hapi.fhir.org/baseDstu3' );
    this.fhirServers.add( 'http://measure.eval.kanvix.com/cqf-ruler/baseDstu3' );
    this.storeFhirServers();

    // console.log(this.fhirServers);
  }

  storeFhirServers() {
    const storedServers: string[] = new Array(0);
    this.fhirServers.forEach( fs => storedServers.push(fs));
    const str: string = JSON.stringify(storedServers);
    window.localStorage.setItem('fhirServers', str );
  }

  retrieveFhirServers(  ) {
    const storedServers: string[] = JSON.parse( window.localStorage.getItem('fhirServers') );
    // console.log(storedServers);
    if ( storedServers ) {
      storedServers.forEach( fs => this.fhirServers.add(fs));
    }
  }

  selectFhirServer(fs: string) {
    console.log( this.router.url );
//    let url = this.router.url+"/fhir/?fs="+fs;
    const url = this.router.url + '/fhir/?fs=' + fs;
    console.log( 'open ' + url);

    this.sofs.initialize( fs, '' ).subscribe(
      data => console.log(data),
      error => {
        console.log(error);
      },
      () => {
        console.log('initialisation ready');
        this.router.navigate( ['fhir'] , { queryParams: { fs: fs } });
      }
    );

  //  this.router.navigateByUrl(url);
    // window.open(url);
  }

  clearFhirServer(fs: string) {
    this.fhirServers.delete(fs);
    console.log(this.fhirServers);
    this.storeFhirServers();
  }

  addFhirServer() {
    this.fhirServers.add( this.newFhirServer );
    console.log(this.fhirServers);
    this.storeFhirServers();
  }
}
