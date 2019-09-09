import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'async-result-dialog',
  templateUrl: './async-result-dialog.component.html',
})
export class AsyncResultDialog implements OnInit{

  text: string = "pending";

  constructor( private httpClient: HttpClient, public dialogRef: MatDialogRef<AsyncResultDialog>,
               @Inject(MAT_DIALOG_DATA) public data:any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    const myHeaders = new HttpHeaders();
    let filename = this.data.type + this.data.url.slice(this.data.url.lastIndexOf("/")) + ".ndjson";
    this.httpClient.get( this.data.url, {headers: myHeaders, responseType: "text"})
      .subscribe(res => {
        // this.ndJsonFile=res;
        this.text = res;
      });
  }

}

// export interface DialogData {
//   type: string;
//   title: string;
//   url: string;
// }
