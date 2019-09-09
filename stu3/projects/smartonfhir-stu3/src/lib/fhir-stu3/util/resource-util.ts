import {DomainResource} from "fhir2angular-stu3";
import {Patient} from "fhir2angular-stu3";
import {PatientUtil} from "./patient-util";

export class ResourceUtil {

  static getSummary( domainResource: DomainResource): string {
    let summary: string = "Unknown";

    switch ( domainResource.resourceType) {
      case Patient.def:
        summary = PatientUtil.getPreferredName( domainResource as Patient);
        break;

      default:
        summary = domainResource.resourceType+"-"+domainResource.id;
    }
    return summary;
  }
}
