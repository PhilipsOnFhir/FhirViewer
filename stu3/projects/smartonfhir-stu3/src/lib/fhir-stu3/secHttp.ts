import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class SecHttp {
  private accessToken: string;
  private http: HttpClient;

  constructor( http: HttpClient, token: string ){
    this.accessToken = token;
    this.http = http;
  }

  private updateOptions(options):any {
    // console.log(options)
    // console.log(this.accessToken)
    if (this.accessToken) {
      let headers = new HttpHeaders({'Authorization': 'Bearer ' + this.accessToken});
      if (options && options.headers) {
        options.headers = options.headers.append('Authorization', 'Bearer ' + this.accessToken);
      } else if (options && !options.headers) {
        options.headers = headers;
      }
      let newOptions = (options ? options : {headers: headers});
      // console.log(newOptions)
      return newOptions;
    }
    else {
      return options;
    }
  }


  get<T>(resourceUrl, options?) : Observable<T>{
      // console.log(resourceUrl);
      return new Observable<T>( obs => {
        let newOptions = this.updateOptions(options);

        this.http.get(resourceUrl, newOptions).subscribe(
          nxt => {obs.next((nxt as unknown) as T); obs.complete()},
          err => obs.error(err)
        )
         // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      })
  }


  put<T>(url: string, body: any| null, options?): Observable<T> {
    // console.log(url);
    return new Observable<T>( obs => {
      let newOptions = this.updateOptions(options);

      this.http.put<T>(url, body, newOptions).subscribe(
        nxt => {obs.next((nxt as unknown) as T); obs.complete()},
        err => obs.error(err)
      )
    })
  }

  post<T>(resourceUrl, body: any | null, options?) : Observable<T>{
    // console.log(resourceUrl);
    return new Observable<T>( obs => {
      let newOptions = this.updateOptions(options);
      this.http.post<T>(resourceUrl, body,newOptions).subscribe(
        nxt => {obs.next((nxt as unknown) as T); obs.complete()},
        err => obs.error(err)
      )
    })
  }


  delete(url: string, options? ) : Observable<any> {
    console.log("DELETE " + url);
    return new Observable<any>( obs => {
      let newOptions = this.updateOptions(options);

      this.http.delete(url, newOptions).subscribe(
          nxt => { obs.next(); obs.complete() },
          err => obs.error(err)
        )
      });
  }
}
