import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class MarketingStatus      extends BackboneElement
{

   static def : string = 'MarketingStatus';
   country : CodeableConcept ;
   jurisdiction : CodeableConcept ;
   status : CodeableConcept ;
   dateRange : Period ;
   restoreDate : string ;
}
