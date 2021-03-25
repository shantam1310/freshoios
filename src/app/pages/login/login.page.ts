import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoadingController, PopoverController } from "@ionic/angular";
import { LocationPage } from "src/app/pages/location/location.page";
//import { CouponPopOverPage } from "src/app/pages/coupon-pop-over/coupon-pop-over.page";
import { HTTP } from "@ionic-native/http/ngx";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user_name: any;
  Password: any;
  isLoading = false;
  constructor(
    private http: HTTP,
    private httpclient: HttpClient,
    private route: Router,
    private loadingController: LoadingController,
    private popoverController: PopoverController
  ) {}
  ngOnInit() {}
  ionViewWillEnter() {
    //localStorage.setItem("login", "true");
    if (localStorage.getItem("login") == "true") {
      this.route.navigate(["/home"]);
      //this.login();
      console.log("pre login");
    } else {
      this.presentPopover();
      console.log("create  login");
    }
  }
  login() {
    this.presentLoading();
    if (this.user_name && this.Password) {
      localStorage.setItem("username", this.user_name);
      localStorage.setItem("password", this.Password);
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(`${this.user_name}:${this.Password}`),
        }),
      };
      // this.http
      //   .get("http://freshofast.com/wp-json/wp/v2/users", httpOptions)
      this.http
        .get(
          "http://freshofast.com/wp-json/wp/v2/users",
          {},
          {
            Authorization:
              "Basic " + btoa(`${this.user_name}:${this.Password}`),
            "Content-Type": "application/json",
          }
        )
        .then(
          (data) => {
            console.log("success", data);
            localStorage.setItem("login", "true");
            this.user_detail();
            this.dismiss();
          },
          (error) => {
            console.log("oops", error);
            alert("Credential is wrong");
            this.dismiss();
          }
        );
    } else {
      this.dismiss();
      alert("Fill the Credential");
    }
  }
  user_detail() {
    let formData = new FormData();
    formData.append("user_login", this.user_name);
    const body = {
      user_login: this.user_name,
    };
    // http://freshofast.com/login
    this.httpclient
      .post("http://freshofast.com/login", formData)
      .subscribe((res) => {
        var response = res;
        this.dismiss();
        this.route.navigate(["/home"]);
        console.log("login data ", response);
        localStorage.setItem("profileId", response[0].ID);
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

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: LocationPage,
      //event: ev,
      translucent: true,
      backdropDismiss: false,
      showBackdrop: false,
      keyboardClose: false,
    });
    return await popover.present();
  }
}
