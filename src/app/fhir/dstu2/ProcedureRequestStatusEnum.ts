import { DomainResource } from './DomainResource'

export enum ProcedureRequestStatusEnum{
    ABORTED = 'aborted',
    ACCEPTED = 'accepted',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    IN_PROGRESS = 'in-progress',
    PROPOSED = 'proposed',
    RECEIVED = 'received',
    REJECTED = 'rejected',
    REQUESTED = 'requested',
    SUSPENDED = 'suspended',
}
