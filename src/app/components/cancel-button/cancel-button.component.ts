import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.sass']
})
export class CancelButtonComponent implements OnInit {
  @Input()  id:string | null;
  @Input()  description:string | null;
  @Output() filterParam: EventEmitter<CancelButtonEvent> = new EventEmitter<CancelButtonEvent>();
  value: string | null;

  constructor() { }

  ngOnInit() {
  }

  filter(){
    let cbe : CancelButtonEvent = new CancelButtonEvent();
    cbe.message = this.id;
    cbe.value = this.value;
    this.filterParam.emit( cbe);
  }
}

export class CancelButtonEvent {
  message:string;
  value:string;
}
