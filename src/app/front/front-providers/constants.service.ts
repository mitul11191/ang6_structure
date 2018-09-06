import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConstantsService {

	public defaultLang:string;

	menuList: any = [];

	userType: any = [
		'Carer',
		'CompanyAdmin',
		'Admin',
		'Client'
	];


	domainUrl: string;
	baseUrl: string;
	baseAuthUrl: string;
	
	//non-logged in user can access
	nonLoggedInUserRedirect = "user/login";
	loggedInUserRedirect = "/";


	//Web Url For Angular 
	staticImagePath = "dist/assets/images/";
	homepageUrl = "/";
	loginLink = "/user/login";
	registerLink = "/user/register";


	// API urls


	
	// User Management
	frontLoginApiUrl = "users/login";
	frontSignupApiUrl = "signup";
	frontForgotPasswordApiUrl = "forgotPassword";
	frontResetPasswordApiUrl = "resetPassword";

	 

	constructor(
		private _localStorageService: LocalStorageService
	) {

		// this.domainUrl = window.location.origin;
		this.domainUrl = environment.apiUrl;
		this.baseUrl = this.domainUrl;

	}
 

}
