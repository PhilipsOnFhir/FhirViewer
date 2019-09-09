import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Claim_CareTeam      extends BackboneElement
{

   static def : string = 'Claim_CareTeam';
   sequence : string ;
   provider : Reference ;
   responsible : boolean ;
   role : CodeableConcept ;
   qualification : CodeableConcept ;
}
