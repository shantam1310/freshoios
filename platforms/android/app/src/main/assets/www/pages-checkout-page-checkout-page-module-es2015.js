(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-page-checkout-page-module"],{

/***/ "IiCc":
/*!*********************************************************************!*\
  !*** ./src/app/pages/checkout-page/checkout-page-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CheckoutPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPagePageRoutingModule", function() { return CheckoutPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-page.page */ "xRmm");




const routes = [
    {
        path: '',
        component: _checkout_page_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPagePage"]
    }
];
let CheckoutPagePageRoutingModule = class CheckoutPagePageRoutingModule {
};
CheckoutPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPagePageRoutingModule);



/***/ }),

/***/ "RvOP":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout-page/checkout-page.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" style=\"margin-right: 4%\">\n      <ion-icon name=\"cart-outline\" style=\"font-size: 144%\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\"> </ion-refresher> -->\n  <ion-card style=\"margin-top: 0px; height: 5%\">\n    <div\n      style=\"\n        margin-bottom: 5%;\n        font-weight: bolder;\n        font-size: 1.1em;\n        float: left;\n      \"\n      *ngIf=\"cartlist\"\n    >\n      items:-{{cartlist.length}}\n    </div>\n    <div\n      *ngIf=\"cost\"\n      style=\"\n        margin-bottom: 5%;\n        font-weight: bolder;\n        font-size: 1.1em;\n        float: right;\n      \"\n    >\n      Total:Rs.{{Grand_Total}}\n    </div>\n  </ion-card>\n  <ion-card *ngFor=\"let item of cartlist;let i=index \"\n    ><ion-item\n      ><span style=\"font-size: 0.8em; width: 10em; font-size: 1.1em\"\n        ><p>{{item.product_name}}</p>\n        <p>{{item.product_price}}</p>\n        <p>Quantity x{{item.quantity}}</p>\n        <p style=\"color: red\" (click)=\"deleteitem(item.key)\">Remove</p></span\n      ></ion-item\n    ><ion-item\n      ><ion-icon name=\"remove-circle\" (click)=\"decrement(i)\">-</ion-icon>\n      {{item.quantity}}\n      <ion-icon name=\"add-circle\" (click)=\" increment(i)\">+</ion-icon\n      ><ion-button\n        style=\"\n          margin-left: 6em;\n          border-radius: 1em;\n          background-color: #60be74;\n          height: 3em;\n          width: 11em;\n        \"\n        (click)=\"updateitem(item.key)\"\n      >\n        Update Item\n      </ion-button></ion-item\n    ><ion-item></ion-item\n  ></ion-card>\n  <!-- <ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"assets/cauliflower.png\"> </ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>Cauliflower</h2>\n        <h3>\n          Rs.20.5\n          <button\n            style=\"\n              background-color: grey;\n              border-radius: 60px;\n              margin-left: 56%;\n            \"\n          >\n            x\n          </button>\n        </h3>\n        <h3>\n          Remove<button style=\"margin-left: 35%; border-radius: 16px\">+</button>\n          <input type=\"number\" style=\"width: 8%; border-radius: 35px\" />\n          <button style=\"border-radius: 16px\">-</button\n          ><button\n            style=\"background-color: grey; border-radius: 60px; margin-left: 2%\"\n          >\n            !\n          </button>\n        </h3>\n        <h4 style=\"color: red\">Move to Wishlist</h4>\n      </ion-label>\n    </ion-item>\n  </ion-card> -->\n  <!-- <ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"assets/cauliflower.png\"> </ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>Cauliflower</h2>\n        <h3>\n          Rs.20.5\n          <button\n            style=\"\n              background-color: grey;\n              border-radius: 60px;\n              margin-left: 56%;\n            \"\n          >\n            x\n          </button>\n        </h3>\n        <h3>\n          Remove<button style=\"margin-left: 35%; border-radius: 16px\">+</button>\n          <input type=\"number\" style=\"width: 8%; border-radius: 35px\" />\n          <button style=\"border-radius: 16px\">-</button\n          ><button\n            style=\"background-color: grey; border-radius: 60px; margin-left: 2%\"\n          >\n            !\n          </button>\n        </h3>\n        <h4 style=\"color: red\">Move to Wishlist</h4>\n      </ion-label>\n    </ion-item>\n  </ion-card> -->\n  <div\n    style=\"\n      margin-top: 2%;\n      margin-left: 4%;\n      font-size: 100%;\n      font-family: unset;\n      margin-bottom: 2%;\n    \"\n  >\n    <b>BEST SELLING</b>\n  </div>\n  <ion-slides\n    #mySlider\n    style=\"margin-top: 1%; height: 50%\"\n    *ngIf=\"featuredList\"\n  >\n    <ion-slide\n      style=\"background-color: white\"\n      *ngFor=\"let data of featuredList | slice:0:3;let i=index;\"\n    >\n      <ion-col size=\"6\" style=\"padding: 11px\" *ngIf=\"featuredList[i+i]\">\n        <div class=\"box\" style=\"background-color: white; height: 96%\">\n          <ion-img src=\"{{featuredList[i+i].images.src}}\"> </ion-img>\n\n          <span\n            style=\"\n              margin-left: -1%;\n              font-size: 17px;\n              width: 100%;\n              height: 100%;\n              color: black;\n            \"\n          >\n            {{featuredList[i+i].name | slice:0:10}}......\n          </span>\n          <span style=\"font-size: 15px; margin-left: -4%; color: black\">\n            <ion-label\n              *ngIf=\"featuredList[i+i].quantity[0].is_in_stock == false\"\n              style=\"color: red\"\n            >\n              Out of stock\n            </ion-label>\n            <ion-select\n              placeholder=\"Select One\"\n              (ionChange)=\"quanity($event.target.value)\"\n              value=\"{{featuredList[i+i].quantity[0].weight}}\"\n            >\n              <ion-select-option\n                *ngFor=\"let item of featuredList[i+i].quantity \"\n                value=\"{{item.weight}}\"\n                >{{item.weight_html}}\n                <p>Rs.{{item.display_price}}</p></ion-select-option\n              >\n            </ion-select>\n          </span>\n\n          <div style=\"width: 103%\">\n            <button\n              *ngIf=\"featuredList[i+i].quantity[0].is_in_stock == false\"\n              type=\"button\"\n              class=\"btn btn-success\"\n              style=\"\n                background-color: #60be74;\n                width: 87%;\n                border-radius: 5px;\n                height: 30px;\n                font-size: 0.8em;\n                font-weight: 700;\n              \"\n            >\n              Add toCart\n            </button>\n            <button\n              *ngIf=\"featuredList[i+i].quantity[0].is_in_stock == true\"\n              type=\"button\"\n              class=\"btn btn-success\"\n              style=\"\n                background-color: #60be74;\n                width: 87%;\n                border-radius: 5px;\n                height: 30px;\n                font-size: 0.8em;\n                font-weight: 700;\n              \"\n              (click)=\"additem(featuredList[i+i],i+i,featuredList[i+i].quantity[0].weight)\"\n            >\n              Add toCart\n            </button>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col style=\"padding: 11px\" *ngIf=\"featuredList[i+i+1]\">\n        <div class=\"box\" style=\"background-color: white; height: 96%\">\n          <ion-img src=\"{{featuredList[i+i+1].images.src}}\"> </ion-img>\n          <span\n            style=\"\n              margin-left: -1%;\n              font-size: 17px;\n              width: 100%;\n              height: 100%;\n              color: black;\n            \"\n          >\n            {{featuredList[i+i+1].name | slice:0:10}}......\n          </span>\n          <span style=\"font-size: 15px; margin-left: -4%; color: black\">\n            <ion-label\n              *ngIf=\"featuredList[i+i+1].quantity[0].is_in_stock == false\"\n              style=\"color: red\"\n            >\n              Out of stock\n            </ion-label>\n            <ion-select\n              placeholder=\"Select One\"\n              (ionChange)=\"quanity($event.target.value)\"\n              value=\"{{featuredList[i+i+1].quantity[0].weight}}\"\n            >\n              <ion-select-option\n                *ngFor=\"let item of featuredList[i+i+1].quantity \"\n                value=\"{{item.weight}}\"\n                >{{item.weight_html}}\n                <p>Rs.{{item.display_price}}</p></ion-select-option\n              >\n            </ion-select>\n          </span>\n          <div style=\"width: 103%\">\n            <button\n              *ngIf=\"featuredList[i+i+1].quantity[0].is_in_stock == true\"\n              type=\"button\"\n              class=\"btn btn-success\"\n              style=\"\n                background-color: #60be74;\n                width: 87%;\n                border-radius: 5px;\n                height: 30px;\n                font-size: 0.8em;\n                font-weight: 700;\n              \"\n              (click)=\"additem(featuredList[i+i+1],i+i+1,featuredList[i+i+1].quantity[0].weight)\"\n            >\n              Add toCart\n            </button>\n            <button\n              *ngIf=\"featuredList[i+i+1].quantity[0].is_in_stock == false\"\n              type=\"button\"\n              class=\"btn btn-success\"\n              style=\"\n                background-color: #60be74;\n                width: 87%;\n                border-radius: 5px;\n                height: 30px;\n                font-size: 0.8em;\n                font-weight: 700;\n              \"\n            >\n              Add toCart\n            </button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-slide>\n  </ion-slides>\n  <ion-card style=\"height: 22%; text-align: center\" *ngIf=\"cost\">\n    <ion-label>\n      <h3 style=\"font-size: 1.1em; color: black; margin-top: 4%\">\n        Subtotal ex. Rs.{{cost.subtotal}}\n      </h3>\n      <h3 style=\"font-size: 1.1em; color: black; margin-top: 4%\">\n        Shipping Charges Rs.{{ShippingCharges}}\n      </h3>\n      <h3 style=\"font-size: 1.1em; color: black; margin-top: 4%\">\n        Grand Total Rs.{{Grand_Total}}\n      </h3>\n    </ion-label>\n  </ion-card>\n  <!-- <div>\n    <h6 style=\"color: grey; margin-left: 33%\">Discount Code</h6>\n  </div>\n  <ion-input\n    type=\"input\"\n    placeholder=\"Enter your Coupon code here\"\n    style=\"margin-left: 19%\"\n  >\n  </ion-input>\n  <div style=\"color: red; margin-left: 40%; margin-top: 6%\">APPLY</div> -->\n</ion-content>\n<ion-footer mode=\"md\">\n  <ion-toolbar\n    color=\"primary\"\n    style=\"text-align: center\"\n    [routerLink]=\"['/order-detail']\"\n  >\n    <ion-title style=\"font-size: 1.1em; font-family: revert\">\n      Checkout</ion-title\n    >\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "e7MO":
/*!*************************************************************!*\
  !*** ./src/app/pages/checkout-page/checkout-page.module.ts ***!
  \*************************************************************/
/*! exports provided: CheckoutPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPagePageModule", function() { return CheckoutPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-page-routing.module */ "IiCc");
/* harmony import */ var _checkout_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout-page.page */ "xRmm");







let CheckoutPagePageModule = class CheckoutPagePageModule {
};
CheckoutPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPagePageRoutingModule"]
        ],
        declarations: [_checkout_page_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPagePage"]]
    })
], CheckoutPagePageModule);



/***/ }),

/***/ "pN+P":
/*!*************************************************************!*\
  !*** ./src/app/pages/checkout-page/checkout-page.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoZWNrb3V0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJjaGVja291dC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjBiZTc0O1xufVxuIl19 */");

/***/ }),

/***/ "xRmm":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout-page/checkout-page.page.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPagePage", function() { return CheckoutPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout-page.page.html */ "RvOP");
/* harmony import */ var _checkout_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-page.page.scss */ "pN+P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let CheckoutPagePage = class CheckoutPagePage {
    constructor(http, httpclient, route, loadingController, alertCtrl, popoverController) {
        this.http = http;
        this.httpclient = httpclient;
        this.route = route;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.popoverController = popoverController;
        this.isLoading = false;
        this.quantity = 0;
        this.cartlist = [];
    }
    //https://freshofast.com/wp-json/cocart/v1/get-cart
    //https://example.com/wp-json/cocart/v1/item
    ngOnInit() { }
    myFunction(value) {
        this.quantity = value;
        console.log("value", value);
    }
    updateitem(key) {
        this.presentLoading();
        if (this.quantity) {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Basic " +
                        btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
                }),
            };
            var body = {
                cart_item_key: key,
                quantity: this.quantity,
            };
            this.http.setDataSerializer("json");
            this.http
                .post("https://freshofast.com/wp-json/cocart/v1/item", body, {
                Authorization: "Basic " +
                    btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
                "Content-Type": "application/json",
            })
                .then((res) => {
                var response = res;
                console.log("update item", res);
                this.quantity = null;
                this.cartdata();
                //this.dismiss();
            });
        }
        else {
            this.dismiss();
            alert("Already done");
        }
        this.dismiss();
        ///wp-json/cocart/v1/item
    }
    deleteitem(key) {
        this.presentLoading();
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " +
                    btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
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
            .delete("https://freshofast.com/wp-json/cocart/v1/item", {
            cart_item_key: key,
        }, {
            Authorization: "Basic " +
                btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
            "Content-Type": "application/json",
        })
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
                var response = res;
                this.featuredList = response.featuredproduct;
                //this.dismiss();
                //this.cartdata();
                this.dismiss();
                console.log("api  data ", response);
            });
        }
        else {
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
    addcardtoast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
        });
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
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Basic " +
                        btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
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
                        .post("https://freshofast.com/wp-json/cocart/v1/add-item", 
                    //{
                    body, {
                        Authorization: "Basic " +
                            btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
                        "Content-Type": "application/json",
                    }
                    //}
                    )
                        .then((data) => {
                        console.log("success", data);
                        this.cartdata();
                        // this.Additem = this.Additem + 1;
                        // localStorage.setItem("addedItem", this.Additem.toString());
                        this.addcardtoast();
                        // this.dismiss();
                    }, (error) => {
                        console.log("oops", error);
                        alert("Out of Stock");
                        this.dismiss();
                    });
                }
                else {
                    console.log("else condition", value.quantity[i].weight, this.value);
                }
            }
            this.value = null;
        }
        else if (weight) {
            this.value = weight;
            // this.value = weight;
            this.presentLoading();
            // document.getElementById("mySelect").value
            console.log("add item", value.quantity);
            //https://freshofast.com/wp-json/cocart/v1/add-item
            localStorage.getItem("username");
            localStorage.getItem("password");
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Basic " +
                        btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
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
                        .post("https://freshofast.com/wp-json/cocart/v1/add-item", 
                    //{
                    body, {
                        Authorization: "Basic " +
                            btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
                        "Content-Type": "application/json",
                    }
                    //}
                    )
                        .then((data) => {
                        console.log("success", data);
                        this.cartdata();
                        this.addcardtoast();
                        // this.Additem = this.Additem + 1;
                        // localStorage.setItem("addedItem", this.Additem.toString());
                        // this.dismiss();
                    }, (error) => {
                        console.log("oops", error);
                        alert("Out of Stock");
                        this.dismiss();
                    });
                }
                else {
                    console.log("else condition", value.quantity[i].weight, this.value);
                }
            }
            this.value = null;
        }
        else {
            alert("Please Select the quantity");
        }
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
};
CheckoutPagePage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] }
];
CheckoutPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-checkout-page",
        template: _raw_loader_checkout_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-checkout-page-checkout-page-module-es2015.js.map