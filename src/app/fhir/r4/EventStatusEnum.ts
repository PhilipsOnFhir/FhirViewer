import { DomainResource } from './DomainResource'

export enum EventStatusEnum{
    ABORTED = 'aborted',
    COMPLETED = 'completed',
    ENTERED_IN_ERROR = 'entered-in-error',
    IN_PROGRESS = 'in-progress',
    NOT_DONE = 'not-done',
    PREPARATION = 'preparation',
    SUSPENDED = 'suspended',
    UNKNOWN = 'unknown',
}
