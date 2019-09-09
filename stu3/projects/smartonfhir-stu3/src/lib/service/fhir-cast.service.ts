import { Injectable } from '@angular/core';
import {DomainResource,Resource,Patient,ImagingStudy} from "fhir2angular-stu3";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as Rx from 'rxjs';
import {Observable, Observer, Subject} from "rxjs";
import {SmartOnFhirService} from "../fhir-stu3/smart-on-fhir.service";
import {SecHttp} from "../fhir-stu3/secHttp";

class FhirCastEvent {
  hub_event: string;
  context: any;
}

@Injectable({
  providedIn: 'root'
})
export class FhirCastService {
  private topicUrl: string;
  private initialized: boolean = false;
  private topicId: string;
  public ws: any;
  private secHttp: SecHttp;

  constructor(  private sofs: SmartOnFhirService, private http: HttpClient ) {
  }


  subscribe(): Observable<FhirCastEvent>{
    let fcws = new FhirCastWebsocket(this.secHttp, this.http);
    return fcws.subscribe( this.topicId, this.topicUrl);
  }

  private create(url: string): Subject<MessageEvent> {
    this.ws = new WebSocket(url);
    const observable = Observable.create(
      (obs: Observer<any>) => {
        this.ws.onmessage = obs.next.bind(obs);
        this.ws.onerror = obs.error.bind(obs);
        this.ws.onclose = obs.complete.bind(obs);
        return this.ws.close.bind(this.ws);
      });//.share();

    const observer = {
      next: (data: Object) => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(data);
        }
      }
    };
    console.log(this.ws);
    return Rx.Subject.create(observer, observable);
  }

  openPatient(patient: Patient) {
    console.log("patient opened");
    let body : string = this.getEventString( this.topicId, "open-patient-chart", patient);
    this.sendEvent( body );
  }

  openStudy(study: ImagingStudy) {
    console.log("imaging opened")
    let body = this.getEventString( this.topicId, "open-imaging-study", study);
    this.sendEvent( body );
  }


  closePatient(patient: DomainResource) {
    console.log("close patient")
    let body = this.getEventString( this.topicId, "close-patient-chart", patient);
    this.sendEvent( body );
  }

  closeStudy(study: DomainResource) {
    console.log("close study")
    let body = this.getEventString( this.topicId, "close-imaging-study", study);
    this.sendEvent( body );
  }

  login(topicUrl: string, topicId:string ){
    console.log("login "+topicUrl);
    this.secHttp = this.sofs.getSecHttp();
    this.topicUrl = topicUrl;
    this.topicId = topicId;
    this.initialized = true;
  }

  logout(): Observable<any> {
    return new Observable( obs => {
      console.log("logout");
      let body = this.getEventString( this.topicId, "user-logout",null );
      this.sendEvent( body );
      obs.next();
      obs.complete();
    });
  }

  private sendEvent(body: string) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    // console.log( body);

    this.secHttp.post(this.topicUrl, body, {headers: myHeaders, observe: 'response'} ).subscribe(
      next => {
        // console.log(next)
      },
      error => console.log(error)
    )
  }

  private getEventString( topicId: string, eventType: string, resource: Resource): string {
    if ( resource ) {
      return(
        "{ \"event\": \n" +
        "\t{ \"hub.topic\": \"" + topicId + "\", \n" +
        "\t  \"hub.event\":\"" + eventType + "\",\n" +
        "\t  \"context\": [\n" +
        "\t\t{ \t\"key\": \""+(resource.resourceType===Patient.def?"patient":"study")+"\",\n" +
        "\t\t\t\"resource\": \n" +
        "\t\t\t\t{\t\"resourceType\":\"" + resource.resourceType + "\",\n" +
        "\t\t\t\t\t\"id\":\"" + resource.id + "\"\n" +
        "\t\t\t\t}\n" +
        "\t\t}]\n" +
        "\t}\n" +
        "}"
      );
    } else {
      return(
        "{ \"event\": \n" +
        "\t{ \"hub.topic\": \"" + topicId + "\", \n" +
        "\t  \"hub.event\":\"" + eventType + "\"\n" +
        "\t}\n" +
        "}"
      );
    }
    return "-";
  }
}


class FhirCastWebsocket{
  private subject: Rx.Subject<MessageEvent> ;
  public ws: any;
  private websocketInitialised = false;

  constructor( private secHttp: SecHttp, private http: HttpClient ){
    this.secHttp = secHttp;
    this.http = http;
  }

  subscribe( topicId:string, topicUrl:string ): Observable<FhirCastEvent>{
    console.log("Subscribe to fhicast events");
    let obs : Observable<FhirCastEvent> = new Observable<FhirCastEvent>( obs => {
        let subscriptionRequest =
          "{\n" +
          // "\t\"hub.callback\":null,\n" +
          "\t\"hub.mode\":\"subscribe\",\n" +
          "\t\"hub.topic\":\"" + topicId + "\",\n" +
          "\t\"hub.secret\":\"randomSecret\",\n" +
          "\t\"hub.events\":\"open-patient-chart,close-patient-chart,open-imaging-study,close-imaging-study,user-logout\",\n" +
          // "\t\"hub.lease_seconds\":null,\n" +
          "\t\"hub.channel.type\":\"websocket\"\n" +
          "}\n";

        console.log(subscriptionRequest);
        //    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        this.secHttp.post(topicUrl, subscriptionRequest, {
          headers: myHeaders,
          responseType: 'text' as 'json'
        }).subscribe(
          // this.http.post(this.topicUrl, subscriptionRequest, {observe: 'response'} ).subscribe(
          next => {
            console.log("websocket: " + next);
            if (!this.subject) {
              this.subject = this.create(next as string);
              this.subject.subscribe((message) => {
                // console.log("Received from websocket: " + message.data);
                // console.log(JSON.stringify(message.data));
                if (this.websocketInitialised) {
                  console.log('NEW EVENT: ' + message.data)
                  let fce = new FhirCastEvent();
                  // fce.hub_event = message.data.'hub.event';
                  let b = JSON.parse(message.data);
                  fce.hub_event = b.event["hub.event"];
                  fce.context = b.event.context;
                  // console.log(fce);
                  obs.next( fce );
                } else {
                  console.log("CHALLENGE RECEIVED");
                  let response = "{this.n" +
                    "   \"hub.challenge\":\"meu3we944ix80ox\"\n" +
                    "}";
                  this.ws.send(response);
                  this.websocketInitialised = true;
                }
              });
            }
          }
          ,
          error => {
            console.log(error);
            obs.error(error);
          }
        )
      }
    );
    return obs;
  }

  private create(url: string): Subject<MessageEvent> {
    this.ws = new WebSocket(url);
    const observable = Observable.create(
      (obs: Observer<any>) => {
        this.ws.onmessage = obs.next.bind(obs);
        this.ws.onerror = obs.error.bind(obs);
        this.ws.onclose = obs.complete.bind(obs);
        return this.ws.close.bind(this.ws);
      });//.share();

    const observer = {
      next: (data: Object) => {
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(data);
        }
      }
    };
    console.log(this.ws);
    return Rx.Subject.create(observer, observable);
  }

}
