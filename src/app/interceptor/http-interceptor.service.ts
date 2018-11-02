// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
// import {Observable} from 'rxjs';
//
// @Injectable()
// export class EpicHttpInterceptor implements HttpInterceptor {
//   constructor(){  }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('inter');
//     // Epic-Client-ID: JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ01
//     // req = req.clone({
//     //   setHeaders: {
//     //     'Epic-Client-ID': `JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ01`
//     //   }
//     // });
//     const clonedReq = req.clone({headers: req.headers.set('Epic-Client-ID', `JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ01`)});
//     console.log(clonedReq.headers);
//     return next.handle( clonedReq );
//   }
// }
