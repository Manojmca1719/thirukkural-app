import { Component } from '@angular/core';
import { CommonService } from './common.service';
CommonService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thirukkural-app';
  public data: any;
  public thirukkuralNo: Array<number> = [];
  constructor(public commonService: CommonService) {
    for (let i = 1; i <= 1330; i++) {
      this.thirukkuralNo.push(i);
    }
  }

  public getThirukkural = (event?:any) => {
    let findNo = event.value;
    let url = 'https://api-thirukkural.vercel.app/api?num='+findNo;
    this.commonService.getDataService(url).subscribe((res) => {
      this.data = res;
    })
  }
}
