import { Injectable } from "@angular/core";
import { OneSignal } from "@ionic-native/onesignal";
import { Platform } from "ionic-angular";

@Injectable()
export class PushnotificationProvider {
  constructor(
    private oneSignal: OneSignal, 
    public platform: Platform) {

    console.log("Hello PushnotificationProvider Provider");
  }

  init_notifications() {
    if ( this.platform.is("cordova") ) {
      this.oneSignal.startInit(
        "f47a84e1-2684-46ed-990f-848d74ca2eef",
        "1030391705356"
      );

      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.InAppAlert
      );

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        console.log("Notificacion recibida");
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log("Notificacion abierta");
      });

      this.oneSignal.endInit();
    } else {
      console.log("OneSignal no working on desktop version");
    }
  }
}
