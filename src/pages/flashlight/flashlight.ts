import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {

  isSwitchedOn: boolean = false;

  constructor(private flashlight: Flashlight) {
    if(this.flashlight.available()){
      this.isSwitchedOn = this.flashlight.isSwitchedOn();
    }
  }
  
  toggleFlashlight() {
    if(this.flashlight.available()){
      this.flashlight.toggle();
      this.isSwitchedOn = this.flashlight.isSwitchedOn();
    }
  }

}
