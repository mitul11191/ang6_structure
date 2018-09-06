import { Component, OnInit } from '@angular/core';
import { ConstantsService } from './../front-providers/constants.service';
import { CommonHttpService } from './../../core/services/common-http.service';




@Component({
  selector: 'app-front-home-page',
  templateUrl: './front-home-page.component.html',
  styleUrls: ['./front-home-page.component.css']
})
export class FrontHomePageComponent implements OnInit {

  
  
  constructor(private _constantsService: ConstantsService,
  			private _commonHttpService: CommonHttpService
  	) { 
  }
  
  ngOnInit(){
  	// console.log("in home page",this._constantsService.domainUrl);

  	// temporary api call for testing
  	// var url = this._constantsService.baseUrl + "product";
   //  this._commonHttpService.getAllRecord(url).then((res: any)=>{ 
   //    if (res.success) {
        
   //    } else {
        
   //    } 
   //  });
  }
}
