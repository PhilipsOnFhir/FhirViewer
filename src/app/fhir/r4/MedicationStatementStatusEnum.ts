import { DomainResource } from './DomainResource'

export enum MedicationStatementStatusEnum{
    ACTIVE = 'active',
    COMPLETED = 'completed',
    ENTERED_IN_ERROR = 'entered-in-error',
    INTENDED = 'intended',
    NOT_TAKEN = 'not-taken',
    ON_HOLD = 'on-hold',
    STOPPED = 'stopped',
    UNKNOWN = 'unknown',
}
