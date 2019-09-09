import { DomainResource } from './DomainResource'
import { Parameters_Parameter } from './Parameters_Parameter'
import { Resource } from './Resource'

export class Parameters      extends Resource
{

   static def : string = 'Parameters';
   parameter : Parameters_Parameter [];
}
