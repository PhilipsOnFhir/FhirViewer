import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MeasureReportStatusEnum } from './MeasureReportStatusEnum'
import { MeasureReportTypeEnum } from './MeasureReportTypeEnum'
import { MeasureReport_Group } from './MeasureReport_Group'
import { Period } from './Period'
import { Reference } from './Reference'

export class MeasureReport      extends DomainResource
{

   static def : string = 'MeasureReport';
   identifier : Identifier [];
   status : MeasureReportStatusEnum ;
   type : MeasureReportTypeEnum ;
   measure : string ;
   subject : Reference ;
   date : string ;
   reporter : Reference ;
   period : Period ;
   group : MeasureReport_Group [];
   evaluatedResources : Reference ;
}
