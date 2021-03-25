import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { LoadingController, PopoverController } from "@ionic/angular";
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  isLoading = false;
  cartlist = [];
  line_items = [];

  response: any;
  profiledata: any;
  mail: any;
  last_name: any;
  user_name: any;
  //this.first_name
  address_1: any;
  city: any;
  state: any;
  postcode: any;
  country: any;
  phone: any;
  constructor(
    private http: HttpClient,
    private httpplugin: HTTP,
    private route: Router,
    private loadingController: LoadingController,
    private popoverController: PopoverController
  ) {}
  ngOnInit() {}
  ionViewWillEnter() {
    this.login();
  }
  login() {
    this.presentLoading();
    // if (this.user_name && this.Password) {
    //   localStorage.setItem("username", this.user_name);
    //   localStorage.setItem("password", this.Password);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
      }),
    };
    var url = `https://freshofast.com/wp-json/wc/v3/customers/${localStorage.getItem(
      "profileId"
    )}`;
    console.log("url......", url);
    this.httpplugin
      .get(
        url,
        {},
        {
          Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
          "Content-Type": "application/json",
        }
      )
      .then(
        (data) => {
          var r = encodeURIComponent(JSON.stringify(data));
          console.log(
            "success profile",
            encodeURIComponent(JSON.stringify(data))
          );

          var val = data.data;
          var b = val.replace(/^\s+/g, "");
          var c = JSON.parse(b);
          console.log("cccccc", c);
          var response: any = c;
          this.profiledata = c;
          this.mail = response.email;
          this.last_name = response.last_name;
          this.user_name = response.first_name;
          //this.first_name
          this.address_1 = response.billing.address_1;
          this.city = response.billing.city;
          this.state = response.billing.state;
          this.postcode = response.billing.postcode;
          this.country = response.billing.country;
          this.phone = response.billing.phone;
          this.dismiss();
        },
        (error) => {
          console.log("oops", error);
          alert("Customer not found");
          this.dismiss();
        }
        //   (res) => {
        //   var response: any = res;
        //   //this.dismiss();
        //   this.user_detail();
        //   localStorage.setItem("login", "true");
        //   console.log("login data ", response);
        // }
      );
    // } else {
    //   this.dismiss();
    //   alert("Fill the Credential");
    // }
  }
  updateprofile() {
    this.presentLoading();
    if (
      this.mail &&
      this.user_name &&
      this.last_name &&
      this.address_1 &&
      this.city &&
      this.postcode &&
      this.phone
    ) {
      const body = {
        email: this.mail,
        first_name: this.user_name,
        last_name: this.last_name,
        //role: "administrator",
        // username: this.user_name,
        billing: {
          first_name: this.user_name,
          last_name: this.last_name,
          address_1: this.address_1,
          city: this.city,
          state: this.state,
          postcode: this.postcode,
          country: " ",
          email: this.mail,
          phone: this.phone,
        },
      };
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
        }),
      };
      var url = `https://freshofast.com/wp-json/wc/v3/customers/${localStorage.getItem(
        "profileId"
      )}`;
      console.log("url......", url);
      this.httpplugin.setDataSerializer("json");
      this.httpplugin
        .put(
          url,
          {
            email: this.mail,
            first_name: this.user_name,
            last_name: this.last_name,
            //role: "administrator",
            // username: this.user_name,
            billing: {
              first_name: this.user_name,
              last_name: this.last_name,
              address_1: this.address_1,
              city: this.city,
              state: this.state,
              postcode: this.postcode,
              country: " ",
              email: this.mail,
              phone: this.phone,
            },
          },
          {
            Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
            "Content-Type": "application/json",
          }
        )
        .then(
          (data) => {
            console.log("success", data);
            // this.user_detail();
            this.dismiss();
          },
          (error) => {
            var val = error.error;

            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("cccccc", c);
            alert("No updation");
            this.dismiss();
          }
          //   (res) => {
          //   var response: any = res;
          //   //this.dismiss();
          //   this.user_detail();
          //   localStorage.setItem("login", "true");
          //   console.log("login data ", response);
          // }
        );
    } else {
      this.dismiss();
      alert(" Please Fill all credential");
    }
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
