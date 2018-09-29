import { DomainResource } from './DomainResource'

export enum ConditionalReadStatusEnum{
    FULL_SUPPORT = 'full-support',
    MODIFIED_SINCE = 'modified-since',
    NOT_MATCH = 'not-match',
    NOT_SUPPORTED = 'not-supported',
}
