import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservablesService } from '../../front-providers/observables.service';
import { ConstantsService } from '../../front-providers/constants.service';
import { CommonHttpService } from './../../../core/services/common-http.service';
import { NotificationsService, Notification } from './../../../core/services/notifications.service';

@Component({
  selector: 'app-front-registration',
  templateUrl: './front-registration.component.html',
  styleUrls: ['./../front-login/front-login.component.sass']
})

export class FrontRegistrationComponent implements OnInit {
  
  // public breadCrumbArr = ['Account', 'Register'];
  public breadCrumbArr = [{'name':'Account','url':''},{'name':'Register','url':''}];

  private serverMessage: any = [];
  private signupModel: any = {};

  constructor(private obs: ObservablesService,
            private _constantsService:ConstantsService,
            private _commonHttpService:CommonHttpService,
            private _notificationsService:NotificationsService,
            private router: Router,
    ) { }

  ngOnInit() {
    // on load code
  }

  signup(){

    var url = this._constantsService.baseUrl + this._constantsService.frontSignupApiUrl;
  	this._commonHttpService.save(url,this.signupModel).then((res: any)=>{

      if (res.success) {
        this.router.navigate([this._constantsService.homepageUrl]); // frontLoginApiUrl
        this._notificationsService.add(new Notification('success', res.message));
      } else {
        if(typeof res.message === 'object'){
          this.serverMessage = res.message;
        }
      }
      
    });
  }

}
