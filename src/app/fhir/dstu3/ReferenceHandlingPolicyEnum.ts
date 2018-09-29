import { DomainResource } from './DomainResource'

export enum ReferenceHandlingPolicyEnum{
    ENFORCED = 'enforced',
    LITERAL = 'literal',
    LOCAL = 'local',
    LOGICAL = 'logical',
    RESOLVES = 'resolves',
}
