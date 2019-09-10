import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SmartOnFhirService} from '../../../../../../smartonfhir-stu3/src/lib/fhir-stu3/smart-on-fhir.service';
import {RequestGroup_Action, DomainResource, ActionPrecheckBehaviorEnum} from 'fhir2angular-stu3';
import {RequestGroup_Action_Response, RequestGroupResponseResult} from '../request-group-display.component';

@Component({
  selector: 'app-request-group-action-display',
  templateUrl: './request-group-action-display.component.html',
  styleUrls: ['./request-group-action-display.component.css']
})
export class RequestGroupActionDisplayComponent implements OnInit {
  @Input() actionResponse: RequestGroup_Action_Response;
  @Output() outputUpdate  = new EventEmitter<RequestGroupResponseResult[]>();
  action: RequestGroup_Action;

  min: number;
  max: number;
  hascheckBox = true;

  allOrNone = false;
  allOrNoneChecked = false;
  allOrNoneDisabled = false;

  radio = false;
  selectedRadio: RequestGroup_Action_Response;

  // selectableActions: SelectableAction[];
  subActionResponses: RequestGroup_Action_Response[];
  disabled = false;

  title = '';
  nLines = 0;
  resource: DomainResource | null;

  constructor( private sofs: SmartOnFhirService ) {
  }

  ngOnInit() {
//    console.log(this.actionResponse);
    this.action = this.actionResponse.requestGroupAction;
    const count = 0;

    if ( this.action.title ) {
      this.title = this.action.title;
    } else if ( this.action.description ) {
      this.title = this.action.description;
    } else if ( this.action.textEquivalent ) {
      this.title = this.action.textEquivalent;
    } else {
      this.title = '-';
    }
    if ( this.action.title ) {
      this.nLines++;
    }
    if ( this.action.description ) {
      this.nLines++;
    }
    if ( this.action.textEquivalent ) {
      this.nLines++;
    }


    this.subActionResponses = this.actionResponse.requestGroupActionResponses;
    this.nLines += this.subActionResponses.length;

    this.hascheckBox = true;
    this.min = 0; this.max = this.subActionResponses.length;
    switch (this.action.selectionBehavior) {
      case 'one-or-more':
        this.min = 1;
        break;
      case 'exactly-one':
        this.radio = true;
        break;
      case 'at-most-one':
        this.min = 0;
        this.max = 1;
        break;
      case 'any':
        break;
      case 'all-or-none':
        this.allOrNone = true;
        break;
      case 'all':
        this.hascheckBox = false;
        break;
      default:
        this.hascheckBox = false;
        this.actionResponse.checked=true;
    }

    if ( this.hascheckBox ) {
      if ( this.action.precheckBehavior ) {
        this.actionResponse.checked = (this.action.precheckBehavior === ActionPrecheckBehaviorEnum.YES);
      } else {
        this.actionResponse.checked = false;
      }
    } else {
      this.actionResponse.checked = true;
    }

    // this.updateResult();

    if (this.action.resource && this.action.resource != null ) {
      this.sofs.getReference( this.action.resource ).subscribe(resource => {
          this.resource = resource;
          this.updateResult();

        },
        err => console.log(err))
        .unsubscribe();
    }
    this.updateResult();
  }

  singeLine(): boolean {
    return ( this.nLines <= 1 );
  }

  getTypeDescription(): string {
    let result = '-';
    if ( this.action.type ) {
      result = this.action.type.display ;
    }
    return result;
  }

  checkboxChange( event, subActionResponse: RequestGroup_Action_Response ) {
    // console.log( JSON.stringify(selectableAction.actionResponse));
    const ls: number = this.subActionResponses.filter( sa => sa.checked ).length;
    console.log( subActionResponse.checked + ', counter: ' + ls + ', min: ' + this.min + ', max: ' + this.max );
    // console.log( event.target.checked+", counter: "+ls+", min: "+this.min+", max: "+this.max );
    this.actionResponse.checked = subActionResponse.checked;

    if (ls === this.max) {
      console.log('at maximum');
      this.subActionResponses
        .filter( sa => !sa.checked )
        .forEach( sa => sa.disabled = true);
    } else if ( ls > this.max ) {
      console.log('above maximum');
      subActionResponse.checked = false;
    } else if ( ls < this.min ) {
      console.log('below minimum');
      subActionResponse.checked = true;
    } else {
      this.subActionResponses
        .forEach(sa => sa.disabled = false);
    }

    if ( this.radio ) {
      this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior = ActionPrecheckBehaviorEnum.NO);
      this.selectedRadio.requestGroupAction.precheckBehavior = ActionPrecheckBehaviorEnum.YES;
    } else if ( this.allOrNone ) {
      this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior = (this.allOrNoneChecked ? ActionPrecheckBehaviorEnum.YES : ActionPrecheckBehaviorEnum.NO));
    } else {
      this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior = (sa.checked ? ActionPrecheckBehaviorEnum.YES : ActionPrecheckBehaviorEnum.NO));
    }

    this.subActionResponses
      .forEach( sar => sar.requestGroupActionResponses.forEach( ssar => {
        this.enableDisable( ssar, sar.checked );
      }));
    this.updateResult();
  }

  private enableDisable(ssar: RequestGroup_Action_Response, checked: boolean) {
    ssar.disabled = checked;
    ssar.requestGroupActionResponses.forEach( ssar => this.enableDisable(ssar, checked));

  }



  radioChange() {
    this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior = ActionPrecheckBehaviorEnum.NO);
    this.selectedRadio.requestGroupAction.precheckBehavior = ActionPrecheckBehaviorEnum.YES;
    this.updateResult();
  }

  updateResult() {
    // console.log("RGA received update "+this.actionResponse.checked );
    const requestGroupResponseResults: RequestGroupResponseResult[] = Array<RequestGroupResponseResult>(0);
    this.getSubActionResults(this.actionResponse).forEach( a => requestGroupResponseResults.push( a) );
    // console.log( requestGroupResponseResults );
    this.outputUpdate.emit( requestGroupResponseResults );
  }

  getSubActionResults(actionResponse: RequestGroup_Action_Response): RequestGroupResponseResult[] {
    const requestGroupResponseResults: RequestGroupResponseResult[] = Array<RequestGroupResponseResult>(0);
    const action = actionResponse.requestGroupAction;
    // console.log( actionResponse) ;

    const requestGroupResponseResult: RequestGroupResponseResult = new RequestGroupResponseResult();
    requestGroupResponseResult.valid = actionResponse.checked;
    requestGroupResponseResult.id = actionResponse.id;
    if ( action.resource ) {
      requestGroupResponseResult.actionType =
        ( action.type && action.type.code ? action.type.code : 'create');
      requestGroupResponseResult.reference = action.resource;
    }
    requestGroupResponseResults.push(requestGroupResponseResult);

    actionResponse.requestGroupActionResponses.forEach( subActionResponse => {
      subActionResponse.selected = actionResponse.checked;
    });

    // process nested elements
    actionResponse.requestGroupActionResponses.forEach( srar => {
      this.getSubActionResults(srar).forEach( a => requestGroupResponseResults.push( a) );
    });

    return requestGroupResponseResults;
  }
}
