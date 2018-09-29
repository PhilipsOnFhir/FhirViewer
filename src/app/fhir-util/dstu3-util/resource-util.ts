import {Patient} from "../../fhir/dstu3/Patient";
import {PatientUtil} from "./patient-util";
import {Questionnaire} from "../../fhir/dstu3/Questionnaire";
import {DomainResource} from "../../fhir/dstu3/DomainResource";
import {QuestionnaireUtil} from "./questionaire-util";

export class ResourceUtil {

  static getSummary( domainResource: DomainResource): string {
    let summary: string = "Unknown";

    switch ( domainResource.resourceType) {
      case "Patient":
        summary = PatientUtil.getPreferredName( domainResource as Patient);
        break;
      case "Questionnaire":
        summary = QuestionnaireUtil.getSummary( domainResource as Questionnaire);
        break;
      default:
        summary = domainResource.id;
    }
    return summary;
  }
}
