import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConstantsService {
	menuList: any = [];
	userType: any = [
		'Carer',
		'CompanyAdmin',
		'Admin',
		'Client'
	];
	domainUrl: string;
	baseUrl: string;
	
	pageLength: any = [];
	dateFormat: string;
	
	//Web Url For Angular 
	nonLoggedInUserRedirect = "/admin/auth/login";
	loggedInUserRedirect = "/admin";
	

	adminUserListUrl = "/admin/user-manage";
	 

	//API URLs 

	// admin-login-module
	adminLoginApiUrl = "users/login"; 
	sampleDataRequestApiUrl = "sampleDataRequest"; 

	constructor() {

		this.domainUrl = environment.apiUrl;
		// console.log("this.domainUrl::",this.domainUrl);
		this.baseUrl = this.domainUrl+'adminApi/';
		this.pageLength = [10, 20, 50, 100, 500, 1000];
		this.dateFormat = 'MM/DD/YYYY';

		// Menu list
		this.menuList = [
			{name: 'Main Navigation', link: '/admin', applylink: false, header: true},
			{name: 'Dasboard', link: '/admin', applylink: true, icon: 'fa-dashboard'},
			{
				name: 'Users',
				link: this.adminUserListUrl,
				applylink: true,
				icon: 'fa-users',
				submenu: [
				{name: 'Users', link: this.adminUserListUrl},
				// {name: 'Add User', link: '/admin/user-manage/add'}
				]
			}
		]; 
	}
}
