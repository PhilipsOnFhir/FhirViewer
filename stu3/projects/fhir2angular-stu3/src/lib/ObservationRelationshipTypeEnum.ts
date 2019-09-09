import { DomainResource } from './DomainResource';

export enum ObservationRelationshipTypeEnum{
    DERIVED_FROM = 'derived-from',
    HAS_MEMBER = 'has-member',
    INTERFERED_BY = 'interfered-by',
    QUALIFIED_BY = 'qualified-by',
    REPLACES = 'replaces',
    SEQUEL_TO = 'sequel-to',
}
