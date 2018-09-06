/*
* For flash notification use this model
* @author Nitin Prajapati
* @param message <string>, type <string>
* @return Json Response
*/
export class Notification {
    constructor(public type: string = '',
                public message: string = '') {
    }
}

/*
* For flash notification use this service
* @author Nitin Prajapati
* @return Json Response
*/

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationsService {

    private _notifications = new Subject<Notification>();
    public noteAdded = this._notifications.asObservable();

    /* Add notification using add method */
    public add(notification: Notification) {
        this._notifications.next(notification);
    }
}

export class ResponseData {
    success: boolean;
    message: any;
    isflash: boolean;
    imageUrlPath: string;
    img: string;
    image: string;
    id: string;
    cms_id: string;
    rootCategoryList: any = [];
}