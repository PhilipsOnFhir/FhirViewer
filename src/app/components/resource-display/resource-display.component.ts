import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resource-display',
  templateUrl: './resource-display.component.html',
  styleUrls: ['./resource-display.component.sass']
})
export class ResourceDisplayComponent implements OnInit {
  @Input() resource: any  | null;

  constructor(
  ) { }

  ngOnInit() {
    console.log( Object.getOwnPropertyDescriptors( this.resource)) ;
    // console.log( Object.entries( this.resource ));
  }

  private printEntries(object: any | null) {
    Object.entries( object).forEach( a => this.print ( 0, a ));

  }

  private lvlString = "                                                          ";
  private print( level, a ){
    // console.log( typeof a );
    let lvlStr = this.lvlString.substr(0,level);
    let type = typeof a[1];
    if ( type === 'string'){
      // console.log( a[0] + " - "+a[1] +" - " + typeof a[1] );
      if ( a[0] === "reference"){
        // console.log( "REF" + lvlStr + a[0] + " - "+a[1] );
      } else {
        // console.log( lvlStr + a[0] + " - "+a[1] );
      }

    }
    else {
      console.log( lvlStr+  a[0]  );
      Object.entries( a[1] ).forEach( a => this.print ( level+1, a ));
    }
  }
}
