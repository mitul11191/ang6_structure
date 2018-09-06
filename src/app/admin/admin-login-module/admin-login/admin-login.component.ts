import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService, Notification } from './../../../core/services/notifications.service';
import { CommonHttpService } from './../../../core/services/common-http.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { ConstantsService } from '../../admin-providers/constants.service';

export class LoginFields {

  constructor(
    public email: string= "",
    public password: string= "",
    public _token: string= ""
  ) {  }

}

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
	private serverMessage: any = [];
  	private loginModel = {};
	// loginModel = new LoginFields();

	constructor(private router: Router,
		private _notificationsService: NotificationsService,
		private _commonHttpService:CommonHttpService,
		private _constantsService:ConstantsService,
		private _localStorageService:LocalStorageService,
	) { }

	ngOnInit() {
		
	}

	login() {
		var url = this._constantsService.baseUrl + this._constantsService.adminLoginApiUrl;
		console.log("url::",url)
		this._commonHttpService.save(url,this.loginModel).then((res: any)=>{
	      if (res.success) { 
	          this._localStorageService.saveAdminLocalStorageInfo(res.data);
	          this.router.navigate([this._constantsService.loggedInUserRedirect]);
	        // this._notificationsService.add(new Notification('success', res.message));
	      } else {
	        if(typeof res.message === 'object'){
	          this.serverMessage = res.message;
	        }else{
	          
	        }
	      }
	      
	    });
	}

}
