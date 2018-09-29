import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Basic      extends DomainResource
{

   static def : string = 'Basic';
   identifier : Identifier [];
   code : CodeableConcept ;
   subject : Reference ;
   author : Reference ;
   created : string ;
}
