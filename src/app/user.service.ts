import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONSTANTS } from './helper/constants';


@Injectable()
export class userService {
    constructor(public http: HttpClient){

    }
    login(data): Observable<any> {
        return this.http.post(APP_CONSTANTS.LOGIN_USER, data);
    }
    
    register(data): Observable<any> {
        return this.http.post(APP_CONSTANTS.REGISTER_USER, data);
    }
}