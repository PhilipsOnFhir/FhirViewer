import { CodeableConcept } from './CodeableConcept'
import { DocumentManifest_Content } from './DocumentManifest_Content'
import { DocumentManifest_Related } from './DocumentManifest_Related'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class DocumentManifest      extends DomainResource
{

   static def : string = 'DocumentManifest';
   masterIdentifier : Identifier ;
   identifier : Identifier [];
   subject : Reference ;
   recipient : Reference [];
   type : CodeableConcept ;
   author : Reference [];
   created : string ;
   source : string ;
   status : string ;
   description : string ;
   content : DocumentManifest_Content [];
   related : DocumentManifest_Related [];
}
