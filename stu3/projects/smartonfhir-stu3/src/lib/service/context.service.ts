import { Injectable } from '@angular/core';
import {UUID} from "angular2-uuid";
import {Bundle, Bundle_Entry, BundleTypeEnum, Bundle_Request, DomainResource, HTTPVerbEnum, Patient, Practitioner, Encounter}
  from "fhir2angular-stu3";
import {Resource} from "../../../../fhir2angular-stu3/src/lib/Resource";

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  contextResources : Map<string,ContextResource>;
  currentPatient: Patient = null;
  currentEncounter: Encounter = null;
  currentPractitioner: Practitioner = null;
  // private count=0;

  constructor() {
    this.contextResources = new Map<string,ContextResource>();
  }

  postContextResource(resource: DomainResource ): DomainResource {
    // let id = "ctx-"+this.getNextCount();
    let contextResource = new ContextResource();
    let id = UUID.UUID();
    resource.id = id;

    contextResource.resource = resource;
    contextResource.type = HTTPVerbEnum.POST;
    this.contextResources.set(  resource.resourceType+"/"+resource.id, contextResource );

    return resource;
  }

  putContextResource(resource: DomainResource ): DomainResource {
    let contextResource = new ContextResource();

    if ( !resource.id ){
      let id = UUID.UUID();
      resource.id = id;
    }
    contextResource.resource = resource;
    contextResource.type = HTTPVerbEnum.PUT;
    this.contextResources.set( resource.resourceType+"/"+resource.id, contextResource );

    return resource;
  }

  removeContextResource( resource:DomainResource ){
    this.contextResources.delete(resource.resourceType+"/"+resource.id);
  }

  deleteContextResource( resource: DomainResource) {
    let contextResource: ContextResource = this.contextResources.get(resource.id);
    contextResource.type=HTTPVerbEnum.DELETE;
    contextResource.resource = resource;
  }

  getResource( type:string, id:string ):Resource {
    const cr = this.getContextResource(type, id );
    return ( cr? cr.resource:null);
  }

  getContextResource( type:string, id:string ):ContextResource{
    let contextResource: ContextResource = this.contextResources.get(type+"/"+id);
    return contextResource;
  }

  getContextResourceByReference(resourceReference: string) {
    let contextResource: ContextResource = this.contextResources.get(resourceReference);
    return contextResource;
  }
  getContextBundle() : Bundle {
    let bundle: Bundle= new Bundle();
    bundle.resourceType = Bundle.def;
    bundle.type = BundleTypeEnum.BATCH;

    bundle.entry = new Array(0);
    let it = this.contextResources.entries();
    let iteratorResult = it.next();
    while( !iteratorResult.done ){
      let key = iteratorResult.value[0];
      let contextResource : ContextResource  = iteratorResult.value[1];

      let bundleEntry = new Bundle_Entry();
      bundleEntry.fullUrl  = contextResource.resource.id+"/"+contextResource.resource.id;
      bundleEntry.resource = contextResource.resource;
      bundleEntry.request = new Bundle_Request();
      bundleEntry.request.method = contextResource.type;
      switch( contextResource.type ){
        case HTTPVerbEnum.POST:
          bundleEntry.request.url = contextResource.resource.resourceType;
          break;
        case HTTPVerbEnum.PUT:
          bundleEntry.request.url = key;
          break;
        case HTTPVerbEnum.DELETE:
          bundleEntry.request.url = key;
          break;
      }
      bundle.entry.push(bundleEntry);
      iteratorResult = it.next();
    }

    return bundle;
  }


  setSubject(subject: Resource) {
    if ( subject.resourceType.startsWith(Patient.def)){
      console.log("update patient");
      this.currentPatient=subject as Patient;
    }

  }

  public getCurrentPatient() : Patient{
    return this.currentPatient;
  }
}

export class ContextResource{
  resource: DomainResource;
  type: HTTPVerbEnum;
}
