import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Reference, RequestGroup_Action, RequestGroup , RequestStatusEnum , Annotation} from 'fhir2angular-stu3';

@Component({
  selector: 'app-request-group-display',
  templateUrl: './request-group-display.component.html',
  styleUrls: ['./request-group-display.component.css']
})
export class RequestGroupDisplayComponent implements OnInit {
  @Input() resource;
  @Output() update = new EventEmitter<RequestGroup>() ;
  @Output() outputUpdate = new EventEmitter<RequestGroupResponseResult[]>();

  requestGroup: RequestGroup;
  requestGroupResponse: RequestGroup_Response;
  formGroup: FormGroup;
  private newAnnotation: Annotation[];

  result = new Map<String, RequestGroupResponseResult>();

  private requestGroupResponseResult: RequestGroupResponseResult[] = Array<RequestGroupResponseResult>(0);
  // intiantiates: Resource;

  constructor() { }

  ngOnInit() {
    this.requestGroup = this.resource as RequestGroup;
    this.requestGroupResponse = new RequestGroup_Response(this.requestGroup);
    this.formGroup = new FormGroup({selection: new FormControl()});
  }

  updateResult( rgrs: RequestGroupResponseResult[]) {
    console.log('received update');
    console.log(rgrs);
    rgrs.forEach( rqr => this.result.set( rqr.id, rqr ) );

    this.requestGroupResponseResult = Array<RequestGroupResponseResult>(0);

    this.result.forEach( ( value, key ) => {
      // console.log("----------------------------------------------");
      // console.log(key);
      // console.log(value);
      if ( value.valid && value.reference ) {
        this.requestGroupResponseResult.push(value);
      }
    });
    // for (let value of this.result..values() ) {
    //   console.log(value);
    //   requestGroupResponseResult.push(value);
    // }
    console.log(this.requestGroupResponseResult);
    // this.outputUpdate.emit( this.requestGroupResponseResult );
  }

  annotationUpdate( annotations: Annotation[] ) {
    console.log(annotations);
    this.newAnnotation = annotations;
  }

  updateClick() {
    console.log('update');
    this.requestGroup.status = RequestStatusEnum.COMPLETED;
    this.requestGroup.note = this.newAnnotation;
    console.log(this.requestGroupResponseResult);

    this.outputUpdate.emit( this.requestGroupResponseResult );
    this.update.emit((JSON.parse(JSON.stringify(this.requestGroup))));
  }
}

export class RequestGroup_Response {
  requestGroup: RequestGroup;
  actionResponse: RequestGroup_Action_Response[];

  constructor( requestGroup: RequestGroup ) {
    this.requestGroup = requestGroup;
    this.actionResponse = Array<RequestGroup_Action_Response>(0);
    const count = 0;
    this.requestGroup.action.forEach( action => {
      this.actionResponse.push(new RequestGroup_Action_Response(action));
    });
  }


}

export class RequestGroup_Action_Response {
  static count = 0;
  id: string;
  checked = true ;
  disabled: boolean;
  selected: boolean;
  requestGroupAction: RequestGroup_Action;
  requestGroupActionResponses: RequestGroup_Action_Response[] = Array<RequestGroup_Action_Response>(0);

  constructor( requestGroupAction: RequestGroup_Action ) {
    this.requestGroupAction = requestGroupAction;
    this.id = 'SS' + RequestGroup_Action_Response.count++;
    // console.log(this.id);
    // console.log(this.requestGroupAction);

    if ( this.requestGroupAction.action ) {
      this.requestGroupAction.action
        .forEach(action => this.requestGroupActionResponses.push(
          new RequestGroup_Action_Response(action))
        );
    }
  }
}

export class RequestGroupResponseResult {
  id: string;
  actionType: string;
  reference: Reference;
  valid: boolean;
}
