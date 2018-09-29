import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestGroup_Action} from "../../../../fhir/dstu3/RequestGroup_Action";
import {DomainResource} from "../../../../fhir/dstu3/DomainResource";
import {RequestGroup_Action_Response, RequestGroupResponseResult} from "../request-group-display.component";
import {ActionPrecheckBehaviorEnum} from "../../../../fhir/dstu3/ActionPrecheckBehaviorEnum";
import {SmartOnFhirService} from "../../../../fhir-util/smart-on-fhir.service";

@Component({
  selector: 'app-request-group-action-display',
  templateUrl: './request-group-action-display.component.html',
  styleUrls: ['./request-group-action-display.component.sass']
})
export class RequestGroupActionDisplayComponent implements OnInit {

  @Input() actionResponse: RequestGroup_Action_Response;
  @Output() outputUpdate  = new EventEmitter<RequestGroupResponseResult[]>();
  action: RequestGroup_Action;

  min: number;
  max: number;
  hascheckBox: boolean = true;

  allOrNone:boolean = false;
  allOrNoneChecked = false;
  allOrNoneDisabled = false;

  radio:boolean=false;
  selectedRadio :RequestGroup_Action_Response;

  // selectableActions: SelectableAction[];
  subActionResponses: RequestGroup_Action_Response[];
  disabled = false;

  title :string = "";
  nLines : number = 0;
  resource: DomainResource | null;

  constructor( private sofs : SmartOnFhirService ) {
  }

  ngOnInit() {
//    console.log(this.actionResponse);
    this.action = this.actionResponse.requestGroupAction;
    let count=0;

    if ( this.action.title ){
      this.title = this.action.title;
    } else if ( this.action.description ){
      this.title = this.action.description;
    } else if ( this.action.textEquivalent ){
      this.title = this.action.textEquivalent;
    } else {
      this.title = "-";
    }
    if ( this.action.title ){
      this.nLines++;
    }
    if ( this.action.description ){
      this.nLines++;
    }
    if ( this.action.textEquivalent ){
      this.nLines++;
    }


    this.subActionResponses = this.actionResponse.requestGroup_Action_Responses;
    this.nLines += this.subActionResponses.length;

    this.hascheckBox = true;
    this.min =0; this.max=this.subActionResponses.length;
    switch (this.action.selectionBehavior){
      case "one-or-more":
        this.min=1;
        break;
      case "exactly-one":
        this.radio=true;
        break;
      case "at-most-one":
        this.min=0;
        this.max=1;
        break;
      case "any":
        break;
      case "all-or-none":
        this.allOrNone=true;
        break;
      case "all":
        this.hascheckBox=false;
        break;
      default:
        this.hascheckBox=false;
    }

    if ( this.hascheckBox ) {
      if ( this.action.precheckBehavior ) {
        this.actionResponse.checked = (this.action.precheckBehavior === ActionPrecheckBehaviorEnum.YES);
      } else {
        this.actionResponse.checked=false;
      }
    }
    else {
      this.actionResponse.checked = true;
    }

    // this.updateResult();

    if (this.action.resource && this.action.resource!=null ) {
      this.sofs.getReference( this.action.resource ).subscribe(resource => {
          this.resource = resource;
          this.updateResult();

        },
        err=> console.log(err))
        .unsubscribe();
    }
  }

  singeLine(): boolean {
    return ( this.nLines<=1 );
  }

  getTypeDescription():string{
    let result:string = "-";
    if ( this.action.type ){
      result = this.action.type.display ;
    }
    return result;
  }

  checkboxChange( event, subActionResponse: RequestGroup_Action_Response ) {
    // console.log( JSON.stringify(selectableAction.actionResponse));
    let ls:number = this.subActionResponses.filter( sa => sa.checked ).length;
    console.log( subActionResponse.checked+", counter: "+ls+", min: "+this.min+", max: "+this.max );
    // console.log( event.target.checked+", counter: "+ls+", min: "+this.min+", max: "+this.max );
    this.actionResponse.checked = subActionResponse.checked;

    if(ls == this.max){
      console.log("at maximum");
      this.subActionResponses
        .filter( sa => !sa.checked )
        .forEach( sa => sa.disabled = true);
    } else if( ls > this.max ){
      console.log("above maximum");
      subActionResponse.checked=false;
    } else if( ls < this.min ) {
      console.log("below minimum");
      subActionResponse.checked= true;
    } else {
      this.subActionResponses
        .forEach(sa => sa.disabled = false);
    }

    if ( this.radio ){
      this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior=ActionPrecheckBehaviorEnum.NO);
      this.selectedRadio.requestGroupAction.precheckBehavior=ActionPrecheckBehaviorEnum.YES;
    } else if ( this.allOrNone ){
      this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior=(this.allOrNoneChecked?ActionPrecheckBehaviorEnum.YES:ActionPrecheckBehaviorEnum.NO));
    } else {
      this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior= (sa.checked?ActionPrecheckBehaviorEnum.YES:ActionPrecheckBehaviorEnum.NO));
    }

    this.subActionResponses
      .forEach( sar => sar.requestGroup_Action_Responses.forEach( ssar =>{
        this.enableDisable( ssar, sar.checked )
      }))
    this.updateResult();
  }

  private enableDisable(ssar: RequestGroup_Action_Response, checked: boolean) {
    ssar.disabled=checked;
    ssar.requestGroup_Action_Responses.forEach( ssar => this.enableDisable(ssar, checked));

  }



  radioChange(){
    this.subActionResponses.forEach(sa => sa.requestGroupAction.precheckBehavior= ActionPrecheckBehaviorEnum.NO);
    this.selectedRadio.requestGroupAction.precheckBehavior=ActionPrecheckBehaviorEnum.YES;
    this.updateResult();
  }

  updateResult() {
    // console.log("RGA received update "+this.actionResponse.checked );
    let requestGroupResponseResults : RequestGroupResponseResult[] = Array<RequestGroupResponseResult>(0);
    this.getSubActionResults(this.actionResponse).forEach( a => requestGroupResponseResults.push( a) );
    // console.log( requestGroupResponseResults );
    this.outputUpdate.emit( requestGroupResponseResults );
  }

  getSubActionResults(actionResponse: RequestGroup_Action_Response):RequestGroupResponseResult[] {
    let requestGroupResponseResults : RequestGroupResponseResult[] = Array<RequestGroupResponseResult>(0);
    let action = actionResponse.requestGroupAction;
    // console.log( actionResponse) ;

    let requestGroupResponseResult: RequestGroupResponseResult = new RequestGroupResponseResult();
    requestGroupResponseResult.valid = actionResponse.checked;
    requestGroupResponseResult.id = actionResponse.id;
    if ( action.resource ){
      requestGroupResponseResult.actionType =
        ( action.type && action.type.code ? action.type.code : "create");
      requestGroupResponseResult.reference = action.resource;
    }
    requestGroupResponseResults.push(requestGroupResponseResult);

    actionResponse.requestGroup_Action_Responses.forEach( subActionResponse => {
        subActionResponse.selected=actionResponse.checked;
      });

    // process nested elements
    actionResponse.requestGroup_Action_Responses.forEach( srar => {
      this.getSubActionResults(srar).forEach( a => requestGroupResponseResults.push( a) );
    });

    return requestGroupResponseResults;
  }
}
