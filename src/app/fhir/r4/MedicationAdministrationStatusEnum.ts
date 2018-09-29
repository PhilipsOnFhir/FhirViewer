import { DomainResource } from './DomainResource'

export enum MedicationAdministrationStatusEnum{
    COMPLETED = 'completed',
    ENTERED_IN_ERROR = 'entered-in-error',
    IN_PROGRESS = 'in-progress',
    NOT_DONE = 'not-done',
    ON_HOLD = 'on-hold',
    STOPPED = 'stopped',
    UNKNOWN = 'unknown',
}
