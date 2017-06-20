import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-network',
  templateUrl: 'network.html',
})
export class NetworkPage {

  connected:boolean;
  type:string;
  connectSubscription: Subscription;
  disconnectSubscription: Subscription;
  changeSubscription: Subscription;

  constructor(private network: Network, private platform: Platform) {
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.connectSubscription = this.network.onConnect().subscribe(() => {
        // We just got a connection but we need to wait briefly
        // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        this.connected = true;
        setTimeout(() => {
          this.type = this.network.type;
        }, 3000);
      });

      this.changeSubscription = this.network.onchange().subscribe(() => {
        this.type = this.network.type;
        this.connected = this.type !== 'none';
      });

      this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        this.connected = false;
        this.type = 'none';
      });
    });
  }

  ionViewWillLeave(){
    this.connectSubscription.unsubscribe();
    this.changeSubscription.unsubscribe();
    this.disconnectSubscription.unsubscribe();
  }

}
