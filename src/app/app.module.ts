import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Guest1Page } from '../pages/guest1/guest1';
import { TokenPage } from '../pages/token/token';
import { OtpPage } from '../pages/otp/otp';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import * as firebase from 'firebase';

  //
  //   firebase.initializeApp({
  //   apiKey: "AIzaSyD3EGp3u7IHcw71v679W_ud4YMTAitY5Ig",
  //   authDomain: "nsrcel-wifi-c4af7.firebaseapp.com",
  //   databaseURL: "https://nsrcel-wifi-c4af7.firebaseio.com",
  //   projectId: "nsrcel-wifi-c4af7",
  //   storageBucket: "nsrcel-wifi-c4af7.appspot.com",
  //   messagingSenderId: "1057401370292"
  // });
  //

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Guest1Page,
    TokenPage,
    OtpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Guest1Page,
    TokenPage,
    OtpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
