import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
import { GlobalProvider } from '../providers/global/global';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private global: GlobalProvider, private oneSignal: OneSignal, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.oneSignal.startInit('425ade14-e11d-4f37-aec2-9f7d36be7f04', '776127062933');
      
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      
      this.oneSignal.handleNotificationReceived().subscribe(() => {
       
      });
      
      this.oneSignal.handleNotificationOpened().subscribe(() => {
      });
      
      this.oneSignal.endInit();
    });
  }
}

