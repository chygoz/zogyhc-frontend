/**
 * Created by saikiran on 22/12/17.
 */
import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter, Output, Component, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// this helps us in weather nav is required or not
export class LayoutService {
    state: boolean;
    layoutStatus: Subject<boolean> = new Subject<boolean>();

    // setting up the status
    setStaus(state) {
        this.state = state;
        this.layoutStatus.next(this.state);
    }

    // get status
    getStatus(): Observable<any>{
        return this.layoutStatus.asObservable();
    }
}
