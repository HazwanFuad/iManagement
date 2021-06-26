import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  pagelist = [
    {
      title: 'MAIN MENU',
      url: '/tabs/userdashboard',
      icon: 'albums'
    },
    {
      title: 'COURSE APPROVAL',
      url: '/tabs/courseapproval',
      icon: 'person'
    },
    {
      title: 'ATTENDANCE APPROVAL',
      url: '/tabs/attendanceapproval',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
