import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class Practitioner_Qualification      extends BackboneElement
{

   static def : string = 'Practitioner_Qualification';
   identifier : Identifier [];
   code : CodeableConcept ;
   period : Period ;
   issuer : Reference ;
}
