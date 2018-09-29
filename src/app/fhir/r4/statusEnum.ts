import { DomainResource } from './DomainResource'

export enum statusEnum{
    ATTESTED = 'attested',
    IN_PROCESS = 'in-process',
    REQ_REVALID = 'req-revalid',
    REVAL_FAIL = 'reval-fail',
    VAL_FAIL = 'val-fail',
    VALIDATED = 'validated',
}
