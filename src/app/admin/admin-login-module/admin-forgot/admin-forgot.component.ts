import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService, Notification } from './../../../core/services/notifications.service';


export class ForgotPassFields {

  constructor(
    public email: string= "",
    public _token: string= ""
  ) {  }

}

@Component({
  selector: 'app-admin-forgot',
  templateUrl: './admin-forgot.component.html',
  styleUrls: ['./admin-forgot.component.css']
})


export class AdminForgotComponent implements OnInit {
  
  forgotPassModel = new ForgotPassFields();
  constructor(private router: Router, private _notificationsService: NotificationsService) { }

  ngOnInit() {
  	
  }

  forgotPassword() {
		 
	}

}
