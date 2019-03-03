import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { userService } from '../user.service';
const valnumber = /^[0-9][0-9]*$/;
const eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild(FormGroupDirective) myform;
  // For login user
  loginForm = new FormGroup({
    email: new FormControl('', Validators.pattern(eml)),
    password: new FormControl('', Validators.compose([Validators.minLength(3)]))
});

  constructor(private router: Router, private userService: userService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    
    const logindata = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
    };

    
    this.userService.login(logindata)
        .subscribe(
            (data) => {
                console.log(data);
            },
            (err) => {
              console.log(err);
                
            }

        );
}

  tempLogin(){
    localStorage.setItem('loggedin','true');
    this.router.navigateByUrl('/');
    
  }

}
