import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Annotation} from "fhir2angular-stu3";

@Component({
  selector: 'app-annotation-display',
  templateUrl: './annotation-display.component.html',
  styleUrls: ['./annotation-display.component.css']
})
export class AnnotationDisplayComponent implements OnInit {
  @Input() annotations: Annotation[] = [];
  @Output() annotationMonitor = new EventEmitter<Annotation>();
  annotation: Annotation;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.annotations);
    if ( !this.annotations ){
      this.annotations= Array<Annotation>(0);
    }
    this.annotation =  new Annotation();
    this.annotation.text="";
    this.annotation.authorString="--";
    this.annotation.time= new Date().toDateString();
  }

  valueChange( newValue: any ){
    this.annotation.text=newValue;
    this.annotationMonitor.emit( this.annotation );
  }
}
