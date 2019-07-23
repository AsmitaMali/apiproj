import { Component } from '@angular/core';
import { vendorid } from './vendorid';
import { VendorDisplayService } from './vendor-display.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiproj';

constructor(private vendata: VendorDisplayService){}
ven = new vendorid('','','');
error= "";
success="";
res:any;
final:any;
ven1: any;
ven2 = 'try';
vcode: any;
private venarray = [];

OnSubmit() {
  this.ven1 = this.vendata.getvendors()
    //.subscribe(data=>{this.res=data,console.log(this.res)});
    //.subscribe(data => {this.res = data,
    //  this.vcode= data['vcode'];
    //  vname1: data['vname1'];
    //  vname2: data['vname2']
  //});
  .subscribe((res : any[])=>{
    console.log(res);
    this.venarray = res;
    });
}

}
