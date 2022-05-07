import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';
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

  constructor(private location: Location, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        username: this.registerForm.get('email')?.value.split('@')[0],
        email: this.registerForm.get('email')?.value,
        name: {
          firstname: this.registerForm.get('name.firstname')?.value,
          lastname: this.registerForm.get('name.lastname')?.value,
        }
      }

      this.userService.create(user).then(_ =>{
        console.log('User added successfully!');
      }).catch(error => {
        console.error(error);
      })

    }).catch(error => {
      console.error(error);
    });
  }

  goBack(){
    this.location.back();
  }

}
