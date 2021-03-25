import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { HTTP } from "@ionic-native/http/ngx";
import {
  LoadingController,
  PopoverController,
  AlertController,
} from "@ionic/angular";

@Component({
  selector: "app-checkout-page",
  templateUrl: "./checkout-page.page.html",
  styleUrls: ["./checkout-page.page.scss"],
})
export class CheckoutPagePage implements OnInit {
  isLoading = false;
  quantity = 0;
  cost: any;
  cartlist: any[] = [];
  ShippingCharges: any;
  Grand_Total: any;
  featuredList: any;
  value: any;
  constructor(
    private http: HTTP,
    private httpclient: HttpClient,
    private route: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private popoverController: PopoverController
  ) {}
  //https://freshofast.com/wp-json/cocart/v1/get-cart
  //https://example.com/wp-json/cocart/v1/item
  ngOnInit() {}
  myFunction(value) {
    this.quantity = value;
    console.log("value", value);
  }
  updateitem(key) {
    this.presentLoading();
    if (this.quantity) {
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
      var body = {
        cart_item_key: key,
        quantity: this.quantity,
      };
      this.http.setDataSerializer("json");
      this.http
        .post("https://freshofast.com/wp-json/cocart/v1/item", body, {
          Authorization:
            "Basic " +
            btoa(
              `${localStorage.getItem("username")}:${localStorage.getItem(
                "password"
              )}`
            ),
          "Content-Type": "application/json",
        })
        .then((res) => {
          var response = res;
          console.log("update item", res);
          this.quantity = null;
          this.cartdata();
          //this.dismiss();
        });
    } else {
      this.dismiss();
      alert("Already done");
    }
    this.dismiss();
    ///wp-json/cocart/v1/item
  }
  deleteitem(key) {
    this.presentLoading();
    const options = {
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
      body: {
        cart_item_key: key,
      },
    };

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Basic " +
    //       btoa(
    //         `${localStorage.getItem("username")}:${localStorage.getItem(
    //           "password"
    //         )}`
    //       ),
    //   }),
    // };
    // var body = {
    //   cart_item_key: key,
    // };
    this.http.setDataSerializer("json");
    this.http
      .delete(
        "https://freshofast.com/wp-json/cocart/v1/item",
        {
          cart_item_key: key,
        },
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
        console.log("delete ", res);
        this.dismiss();
        //this.cartlist = [];
        // this.totalcosting();
        this.cartdata();
      });
  }
  ionViewWillEnter() {
    this.presentLoading();
    this.cartdata();
  }
  doRefresh(event) {
    console.log("doRefresh...");
    this.cartdata();
    event.target.complete();
  }
  cartdata() {
    // this.presentLoading();
    this.cartlist = [];
    // this.presentLoading();
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
      .then((res) => {
        var val = res.data;
        var b = val.replace(/^\s+/g, "");
        var c = JSON.parse(b);
        console.log("resssssss", c);
        var response: any = c;
        // var response = res;
        //this.dismiss();
        // this.cartlist = res;
        for (var propName in response) {
          if (response.hasOwnProperty(propName)) {
            var propValue = response[propName];
            console.log("propValue data ", propValue);
            this.cartlist.push(propValue);
            // do something with each element here
          }
        }
        this.totalcosting();

        console.log("login data ", response);
      });
  }
  featured() {
    // this.presentLoading();
    // this.vegetablesflag = true;
    if (!this.featuredList) {
      //this.presentLoading();
      this.httpclient
        .get("http://freshofast.com/homelist/")
        .subscribe((res) => {
          var response: any = res;

          this.featuredList = response.featuredproduct;
          //this.dismiss();
          //this.cartdata();
          this.dismiss();
          console.log("api  data ", response);
        });
    } else {
      this.dismiss();
    }
  }
  quanity(value) {
    this.value = value;
    console.log("valueeee  ", value);
  }

  //https://freshofast.com/wp-json/cocart/v1/totals
  totalcosting() {
    this.cost = 0;
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
        var item = c;
        this.cost = c;
        var total = parseInt(this.cost.total);
        this.Grand_Total = this.cost.total;
        this.ShippingCharges = this.cost.shipping_total;
        localStorage.setItem("ShippingCharges", this.ShippingCharges);
        this.featured();
        localStorage.setItem("Grand_Total", this.Grand_Total);
        //Grand_Total
        // if (total <= 200 && this.cost.total != 0) {
        //   this.ShippingCharges = 30;
        //   this.Grand_Total = this.ShippingCharges + total;
        //   localStorage.setItem("ShippingCharges", this.ShippingCharges);
        // } else if (this.cost.total == 0) {
        //   this.Grand_Total = 0;
        //   localStorage.setItem("ShippingCharges", this.ShippingCharges);
        // } else {
        //   this.ShippingCharges = 0;
        //   this.Grand_Total = this.ShippingCharges + total;
        //   localStorage.setItem("ShippingCharges", this.ShippingCharges);
        // }

        console.log("costing", this.cost);
      });
  }
  increment(index) {
    this.cartlist[index].quantity = this.cartlist[index].quantity + 1;
    this.quantity = this.cartlist[index].quantity;
  }
  decrement(index) {
    this.cartlist[index].quantity = this.cartlist[index].quantity - 1;
    this.quantity = this.cartlist[index].quantity;
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
  additem(value, index, weight) {
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
          this.http.setDataSerializer("json");
          this.http
            .post(
              "https://freshofast.com/wp-json/cocart/v1/add-item",
              //{
              body,
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
              //}
            )
            .then(
              (data) => {
                console.log("success", data);
                this.cartdata();
                // this.Additem = this.Additem + 1;
                // localStorage.setItem("addedItem", this.Additem.toString());
                this.addcardtoast();
                // this.dismiss();
              },
              (error) => {
                console.log("oops", error);
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
          console.log("if condition", value.quantity[i].weight, this.value);
          this.http.setDataSerializer("json");
          this.http
            .post(
              "https://freshofast.com/wp-json/cocart/v1/add-item",
              //{
              body,
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
          console.log("else condition", value.quantity[i].weight, this.value);
        }
      }
      this.value = null;
    } else {
      alert("Please Select the quantity");
    }
  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }
}
