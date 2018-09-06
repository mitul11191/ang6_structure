import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../front-providers/constants.service';
import { CommonHttpService } from '../../../core/services/common-http.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';


@Component({
  selector: 'app-front-header',
  templateUrl: './front-header.component.html',
  styleUrls: ['./front-header.component.sass']
})
export class FrontHeaderComponent implements OnInit {
  
  	/*public translatedText: string;
  	public supportedLanguages: any[];*/	
  	public supportedLangs: any[];
  	public defaultLang:string;
  	loginLink = this._constantService.loginLink;
  	registerLink = this._constantService.registerLink; 

  	private menuList:any;
  	
	constructor(
		private _constantService: ConstantsService,
		private _commonHttpService: CommonHttpService,
		private _localStorageService: LocalStorageService,
		

	) {
		
	}

	ngOnInit() {
		  
    }

}	
