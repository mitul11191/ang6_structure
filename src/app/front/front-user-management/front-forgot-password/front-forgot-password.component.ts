import { Component, OnInit } from '@angular/core';

import { ConstantsService } from './../../front-providers/constants.service';
import { CommonHttpService } from './../../../core/services/common-http.service';
import { NotificationsService, Notification } from './../../../core/services/notifications.service';

@Component({
  selector: 'app-front-forgot-password',
  templateUrl: './front-forgot-password.component.html',
  styleUrls: ['./front-forgot-password.component.css']
})
export class FrontForgotPasswordComponent implements OnInit {

	public breadCrumbArr = [{'name':'Account','url':''},{'name':'Forgot Password','url':''}];
	private serverMessage: any = [];
  	private forgotPasswordModel: any = {};

  	constructor(
		private _constantsService: ConstantsService,
		private _commonHttpService:CommonHttpService,
		private _notificationsService:NotificationsService,
	) { 
	}

  	ngOnInit() {
  		// console.log("forgot password");
	}

  	forgotpassword(){

	    var url = this._constantsService.baseUrl + this._constantsService.frontForgotPasswordApiUrl;
	  	this._commonHttpService.save(url,this.forgotPasswordModel).then((res: any)=>{

	      if (res.success) {
	        this._notificationsService.add(new Notification('success', res.message));
	      } else {
	        if(typeof res.message === 'object'){
	          this.serverMessage = res.message;
	        }
	      }
	      
	    });
	}

}
