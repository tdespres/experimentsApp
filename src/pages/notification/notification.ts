import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  notificationText: string = '';

  constructor(private localNotifications: LocalNotifications, private platform: Platform) {
    this.platform.ready().then(() => {
      if(!this.localNotifications.hasPermission()){
        this.localNotifications.registerPermission();
      }
    });
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      text: this.notificationText,
      data: { secret: 'blabla' }
    });
  }

  clearAll(){
    this.localNotifications.clearAll();
  }

}
