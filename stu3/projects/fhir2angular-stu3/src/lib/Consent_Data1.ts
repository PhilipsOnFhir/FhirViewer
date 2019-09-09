import { BackboneElement } from './BackboneElement'
import { ConsentDataMeaningEnum } from './ConsentDataMeaningEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Consent_Data1      extends BackboneElement
{

   static def : string = 'Consent_Data1';
   meaning : ConsentDataMeaningEnum ;
   reference : Reference ;
}
