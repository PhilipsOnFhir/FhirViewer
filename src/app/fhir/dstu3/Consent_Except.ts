import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ConsentExceptTypeEnum } from './ConsentExceptTypeEnum'
import { Consent_Actor1 } from './Consent_Actor1'
import { Consent_Data1 } from './Consent_Data1'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class Consent_Except      extends BackboneElement
{

   static def : string = 'Consent_Except';
   type : ConsentExceptTypeEnum ;
   period : Period ;
   actor : Consent_Actor1 [];
   action : CodeableConcept [];
   securityLabel : Coding [];
   purpose : Coding [];
   class : Coding [];
   code : Coding [];
   dataPeriod : Period ;
   data : Consent_Data1 [];
}
