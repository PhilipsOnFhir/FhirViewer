import { DomainResource } from './DomainResource'

export enum EntryDefinitionRelationTypeEnum{
    HAS_INPUT = 'has-input',
    HAS_OUTPUT = 'has-output',
    IS_REPLACED_BY = 'is-replaced-by',
    TRIGGERS = 'triggers',
    USES = 'uses',
}
