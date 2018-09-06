import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommonHttpService {

    constructor(private _http: HttpClient) { }

      save(url,postData) {
        return new Promise((resolve, reject) => {
            this._http.post(url, postData).subscribe(
            (res: any) => {
                resolve(res);
            },
            error => {
                reject(error);
            }
            )
        });
    }

    updateRecord(url,postData) {
        return new Promise((resolve, reject) => {
            this._http.post(url,postData).subscribe(
            (res: any) => {
                resolve(res);
            },
            error => {
                reject(error);
            }
            )
        });
    }

    getDetailForUpdate(url) {
        return new Promise((resolve, reject) => {
            this._http.get(url).subscribe(
            (res: any) => {
                resolve(res);
            },
            error => {
                reject(error);
            }
            )
        });
    }

    recordDelete(url) {
        return new Promise((resolve, reject) => {
            this._http.get(url).subscribe(
            (res: any) => {
                resolve(res);
            },
            error => {
                reject(error);
            }
            )
        });
    }

    getAllRecord(url,postData:any={},method=""){
        if(method=="post"){
            return new Promise((resolve, reject) => {
                this._http.post(url,postData).subscribe(
                (res: any) => {
                    resolve(res);
                },
                error => {
                    reject(error);
                }
                )
            });   
        }else{
            return new Promise((resolve, reject) => {
                this._http.get(url).subscribe(
                (res: any) => {
                    resolve(res);
                },
                error => {
                    reject(error);
                }
                )
            });   
        }
    }
}
