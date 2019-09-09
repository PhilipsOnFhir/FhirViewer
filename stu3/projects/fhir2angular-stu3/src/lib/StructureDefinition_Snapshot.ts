import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { ElementDefinition } from './ElementDefinition'

export class StructureDefinition_Snapshot      extends BackboneElement
{

   static def : string = 'StructureDefinition_Snapshot';
   element : ElementDefinition [];
}
