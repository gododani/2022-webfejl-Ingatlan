import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
      console.log(cred);
    }).catch(error => {
      console.error(error);
    });
  }

  goBack(){
    this.location.back();
  }

}
