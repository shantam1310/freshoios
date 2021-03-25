import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoadingController, PopoverController } from "@ionic/angular";
import { LocationPage } from "src/app/pages/location/location.page";
import { HTTP } from "@ionic-native/http/ngx";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  isLoading = false;
  user_name: any;
  first_name: any;
  Password: any;
  last_name: any;
  mail: any;
  mobile: any;
  confirm_password: any;
  constructor(
    private http: HTTP,
    private route: Router,
    private loadingController: LoadingController,
    private popoverController: PopoverController
  ) {
    // this.login();
    // this.convertText();
    // this.encryptData("BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
    //this.decryptData("$P$BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
    //{ Authorization: 'Basic ' + btoa('admin:in2ittech2020'), 'Content-Type': 'application/json' }
  }
  ngOnInit() {}
  signup() {
    this.presentLoading();
    if (this.user_name && this.Password && this.mail && this.confirm_password) {
      if (this.Password == this.confirm_password) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
          }),
        };
        const body = {
          username: this.user_name,
          password: this.Password,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.mail,
          // phone: this.mobile,
          roles: "customer",
        };
        console.log("form data ", body);
        this.http.setDataSerializer("json");
        this.http
          .post(
            "https://freshofast.com/wp-json/wp/v2/users",
            //{
            body,
            {
              Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
              "Content-Type": "application/json",
            }
            //}
          )
          .then(
            (data) => {
              console.log("success", data);
              console.log("sign up data ", data);

              this.route.navigate(["/login"]);
              this.dismiss();
            },
            (error) => {
              console.log("oops", error);
              alert("Invalid parameter");
              this.dismiss();
            }
          );

        // alert("Detail already Exist");
        //console.log("form data 3");
      }
      // console.log("form data 2");
    } else {
      //console.log("form data 4");
      this.dismiss();
      alert("Fill the Credential");
    }
    this.dismiss();
    // console.log("form data 5");
  }
  // login() {
  //   this.presentLoading();
  //   if (this.user_name && this.Password) {
  //     const httpOptions = {
  //       headers: new HttpHeaders({
  //         "Content-Type": "application/json",
  //         Authorization: "Basic " + btoa(`${this.user_name}:${this.Password}`),
  //       }),
  //     };
  //     this.http
  //       .get("https://freshofast.com/wp-json/wp/v2/users", httpOptions)
  //       .subscribe((res) => {
  //         var response: any = res;
  //         this.dismiss();
  //         this.route.navigate(["/home"]);
  //         console.log("login data ", response);
  //       });
  //   } else {
  //     alert("Fill the Credential");
  //   }
  // }
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
