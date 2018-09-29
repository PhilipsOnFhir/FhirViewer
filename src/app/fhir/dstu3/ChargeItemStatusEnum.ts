import { DomainResource } from './DomainResource'

export enum ChargeItemStatusEnum{
    ABORTED = 'aborted',
    BILLABLE = 'billable',
    BILLED = 'billed',
    ENTERED_IN_ERROR = 'entered-in-error',
    NOT_BILLABLE = 'not-billable',
    PLANNED = 'planned',
    UNKNOWN = 'unknown',
}
