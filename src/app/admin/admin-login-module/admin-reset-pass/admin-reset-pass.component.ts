import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService, Notification } from './../../../core/services/notifications.service';


export class ResetPassFields {

  constructor(
    public password: string= "",
    public confirmpassword: string= "",
    public _token: string= ""
  ) {  }

}

@Component({
  selector: 'app-admin-reset-pass',
  templateUrl: './admin-reset-pass.component.html',
  styleUrls: ['./admin-reset-pass.component.css']
})


export class AdminResetPassComponent implements OnInit {
  
  resetPassModel = new ResetPassFields();
  constructor(private router: Router, private _notificationsService: NotificationsService) { }

  ngOnInit() {
  	
  }

  resetPassword() {
    // this._notificationsService.add(new Notification('error', res.message));
	}

}
