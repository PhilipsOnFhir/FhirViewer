import { DomainResource } from './DomainResource';

export enum ActionSelectionBehaviorEnum{
    ALL = 'all',
    ALL_OR_NONE = 'all-or-none',
    ANY = 'any',
    AT_MOST_ONE = 'at-most-one',
    EXACTLY_ONE = 'exactly-one',
    ONE_OR_MORE = 'one-or-more',
}
