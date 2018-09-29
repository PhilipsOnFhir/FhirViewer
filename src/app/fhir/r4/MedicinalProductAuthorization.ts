import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MarketingStatus } from './MarketingStatus'
import { MedicinalProductAuthorization_JurisdictionalAuthorization } from './MedicinalProductAuthorization_JurisdictionalAuthorization'
import { MedicinalProductAuthorization_Procedure } from './MedicinalProductAuthorization_Procedure'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicinalProductAuthorization      extends DomainResource
{

   static def : string = 'MedicinalProductAuthorization';
   identifier : Identifier ;
   country : CodeableConcept [];
   legalStatusOfSupply : CodeableConcept ;
   status : CodeableConcept ;
   statusDate : string ;
   restoreDate : string ;
   validityPeriod : Period ;
   dataExclusivityPeriod : Period ;
   dateOfFirstAuthorization : string ;
   internationalBirthDate : string ;
   jurisdictionalAuthorization : MedicinalProductAuthorization_JurisdictionalAuthorization [];
   holder : Reference ;
   regulator : Reference ;
   procedure : MedicinalProductAuthorization_Procedure ;
   marketingStatus : MarketingStatus [];
}
