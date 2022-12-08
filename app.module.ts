import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/module/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const config = {
  apiKey: 'AIzaSyD9SAgXxdDnhcHk6scS6HVAav8z10-ibhk',
  authDomain: 'stackblitz-angular-firebase.firebaseapp.com',
  databaseURL: 'https://stackblitz-angular-firebase.firebaseio.com',
  projectId: 'stackblitz-angular-firebase',
  storageBucket: 'stackblitz-angular-firebase.appspot.com',
  messagingSenderId: '453902784138'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
