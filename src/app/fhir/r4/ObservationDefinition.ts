import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { ObservationDefinition_QualifiedInterval } from './ObservationDefinition_QualifiedInterval'
import { ObservationDefinition_QuantitativeDetails } from './ObservationDefinition_QuantitativeDetails'

export class ObservationDefinition      extends DomainResource
{

   static def : string = 'ObservationDefinition';
   category : Coding ;
   code : Coding ;
   permittedDataType : Coding [];
   multipleResultsAllowed : string ;
   method : CodeableConcept ;
   preferredReportName : string ;
   quantitativeDetails : ObservationDefinition_QuantitativeDetails ;
   qualifiedInterval : ObservationDefinition_QualifiedInterval [];
   validCodedValueSet : string ;
   normalCodedValueSet : string ;
   abnormalCodedValueSet : string ;
   criticalCodedValueSet : string ;
}
