import { BackboneElement } from './BackboneElement'
import { CompositionAttestationModeEnum } from './CompositionAttestationModeEnum'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Composition_Attester      extends BackboneElement
{

   static def : string = 'Composition_Attester';
   mode : CompositionAttestationModeEnum [];
   time : string ;
   party : Reference ;
}
