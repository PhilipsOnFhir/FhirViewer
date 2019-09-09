import { DomainResource } from './DomainResource';

export enum ConditionVerificationStatusEnum{
    CONFIRMED = 'confirmed',
    DIFFERENTIAL = 'differential',
    ENTERED_IN_ERROR = 'entered-in-error',
    PROVISIONAL = 'provisional',
    REFUTED = 'refuted',
    UNKNOWN = 'unknown',
}
