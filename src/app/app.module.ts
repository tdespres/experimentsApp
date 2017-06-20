import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Services
import { HttpModule } from '@angular/http';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BarcodePage } from '../pages/barcode/barcode';
import { FlashlightPage } from '../pages/flashlight/flashlight';
import { VibrationPage } from '../pages/vibration/vibration';
import { OdataPage } from '../pages/odata/odata';
import { NetworkPage } from '../pages/network/network';
import { NotificationPage } from '../pages/notification/notification';

//Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';
import { Shake } from '@ionic-native/shake';
import { Network } from '@ionic-native/network';
import { LocalNotifications } from '@ionic-native/local-notifications';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BarcodePage,
    FlashlightPage,
    VibrationPage,
    OdataPage,
    NetworkPage,
    NotificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BarcodePage,
    FlashlightPage,
    VibrationPage,
    OdataPage,
    NetworkPage,
    NotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Flashlight,
    Vibration,
    Shake,
    Network,
    LocalNotifications
  ]
})
export class AppModule {}
