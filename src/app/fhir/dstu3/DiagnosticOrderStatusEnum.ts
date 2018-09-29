import { DomainResource } from './DomainResource'

export enum DiagnosticOrderStatusEnum{
    ACCEPTED = 'accepted',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    DRAFT = 'draft',
    ENTERED_IN_ERROR = 'entered-in-error',
    FAILED = 'failed',
    IN_PROGRESS = 'in-progress',
    PLANNED = 'planned',
    PROPOSED = 'proposed',
    RECEIVED = 'received',
    REJECTED = 'rejected',
    REQUESTED = 'requested',
    REVIEW = 'review',
    SUSPENDED = 'suspended',
}
