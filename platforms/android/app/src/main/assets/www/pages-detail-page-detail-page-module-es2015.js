(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-page-detail-page-module"],{

/***/ "+UQJ":
/*!*******************************************************!*\
  !*** ./src/app/pages/detail-page/detail-page.page.ts ***!
  \*******************************************************/
/*! exports provided: DetailPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPagePage", function() { return DetailPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-page.page.html */ "f2UB");
/* harmony import */ var _detail_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-page.page.scss */ "i2O1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let DetailPagePage = class DetailPagePage {
    constructor(http, route, loadingController, alertCtrl, popoverController) {
        this.http = http;
        this.route = route;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.popoverController = popoverController;
        this.isLoading = false;
        this.cartlist = [];
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
    ionViewWillEnter() {
        this.listdata();
    }
    listdata() {
        this.presentLoading();
        if (localStorage.getItem("vegetablesList")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("diaryList")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("fruitsexotics")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("vegetablesexotics")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("frozen")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("fruitsList")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("herbsList")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("seasonalList")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("viewall")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
        }
        else if (localStorage.getItem("featuredproduct")) {
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
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
    ngOnInit() { }
    additem(value, weight) {
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
                    this.http
                        .post("https://freshofast.com/wp-json/cocart/v1/add-item", 
                    //{
                    body, httpOptions
                    //}
                    )
                        .subscribe((data) => {
                        console.log("success", data);
                        this.cartdata();
                        // this.Additem = this.Additem + 1;
                        // localStorage.setItem("addedItem", this.Additem.toString());
                        this.addcardtoast();
                        this.dismiss();
                    }, (error) => {
                        console.log("oops", error);
                        alert("Out of Stock");
                        this.dismiss();
                    });
                }
                else {
                    this.dismiss();
                    console.log("else condition", value.quantity[i].weight, this.value);
                }
            }
            this.value = null;
        }
        else if (weight) {
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
                    this.http
                        .post("https://freshofast.com/wp-json/cocart/v1/add-item", 
                    //{
                    body, httpOptions
                    //}
                    )
                        .subscribe((data) => {
                        console.log("success", data);
                        this.cartdata();
                        // this.Additem = this.Additem + 1;
                        // localStorage.setItem("addedItem", this.Additem.toString());
                        this.addcardtoast();
                        this.dismiss();
                    }, (error) => {
                        console.log("oops", error);
                        alert("Out of Stock");
                        this.dismiss();
                    });
                }
                else {
                    this.dismiss();
                    console.log("else condition", value.quantity[i].weight, this.value);
                }
            }
            this.value = null;
        }
        else {
            this.dismiss();
            console.log("else");
            // alert("Please Select the quantity");
        }
    }
    quanity(value) {
        this.value = value;
        console.log("valueeee  ", value);
    }
    cartdata() {
        this.cartlist = [];
        //  this.presentLoading();
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
            .get("https://freshofast.com/wp-json/cocart/v1/get-cart", httpOptions)
            .subscribe((res) => {
            var response = res;
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
};
DetailPagePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
DetailPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-detail-page",
        template: _raw_loader_detail_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailPagePage);



/***/ }),

/***/ "I6NA":
/*!*****************************************************************!*\
  !*** ./src/app/pages/detail-page/detail-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetailPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPagePageRoutingModule", function() { return DetailPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-page.page */ "+UQJ");




const routes = [
    {
        path: '',
        component: _detail_page_page__WEBPACK_IMPORTED_MODULE_3__["DetailPagePage"]
    }
];
let DetailPagePageRoutingModule = class DetailPagePageRoutingModule {
};
DetailPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPagePageRoutingModule);



/***/ }),

/***/ "WNQv":
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-page/detail-page.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPagePageModule", function() { return DetailPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-page-routing.module */ "I6NA");
/* harmony import */ var _detail_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-page.page */ "+UQJ");







let DetailPagePageModule = class DetailPagePageModule {
};
DetailPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPagePageRoutingModule"]
        ],
        declarations: [_detail_page_page__WEBPACK_IMPORTED_MODULE_6__["DetailPagePage"]]
    })
], DetailPagePageModule);



/***/ }),

/***/ "f2UB":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-page/detail-page.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n    <ion-buttons\n      slot=\"end\"\n      style=\"margin-right: 4%\"\n      [routerLink]=\"['/checkout-page']\"\n    >\n      <ion-icon name=\"cart-outline\" style=\"font-size: 144%\"></ion-icon>\n      <span\n        style=\"\n          color: white;\n          background-color: red;\n          border-radius: 23px;\n          padding: 1px;\n          text-align: center;\n        \"\n        >{{cartlist.length}}</span\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\" *ngIf=\"list\">\n  <ion-slides #mySlider pager=\"false\" style=\"height: 38%\" *ngIf=\"list\">\n    <ion-slide>\n      <ion-img src=\"{{list.images.src}}\" style=\"margin-top: 5%\"> </ion-img>\n    </ion-slide>\n    <!-- <ion-slide>\n      <ion-img src=\"assets/potato1.jpg\"> </ion-img>\n    </ion-slide>\n    <ion-slide>\n      <h2>Slide 3</h2>\n    </ion-slide> -->\n  </ion-slides>\n  <div style=\"margin-left: 7%; font-size: 113%; font-weight: bold\" *ngIf=\"list\">\n    {{list.name}}\n  </div>\n  <div style=\"margin-left: 7%; margin-top: 2%\">\n    <b>Rs.{{list.price}}</b>\n  </div>\n  <ion-item>\n    <ion-label> <small>(Included all Taxes)</small> </ion-label>\n    <ion-select\n      start=\"end\"\n      *ngIf=\"list\"\n      placeholder=\"Select One\"\n      (ionChange)=\"quanity($event.target.value)\"\n      value=\"{{list.quantity[0].weight}}\"\n      style=\"max-width: 100%\"\n    >\n      <ion-select-option\n        *ngFor=\"let item of list.quantity \"\n        value=\"{{item.weight}}\"\n        >{{item.weight_html}}\n        <p>Rs.{{item.display_price}}</p></ion-select-option\n      >\n    </ion-select>\n  </ion-item>\n\n  <div style=\"margin-left: 6%; margin-top: 2%; font-weight: 600\">\n    Product Detail\n  </div>\n  <ion-item>\n    <p>{{list.description}}</p>\n  </ion-item>\n  <!-- <div style=\"height: 9%; margin-top: 4%\">\n    <button\n      [routerLink]=\"['/checkout-page']\"\n      style=\"\n        margin-left: 8%;\n        width: 31%;\n        background-color: #1cc716;\n        height: 68%;\n        border-radius: 6px;\n      \"\n    >\n      ADD TO CART\n    </button>\n    <button\n      style=\"\n        margin-left: 19%;\n        width: 31%;\n        background-color: #f54407;\n        height: 68%;\n        border-radius: 6px;\n      \"\n    >\n      BUY NOW\n    </button>\n  </div> -->\n\n  <!-- <ion-img src=\"assets/potato.jpeg\" style=\"height: 35%;\n  margin-top: 5%;\">\n\n  </ion-img> -->\n</ion-content>\n<ion-footer\n  style=\"\n    text-align: center;\n    background-color: #60be74;\n    padding: 6px;\n    font-weight: 700;\n  \"\n  (click)=\"additem(list, list.quantity[0].weight)\"\n  >Add To Cart\n  <div style=\"font-size: 1em\"><ion-icon name=\"cart-outline\"></ion-icon></div\n></ion-footer>\n<!--  -->\n");

/***/ }),

/***/ "i2O1":
/*!*********************************************************!*\
  !*** ./src/app/pages/detail-page/detail-page.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #60be74;\n}\n\n.card-background-page ion-img {\n  height: 88%;\n}\n\n.card-background-page .included {\n  margin-left: 3%;\n}\n\n.card-background-page .includedbutton {\n  margin-left: 28%;\n}\n\n.card-background-page .includedicon {\n  font-size: 101%;\n}\n\n.card-background-page .includedinput {\n  width: 5%;\n}\n\n.card-background-page .includedbutton2 {\n  font-size: 101%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUNFO0VBQ0UsU0FBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtBQUNKIiwiZmlsZSI6ImRldGFpbC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjBiZTc0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgaW9uLWltZyB7XG4gICAgaGVpZ2h0OiA4OCU7XG4gIH1cbiAgLmluY2x1ZGVkIHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gIH1cbiAgLmluY2x1ZGVkYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjglO1xuICB9XG4gIC5pbmNsdWRlZGljb24ge1xuICAgIGZvbnQtc2l6ZTogMTAxJTtcbiAgfVxuICAuaW5jbHVkZWRpbnB1dCB7XG4gICAgd2lkdGg6IDUlO1xuICB9XG4gIC5pbmNsdWRlZGJ1dHRvbjIge1xuICAgIGZvbnQtc2l6ZTogMTAxJTtcbiAgfVxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-detail-page-detail-page-module-es2015.js.map