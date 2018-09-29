import { DomainResource } from './DomainResource'

export enum CarePlanActivityStatusEnum{
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    ENTERED_IN_ERROR = 'entered-in-error',
    IN_PROGRESS = 'in-progress',
    NOT_STARTED = 'not-started',
    ON_HOLD = 'on-hold',
    SCHEDULED = 'scheduled',
    STOPPED = 'stopped',
    UNKNOWN = 'unknown',
}
