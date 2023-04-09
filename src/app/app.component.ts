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

  constructor (public commonService:CommonService) {
    this.getThirukkural();
  }

  public getThirukkural = () => {
    let url = "https://api-thirukkural.vercel.app/api?num=3"
    this.commonService.getDataService(url).subscribe((res)=>{
      this.data = res;
      console.log(this.data); 
    })
  }
}
