import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';
import { Shake } from '@ionic-native/shake';
import { Subscription } from 'rxjs/Subscription';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  watch: Subscription;

  vibrationOptions: {
    time: number,
    pause: number,
    repeat: number,
  }

  constructor(private vibration: Vibration, private shake: Shake, private platform: Platform) {
    this.vibrationOptions = {
      time: 500,
      pause: 500,
      repeat: 1
    }
  }

  vibrate() {
    let pattern:Array<number> = [];
    for(let i:number = 0; i<this.vibrationOptions.repeat; i++){
      pattern.push(this.vibrationOptions.time);
      pattern.push(this.vibrationOptions.pause);
    }

    this.vibration.vibrate(pattern);
  }

  stop() {
    this.vibration.vibrate(0);
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      try{
        this.watch = this.shake.startWatch(100).subscribe(() => {
          this.vibrate();
        });
      }catch(e){
        console.error(e);
      }
    });
  }

  ionViewWillLeave() {
    if(this.watch){
      this.watch.unsubscribe();
    }
  }

}
