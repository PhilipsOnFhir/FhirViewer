import { DomainResource } from './DomainResource'

export enum ActionRelationshipTypeEnum{
    AFTER = 'after',
    AFTER_END = 'after-end',
    AFTER_START = 'after-start',
    BEFORE = 'before',
    BEFORE_END = 'before-end',
    BEFORE_START = 'before-start',
    CONCURRENT = 'concurrent',
    CONCURRENT_WITH_END = 'concurrent-with-end',
    CONCURRENT_WITH_START = 'concurrent-with-start',
}
