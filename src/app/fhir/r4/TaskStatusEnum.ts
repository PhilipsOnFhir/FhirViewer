import { DomainResource } from './DomainResource'

export enum TaskStatusEnum{
    ACCEPTED = 'accepted',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    ENTERED_IN_ERROR = 'entered-in-error',
    FAILED = 'failed',
    IN_PROGRESS = 'in-progress',
    ON_HOLD = 'on-hold',
    READY = 'ready',
    RECEIVED = 'received',
    REJECTED = 'rejected',
    REQUESTED = 'requested',
}
