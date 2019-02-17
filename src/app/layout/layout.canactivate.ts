import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class CanActivateLayout implements CanActivate{
    constructor(private route: Router){}
    canActivate(): boolean {
        
        if(localStorage.getItem('loggedin') === 'true'){
            return true;
        }else {
            this.route.navigateByUrl('/login');
            return false;
        }
        
    }


}