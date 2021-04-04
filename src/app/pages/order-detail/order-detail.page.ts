import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
//import { paytmchecksum } from "paytmchecksum";
import { ServService } from "src/app/services/serv.service";
import { LoadingController } from "@ionic/angular";
import { AllInOneSDK } from "@ionic-native/all-in-one-sdk/ngx";
import {
  AppLauncher,
  AppLauncherOptions,
} from "@ionic-native/app-launcher/ngx";
import { Platform } from "@ionic/angular";
import { HTTP } from "@ionic-native/http/ngx";
// declare var paytm: any;
@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.page.html",
  styleUrls: ["./order-detail.page.scss"],
})
export class OrderDetailPage implements OnInit {
  coupon: any;
  coupon_id: any;
  coupon_code: any;
  coupon_anount: any;
  couponamount: any;
  paytmcouponamount: any;
  orderid: any;
  customer_id: any;
  amount: any;
  isLoading = false;
  cartlist = [];
  line_items = [];
  mail: any;
  cost: any;
  country: any;
  profiledata: any;
  user_name: any;
  last_name: any;
  address_1: any;
  city: any;
  postcode: any;
  phone: any;
  state: any;
  shipping_first_name: any;
  shipping_last_name: any;
  shipping_address_1: any;
  shipping_city: any;
  shipping_state: any;
  shipping_postcode: any;
  payment_method: any;
  signature: any;
  constructor(
    private http: HTTP,
    private HttpClient: HttpClient,
    private route: Router,
    private loadingController: LoadingController,
    // private alertCtrl: AlertController,
    // private popoverController: PopoverController,
    private serv: ServService,
    private allInOneSDK: AllInOneSDK,
    private appLauncher: AppLauncher,
    private platform: Platform // private checksum: paytmchecksum
  ) {
    // super(checksum);
    // this.login();
    // this.convertText();
    // this.encryptData("BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
    //this.decryptData("$P$BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
    //{ Authorization: 'Basic ' + btoa('admin:in2ittech2020'), 'Content-Type': 'application/json' }
  }
  ngOnInit() {}
  ionViewWillEnter() {
    this.login();
    this.line_items = [];
    this.coupon_anount = null;
  }
  updateprofile() {
    console.log("profile success");
    // this.presentLoading();
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
      this.http.setDataSerializer("json");
      this.http
        .post(
          `https://freshofast.com/wp-json/wc/v3/customers/${localStorage.getItem(
            "profileId"
          )}`,
          body,
          {
            Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
            "Content-Type": "application/json",
          }
        )
        .then(
          (data) => {
            var val = data.data;

            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("resssssss", c);
            console.log("order detail success", c);
            // this.user_detail();
            this.dismiss();
          },
          (error) => {
            console.log("oops", error);
            alert("Credential is wrong");
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
      alert(" Please Fill all credential");
    }
  }
  postorder() {
    console.log("select value", this.payment_method);
    localStorage.getItem("username");
    localStorage.getItem("password");
    this.totalcosting();

    if (
      this.mail &&
      this.user_name &&
      this.last_name &&
      this.address_1 &&
      this.city &&
      this.postcode &&
      this.phone &&
      this.shipping_first_name &&
      this.shipping_last_name &&
      this.shipping_address_1 &&
      this.shipping_city &&
      this.shipping_state &&
      this.shipping_postcode &&
      this.payment_method &&
      this.coupon_anount
    ) {
      this.presentLoading();
      console.log("apply coupon");
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
        }),
      };

      if (this.payment_method == "Paytm/Debit Card/Credit Card/Netbanking") {
        const body = {
          payment_method: "Paytm",
          payment_method_title: this.payment_method,
          set_paid: true,
          billing: {
            first_name: this.user_name,
            last_name: this.last_name,
            address_1: this.address_1,
            address_2: "",
            city: this.city,
            state: this.state,
            postcode: this.postcode,
            country: " ",
            email: this.mail,
            phone: this.phone,
          },
          // shipping: {
          //   first_name: this.user_name,
          //   last_name: this.last_name,
          //   address_1: this.address_1,
          //   address_2: "",
          //   city: this.shipping_city,
          //   state: this.shipping_state,
          //   postcode: this.shipping_postcode,
          //   country: " ",
          // },
          shipping: {
            first_name: this.shipping_first_name,
            last_name: this.shipping_last_name,
            address_1: this.shipping_address_1,
            address_2: "",
            city: this.shipping_city,
            state: this.shipping_state,
            postcode: this.shipping_postcode,
            country: " ",
          },
          line_items: this.line_items,
          shipping_lines: [
            {
              method_id: "paytm",
              method_title: this.payment_method,
              total: this.coupon_anount,
            },
          ],
          // coupon_lines: [
          //   {
          //     id: this.coupon_id,

          //     discount: this.coupon_anount,
          //   },
          // ],
        };
        console.log("order body data ", body);
        this.http.setDataSerializer("json");
        this.http
          .post(
            "https://freshofast.com//wp-json/wc/v3/orders",
            //{
            body,
            {
              Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
              "Content-Type": "application/json",
            }
            //}
          )
          .then((res) => {
            console.log("order up res ", res);
            var val = res.data;
            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("cccccc", res);
            var response: any = c;
            console.log("order up data ", c);
            // this.Paytm();
            //this.transtoken();
            this.intiatetxn(response.id);
            this.updateprofile();

            //this.dismiss();
            //  this.route.navigate(["/thank-you"]);

            this.orderid = response.id;
            this.amount = response.total;
            this.customer_id = response.customer_id;
            console.log(
              "this.orderid",
              this.orderid,
              "this.amount",
              this.amount
            );
            localStorage.setItem("order_id", typeof response.id);
            localStorage.setItem("order_email", response.billing.email);
            localStorage.setItem(
              "order_first_name",
              response.billing.first_name
            );
            localStorage.setItem("order_phone", response.billing.phone);
            //  JSON.stringify(
            localStorage.setItem("order", JSON.stringify(response));
            //this.paytmsignature();
          });
      } else {
        const body = {
          payment_method: "Cash",
          payment_method_title: this.payment_method,
          set_paid: true,
          billing: {
            first_name: this.user_name,
            last_name: this.last_name,
            address_1: this.address_1,
            address_2: "",
            city: this.city,
            state: this.state,
            postcode: this.postcode,
            country: " ",
            email: this.mail,
            phone: this.phone,
          },
          // shipping: {
          //   first_name: this.user_name,
          //   last_name: this.last_name,
          //   address_1: this.address_1,
          //   address_2: "",
          //   city: this.shipping_city,
          //   state: this.shipping_state,
          //   postcode: this.shipping_postcode,
          //   country: " ",
          // },
          shipping: {
            first_name: this.shipping_first_name,
            last_name: this.shipping_last_name,
            address_1: this.shipping_address_1,
            address_2: "",
            city: this.shipping_city,
            state: this.shipping_state,
            postcode: this.shipping_postcode,
            country: " ",
          },
          line_items: this.line_items,
          shipping_lines: [
            {
              method_id: "Cash",
              method_title: this.payment_method,
              total: this.coupon_anount,
            },
          ],
          //,
          // coupon_lines: [
          //   {
          //     id: this.coupon_id,

          //     discount: this.coupon_anount,
          //   },
          // ],
        };
        console.log("order body data ", body);
        this.http.setDataSerializer("json");
        this.http
          .post(
            "https://freshofast.com//wp-json/wc/v3/orders",
            //{
            body,
            {
              Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
              "Content-Type": "application/json",
            }
            //}
          )
          .then((res) => {
            // var response: any = res;
            console.log("order up res ", res);
            var val = res.data;
            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("cccccc", res);
            var response: any = c;
            this.updateprofile();
            // this.Paytm();
            //this.transtoken();
            //this.intiatetxn(response.id);
            // this.dismiss();
            this.route.navigate(["/thank-you"]);
            console.log("order up data ", response);
            this.orderid = response.id;
            this.amount = response.total;
            this.customer_id = response.customer_id;
            console.log(
              "this.orderid",
              this.orderid,
              "this.amount",
              this.amount
            );
            localStorage.setItem("order_id", typeof response.id);
            localStorage.setItem("order_email", response.billing.email);
            localStorage.setItem(
              "order_first_name",
              response.billing.first_name
            );
            localStorage.setItem("order_phone", response.billing.phone);
            //  JSON.stringify(
            localStorage.setItem("order", JSON.stringify(response));
            //this.paytmsignature();
          });
      }
    } else if (
      this.mail &&
      this.user_name &&
      this.last_name &&
      this.address_1 &&
      this.city &&
      this.postcode &&
      this.phone &&
      this.shipping_first_name &&
      this.shipping_last_name &&
      this.shipping_address_1 &&
      this.shipping_city &&
      this.shipping_state &&
      this.shipping_postcode &&
      this.payment_method
    ) {
      this.presentLoading();
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
        }),
      };

      if (this.payment_method == "Paytm/Debit Card/Credit Card/Netbanking") {
        const body = {
          payment_method: "Paytm",
          payment_method_title: this.payment_method,
          set_paid: true,
          billing: {
            first_name: this.user_name,
            last_name: this.last_name,
            address_1: this.address_1,
            address_2: "",
            city: this.city,
            state: this.state,
            postcode: this.postcode,
            country: " ",
            email: this.mail,
            phone: this.phone,
          },
          // shipping: {
          //   first_name: this.user_name,
          //   last_name: this.last_name,
          //   address_1: this.address_1,
          //   address_2: "",
          //   city: this.shipping_city,
          //   state: this.shipping_state,
          //   postcode: this.shipping_postcode,
          //   country: " ",
          // },
          shipping: {
            first_name: this.shipping_first_name,
            last_name: this.shipping_last_name,
            address_1: this.shipping_address_1,
            address_2: "",
            city: this.shipping_city,
            state: this.shipping_state,
            postcode: this.shipping_postcode,
            country: " ",
          },
          line_items: this.line_items,
          shipping_lines: [
            {
              method_id: "Paytm",
              method_title: this.payment_method,
              total: "0",
            },
          ],
        };
        console.log("order body data ", body);
        this.http.setDataSerializer("json");
        this.http
          .post(
            "https://freshofast.com//wp-json/wc/v3/orders",
            //{
            body,
            {
              Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
              "Content-Type": "application/json",
            }
            //}
          )
          .then((res) => {
            // var response: any = res;
            console.log("order up res ", res);
            var val = res.data;
            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("cccccc", res);
            var response: any = c;
            this.updateprofile();
            // this.Paytm();
            //this.transtoken();
            this.intiatetxn(response.id);
            //this.dismiss();
            //  this.route.navigate(["/thank-you"]);
            console.log("order up data ", response);
            this.orderid = response.id;
            this.amount = response.total;
            this.customer_id = response.customer_id;
            console.log(
              "this.orderid",
              this.orderid,
              "this.amount",
              this.amount
            );
            localStorage.setItem("order_id", typeof response.id);
            localStorage.setItem("order_email", response.billing.email);
            localStorage.setItem(
              "order_first_name",
              response.billing.first_name
            );
            localStorage.setItem("order_phone", response.billing.phone);
            //  JSON.stringify(
            localStorage.setItem("order", JSON.stringify(response));
            //this.paytmsignature();
          });
      } else {
        const body = {
          payment_method: "Cash",
          payment_method_title: this.payment_method,
          set_paid: true,
          billing: {
            first_name: this.user_name,
            last_name: this.last_name,
            address_1: this.address_1,
            address_2: "",
            city: this.city,
            state: this.state,
            postcode: this.postcode,
            country: " ",
            email: this.mail,
            phone: this.phone,
          },
          // shipping: {
          //   first_name: this.user_name,
          //   last_name: this.last_name,
          //   address_1: this.address_1,
          //   address_2: "",
          //   city: this.shipping_city,
          //   state: this.shipping_state,
          //   postcode: this.shipping_postcode,
          //   country: " ",
          // },
          shipping: {
            first_name: this.shipping_first_name,
            last_name: this.shipping_last_name,
            address_1: this.shipping_address_1,
            address_2: "",
            city: this.shipping_city,
            state: this.shipping_state,
            postcode: this.shipping_postcode,
            country: " ",
          },
          line_items: this.line_items,
          shipping_lines: [
            {
              method_id: "Cash",
              method_title: this.payment_method,
              total: "0",
            },
          ],
          // coupon_lines:[{
          //   id:,
          //   code:,
          //   discount:,
          //   discount_tax:
          // }]
        };
        console.log("order body data ", body);
        this.http.setDataSerializer("json");
        this.http
          .post(
            "https://freshofast.com//wp-json/wc/v3/orders",
            //{
            body,
            {
              Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
              "Content-Type": "application/json",
            }
            //}
          )
          .then((res) => {
            // var response: any = res;
            console.log("order up res ", res);
            var val = res.data;
            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("cccccc", res);
            var response: any = c;
            this.updateprofile();
            // this.Paytm();
            //this.transtoken();
            //this.intiatetxn(response.id);
            // this.dismiss();
            this.route.navigate(["/thank-you"]);
            console.log("order up data ", response);
            this.orderid = response.id;
            this.amount = response.total;
            this.customer_id = response.customer_id;
            console.log(
              "this.orderid",
              this.orderid,
              "this.amount",
              this.amount
            );
            localStorage.setItem("order_id", typeof response.id);
            localStorage.setItem("order_email", response.billing.email);
            localStorage.setItem(
              "order_first_name",
              response.billing.first_name
            );
            localStorage.setItem("order_phone", response.billing.phone);
            //  JSON.stringify(
            localStorage.setItem("order", JSON.stringify(response));
            //this.paytmsignature();
          });
      }
    } else {
      //this.dismiss();
      // this.dismiss();
      alert("Fill the Credential");
    }
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
  couponvalue() {
    console.log("coupun value", this.coupon_code.trim());
    for (var i = 0; i <= this.coupon.length - 1; i++) {
      if (this.coupon[i].code == this.coupon_code.trim()) {
        var a: any = this.coupon[i].amount;
        var b: any = a.toString();
        this.couponamount = a;
        this.coupon_anount = "-" + b;
      }
    }
    if (this.coupon_anount) {
    } else {
      alert("wrong coupon ");
    }

    console.log("coupun amount", this.coupon_anount);
  }
  couponcode() {
    //https://freshofast.com/wp-json/wc/v3/coupons
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
      }),
    };

    this.http
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
          console.log(" couponsuccess", data);
          var val = data.data;

          var b = val.replace(/^\s+/g, "");
          var c = JSON.parse(b);
          console.log("resssssss", c);
          this.coupon = c;

          this.dismiss();
        },
        (error) => {
          console.log("oops", error);
          alert("Invalid parameter");
          this.dismiss();
        }
      );
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
  cartdata() {
    //this.presentLoading();
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
    this.http
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
      .then(
        (res) => {
          var val = res.data;

          var b = val.replace(/^\s+/g, "");
          var c = JSON.parse(b);
          console.log("resssssss", c);
          var response: any = c;
          //this.dismiss();
          // this.cartlist = res;
          for (var propName in response) {
            if (response.hasOwnProperty(propName)) {
              var propValue = response[propName];
              // console.log("propValue data ", propValue);
              this.cartlist.push(propValue);
              // var convertquantity=
              // this.line_items.push({
              //   product_id: propValue.product_id,
              //   variation_id: propValue.variation_id,
              //   quantity: 1,
              // });
              this.line_items.push({
                product_id: propValue.product_id,
                variation_id: propValue.variation_id,
                quantity: propValue.quantity,
              });
              // do something with each element here
            }
          }
          //this.dismiss();
          // this.totalcosting();
          this.couponcode();
          console.log("cartlist data ", this.cartlist);
          console.log("line_items data ", this.line_items);
        },
        (error) => {
          console.log("oops", error);
          alert("not match");
          this.dismiss();
        }
      );
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
    console.log("url.......", url);
    this.http
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
          //shipping
          this.mail = response.email;
          this.shipping_last_name = response.last_name;
          this.shipping_first_name = response.first_name;
          this.shipping_address_1 = response.billing.address_1;
          this.shipping_city = response.billing.city;
          this.shipping_state = response.billing.state;
          this.shipping_postcode = response.billing.postcode;
          // this.country = response.billing.country;
          this.phone = response.billing.phone;
          this.cartdata();
          //this.dismiss();
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
  //https://freshofast.com/wp-json/cocart/v1/totals
  totalcosting() {
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
      .get(
        "https://freshofast.com/wp-json/cocart/v1/totals",
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

        this.cost = c;

        var total = parseInt(this.cost.total);

        //  var amount=parseInt(this.coupon_anount);
        var total1 = total - this.couponamount;
        this.paytmcouponamount = total1.toString();
        // this.Grand_Total = this.cost.total;
        // this.ShippingCharges = this.cost.shipping_total;

        // this.couponcode();
        // this.updateprofile();
        this.dismiss();
        console.log("costing", this.cost);
      });
  }
  transtoken() {
    var userinfo = [];
    var value;
    var orderId = this.orderid.toString();
    var cusID = this.customer_id.toString();
    var txnamount = [];
    var url = `https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=${orderId}`;
    console.log("value of signature", value);
    //this.presentLoading();
    // if (this.signature) {

    var sign = "{" + value + "}";
    var body = {
      body: {
        requestType: "Payment",
        mid: "{craEqC85803650824145}",
        websiteName: "WEBSTAGING",
        // orderId: orderId,
        txnAmount: { value: this.amount, currency: "INR" },
        //userInfo: { custId: cusID },
        callbackUrl: "https://merchant.com/callback",
      },
      head: { signature: sign },
    };
    userinfo.push({ custId: cusID });
    txnamount.push({ value: this.cost, currency: "INR" });

    var body2 = {
      requestType: "Payment",
      mid: "craEqC85803650824145",
      websiteName: "WEBSTAGING",
      orderId: this.orderid,
      callbackUrl: url,
      txnAmount: txnamount,
      userInfo: userinfo,
    };
    console.log("body,", body2);
    this.HttpClient.post(
      `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=craEqC85803650824145&orderId=${this.orderid}`,
      body2
    ).subscribe(
      (data) => {
        // console.log("success", data);
        console.log("transaction token", data);
        //this.user_detail();
        //  this.dismiss();
      },
      (error) => {
        console.log("oops", error);
        alert("Credential is wrong");
      }
    );
    // }
    // else {
    //   //this.dismiss();
    //   console.log("not signature");
    // }
  }
  paytmsignature() {
    const body = { order_id: this.orderid };
    //console.log("transaction token222");
    this.HttpClient.post(
      "http://freshofast.com/paytmdemo/index.php",
      body
    ).subscribe(
      (data) => {
        // console.log("success", data);
        this.signature = data;
        console.log("transaction token", this.signature);
        //this.user_detail();
        this.dismiss();
        // this.transtoken(data);
        //setInterval(this.transtoken, 4000);
      },
      (error) => {
        console.log("oops", error);
        alert("Credential is wrong");
      }
    );
    //http://freshofast.com/paytmdemo/index.php
    //console.log("generateSignature Returns: ");
    // if (this.signature) {
    //   this.http
    //     .post(
    //       `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=wTMiJH61141784141522&orderId=${this.orderid}`,
    //       {
    //         body: {
    //           requestType: "Payment",
    //           mid: "wTMiJH61141784141522",
    //           websiteName: "WEBSTAGING",
    //           orderId: this.orderid,
    //           txnAmount: { value: this.amount, currency: "INR" },
    //           userInfo: { custId: this.customer_id },
    //           head: { signature: this.signature },
    //         },
    //       }
    //     )
    //     .subscribe(
    //       (data) => {
    //         // console.log("success", data);
    //         console.log("transaction token", data);
    //         //this.user_detail();
    //         this.dismiss();
    //       },
    //       (error) => {
    //         console.log("oops", error);
    //         alert("Credential is wrong");
    //       }
    //     );
    // } else {
    //   console.log("not signature");
    // }
  }
  openpaytm() {
    console.log("Facebook is available");
    const options: AppLauncherOptions = {};
    options.packageName = "net.one97.paytm";

    // if (this.platform.is("ios")) {
    //   options.uri = "fb://";
    // } else {
    //   options.packageName = "net.one97.paytm";
    // }

    this.appLauncher
      .launch({ packageName: "net.one97.paytm" })
      .then((canLaunch: any) => console.log("Facebook is available", canLaunch))
      .catch((error: any) => console.error("Facebook is not available", error));
  }
  async paytm(txn: any, order_ID: any) {
    this.dismiss();
    if (this.coupon_anount) {
      let response = await this.allInOneSDK.startTransaction({
        mid: "wTMiJH61141784141522",
        amount: this.paytmcouponamount,
        orderId: order_ID,
        callbackUrl:
          "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=" + order_ID,
        txnToken: txn,
        isStaging: false,
        restrictAppInvoke: true,
      });
      console.log(
        "response aaaaaa",
        response
        // localStorage.getItem("Grand_Total"),
        // order_ID,
        // txn
      );
      var res: any = response;
      var json: any = JSON.parse(res.response);
      if (json.STATUS == "TXN_FAILURE") {
        alert("Transaction Failure");
        this.coupon_anount = null;
        this.coupon_code = null;
      } else if (json.STATUS == "TXN_SUCCESS") {
        alert("Transaction Success");
        this.coupon_anount = null;
        this.coupon_code = null;
        this.route.navigate(["/thank-you"]);
      } else {
        alert("Invalid transasction");
      }
    } else {
      let response = await this.allInOneSDK.startTransaction({
        mid: "wTMiJH61141784141522",
        amount: localStorage.getItem("Grand_Total"),
        orderId: order_ID,
        callbackUrl:
          "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=" + order_ID,
        txnToken: txn,
        isStaging: false,
        restrictAppInvoke: true,
      });
      console.log(
        "response aaaaaa",
        response
        // localStorage.getItem("Grand_Total"),
        // order_ID,
        // txn
      );
      var res: any = response;
      var json: any = JSON.parse(res.response);
      if (json.STATUS == "TXN_FAILURE") {
        alert("Transaction Failure");
      } else if (json.STATUS == "TXN_SUCCESS") {
        alert("Transaction Success");
        this.route.navigate(["/thank-you"]);
      } else {
        alert("Invalid transasction");
      }
    }

    //this.paymentstatus(order_ID);

    //alert(json.STATUS);
  }
  paymentstatus(order_ID: any) {
    //paymentstatus.php
    console.log(" order_ID ", typeof order_ID);
    console.log(" paytm  status ", order_ID);
    let formData = new FormData();
    formData.append("ORDER_ID", order_ID);
    // formData.append("CUST_ID", localStorage.getItem("profileId"));
    // formData.append("TXN_AMOUNT", localStorage.getItem("Grand_Total"));

    //http://freshofast.com/paytmcheck/TxnTest.php
    this.HttpClient.post(
      "http://freshofast.com/paytmcheck/Paytm_PHP_Checksum-master/paymentstatus.php",
      formData
    ).subscribe(
      (data) => {
        var res: any = data;
        console.log("paytm statsu", res.body.resultInfo.resultStatus, data);
        alert("Payment" + res.body.resultInfo.resultStatus);
      },
      (error) => {
        this.dismiss();
        alert("paytm  status error");
        console.log("paytm  status error", error);
      }
    );
  }
  intiatetxn(order_ID: any) {
    console.log(" order_ID ", typeof order_ID);
    var ord_Id = order_ID.toString();
    console.log(
      " pree paytm transaction token ",
      ord_Id,
      localStorage.getItem("profileId"),
      this.paytmcouponamount
    );
    if (this.coupon_anount) {
      let formData = new FormData();
      formData.append("ORDER_ID", ord_Id);
      formData.append("CUST_ID", localStorage.getItem("profileId"));
      formData.append("TXN_AMOUNT", this.paytmcouponamount);

      //http://freshofast.com/paytmcheck/TxnTest.php
      this.HttpClient.post(
        "http://freshofast.com/paytmcheck/Paytm_PHP_Checksum-master/paytmfinalcheck.php",
        formData
      ).subscribe(
        (data) => {
          console.log("paytm sucess", data);
          var token: any = data;
          var txn = token.body.txnToken;
          //this.dismiss();
          this.paytm(txn, ord_Id);
          console.log("paytm transaction token ", token.body.txnToken, data);
        },
        (error) => {
          this.dismiss();
          console.log("paytm error", error);
        }
      );
    } else {
      let formData = new FormData();
      formData.append("ORDER_ID", ord_Id);
      formData.append("CUST_ID", localStorage.getItem("profileId"));
      formData.append("TXN_AMOUNT", localStorage.getItem("Grand_Total"));

      //http://freshofast.com/paytmcheck/TxnTest.php
      this.HttpClient.post(
        "http://freshofast.com/paytmcheck/Paytm_PHP_Checksum-master/paytmfinalcheck.php",
        formData
      ).subscribe(
        (data) => {
          console.log("paytm sucess", data);
          var token: any = data;
          var txn = token.body.txnToken;
          //this.dismiss();
          this.paytm(txn, ord_Id);
          console.log("paytm transaction token ", token.body.txnToken, data);
        },
        (error) => {
          this.dismiss();
          console.log("paytm error", error);
        }
      );
    }
  }
}
