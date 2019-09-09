import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";
import {AsyncResultDialog} from "./async-result-dialog.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";



@Component({
  selector: 'app-async-session',
  templateUrl: './async-session.component.html',
  styleUrls: ['./async-session.component.css']
})

export class AsyncSessionComponent implements OnInit {

  status: number;
  progressMsg: string;
  result: any;
  ndJsonFile: string;
  selectedType: string;

  constructor(private acLocation: Location, private router: Router, private httpClient: HttpClient,
              private fileSaveService: FileSaverService,
              private dialog: MatDialog ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    let path = this.acLocation.path();
    let pathSegments: string[] = new Array(0);
    if (this.router.parseUrl(path).root.children['primary']) {
      this.router.parseUrl(path).root.children['primary'].segments.forEach(a =>
        pathSegments.push(a.path)
      );
    }
    let sessionUrl = this.router.parseUrl(path).queryParamMap.get('cl');
    console.log(sessionUrl);


    this.loadStatus(sessionUrl);
  }

  dowloadFile(type: string, url: string) {
    console.log(url);
    this.selectedType = url;

    // window.open(url);
    const myHeaders = new HttpHeaders();
    let filename = type + url.slice(url.lastIndexOf("/")) + ".ndjson";
    this.httpClient.get(url, {headers: myHeaders, responseType: "text"})
      .subscribe(res => {
        // this.ndJsonFile=res;
        const blob = new Blob([res], {type: 'text/plain'});
        this.fileSaveService.save( blob, filename );
      });
    // this.httpClient.get<string>(url).subscribe( res=> this.ndJsonFile=res);
  }

  private loadStatus(sessionUrl: string) {
    const myHeaders = new HttpHeaders();
    this.httpClient.get(sessionUrl, {headers: myHeaders, observe: "response"})
      .subscribe(res => {
        console.log(res);
        this.status = res.status;
        this.progressMsg = res.headers.get("X-Progress");
        console.log(this.status + " : " + this.progressMsg);
        if (this.status == 202) {
          setTimeout(() => {
            this.loadStatus(sessionUrl)
          }, 1000);
        }
        else if (this.status == 200) {
          this.result = res.body;
        }
      });

  }

  private loadResult(sessionUrl: string) {
    const myHeaders = new HttpHeaders();
    this.httpClient.get(sessionUrl, {headers: myHeaders, responseType: "text", observe: "response"})
      .subscribe(res => {
        console.log(res);
        this.status = res.status;
        this.progressMsg = res.headers.get("X-Progress");
        console.log(this.status + " : " + this.progressMsg);
        this.result = res.body;
      });

  }

  view(output: any) {
    const dialogRef = this.dialog.open(AsyncResultDialog, {
      // width: '250px',
      data: { type: output.type, title: output.type, url: output.url }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

