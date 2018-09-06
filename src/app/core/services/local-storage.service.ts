import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService, Notification } from './notifications.service';
import * as _ from 'underscore';

declare var $:any;

@Injectable()
export class LocalStorageService {
    //NOTE :: every localstorage key has to be defined here
    // needs to create method for get and set so if in future name change will come there will need to change only in this file
	constructor(private router: Router, private _notificationsService: NotificationsService) { }
    /** admin start*/
	/**
     * @uses Get Admin login user info
     * @author Nitin Prajapati
     * @return json
     */
     getAdminLoginUserInfo() {

        // let local_admin_user = "";
        // try {
        //     if (typeof(Storage) !== "undefined" && localStorage.getItem("admin_user")!= null) {
        //         local_admin_user = localStorage.getItem("admin_user");
        //         local_admin_user = JSON.parse(local_admin_user);
        //     }
        // } catch(err) {
        //     this.adminLogout();
        // }

        // return local_admin_user;
    }

    /**
     * @uses get user token from cookies
     * @author Nitin Prajapati
     * @return string
     */
     getAdminAuthorizationHeader() {
         // console.log("adddd::",localStorage.getItem("admin_token"));
        let local_admin_token = localStorage.getItem("admin_token");
        try {
            if (local_admin_token!= "undefined" && local_admin_token!=null && local_admin_token!="null") {
                local_admin_token = localStorage.getItem("admin_token");
            }
        } catch(err) {
            this.adminLogout();
        }
        return local_admin_token;
    }

    /**
     * @uses  Admin Logout
     * @author Nitin Prajapati
     * @return 
     */
    adminLogout() {
        localStorage.removeItem("admin_token");
        localStorage.removeItem("admin_userId");
        localStorage.removeItem("admin_email");
        // this.router.navigate(['admin/login']);
    }
    /**
     * @uses check admin token exits or on if exists then return true
     * @author Nitin Prajapati
     * @return boolean
     */
    checkAdminTokenExists(){
        let tokenExists = this.getLocalStorageValByKey("admin_token");
        if(typeof tokenExists != "undefined" && tokenExists != "undefined" && tokenExists != "null" && tokenExists != null && tokenExists!=""){
            return true;    
            
        }else{
            return false;
        }
    } 

    /**
     * @uses save data in local storage after success login manange all the local storage key name from here only for admin
     * @author Nitin Prajapati
     * @return true
     */
    saveAdminLocalStorageInfo(userInfo){
        var obj = {
            "admin_userId":userInfo.userId,
            "admin_email":userInfo.email,
            "admin_token":userInfo.token
        }
        this.setLocalStorageValByKey(obj);
        return true;
    } 
    /** admin end*/


    /** front start*/
    /**
     * @uses Get Admin login user info
     * @author Nitin Prajapati
     * @return json
     */
    getFrontUserInfo(){

    }

    /**
     * @uses get user token from cookies for the front
     * @author Nitin Prajapati
     * @return string
     */
    getFrontAuthorizationHeader() { 
        let local_front_token = localStorage.getItem("front_token");
        try {
            if (local_front_token!= "undefined" && local_front_token!=null && local_front_token!="null") {
                local_front_token = localStorage.getItem("front_token");
            }
        } catch(err) {
            this.frontLogout();
        }

        return local_front_token;
    }
    /**
     * @uses logout user from front
     * @param key : key of the localstorage 
     * @author Nitin Prajapati
     * @return 
     */
    frontLogout() {
        localStorage.removeItem("front_token");
        localStorage.removeItem("front_email");
        localStorage.removeItem("front_userId");
        // this.router.navigate(['/login']);
    } 

    /**
     * @uses check front token exits or on if exists then return true
     * @author Nitin Prajapati
     * @return boolean
     */

    checkFrontTokenExists(){
        let tokenExists = this.getLocalStorageValByKey("front_token");
        if(typeof tokenExists != "undefined" && tokenExists != "undefined" && tokenExists != "null" && tokenExists != null){
            return true;    
            
        }else{
            return false;
        }
    }

    /**
     * @uses save data in local storage after success login manange all the local storage key name from here only for front
     * @author Nitin Prajapati
     * @return boolean
     */
    saveFrontLocalStorageInfo(userInfo){
        var obj = {
            "front_userId":userInfo.userId,
            "front_email":userInfo.email,
            "front_token":userInfo.token
        }
        this.setLocalStorageValByKey(obj);
        return true;
    } 
    /** front end*/

    /* common methods statrt*/
    /**
     * @uses get value of the localstorage by key
     * @param key : key of the localstorage 
     * @author Nitin Prajapati
     * @return string
     */ 
    getLocalStorageValByKey(key){
        return localStorage.getItem(key);
    }

    /**
     * @uses set value of the localstorage by key
     * @param inputData : its a object of the with key value
     * @author Nitin Prajapati
     * @return 
     */ 
    setLocalStorageValByKey(inputData){
        // var inputData = {'lng':'eng','usernmae':'nitin'};
        _.each(inputData,function(val:any,key:any){
            localStorage.setItem(key,val);    
        })
        return true;
    }
    /**
     * @uses remove all the localstorage
     * @param obj : its a object of the with key value
     * @author Nitin Prajapati
     * @return 
     */ 
    removeAllDataFromLocalStorage(obj){
        _.each(obj,function(value,key){
            this.removeFromLocalStorage(key);    
        })
        return true;
    }
    /**
     * @uses remove remove specific key of the local storage
     * @param key : key of the localstorage 
     * @author Nitin Prajapati
     * @return 
     */ 

    removeFromLocalStorage(key){
        localStorage.removeItem(key);
        return true;
    }
    /* common methods end*/

}
