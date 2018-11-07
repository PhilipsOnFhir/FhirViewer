import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Bundle} from '../fhir/dstu3/Bundle';
import {Reference} from '../fhir/dstu3/Reference';
import {CapabilityStatement_Security} from '../fhir/dstu3/CapabilityStatement_Security';
import {DomainResource} from '../fhir/dstu3/DomainResource';
import {CapabilityStatement} from '../fhir/dstu3/CapabilityStatement';
import {Router} from '@angular/router';
import {ContextService} from './context.service';
import {HTTPVerbEnum} from '../fhir/dstu3/HTTPVerbEnum';
import {Parameters} from '../fhir/dstu3/Parameters';
import {Resource} from '../fhir/dstu3/Resource';


@Injectable()
export class SmartOnFhirService   {
  availableAndReady = false;
  private clientId = '9932849032419542385743289';
  private capabilityStatement: CapabilityStatement = null;
  private sourceContainedResources: DomainResource = null;
  private url: string = null;
  private token: TokenResponse = null;
  constructor( private http: HttpClient, private contextService: ContextService, private router: Router ) {
  }

  initialize( fs: string, path: string): Observable<any> {

    const code  = this.router.parseUrl(path).queryParamMap.get('code');
    const state = this.router.parseUrl(path).queryParamMap.get('state');
    const iss = this.router.parseUrl(path).queryParamMap.get('iss');
    const launch = this.router.parseUrl(path).queryParamMap.get('launch');

    console.log('fs     : ' + fs);
    console.log('iss    : ' + iss);
    console.log('launch : ' + launch);
    console.log('code   : ' + code);
    console.log('state  : ' + state);

    if ( fs ) {
      this.url = fs;
    }
    if ( iss ) {
      this.url = iss;
    }

    if ( launch && iss ) {
      this.launch( path );
    } else  if ( !fs && code && state ) {
      ////////////////////////////////////////////////////////////////////////////////////////////
      return new Observable<any>(
        observable => {
          console.log('Authenticating');
          const iss = sessionStorage.getItem('serviceUri');
          const clientId = sessionStorage.getItem('clientId');
          const secret = sessionStorage.getItem('secret');
          const serviceUri = sessionStorage.getItem('serviceUri');
          const redirectUri = sessionStorage.getItem('redirectUri');
          const tokenUri = sessionStorage.getItem('tokenUri');

          const body = new URLSearchParams();
          body.set('grant_type', 'authorization_code');
          body.set('code', code);
          body.set('redirect_uri', redirectUri);
          body.set('client_id', clientId);

          const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
          };

          const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
          console.log('tokenUri ' + tokenUri);
          console.log(httpOptions);
          // console.log(data);
          console.log(body.toString());

          this.http.post<TokenResponse>(tokenUri, body.toString(), httpOptions).subscribe(
            response => {
              console.log(response);
              console.log('Authenticated');
              this.token = response;
              this.getCapabilityStatement().subscribe( cp => {
                  this.availableAndReady = true;
                  observable.complete();
                });
            },
            error => {
              console.log(error);
              observable.error(error);
            }
          );
        });
      ////////////////////////////////////////////////////////////////////////////////////////////
    } else {
      return new Observable<any>(
        observable => {
         if (this.url && this.url.startsWith('http')) {
           this.getCapabilityStatement().subscribe( cp => {
             this.availableAndReady = true;
             observable.complete();
           });
         } else {
           observable.error('Invalid URL');
         }
        }
      );
    }
  }

  launch( path: string) {
    const fs = this.router.parseUrl(path).queryParamMap.get('fs');
    const iss = this.router.parseUrl(path).queryParamMap.get('iss');
    const launch = this.router.parseUrl(path).queryParamMap.get('launch');

    console.log('iss    ' + iss);
    console.log('launch ' + launch);

    this.url = iss;

    console.log('--------------');
    this.getCapabilityStatement().subscribe(
      cp => {
        if (cp.rest[0].security) {
          const security: CapabilityStatement_Security = cp.rest[0].security;
          let token: string;
          let authorize: string;

          security.extension.forEach(extension => {
            const tmp: any = extension as any;
            console.log(tmp.extension);
            tmp.extension.forEach(ext => {
              if (ext.url && ext.url === 'authorize') {
                authorize = ext.valueUri;
              }
              if (ext.url && ext.url === 'token') {
                token = ext.valueUri;
              }
            });
          });

          const scope = 'patient/*.read';
          const state = Math.round(Math.random() * 100000000).toString();
          const redirect_uri = 'http://localhost:4200';
          const secret = 'geheim';
          sessionStorage.setItem('clientId', this.clientId );
          sessionStorage.setItem('secret', secret );
          sessionStorage.setItem('serviceUri', iss);
          sessionStorage.setItem('redirectUri', redirect_uri);
          sessionStorage.setItem('tokenUri', token);

          let url: string;
          url = authorize + '?response_type=code';
          url += '&client_id=' + this.clientId;
          url += '&scope=' + scope;
          url += '&redirect_uri=' + 'http://localhost:4200';
          url += '&aud=' + iss;
          url += '&launch=' + launch;
          url += '&state=' + state;
          console.log(url);

          // window.location.assign(url);
          window.open(url, '_self');
          //window.open(url );
        }
      },
      error => console.log(error));
  }

  getCapabilityStatement(): Observable<CapabilityStatement> {
    console.log('getCapabilityStatement');
    return new Observable<CapabilityStatement>(observer => {
        if (this.capabilityStatement != null) {
          console.log('reuse cp');
          observer.next(this.capabilityStatement);
          observer.complete();
        } else {
          console.log('retrieve cp');
          // let headers = new HttpHeaders();
          // headers.set('Access-Control-Allow-Headers', 'Content-Type');
          // headers.set('Access-Control-Allow-Methods', 'GET');
          // headers.set('Access-Control-Allow-Origin', '*');
          // // headers.set('Origin', "http://localhost:4200");
          // console.log(headers)
          // // let httpOptions = {headers: headers};
          // let httpOptions = {headers:
          //     {'Access-Control-Allow-Headers': 'Content-Type'
          //     ,'Access-Control-Allow-Methods': 'GET'
          //     ,'Access-Control-Allow-Origin': '*'}
          // };
          // console.log(JSON.stringify(httpOptions)
          // this.http.get<CapabilityStatement>(this.url + "/metadata",httpOptions).subscribe(
          this.http.get<CapabilityStatement>(this.url + '/metadata' ).subscribe(
            cp => {
              console.log('cp retrieved');
              this.capabilityStatement = cp;
              observer.next(this.capabilityStatement);
              observer.complete();
            }, err => {console.log(err); observer.error(); });
        }
      }
    );
  }

    getResource(resourceReference: string): Observable<any> {
            if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    const contextResource = this.contextService.getContextResource(resourceReference);
    if ( contextResource ) {
      console.log('retrieve from context');
      switch ( contextResource.type) {
        case HTTPVerbEnum.POST:
        case HTTPVerbEnum.PUT:
          return new Observable<any>( observer => {observer.next( contextResource.resource); observer.complete(); });
        case HTTPVerbEnum.DELETE:
          return new Observable<any>( observer => {observer.complete(); });
      }
    }
    let url: string;

    if ( resourceReference.startsWith('http')) {
      console.log('load http');
      url = resourceReference;
    } else {
      url = this.url + (resourceReference.startsWith('/') ? resourceReference : '/' + resourceReference);
    }
    return this.http.get<DomainResource>( url );
  }

  getResources(resourceType: string): Observable<Bundle> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    const url = this.url + (resourceType.startsWith('/') ? resourceType : '/' + resourceType);
    return this.http.get<Bundle>( url );
  }

  searchResources(resourceType: string | null, searchString: string): Observable<Bundle> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    let url = this.url + (resourceType.startsWith('/') ? resourceType : '/' + resourceType);
    url += searchString;
    console.log(url);
    return this.http.get<Bundle>(url  );
  }

  postResource( resource: Resource): Observable<any> {
      if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }

      const url = this.url + (resource.resourceType.startsWith('/') ? resource.resourceType : '/' + resource.resourceType);
      console.log(url);
      return this.http.post( url, resource, {observe: 'response' as 'body'} ) ;
  }

  putResource(resource: Resource) {
      if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }

      const url = this.url + '/' + resource.resourceType + '/' + resource.id;
      console.log(url);
      return this.http.put( url, resource ) ;
  }

  doOperation( resourceId: string, operationName: string, parameters: string): Observable<DomainResource> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }

    let url = this.url + (resourceId.startsWith('/') ? resourceId : '/' + resourceId);
    url += '/$' + operationName;
    url += parameters;
    console.log(url);

    return this.http.get<Bundle>(url);
  }

  doOperationAsync(resourceId: string, operationName: string, parameters: string): Observable<HttpResponse<any>> {
    if (!this.availableAndReady) {
      return new Observable<any>(observer => observer.error('SoFS not Initialised'));
    }

    let url = this.url + (resourceId.startsWith('/') ? resourceId : '/' + resourceId);
    url += '/$' + operationName;
    // if ( !parameters || parameters.length==0 ){
    //   url+="?_outputFormat=application/fhir+ndjson";
    // }else {
    //   url+=parameters+"&_outputFormat=application/fhir+ndjson";
    // }

    console.log(url);

    const myHeaders = new HttpHeaders().set('Prefer', 'respond-async');
    const asyncHttpOptions = {
      headers: new HttpHeaders()
        .set('Prefer', 'respond-async')
    };
    return this.http.get(url, {headers: myHeaders, observe: 'response'});
  }

  doGlobalOperationAsync(operationName: string): Observable<HttpResponse<any>> {
    if (!this.availableAndReady) {
      return new Observable<any>(observer => observer.error('SoFS not Initialised'));
    }

    const url = this.url + '/$' + operationName;

    console.log(url);

    const myHeaders = new HttpHeaders().set('Prefer', 'respond-async');
    const asyncHttpOptions = {
      headers: new HttpHeaders()
        .set('Prefer', 'respond-async')
    };
    // return this.http.get<DomainResource>( url, asyncHttpOptions );
    return this.http.get(url, {headers: myHeaders, observe: 'response'});
  }

  doPostOperation(resourceId: string, operationName: string, parameters: Parameters) {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    let url = this.url + (resourceId.startsWith('/') ? resourceId : '/' + resourceId);
    url += '/$' + operationName;
    console.log(url);
    return this.http.post( url, parameters ) ;
  }



    getReference(reference: Reference): Observable<DomainResource> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    if ( reference.reference && reference.reference.startsWith('#')) {
      const obs = new Observable<DomainResource>(observer => {
        this.sourceContainedResources.contained
          .filter( cr => cr.id === reference.reference.substring(1))
          .forEach( res => observer.next(res));
        observer.complete();
      });
      return obs;
    } else if ( reference.reference ) {
      return this.getResource( reference.reference );
    }

    return new Observable<DomainResource>( observer => {
      observer.error('Reference could nor be retrieved.');
    });
  }

  setContainedResourceSource(resource: any | null) {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    console.log(resource);
    this.sourceContainedResources = resource;
  }

  getUrl() {
    return this.url;
  }


  isInitialized() {
    return this.availableAndReady;
  }

}

class TokenResponse {
  access_token: string;
  client_id: string;
  expires_in: string;
  scope: string;
}


