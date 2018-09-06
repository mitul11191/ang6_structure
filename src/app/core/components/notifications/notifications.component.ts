/*
* User for flash notification
* @author Nitin Prajapati
* @return notification
*/

import { Component, OnInit } from '@angular/core';
import { Notification, NotificationsService } from './../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

	private _notes: Notification[];

  	constructor(private _notifications: NotificationsService) {
        this._notes = new Array<Notification>();
        _notifications.noteAdded.subscribe(note => {
            this._notes.push(note);

            setTimeout(() => { this.hide.bind(this)(note) }, 7000);
        });
    }

    /* For hide notification */
    private hide(note) {
        let index = this._notes.indexOf(note);

        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    }

}