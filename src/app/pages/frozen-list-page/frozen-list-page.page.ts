import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import {
  LoadingController,
  PopoverController,
  AlertController,
} from "@ionic/angular";
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: "app-frozen-list-page",
  templateUrl: "./frozen-list-page.page.html",
  styleUrls: ["./frozen-list-page.page.scss"],
})
export class FrozenListPagePage implements OnInit {
  isLoading = false;
  vegetablesflag = false;
  cartlist = [];
  value: any;
  vegetablelist: any;
  constructor(
    private http: HttpClient,
    private httpplugin: HTTP,
    private route: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private popoverController: PopoverController
  ) {}
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
  ngOnInit() {}
  ionViewWillEnter() {
    this.vegetables();
    // this.variationlist();
  }
  vegetables() {
    this.vegetablesflag = true;
    if (!this.vegetablelist) {
      this.presentLoading();
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        this.vegetablelist = response.frozen;
        this.cartdata();
        //  this.dismiss();
        console.log("api  data ", this.vegetablelist);
      });
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
  openVegetablaPage(id) {
    this.route.navigate(["/detail-page"]);
    localStorage.setItem("frozen", id);
  }
  additem(value, index, weight) {
    console.log("weight", weight);
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
                this.addcardtoast();
                console.log("success", data);
                this.cartlist = [];
                this.cartdata();
                //this.dismiss();
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
      //this.dismiss();
      this.value = null;
    } else if (weight) {
      this.value = weight;
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
            "weight if condition",
            value.quantity[i].weight,
            this.value
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
                this.addcardtoast();
                console.log("success", data);
                this.cartlist = [];
                this.cartdata();
                //this.dismiss();
              },
              (error) => {
                console.log("oops", error);
                alert("Out of Stock");
                this.dismiss();
              }
            );
        } else {
          this.dismiss();
          console.log(
            " weight else condition",
            value.quantity[i].weight,
            this.value
          );
        }
      }
      //this.dismiss();
      this.value = null;
    } else {
      alert("Please Select the quantity");
      this.dismiss();
    }
  }
  quanity(value) {
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
        for (var propName in response) {
          if (response.hasOwnProperty(propName)) {
            var propValue = response[propName];
            console.log("propValue data ", propValue);
            this.cartlist.push(propValue);
            // do something with each element here
          }
        }
        this.dismiss();
        //this.totalcosting();
        console.log("login data ", this.cartlist);
      });
  }
}
