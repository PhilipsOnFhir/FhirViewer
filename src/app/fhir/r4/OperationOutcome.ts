import { DomainResource } from './DomainResource'
import { OperationOutcome_Issue } from './OperationOutcome_Issue'

export class OperationOutcome      extends DomainResource
{

   static def : string = 'OperationOutcome';
   issue : OperationOutcome_Issue [];
}
