import { DomainResource } from './DomainResource'

export enum MedicationDispenseStatusEnum{
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
    ENTERED_IN_ERROR = 'entered-in-error',
    IN_PROGRESS = 'in-progress',
    ON_HOLD = 'on-hold',
    PREPARATION = 'preparation',
    STOPPED = 'stopped',
    UNKNOWN = 'unknown',
}
