(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"],{

/***/ "+ksK":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6Im9yZGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzYwYmU3NDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "982l":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail-routing.module */ "t1E5");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "E4co");







//import { ServService } from "src/app/services/serv.service";
let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"],
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]],
    })
], OrderDetailPageModule);



/***/ }),

/***/ "E4co":
/*!*********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-detail.page.html */ "eKVw");
/* harmony import */ var _order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-detail.page.scss */ "+ksK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_serv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/serv.service */ "twlq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_all_in_one_sdk_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/all-in-one-sdk/ngx */ "ptCa");
/* harmony import */ var _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-launcher/ngx */ "03aV");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");






//import { paytmchecksum } from "paytmchecksum";






// declare var paytm: any;
let OrderDetailPage = class OrderDetailPage {
    constructor(http, HttpClient, route, loadingController, 
    // private alertCtrl: AlertController,
    // private popoverController: PopoverController,
    serv, allInOneSDK, appLauncher, platform // private checksum: paytmchecksum
    ) {
        this.http = http;
        this.HttpClient = HttpClient;
        this.route = route;
        this.loadingController = loadingController;
        this.serv = serv;
        this.allInOneSDK = allInOneSDK;
        this.appLauncher = appLauncher;
        this.platform = platform;
        this.isLoading = false;
        this.cartlist = [];
        this.line_items = [];
        // super(checksum);
        // this.login();
        // this.convertText();
        // this.encryptData("BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
        //this.decryptData("$P$BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
        //{ Authorization: 'Basic ' + btoa('admin:in2ittech2020'), 'Content-Type': 'application/json' }
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.login();
        this.line_items = [];
        this.coupon_anount = null;
    }
    updateprofile() {
        console.log("profile success");
        // this.presentLoading();
        if (this.mail &&
            this.user_name &&
            this.last_name &&
            this.address_1 &&
            this.city &&
            this.postcode &&
            this.phone) {
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
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
                }),
            };
            this.http.setDataSerializer("json");
            this.http
                .post(`https://freshofast.com/wp-json/wc/v3/customers/${localStorage.getItem("profileId")}`, body, {
                Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
                "Content-Type": "application/json",
            })
                .then((data) => {
                var val = data.data;
                var b = val.replace(/^\s+/g, "");
                var c = JSON.parse(b);
                console.log("resssssss", c);
                console.log("order detail success", c);
                // this.user_detail();
                this.dismiss();
            }, (error) => {
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
        }
        else {
            alert(" Please Fill all credential");
        }
    }
    postorder() {
        console.log("select value", this.payment_method);
        localStorage.getItem("username");
        localStorage.getItem("password");
        this.totalcosting();
        if (this.mail &&
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
            this.coupon_anount) {
            this.presentLoading();
            console.log("apply coupon");
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
                };
                console.log("order body data ", body);
                this.http.setDataSerializer("json");
                this.http
                    .post("https://freshofast.com//wp-json/wc/v3/orders", 
                //{
                body, {
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
                    var response = c;
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
                    console.log("this.orderid", this.orderid, "this.amount", this.amount);
                    localStorage.setItem("order_id", typeof response.id);
                    localStorage.setItem("order_email", response.billing.email);
                    localStorage.setItem("order_first_name", response.billing.first_name);
                    localStorage.setItem("order_phone", response.billing.phone);
                    //  JSON.stringify(
                    localStorage.setItem("order", JSON.stringify(response));
                    //this.paytmsignature();
                });
            }
            else {
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
                };
                console.log("order body data ", body);
                this.http.setDataSerializer("json");
                this.http
                    .post("https://freshofast.com//wp-json/wc/v3/orders", 
                //{
                body, {
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
                    var response = c;
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
                    console.log("this.orderid", this.orderid, "this.amount", this.amount);
                    localStorage.setItem("order_id", typeof response.id);
                    localStorage.setItem("order_email", response.billing.email);
                    localStorage.setItem("order_first_name", response.billing.first_name);
                    localStorage.setItem("order_phone", response.billing.phone);
                    //  JSON.stringify(
                    localStorage.setItem("order", JSON.stringify(response));
                    //this.paytmsignature();
                });
            }
        }
        else if (this.mail &&
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
            this.payment_method) {
            this.presentLoading();
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
                    .post("https://freshofast.com//wp-json/wc/v3/orders", 
                //{
                body, {
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
                    var response = c;
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
                    console.log("this.orderid", this.orderid, "this.amount", this.amount);
                    localStorage.setItem("order_id", typeof response.id);
                    localStorage.setItem("order_email", response.billing.email);
                    localStorage.setItem("order_first_name", response.billing.first_name);
                    localStorage.setItem("order_phone", response.billing.phone);
                    //  JSON.stringify(
                    localStorage.setItem("order", JSON.stringify(response));
                    //this.paytmsignature();
                });
            }
            else {
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
                };
                console.log("order body data ", body);
                this.http.setDataSerializer("json");
                this.http
                    .post("https://freshofast.com//wp-json/wc/v3/orders", 
                //{
                body, {
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
                    var response = c;
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
                    console.log("this.orderid", this.orderid, "this.amount", this.amount);
                    localStorage.setItem("order_id", typeof response.id);
                    localStorage.setItem("order_email", response.billing.email);
                    localStorage.setItem("order_first_name", response.billing.first_name);
                    localStorage.setItem("order_phone", response.billing.phone);
                    //  JSON.stringify(
                    localStorage.setItem("order", JSON.stringify(response));
                    //this.paytmsignature();
                });
            }
        }
        else {
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
                var a = this.coupon[i].amount;
                var b = a.toString();
                this.couponamount = a;
                this.coupon_anount = "-" + b;
            }
        }
        if (this.coupon_anount) {
        }
        else {
            alert("wrong coupon ");
        }
        console.log("coupun amount", this.coupon_anount);
    }
    couponcode() {
        //https://freshofast.com/wp-json/wc/v3/coupons
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
            }),
        };
        this.http
            .get("https://freshofast.com/wp-json/wc/v3/coupons", {}, 
        //{
        {
            Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
            "Content-Type": "application/json",
        }
        //}
        )
            .then((data) => {
            console.log(" couponsuccess", data);
            var val = data.data;
            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("resssssss", c);
            this.coupon = c;
            this.dismiss();
        }, (error) => {
            console.log("oops", error);
            alert("Invalid parameter");
            this.dismiss();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            const loading = yield this.loadingController.create({
            // message: 'Loading...',
            });
            return yield loading.present();
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isLoading) {
                yield this.loadingController.dismiss();
            }
            this.isLoading = false;
        });
    }
    cartdata() {
        //this.presentLoading();
        // localStorage.getItem("username");
        //     localStorage.getItem("password");
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " +
                    btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
            }),
        };
        this.http
            .get("https://freshofast.com/wp-json/cocart/v1/get-cart", {}, {
            Authorization: "Basic " +
                btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
            "Content-Type": "application/json",
        })
            .then((res) => {
            var val = res.data;
            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("resssssss", c);
            var response = c;
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
        }, (error) => {
            console.log("oops", error);
            alert("not match");
            this.dismiss();
        });
    }
    login() {
        this.presentLoading();
        // if (this.user_name && this.Password) {
        //   localStorage.setItem("username", this.user_name);
        //   localStorage.setItem("password", this.Password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
            }),
        };
        var url = `https://freshofast.com/wp-json/wc/v3/customers/${localStorage.getItem("profileId")}`;
        console.log("url.......", url);
        this.http
            .get(url, {}, {
            Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
            "Content-Type": "application/json",
        })
            .then((data) => {
            var val = data.data;
            var b = val.replace(/^\s+/g, "");
            var c = JSON.parse(b);
            console.log("cccccc", c);
            var response = c;
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
        }, (error) => {
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " +
                    btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
            }),
        };
        this.http
            .get("https://freshofast.com/wp-json/cocart/v1/totals", {}, {
            Authorization: "Basic " +
                btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
            "Content-Type": "application/json",
        })
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
        this.HttpClient.post(`https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=craEqC85803650824145&orderId=${this.orderid}`, body2).subscribe((data) => {
            // console.log("success", data);
            console.log("transaction token", data);
            //this.user_detail();
            //  this.dismiss();
        }, (error) => {
            console.log("oops", error);
            alert("Credential is wrong");
        });
        // }
        // else {
        //   //this.dismiss();
        //   console.log("not signature");
        // }
    }
    paytmsignature() {
        const body = { order_id: this.orderid };
        //console.log("transaction token222");
        this.HttpClient.post("http://freshofast.com/paytmdemo/index.php", body).subscribe((data) => {
            // console.log("success", data);
            this.signature = data;
            console.log("transaction token", this.signature);
            //this.user_detail();
            this.dismiss();
            // this.transtoken(data);
            //setInterval(this.transtoken, 4000);
        }, (error) => {
            console.log("oops", error);
            alert("Credential is wrong");
        });
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
        const options = {};
        options.packageName = "net.one97.paytm";
        // if (this.platform.is("ios")) {
        //   options.uri = "fb://";
        // } else {
        //   options.packageName = "net.one97.paytm";
        // }
        this.appLauncher
            .launch({ packageName: "net.one97.paytm" })
            .then((canLaunch) => console.log("Facebook is available", canLaunch))
            .catch((error) => console.error("Facebook is not available", error));
    }
    paytm(txn, order_ID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismiss();
            if (this.coupon_anount) {
                let response = yield this.allInOneSDK.startTransaction({
                    mid: "wTMiJH61141784141522",
                    amount: this.paytmcouponamount,
                    orderId: order_ID,
                    callbackUrl: "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=" + order_ID,
                    txnToken: txn,
                    isStaging: false,
                    restrictAppInvoke: true,
                });
                console.log("response aaaaaa", response
                // localStorage.getItem("Grand_Total"),
                // order_ID,
                // txn
                );
                var res = response;
                var json = JSON.parse(res.response);
                if (json.STATUS == "TXN_FAILURE") {
                    alert("Transaction Failure");
                    this.coupon_anount = null;
                    this.coupon_code = null;
                }
                else if (json.STATUS == "TXN_SUCCESS") {
                    alert("Transaction Success");
                    this.coupon_anount = null;
                    this.coupon_code = null;
                    this.route.navigate(["/thank-you"]);
                }
                else {
                    alert("Invalid transasction");
                }
            }
            else {
                let response = yield this.allInOneSDK.startTransaction({
                    mid: "wTMiJH61141784141522",
                    amount: localStorage.getItem("Grand_Total"),
                    orderId: order_ID,
                    callbackUrl: "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=" + order_ID,
                    txnToken: txn,
                    isStaging: false,
                    restrictAppInvoke: true,
                });
                console.log("response aaaaaa", response
                // localStorage.getItem("Grand_Total"),
                // order_ID,
                // txn
                );
                var res = response;
                var json = JSON.parse(res.response);
                if (json.STATUS == "TXN_FAILURE") {
                    alert("Transaction Failure");
                }
                else if (json.STATUS == "TXN_SUCCESS") {
                    alert("Transaction Success");
                    this.route.navigate(["/thank-you"]);
                }
                else {
                    alert("Invalid transasction");
                }
            }
            //this.paymentstatus(order_ID);
            //alert(json.STATUS);
        });
    }
    paymentstatus(order_ID) {
        //paymentstatus.php
        console.log(" order_ID ", typeof order_ID);
        console.log(" paytm  status ", order_ID);
        let formData = new FormData();
        formData.append("ORDER_ID", order_ID);
        // formData.append("CUST_ID", localStorage.getItem("profileId"));
        // formData.append("TXN_AMOUNT", localStorage.getItem("Grand_Total"));
        //http://freshofast.com/paytmcheck/TxnTest.php
        this.HttpClient.post("http://freshofast.com/paytmcheck/Paytm_PHP_Checksum-master/paymentstatus.php", formData).subscribe((data) => {
            var res = data;
            console.log("paytm statsu", res.body.resultInfo.resultStatus, data);
            alert("Payment" + res.body.resultInfo.resultStatus);
        }, (error) => {
            this.dismiss();
            alert("paytm  status error");
            console.log("paytm  status error", error);
        });
    }
    intiatetxn(order_ID) {
        console.log(" order_ID ", typeof order_ID);
        var ord_Id = order_ID.toString();
        console.log(" pree paytm transaction token ", ord_Id, localStorage.getItem("profileId"), this.paytmcouponamount);
        if (this.coupon_anount) {
            let formData = new FormData();
            formData.append("ORDER_ID", ord_Id);
            formData.append("CUST_ID", localStorage.getItem("profileId"));
            formData.append("TXN_AMOUNT", this.paytmcouponamount);
            //http://freshofast.com/paytmcheck/TxnTest.php
            this.HttpClient.post("http://freshofast.com/paytmcheck/Paytm_PHP_Checksum-master/paytmfinalcheck.php", formData).subscribe((data) => {
                console.log("paytm sucess", data);
                var token = data;
                var txn = token.body.txnToken;
                //this.dismiss();
                this.paytm(txn, ord_Id);
                console.log("paytm transaction token ", token.body.txnToken, data);
            }, (error) => {
                this.dismiss();
                console.log("paytm error", error);
            });
        }
        else {
            let formData = new FormData();
            formData.append("ORDER_ID", ord_Id);
            formData.append("CUST_ID", localStorage.getItem("profileId"));
            formData.append("TXN_AMOUNT", localStorage.getItem("Grand_Total"));
            //http://freshofast.com/paytmcheck/TxnTest.php
            this.HttpClient.post("http://freshofast.com/paytmcheck/Paytm_PHP_Checksum-master/paytmfinalcheck.php", formData).subscribe((data) => {
                console.log("paytm sucess", data);
                var token = data;
                var txn = token.body.txnToken;
                //this.dismiss();
                this.paytm(txn, ord_Id);
                console.log("paytm transaction token ", token.body.txnToken, data);
            }, (error) => {
                this.dismiss();
                console.log("paytm error", error);
            });
        }
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: src_app_services_serv_service__WEBPACK_IMPORTED_MODULE_6__["ServService"] },
    { type: _ionic_native_all_in_one_sdk_ngx__WEBPACK_IMPORTED_MODULE_8__["AllInOneSDK"] },
    { type: _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_9__["AppLauncher"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
OrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-order-detail",
        template: _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderDetailPage);



/***/ }),

/***/ "eKVw":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n    <!-- <ion-buttons\n      slot=\"end\"\n      style=\"margin-right: 4%\"\n      [routerLink]=\"['/checkout-page']\"\n    >\n      <ion-icon name=\"cart-outline\" style=\"font-size: 144%\"></ion-icon>\n      <span>{{cartlist.length}}</span>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"profiledata\">\n  <ion-card\n    ><ion-card-header\n      style=\"text-align: center; font-weight: 700; font-size: 2em\"\n    >\n      Billing Details </ion-card-header\n    ><ion-card-content\n      ><ion-item\n        ><ion-label>First Name:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"user_name\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Last Name:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"last_name\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Email:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"mail\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Phone number:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"phone\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Address:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"address_1\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>City:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"city\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>State:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"state\"> </ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Postcode:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"postcode\"></ion-input\n      ></ion-item>\n\n      <!--<ion-item\n         <ion-button\n          style=\"\n            background-color: #60be74;\n            width: 70%;\n            height: 70%;\n            border-radius: 7px;\n            font-size: 1em;\n            font-weight: 700;\n          \"\n          (click)=\"updateprofile()\"\n        >\n          Update Profile</ion-button\n        ></ion-item> --></ion-card-content\n    ></ion-card\n  >\n  <ion-card\n    ><ion-card-header\n      style=\"text-align: center; font-weight: 700; font-size: 2em\"\n    >\n      Shipping Address </ion-card-header\n    ><ion-card-content\n      ><ion-item\n        ><ion-label>First Name:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"shipping_first_name\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Last Name:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"shipping_last_name\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Email:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"mail\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Phone number:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"phone\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Address:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"shipping_address_1\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>City:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"shipping_city\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>State:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"shipping_state\"> </ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Postcode:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"shipping_postcode\"></ion-input\n      ></ion-item>\n\n      <!--<ion-item\n       <ion-button\n        style=\"\n          background-color: #60be74;\n          width: 70%;\n          height: 70%;\n          border-radius: 7px;\n          font-size: 1em;\n          font-weight: 700;\n        \"\n        (click)=\"updateprofile()\"\n      >\n        Update Profile</ion-button\n      ></ion-item> --></ion-card-content\n    ></ion-card\n  >\n  <ion-card\n    ><ion-card-header\n      style=\"text-align: center; font-weight: 700; font-size: 2em\"\n    >\n      Payment </ion-card-header\n    ><ion-card-content\n      ><ion-label>Payment Method</ion-label>\n      <ion-item>\n        <ion-select\n          Placeholder=\"Select Payment Method\"\n          [(ngModel)]=\"this.payment_method\"\n        >\n          <ion-select-option\n            >Paytm/Debit Card/Credit Card/Netbanking</ion-select-option\n          >\n          <ion-select-option>Cash On Delivery</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card\n    ><ion-card-header\n      style=\"text-align: center; font-weight: 700; font-size: 2em\"\n    >\n      Coupon Code </ion-card-header\n    ><ion-card-content>\n      <ion-item>\n        <ion-input\n          type=\"text\"\n          Placeholder=\"Enter Coupon Code\"\n          [(ngModel)]=\"coupon_code\"\n        >\n        </ion-input>\n        <ion-button (click)=\"couponvalue()\"> Apply Coupon </ion-button>\n        <!-- <ion-select\n          style=\"width: 100%\"\n          Placeholder=\"Select Coupon Code\"\n          *ngFor=\"let item of coupon\"\n          (ionChange)=\"couponvalue(item.code,item.id,item.amount)\"\n        >\n          <ion-select-option>{{item.code}}</ion-select-option> \n        </ion-select>-->\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<!-- <ion-footer\n  style=\"\n    text-align: center;\n    background-color: #60be74;\n    padding: 6px;\n    font-weight: 700;\n  \"\n  (click)=\"postorder()\"\n  >Place Order\n</ion-footer> -->\n<ion-footer (click)=\"postorder()\">\n  <ion-toolbar style=\"text-align: center; background-color: #60be74\">\n    <ion-title style=\"font-size: 100%; font-family: revert\">\n      Place Order</ion-title\n    >\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "t1E5":
/*!*******************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail.page */ "E4co");




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ "twlq":
/*!******************************************!*\
  !*** ./src/app/services/serv.service.ts ***!
  \******************************************/
/*! exports provided: ServService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServService", function() { return ServService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


//import { paytmchecksum } from "paytmchecksum";
//import * as paytmchecksum from "paytmchecksum";
let ServService = class ServService {
    constructor() { }
};
ServService.ctorParameters = () => [];
ServService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ServService);



/***/ })

}]);
//# sourceMappingURL=pages-order-detail-order-detail-module-es2015.js.map