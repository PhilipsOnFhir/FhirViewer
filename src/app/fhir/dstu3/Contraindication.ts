import { CodeableConcept } from './CodeableConcept'
import { ContraindicationSeverityEnum } from './ContraindicationSeverityEnum'
import { Contraindication_Mitigation } from './Contraindication_Mitigation'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Contraindication      extends DomainResource
{

   static def : string = 'Contraindication';
   patient : Reference ;
   category : CodeableConcept ;
   severity : ContraindicationSeverityEnum ;
   implicated : Reference [];
   detail : string ;
   date : string ;
   author : Reference ;
   identifier : Identifier ;
   reference : string ;
   mitigation : Contraindication_Mitigation [];
}
