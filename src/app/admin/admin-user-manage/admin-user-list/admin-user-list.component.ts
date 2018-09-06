import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from './../../../core/services/common-http.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { ConstantsService } from '../../admin-providers/constants.service';
@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  devices = [];	
  private currentPage = 0; // default current page
  private limitRecord = 10; // limit records per page
  private defaultSort = ["Name","DESC"];  //default sort
  private searchText:string="";
  totalItems;	 // total records list
  constructor(private _commonHttpService:CommonHttpService,
		private _constantsService:ConstantsService,
		private _localStorageService:LocalStorageService) {
  			

		}

	ngOnInit() {
	  	this.getRecords();
	}
	/**
	@uses : it will set the page number and call api for get that page data
	@author : Nitin Prajapati(nitin.prajapati@jini.guru)
	@param : pageNumber : number of page which we want to show
	*/
    getPage(pageNumber){
    	this.currentPage = pageNumber;
		this.getRecords();
	}
	/**
	@uses : this function will call API for get records by all the conditions
			order,limit,search and sorting 
	@author : Nitin Prajapati(nitin.prajapati@jini.guru)
	@param : pageNumber : number of page which we want to show
	*/
	getRecords(){
		var url = this._constantsService.baseUrl + this._constantsService.sampleDataRequestApiUrl;
		var params = {"limit":this.limitRecord,"pageNo":this.currentPage,"order":this.defaultSort,"searchText":this.searchText};
		this._commonHttpService.getAllRecord(url,params,'post').then((res: any)=>{
	        if (res.success) {
		          this.totalItems = res.totalLength;
		          // set current page logic when record number changes
		          var findPageNumber = Math.ceil(res.totalLength/this.limitRecord);
		          if(findPageNumber == 1){
		          	this.currentPage = findPageNumber;	
		          }
		          this.devices = res.data;
		        // this._notificationsService.add(new Notification('success', res.message));
		    } 
	      
	    });
	}

  	//sorting
	reverse: boolean = false;
	/**
	@uses : this function will call API for get records by sorting
	@author : Nitin Prajapati(nitin.prajapati@jini.guru)
	@param : pageNumber : number of page which we want to show
	*/
	sort(key){
		this.reverse = !this.reverse;
		var typeOrder = "ASC";
		if(this.reverse){
			typeOrder = "DESC";
		}
		this.defaultSort = [key,typeOrder];
		this.getRecords();
	}
	/**
	@uses : this function will call API for get records by searchText
	@author : Nitin Prajapati(nitin.prajapati@jini.guru)
	@param : pageNumber : number of page which we want to show
	*/
	filterData(){
		this.getRecords();
	}
	
}
