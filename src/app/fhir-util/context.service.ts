import {Injectable} from '@angular/core';
import {UUID} from "angular2-uuid";
import {DomainResource} from "../fhir/dstu3/DomainResource";
import {Bundle} from "../fhir/dstu3/Bundle";
import {Bundle_Entry} from "../fhir/dstu3/Bundle_Entry";
import {BundleTypeEnum} from "../fhir/dstu3/BundleTypeEnum";
import {Bundle_Request} from "../fhir/dstu3/Bundle_Request";
import {HTTPVerbEnum} from "../fhir/dstu3/HTTPVerbEnum";

@Injectable()
export class ContextService {

  contextResources : Map<string,ContextResource>;
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

  getContextResource( id:string ):ContextResource{
    let contextResource: ContextResource = this.contextResources.get(id);
    return contextResource;
  }

  getResource( id:string ):DomainResource{
    let contextResource: ContextResource = this.contextResources.get(id);
    return (contextResource?contextResource.resource: null );
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

}

export class ContextResource{
  resource: DomainResource;
  type: HTTPVerbEnum;
}
