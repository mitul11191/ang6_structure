import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservablesService } from '../../front-providers/observables.service';
import { ConstantsService } from '../../front-providers/constants.service';
import { CommonHttpService } from './../../../core/services/common-http.service';
import { NotificationsService, Notification } from './../../../core/services/notifications.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';

@Component({
  selector: 'app-front-login',
  templateUrl: './front-login.component.html',
  styleUrls: ['./front-login.component.sass']
})
export class FrontLoginComponent implements OnInit {

  // public breadCrumbArr = ['Account', 'Login'];
  public breadCrumbArr = [{'name':'Account','url':''},{'name':'Login','url':''}];
  private serverMessage: any = [];
  private loginModel = {};

  constructor(private obs: ObservablesService,
            private _constantsService:ConstantsService,
            private _commonHttpService:CommonHttpService,
            private _notificationsService:NotificationsService,
            private router: Router,
            private _localStorageService: LocalStorageService,
    ) { }

  ngOnInit() {
  		// demo for the assigne value for observable
  		// this.obs.changeSharedValue('Nitin');
  }

  login(){
    var url = this._constantsService.baseUrl + this._constantsService.frontLoginApiUrl;
    this._commonHttpService.save(url,this.loginModel).then((res: any)=>{
      if (res.success) {
          this._localStorageService.saveFrontLocalStorageInfo(res.data);
          this.router.navigate([this._constantsService.homepageUrl]);
      } else {
        if(typeof res.message === 'object'){
          this.serverMessage = res.message;
        }else{
          
        }
      }
      
    });
  }

}
