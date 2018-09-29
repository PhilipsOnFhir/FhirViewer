import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ConsentProvisionTypeEnum } from './ConsentProvisionTypeEnum'
import { Consent_Actor } from './Consent_Actor'
import { Consent_Data } from './Consent_Data'
import { DomainResource } from './DomainResource'
import { Period } from './Period'

export class Consent_Provision      extends BackboneElement
{

   static def : string = 'Consent_Provision';
   type : ConsentProvisionTypeEnum ;
   period : Period ;
   actor : Consent_Actor [];
   action : CodeableConcept [];
   securityLabel : Coding [];
   purpose : Coding [];
   class : Coding [];
   code : CodeableConcept [];
   dataPeriod : Period ;
   data : Consent_Data [];
   provision : Consent_Provision [];
}
