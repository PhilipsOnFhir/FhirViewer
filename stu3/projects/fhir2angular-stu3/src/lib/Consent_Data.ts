import { BackboneElement } from './BackboneElement'
import { ConsentDataMeaningEnum } from './ConsentDataMeaningEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Consent_Data      extends BackboneElement
{

   static def : string = 'Consent_Data';
   meaning : ConsentDataMeaningEnum ;
   reference : Reference ;
}
