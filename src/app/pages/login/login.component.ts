import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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

  constructor(private router: Router, private loadingService: FakeLoadingService) { }

  ngOnInit(){
  }

  ngOnDestroy(){
    this.loadingSub?.unsubscribe();
  }

  login(){
    this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value);
    this.loadingSub = this.loadingObservation
    .subscribe(
      { next: (data: boolean) => {
        this.router.navigateByUrl('/main');
      }, error: (error) => {
        console.error(error);
      }, complete: () => {
        console.log('Finally');
      }
      }
    );
  }
}
