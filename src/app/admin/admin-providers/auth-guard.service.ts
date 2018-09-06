import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanActivateChild,
	NavigationExtras,
	CanLoad, Route
}                           from '@angular/router';

import * as _ from 'underscore';
import { ConstantsService } from './constants.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

	constructor(private router: Router,
			private _constantsService:ConstantsService,
			private _localStorageService:LocalStorageService
		) {

		
	} 
	

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.canActivate(route, state);
	}

	canLoad(route: Route): boolean {
		let url = `/${route.path}`;

		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		return true;
		// if(this._localStorageService.checkAdminTokenExists()){
		// 	return true;
		// }else{
		// 	this.router.navigate([this._constantsService.nonLoggedInUserRedirect]);
		// 	return true;
		// }
		
	}

}

 