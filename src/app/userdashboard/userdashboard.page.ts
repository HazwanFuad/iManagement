import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, Platform, ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.page.html',
  styleUrls: ['./userdashboard.page.scss'],
})
export class UserdashboardPage implements OnInit {

  public exitCount = 0;
  public isToastShown = false;

  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.platform.backButton.subscribeWithPriority(-1, async () => {
      this.exitCount++;
      const toast = await this.toastCtrl.create({
        message: 'SILA TEKAN SEKALI LAGI UNTUK KELUAR.',
        color: 'medium',
        mode: 'ios',
        animated: true,
        translucent: true,
        cssClass: 'toast-exit-class',
        duration: 2000
      });
      if (!this.isToastShown) {
        this.isToastShown = !this.isToastShown;
        await toast.present();
      }
      setTimeout(() => {
        this.exitCount = 0;
        this.isToastShown = !this.isToastShown;
      }, 2000);
      if (!this.routerOutlet.canGoBack() && this.exitCount >= 2) {
        App.exitApp();
      }
    });

  }

  ngOnInit() {
  }

}
