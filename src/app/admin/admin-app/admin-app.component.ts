import { Component, OnInit } from '@angular/core';
import { ConstantsService } from './../admin-providers/constants.service';
import { CommonHttpService } from './../../core/services/common-http.service';


@Component({
	selector: 'app-admin-app',
	templateUrl: './admin-app.component.html',
	styleUrls: ['./admin-app.component.css']
})
export class AdminAppComponent implements OnInit {

	constructor(
			private _constantsService: ConstantsService,
  			private _commonHttpService: CommonHttpService
  		) { }

	ngOnInit() {
		// console.log("in admin app page",this._constantsService.baseUrl);
	}

}
