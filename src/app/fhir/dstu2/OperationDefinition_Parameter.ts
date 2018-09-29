import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { OperationDefinition_Binding } from './OperationDefinition_Binding'
import { OperationParameterUseEnum } from './OperationParameterUseEnum'
import { Reference } from './Reference'

export class OperationDefinition_Parameter      extends BackboneElement
{

   static def : string = 'OperationDefinition_Parameter';
   name : string ;
   use : OperationParameterUseEnum ;
   min : string ;
   max : string ;
   documentation : string ;
   type : string ;
   profile : Reference ;
   binding : OperationDefinition_Binding ;
   part : OperationDefinition_Parameter [];
}
