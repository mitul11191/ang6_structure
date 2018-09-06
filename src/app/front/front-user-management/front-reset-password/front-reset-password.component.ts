import { Component, OnInit } from '@angular/core';

import { ConstantsService } from './../../front-providers/constants.service';
import { CommonHttpService } from './../../../core/services/common-http.service';
import { NotificationsService, Notification } from './../../../core/services/notifications.service';

import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-front-reset-password',
  templateUrl: './front-reset-password.component.html',
  styleUrls: ['./front-reset-password.component.css']
})
export class FrontResetPasswordComponent implements OnInit {

  	public breadCrumbArr = [{'name':'Account','url':''},{'name':'Reset Password','url':''}];
	private serverMessage: any = [];
  	private resetPasswordModel: any = {};
  	private resetlink:any = []; 
  	

  	constructor(
		private _constantsService: ConstantsService,
		private _commonHttpService:CommonHttpService,
		private _notificationsService:NotificationsService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { 

  		this.activatedRoute.params.subscribe(params => {
	        this.resetlink = params['resetlink'];
	        console.log(this.resetlink); // Print the parameter to the console. 
	    });
	}


  	ngOnInit() {
  	}

	resetPassword(){

		this.resetPasswordModel.id = this.resetlink;
	    var url = this._constantsService.baseUrl + this._constantsService.frontResetPasswordApiUrl;
	  	this._commonHttpService.save(url,this.resetPasswordModel).then((res: any)=>{

	      if (res.success) {
	        this._notificationsService.add(new Notification('success', res.message));
	        this.router.navigate([this._constantsService.homepageUrl]);
	      } else {
	        if(typeof res.message === 'object'){
	          this.serverMessage = res.message;
	        }
	      }
	      
	    });
	}


}
