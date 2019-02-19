import { Injectable, EventEmitter, Output, Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';



export class ConfigService {
    public login = false;
  // public areaData:any;
    isLoggedin: Subject<any> = new Subject <any>();
    
    // setting up the data
    setLoggedin(data) {
        this.login= data;
        this.isLoggedin.next(data);
    }
    // get status
    getLoggedin(): Observable<any>{
        return this.isLoggedin.asObservable();
    }
    
    
}