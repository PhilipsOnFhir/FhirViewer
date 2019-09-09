import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {CapabilityStatement,DomainResource,Bundle,Resource,Reference,Parameters} from "fhir2angular-stu3";
// import {ConnectorService} from "../service/connector.service";
import {ActivatedRoute} from "@angular/router";
import {CapabilityStatement_Security} from "../../../../fhir2angular-stu3/src/lib/CapabilityStatement_Security";
import {SecHttp} from "./secHttp";
import {ResourceTypeEnum} from "../../../../fhir2angular-stu3/src/lib/ResourceTypeEnum";
import {OperationDefinition} from "../../../../fhir2angular-stu3/src/lib/OperationDefinition";
import {HTTPVerbEnum} from "../../../../fhir2angular-stu3/src/lib/HTTPVerbEnum";
import {ContextService} from "../service/context.service";


@Injectable()
export class SmartOnFhirService   {
  availableAndReady = false;
  private capabilityStatement: CapabilityStatement = null;
  private sourceContainedResources: DomainResource = null;
  private url: string = null;
  private token: TokenResponse = null;
  private secHttp: SecHttp;

  constructor( private http: HttpClient, private route: ActivatedRoute, private context: ContextService ) {
    this.secHttp = new SecHttp( http, null );
  }

  getSecHttp() {
    return this.secHttp;
  }

  initialize(clientId: string, clientSecret:string, scopes:string ): Observable<any> {
    return new Observable<any>( obs => {

      if ( this.isInitialized() ){
        obs.complete();
      } else {
        let fullUrl = window.location.href;
        let baseUrl = window.location.href.substring(0, window.location.href.indexOf("?"));
        console.log("fullUrl: " + fullUrl);
        console.log("baseUrl: " + baseUrl);
        let code;
        let iss;
        let launch;
        let state;
        this.route.queryParamMap.subscribe(params => {
          // this.sofs.initialize( params );
          console.log(params);
          code = (code ? code : params.get("code"));
          iss = (iss ? iss : params.get("iss"));
          launch = (launch ? launch : params.get("launch"));
          state = (state ? state : params.get("state"));
          console.log(code);
          console.log(iss);
          console.log(launch);
          console.log(state);

          if ( iss) {
            this.url = iss;

            console.log('--------------');
            this.getCapabilityStatement().subscribe(
              cp => {
                this.capabilityStatement = cp;
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

                  // const scope = 'patient/*.read';
                  const state = Math.round(Math.random() * 100000000).toString();
                  const redirect_uri = 'http://localhost:4201';
                  const secret = clientSecret;
                  // sessionStorage.setItem('clientId', clientId);
                  sessionStorage.setItem('secret', secret);
                  sessionStorage.setItem('fhirUri', iss);
                  sessionStorage.setItem('redirectUri', redirect_uri);
                  sessionStorage.setItem('tokenUri', token);

                  let url: string;
                  url = authorize + '?response_type=code';
                  url += '&client_id=' + clientId;
                  url += '&scope=' + scopes;
                  url += '&redirect_uri=' + 'http://localhost:4201';
                  url += '&aud=' + iss;
                  if( launch) { url += '&launch=' + launch; }
                  url += '&state=' + state;
                  console.log(url);

                  // window.location.assign(url);
                  window.open(url, '_self');
                  // window.open(url );
                }
                else {
                  // no security
                  this.availableAndReady = true;
                  obs.complete();
                }
              },
              error => console.log(error));
          } else if (code && state) {
            ////////////////////////////////////////////////////////////////////////////////////////////
            console.log('Authenticating');
            const iss = sessionStorage.getItem('serviceUri');
            // const clientId = sessionStorage.getItem('clientId');
            const secret = sessionStorage.getItem('secret');
            const serviceUri = sessionStorage.getItem('fhirUri');
            const redirectUri = sessionStorage.getItem('redirectUri');
            const tokenUri = sessionStorage.getItem('tokenUri');
            this.url = serviceUri;

            const params = new URLSearchParams();
            params.set('grant_type', 'authorization_code');
            params.set('code', code);
            params.set('redirect_uri', redirectUri);
            params.set('client_id', clientId);

            //TODO should be possible without secret
            let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa(clientId+":"+clientSecret)});
            const options = { headers: headers };
            // const options = {
            //   headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            // };

            // const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};

            console.log('tokenUri ' + tokenUri);
            // console.log(httpOptions);
            // console.log(data);
            console.log(params.toString());

            this.http.post<TokenResponse>(tokenUri, params.toString(), options ).subscribe(
              response => {
                console.log(response);
                console.log('Authenticated');
                this.token = response;
                this.secHttp = new SecHttp( this.http, response.access_token );
                this.getCapabilityStatement().subscribe(cp => {
                  this.availableAndReady = true;
                  obs.complete();
                });
              },
              error => {
                console.log(error);
                obs.error(error);
                obs.complete();
              }
            );
            ////////////////////////////////////////////////////////////////////////////////////////////
          }
          }
        );
      }
    });
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

  public getResourceInstanceOperation( resourceType: ResourceTypeEnum, resourceId, name: string ):Observable<OperationDefinition>{
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }

    let system   = !resourceType && !resourceId;
    let type     = resourceType && !resourceId;
    let instance = resourceType && resourceId;

    return new Observable<OperationDefinition>( obs => {
      let found = false;
      let cp = this.capabilityStatement;
      let foundOpDef = null;
      cp.rest
        .filter(rest => rest.mode === "server")
        .forEach(rest => {
          rest.operation.forEach(op => {
            if (op.name && op.name === name) {
              console.log(op);
              this.getReferenceFrom(cp, op.definition).subscribe( opDefRes => {
                let opDef = opDefRes as OperationDefinition;
                console.log( opDef );
                if ( system && opDef.system ){
                  foundOpDef = opDef;
                }
                if ( type && opDef.type && opDef.resource[0]===resourceType){
                  foundOpDef = opDef;
                }
                if ( instance && opDef.instance && opDef.resource[0]===resourceType ){
                  foundOpDef = opDef;
                }
              });
            }
          });
        });
      obs.next(foundOpDef);
      obs.complete();
    });

  }
  public supportsResourceInstanceOperation( resourceType: ResourceTypeEnum, resourceId, name: string ):Observable<boolean>{
    return new Observable<boolean>( obs => {
      this.getResourceInstanceOperation(resourceType, resourceId, name).subscribe( opdef => {
        obs.next(true);
        obs.complete();
      },
        err => {
        obs.next(false);
        obs.complete();
        })

    })
  }

  public supportsResourceOperation( resourceType: ResourceTypeEnum, name: string ): Observable<boolean>{
    return this.supportsResourceInstanceOperation( resourceType, null, name );
  }

  public supportsSystemOperation( name: string ):Observable<boolean>{
    return this.supportsResourceInstanceOperation( null, null, name );
  }


  getResource(resourceReference: string): Observable<any> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    const contextResource = this.context.getContextResourceByReference(resourceReference);
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
    return this.secHttp.get<DomainResource>( url );
  }

  public getResourceById(resourceType: string, resourceId: string) : Observable<any> {
    return this.getResource(resourceType+"/"+resourceId);
  }

  getResources(resourceType: string): Observable<Bundle> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    const url = this.url + (resourceType.startsWith('/') ? resourceType : '/' + resourceType);
    return this.secHttp.get<Bundle>( url );
  }

  searchResources(resourceType: string | null, searchString: string): Observable<Bundle> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    let url = this.url + (resourceType.startsWith('/') ? resourceType : '/' + resourceType);
    url += searchString;
    console.log(url);
    return this.secHttp.get<Bundle>(url);
  }

  postResource( resource: Resource): Observable<any> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }

    const url = this.url + (resource.resourceType.startsWith('/') ? resource.resourceType : '/' + resource.resourceType);
    console.log(url);
    return this.secHttp.post( url, resource, {observe: 'response' as 'body'} ) ;
  }

  putResource(resource: Resource) {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }

    const url = this.url + '/' + resource.resourceType + '/' + resource.id;
    console.log(url);
    return this.secHttp.put( url, resource ) ;
  }

  doOperation( resourceId: string, operationName: string, parameters: string): Observable<DomainResource> {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }

    let url = this.url + (resourceId.startsWith('/') ? resourceId : '/' + resourceId);
    url += '/$' + operationName;
    url += parameters;
    console.log(url);

    return this.secHttp.get<Bundle>(url);
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
    return this.secHttp.get(url, {headers: myHeaders, observe: 'response'});
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
    return this.secHttp.get(url, {headers: myHeaders, observe: 'response'});
  }

  doPostOperation(resourceId: string, operationName: string, parameters: Parameters) {
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    let url = this.url + (resourceId.startsWith('/') ? resourceId : '/' + resourceId);
    url += '/$' + operationName;
    console.log(url);
    return this.secHttp.post( url, parameters ) ;
  }

  getReferenceFrom( baseResource: DomainResource, reference: Reference ){
    if ( !this.availableAndReady ) { return new Observable<any>(observer => observer.error('SoFS not Initialised')); }
    if ( reference.reference && reference.reference.startsWith('#')) {
      const obs = new Observable<DomainResource>(observer => {
        baseResource.contained
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
      observer.complete();
    });

  }

  getReference(reference: Reference): Observable<DomainResource> {
    return this.getReferenceFrom( this.sourceContainedResources, reference );
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

  getToken():TokenResponse{
    return this.token;
  }
}

class TokenResponse {
  access_token: string;
  client_id: string;
  expires_in: string;
  scope: string;

  'cast-hub' : string;
}


