import { Component, OnInit } from '@angular/core';
import { ConstantsService } from './../../admin-providers/constants.service';

@Component({
	selector: 'app-admin-side-bar',
	templateUrl: './admin-side-bar.component.html',
	styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {

	menuList: any = [];
	loginUserInfo: Object = {};

    constructor(private _constantsService: ConstantsService) {
    	this.menuList = this._constantsService.menuList;
    }

    ngOnInit() {
    }

}