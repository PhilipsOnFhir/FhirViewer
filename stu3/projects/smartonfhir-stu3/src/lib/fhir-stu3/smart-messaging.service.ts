import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartMessagingService {
  listining: Function;

  constructor( ) {
    // this.listining = this.renderer.listen("window", "message", this.receiveMessage.bind(this))
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
      (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
  }

  receiveMessage(event: Event) {
    const message = event as MessageEvent;

    // Only trust messages from the below origin.
    // if (message.origin !== 'http://example.com:8080') return;

    console.log(message.data);
    console.log(message.origin);
    console.log(message);
  }

  sendMessage( message:string ){
    console.log("send Smart Web Message")
    window.postMessage("myMessage","*")
  }
}
