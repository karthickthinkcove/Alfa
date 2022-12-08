import { Component, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { environment } from 'src/environments/environment';

import { CommonService } from '../shared/service/common.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  otpSent: boolean = false
  formInput = [{id:1,name:''}, {id:2,name:''}, {id:3,name:''}, {id:4,name:''}, {id:5,name:''}, {id:6,name:''}];
  phoneNumber:any;
  recaptchaVerifier:any;
  @ViewChildren('formRow') rows: any;
  otp = null;
  windowRef: any;

  constructor(private router: Router, private win: CommonService, private route: ActivatedRoute) {
    let currentUserId = localStorage.getItem('token');
    if (currentUserId) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    firebase.initializeApp(environment.firebase);
  }

  ngAfterViewInit(){
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size':'invisible',
      'callback': (response:any) => {},
      'expired-callback': () => {}
    });
    this.windowRef.recaptchaVerifier.render();
  }

  getOtp(){
    let phoneNumber='+91'+this.phoneNumber;
    const appVerifier = this.windowRef.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber,appVerifier)
    .then(res => {
      this.otpSent=true;
      this.windowRef.confirmationResult = res;
    }).catch(error => console.log('error', error));
  }

  otpverify(){
    let otp=this.formInput.map(x=>x.name).join("");
    this.windowRef.confirmationResult.confirm(otp).then((res:any)=>{
      localStorage.setItem('token',JSON.stringify(res.user.multiFactor.user.refreshToken));
      this.router.navigateByUrl('/sal/dashboard');
    }).catch((error:any) => {
      this.win.snackbarError(this.convertMessage(error['code']));
      //console.log(error, 'Incorrect code entered?')
    });
  }

  convertMessage(code: string): string {
    switch (code) {
        case 'auth/invalid-verification-code': {
            return 'Incorrect code entered.';
        }
        default: {
            return 'Login error try again later.';
        }
    }
  }

  keyUpEvent(event:any, index:any) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1 ;
    } else {
      pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
      this.rows._results[pos].nativeElement.focus();
    }
  }

}
