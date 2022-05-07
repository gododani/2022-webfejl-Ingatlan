import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');
  loadingSub?: Subscription;
  loadingObservation?: Observable<boolean>;
  loading: boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) { }

  ngOnInit(){
  }

  ngOnDestroy(){
    this.loadingSub?.unsubscribe();
  }

  login(){
    this.loading = true;
    // this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value);
    // this.loadingSub = this.loadingObservation
    // .subscribe(
    //   { next: (data: boolean) => {
    //     this.router.navigateByUrl('/main');
    //   }, error: (error) => {
    //     console.error(error);
    //     this.loading = false;
    //   }, complete: () => {
    //     console.log('Finally');
    //     this.loading = false;
    //   }
    //   }
    // );

    this.authService.login(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });
  }
}
