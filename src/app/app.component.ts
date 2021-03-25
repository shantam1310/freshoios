import { Component } from "@angular/core";

import { Platform, ToastController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import {
  IonSlides,
  LoadingController,
  PopoverController,
  AlertController,
} from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { HTTP } from "@ionic-native/http/ngx";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  isLoading = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HTTP,
    private route: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private toastctrl: ToastController
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async rateUS() {
    const toast = await this.toastctrl.create({
      message: "Coming Soon.",
      duration: 2000,
      cssClass: "my_custom_class",
    });
    toast.present();
  }
  async logouttoast() {
    const toast = await this.toastctrl.create({
      message: "Logout Sucessfull",
      duration: 2000,
      cssClass: "my_custom_class",
    });
    toast.present();
  }
  logout() {
    ///wp-json/cocart/v1/logout
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          btoa(
            `${localStorage.getItem("username")}:${localStorage.getItem(
              "password"
            )}`
          ),
      }),
    };
    this.http
      .post(
        "https://freshofast.com/wp-json/cocart/v1/logout",
        {},
        {
          Authorization:
            "Basic " +
            btoa(
              `${localStorage.getItem("username")}:${localStorage.getItem(
                "password"
              )}`
            ),
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        var response = res;
        this.dismiss();
        localStorage.clear();
        this.logouttoast();
        this.route.navigate(["/login"]);
        console.log("logout data ", response);
      });
  }
  async presentLoading() {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      // message: 'Loading...',
    });
    return await loading.present();
  }
  async dismiss() {
    if (this.isLoading) {
      await this.loadingController.dismiss();
    }
    this.isLoading = false;
  }
}
