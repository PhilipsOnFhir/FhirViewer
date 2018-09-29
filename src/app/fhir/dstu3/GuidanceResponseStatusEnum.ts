import { DomainResource } from './DomainResource'

export enum GuidanceResponseStatusEnum{
    DATA_REQUESTED = 'data-requested',
    DATA_REQUIRED = 'data-required',
    ENTERED_IN_ERROR = 'entered-in-error',
    FAILURE = 'failure',
    IN_PROGRESS = 'in-progress',
    SUCCESS = 'success',
}
