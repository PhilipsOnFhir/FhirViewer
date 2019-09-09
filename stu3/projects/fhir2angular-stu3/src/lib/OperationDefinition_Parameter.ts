import { BackboneElement } from './BackboneElement'
import { DomainResource } from './DomainResource'
import { FHIRAllTypesEnum } from './FHIRAllTypesEnum'
import { OperationDefinition_Binding } from './OperationDefinition_Binding'
import { OperationParameterUseEnum } from './OperationParameterUseEnum'
import { Reference } from './Reference'
import { SearchParamTypeEnum } from './SearchParamTypeEnum'

export class OperationDefinition_Parameter      extends BackboneElement
{

   static def : string = 'OperationDefinition_Parameter';
   name : string ;
   use : OperationParameterUseEnum ;
   min : string ;
   max : string ;
   documentation : string ;
   type : FHIRAllTypesEnum ;
   searchType : SearchParamTypeEnum ;
   profile : Reference ;
   binding : OperationDefinition_Binding ;
   part : OperationDefinition_Parameter [];
}
