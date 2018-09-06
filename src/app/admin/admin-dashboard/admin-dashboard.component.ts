import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService, Notification } from './../../core/services/notifications.service';
import { CommonHttpService } from './../../core/services/common-http.service';
import { LocalStorageService } from './../../core/services/local-storage.service';
import { ConstantsService } from '../admin-providers/constants.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  	private baseAuthUrl: string;
	private currentUser: any;
	dashboardModel: any = {};
	private _token:string;
	
	constructor(
		private router: Router,
		private _commonHttpService:CommonHttpService,
		private _constantsService:ConstantsService,
		private _localStorageService:LocalStorageService,
		private _notificationsService: NotificationsService
	) {
		// this.baseAuthUrl = this._constantsService.baseAuthUrl +"/dashboard-list";
	}

  	ngOnInit() {
	  	// get dashboard list
		this.getDashboard();

	}

  	getDashboard() {
  		this.dashboardModel.total_customer = 50;
  		var url = this._constantsService.baseUrl + "product";
		this._commonHttpService.getAllRecord(url).then((res: any)=>{
	  		
	      if (res.success) {
	        
	      } else {
	        
	      }
	      
	    });

  	}

}
