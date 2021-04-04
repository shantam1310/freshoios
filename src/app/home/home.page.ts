import { Component, ViewChild } from "@angular/core";
import { CouponPopOverPage } from "src/app/pages/coupon-pop-over/coupon-pop-over.page";
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
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  number = 1;
  isLoading = false;
  vegetablesflag = true;
  Additem = 0;
  cartlist = [];
  cartflag = true;
  fruitlist: any;
  vegetablelist: any;
  featured: any;
  value: any;
  constructor(
    private http: HttpClient,
    private httpplugin: HTTP,
    private route: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private popoverController: PopoverController
  ) {
    this.couponcode();
  }
  async addcardtoast() {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      // header: 'Alert',
      // subHeader: 'Subtitle',
      message: "Item is added",
      buttons: ["OK"],
    });
    alert.present();
    // const toast = await this.toastController.create({
    //   message: "Item Added Sucessfull",
    //   duration: 2000,
    //   cssClass: "my_custom_class",
    // });
    // toast.present();
  }
  async presentPopover(code: any, amount: any) {
    const popover = await this.popoverController.create({
      component: CouponPopOverPage,
      //event: ev,
      translucent: true,
      backdropDismiss: false,
      showBackdrop: false,
      keyboardClose: false,
      componentProps: { key1: code, key2: amount },
    });
    return await popover.present();
  }
  add() {
    this.number = this.number + 1;
  }
  minus() {
    this.number = this.number - 1;
  }
  slidesDidLoad(slides: any) {
    slides.startAutoplay();
  }
  fruits() {
    this.vegetablesflag = false;
    if (!this.fruitlist) {
      this.presentLoading();
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        this.fruitlist = response.fruitsList;
        this.dismiss();
        console.log("api  data ", res);
      });
    } else {
    }
  }
  vegetables() {
    this.vegetablesflag = true;
    if (!this.vegetablelist) {
      this.presentLoading();
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        this.vegetablelist = response.vegetablesList;
        this.featured = response.featuredproduct;
        this.dismiss();
        this.cartdata();
        console.log("api  data ", response);
      });
    } else {
      // this.cartdata();
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
  openVegetablaPage(id: any) {
    this.route.navigate(["/detail-page"]);
    localStorage.setItem("vegetablesList", id);
  }
  openonionVegetablaPage() {
    this.route.navigate(["/detail-page"]);
    localStorage.setItem("vegetablesList", "1242");
  }
  // openstomatoVegetablaPage() {
  //   this.route.navigate(["/fruits-list-page"]);
  //  // localStorage.setItem("vegetablesList", "1264");
  // }
  // openstomatoVegetablaPage() {
  //   this.route.navigate(["/fruits-list-page"]);
  //  // localStorage.setItem("vegetablesList", "1264");
  // }
  openFruitPage(id: any) {
    this.route.navigate(["/detail-page"]);
    localStorage.setItem("fruitsList", id);
  }
  openfeaturedpage(id: any) {
    this.route.navigate(["/detail-page"]);
    localStorage.setItem("featuredproduct", id);
  }
  ionViewWillEnter() {
    //this.fruits();
    this.vegetables();
    // this.presentPopover();

    //this.variationlist();
  }
  couponcode() {
    //https://freshofast.com/wp-json/wc/v3/coupons
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
      }),
    };

    this.httpplugin
      .get(
        "https://freshofast.com/wp-json/wc/v3/coupons",
        {},
        //{

        {
          Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
          "Content-Type": "application/json",
        }
        //}
      )
      .then(
        (data) => {
          var val = data.data;
          var b = val.replace(/^\s+/g, "");
          var c = JSON.parse(b);

          console.log(" couponsuccess", data);

          var a = c;
          this.presentPopover(a[0].code, a[0].amount);
          localStorage.setItem("coupon", a[0].code);

          localStorage.setItem("couponamount", a[0].amount);
          //this.dismiss();
        },
        (error) => {
          console.log("oops", error);
          alert("Invalid parameter");
          //this.dismiss();
        }
      );
  }
  variationlist() {
    this.httpplugin
      .get(
        "https://freshofast.com/wp-json/public-woo/v3/products/4667/variations/",
        {},
        {}
      )
      .then((res) => {
        var response = res;
        this.dismiss();
        console.log("variation  data ", response);
      });
  }
  additem(value: any, index: any, weight: any) {
    if (localStorage.getItem("login")) {
      if (this.value) {
        // this.value = weight;
        this.presentLoading();
        // document.getElementById("mySelect").value
        console.log("add item", value.quantity);
        //https://freshofast.com/wp-json/cocart/v1/add-item
        localStorage.getItem("username");
        localStorage.getItem("password");
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
        for (var i = 0; i <= value.quantity.length - 1; i++) {
          if (value.quantity[i].weight == this.value) {
            const body = {
              product_id: value.id.toString(),
              quantity: value.quantity[i].min_qty,
              variation_id: value.quantity[i].variation_id,
            };
            console.log("if condition", value.quantity[i].weight, this.value);
            //var req = encodeURIComponent(JSON.stringify(body));
            console.log("body------", body);
            this.httpplugin.setDataSerializer("json");
            this.httpplugin
              .post(
                "https://freshofast.com/wp-json/cocart/v1/add-item",
                //{
                body,
                {
                  Authorization:
                    "Basic " +
                    btoa(
                      `${localStorage.getItem(
                        "username"
                      )}:${localStorage.getItem("password")}`
                    ),
                  "Content-Type": "application/json",
                }
                //}
              )
              .then(
                (data) => {
                  console.log("success", JSON.stringify(data));
                  this.cartdata();
                  // this.Additem = this.Additem + 1;
                  // localStorage.setItem("addedItem", this.Additem.toString());
                  this.addcardtoast();
                  // this.dismiss();
                },
                (error) => {
                  console.log("oops", JSON.stringify(error));
                  alert("Out of Stock");
                  this.dismiss();
                }
              );
          } else {
            console.log("else condition", value.quantity[i].weight, this.value);
          }
        }
        this.value = null;
      } else if (weight) {
        this.value = weight;
        // this.value = weight;
        this.presentLoading();
        // document.getElementById("mySelect").value
        console.log("add item", value.quantity);
        //https://freshofast.com/wp-json/cocart/v1/add-item
        localStorage.getItem("username");
        localStorage.getItem("password");
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
        for (var i = 0; i <= value.quantity.length - 1; i++) {
          if (value.quantity[i].weight == this.value) {
            const body = {
              product_id: value.id.toString(),
              quantity: value.quantity[i].min_qty,
              variation_id: value.quantity[i].variation_id,
            };
            console.log(
              "if condition",
              value.quantity[i].weight,
              this.value,
              body
            );
            this.httpplugin.setDataSerializer("json");
            this.httpplugin
              .post(
                "https://freshofast.com/wp-json/cocart/v1/add-item",
                //{
                body,
                {
                  Authorization:
                    "Basic " +
                    btoa(
                      `${localStorage.getItem(
                        "username"
                      )}:${localStorage.getItem("password")}`
                    ),
                  "Content-Type": "application/json",
                }
                //}
              )
              .then(
                (data) => {
                  console.log("success", data);
                  this.cartdata();
                  this.addcardtoast();
                  // this.Additem = this.Additem + 1;
                  // localStorage.setItem("addedItem", this.Additem.toString());
                  // this.dismiss();
                },
                (error) => {
                  console.log("oops", error);
                  alert("Out of Stock");
                  this.dismiss();
                }
              );
          } else {
            this.dismiss();
            console.log("else condition", value.quantity[i].weight, this.value);
          }
        }
        this.value = null;
      } else {
        this.dismiss();
        alert("Please Select the quantity");
      }
    } else {
      alert("You need to login");
    }
  }
  quanity(value: any) {
    this.value = value;
    console.log("valueeee  ", value);
  }
  cartdata() {
    //  this.presentLoading();
    // localStorage.getItem("username");
    //     localStorage.getItem("password");
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
    this.httpplugin
      .get(
        "https://freshofast.com/wp-json/cocart/v1/get-cart",
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
        var val = res.data;

        var b = val.replace(/^\s+/g, "");
        var c = JSON.parse(b);
        console.log("resssssss", c);
        var response: any = c;
        //this.dismiss();
        // this.cartlist = res;
        console.log("res data ", response.length, this.cartflag);
        // if (this.cartflag == true || response.length != 0) {
        this.cartflag = false;
        this.cartlist = [];
        for (var propName in response) {
          if (response.hasOwnProperty(propName)) {
            var propValue = response[propName];
            console.log("propValue data ", propValue);
            this.cartlist.push(propValue);
            // do something with each element here
          }
        }
        // if (response.length != 0) {
        //   this.addcardtoast();
        // }
        console.log(" if cart item", response, this.cartlist);
        this.dismiss();
        // } else if (this.cartflag == false && response.length == 0) {
        //   alert("Please Login ");
        //   this.dismiss();
        //   console.log("else if cart item", response, this.cartlist);
        //   // this.cartlist.push(data);
        // }
        //this.dismiss();
        //this.totalcosting();
        //console.log("cart item", response, this.cartlist);
      });
  }
  opencartpage() {
    if (localStorage.getItem("login")) {
      this.route.navigate(["/checkout-page"]);
    } else {
      alert("You need to login");
    }
  }
}
