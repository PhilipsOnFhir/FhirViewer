import { CodeableConcept } from './CodeableConcept'
import { DeviceMetricCategoryEnum } from './DeviceMetricCategoryEnum'
import { DeviceMetricColorEnum } from './DeviceMetricColorEnum'
import { DeviceMetricOperationalStatusEnum } from './DeviceMetricOperationalStatusEnum'
import { DeviceMetric_Calibration } from './DeviceMetric_Calibration'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'
import { Timing } from './Timing'

export class DeviceMetric      extends DomainResource
{

   static def : string = 'DeviceMetric';
   identifier : Identifier ;
   type : CodeableConcept ;
   unit : CodeableConcept ;
   source : Reference ;
   parent : Reference ;
   operationalStatus : DeviceMetricOperationalStatusEnum ;
   color : DeviceMetricColorEnum ;
   category : DeviceMetricCategoryEnum ;
   measurementPeriod : Timing ;
   calibration : DeviceMetric_Calibration [];
}
