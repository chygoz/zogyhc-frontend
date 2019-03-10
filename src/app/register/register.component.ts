import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userService } from '../user.service';

const eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerError = '';

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.compose([Validators.minLength(3)])),
    lastName: new FormControl('', Validators.compose([Validators.minLength(3)])),
    email: new FormControl('', Validators.pattern(eml)),
    password: new FormControl('',Validators.compose([Validators.minLength(3)])),
    password2: new FormControl('',Validators.compose([Validators.minLength(3)]))
  })

  constructor(private userService: userService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

    const registerData = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }

    this.userService.register(registerData)
        .subscribe(
            (data) => {
                if(data.status == true){
                  this.registerError = '';
                }else {
                  this.registerError = data.msg;
                }
            },
            (err) => {
              console.log(err);
                
            }

        );
  }

}
