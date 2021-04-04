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
  selector: "app-detail-page",
  templateUrl: "./detail-page.page.html",
  styleUrls: ["./detail-page.page.scss"],
})
export class DetailPagePage implements OnInit {
  isLoading = false;
  vegetablesList: any;
  list: any;
  value: any;
  cartlist: any[] = [];
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
  ionViewWillEnter() {
    this.listdata();
  }
  listdata() {
    this.presentLoading();
    if (localStorage.getItem("vegetablesList")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.vegetablesList;
        var id = localStorage.getItem("vegetablesList");
        for (var i = 0; i <= response.vegetablesList.length - 1; i++) {
          if (id == response.vegetablesList[i].id) {
            this.list = response.vegetablesList[i];
            console.log("vegetable data ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
        //  console.log("api  data ", res);
      });
    } else if (localStorage.getItem("diaryList")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.diaryList;
        var id = localStorage.getItem("diaryList");
        for (var i = 0; i <= response.diaryList.length - 1; i++) {
          if (id == response.diaryList[i].id) {
            this.list = response.diaryList[i];
            console.log("diaryList ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("fruitsexotics")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.fruitsexotics;
        var id = localStorage.getItem("fruitsexotics");
        for (var i = 0; i <= response.fruitsexotics.length - 1; i++) {
          if (id == response.fruitsexotics[i].id) {
            this.list = response.fruitsexotics[i];
            console.log("fruitsexotics ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("vegetablesexotics")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.vegetablesexotics;
        var id = localStorage.getItem("vegetablesexotics");
        for (var i = 0; i <= response.vegetablesexotics.length - 1; i++) {
          if (id == response.vegetablesexotics[i].id) {
            this.list = response.vegetablesexotics[i];
            console.log("vegetablesexotics ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("frozen")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.frozen;
        var id = localStorage.getItem("frozen");
        for (var i = 0; i <= response.frozen.length - 1; i++) {
          if (id == response.frozen[i].id) {
            this.list = response.frozen[i];
            console.log("frozen ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("fruitsList")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.fruitsList;
        var id = localStorage.getItem("fruitsList");
        for (var i = 0; i <= response.fruitsList.length - 1; i++) {
          if (id == response.fruitsList[i].id) {
            this.list = response.fruitsList[i];
            console.log("fruitsList ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("herbsList")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.herbsList;
        var id = localStorage.getItem("herbsList");
        for (var i = 0; i <= response.herbsList.length - 1; i++) {
          if (id == response.herbsList[i].id) {
            this.list = response.herbsList[i];
            console.log("herbsList ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("seasonalList")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.seasonalList;
        var id = localStorage.getItem("seasonalList");
        for (var i = 0; i <= response.seasonalList.length - 1; i++) {
          if (id == response.seasonalList[i].id) {
            this.list = response.seasonalList[i];
            console.log("seasonalList ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("viewall")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.viewall;
        var id = localStorage.getItem("viewall");
        for (var i = 0; i <= response.viewall.length - 1; i++) {
          if (id == response.viewall[i].id) {
            this.list = response.viewall[i];
            console.log("viewall ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    } else if (localStorage.getItem("featuredproduct")) {
      this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
        var response: any = res;
        response.featuredproduct;
        var id = localStorage.getItem("featuredproduct");
        for (var i = 0; i <= response.featuredproduct.length - 1; i++) {
          if (id == response.featuredproduct[i].id) {
            this.list = response.featuredproduct[i];
            console.log("featuredproduct ", this.list);
          }
        }
        this.dismiss();
        this.cartdata();
      });
    }
    // localStorage.removeItem("featuredproduct");
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
  ionViewDidLeave() {
    localStorage.removeItem("diaryList");
    localStorage.removeItem("vegetablesList");
    localStorage.removeItem("viewall");
    localStorage.removeItem("seasonalList");
    localStorage.removeItem("herbsList");
    localStorage.removeItem("fruitsList");
    localStorage.removeItem("frozen");
    localStorage.removeItem("vegetablesexotics");
    localStorage.removeItem("fruitsexotics");
    localStorage.removeItem("featuredproduct");
  }
  ngOnInit() {}
  additem(value: any, weight: any) {
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
                  // this.Additem = this.Additem + 1;
                  // localStorage.setItem("addedItem", this.Additem.toString());
                  this.addcardtoast();
                  this.dismiss();
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
      } else if (weight) {
        console.log("else if");
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
                  this.addcardtoast();
                  this.dismiss();
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
        console.log("else");
        // alert("Please Select the quantity");
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
    this.cartlist = [];
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
        console.log("login data ", response);
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
