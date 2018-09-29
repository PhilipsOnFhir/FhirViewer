import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'

export class MedicinalProductPackaged_BatchIdentifier      extends BackboneElement
{

   static def : string = 'MedicinalProductPackaged_BatchIdentifier';
   outerPackaging : Identifier ;
   immediatePackaging : Identifier ;
}
