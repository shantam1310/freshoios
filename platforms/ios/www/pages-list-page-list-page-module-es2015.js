(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-page-list-page-module"],{

/***/ "EjYY":
/*!*************************************************************!*\
  !*** ./src/app/pages/list-page/list-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPagePageRoutingModule", function() { return ListPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-page.page */ "R7qN");




const routes = [
    {
        path: '',
        component: _list_page_page__WEBPACK_IMPORTED_MODULE_3__["ListPagePage"]
    }
];
let ListPagePageRoutingModule = class ListPagePageRoutingModule {
};
ListPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPagePageRoutingModule);



/***/ }),

/***/ "R7qN":
/*!***************************************************!*\
  !*** ./src/app/pages/list-page/list-page.page.ts ***!
  \***************************************************/
/*! exports provided: ListPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPagePage", function() { return ListPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-page.page.html */ "oF0t");
/* harmony import */ var _list_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-page.page.scss */ "cw0W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");








let ListPagePage = class ListPagePage {
    constructor(http, httpplugin, route, loadingController, alertCtrl, popoverController) {
        this.http = http;
        this.httpplugin = httpplugin;
        this.route = route;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.popoverController = popoverController;
        this.isLoading = false;
        this.vegetablesflag = false;
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
    ngOnInit() { }
    ionViewWillEnter() {
        this.vegetables();
        // this.variationlist();
    }
    vegetables() {
        this.vegetablesflag = true;
        if (!this.vegetablelist) {
            this.presentLoading();
            this.http.get("http://freshofast.com/homelist/").subscribe((res) => {
                var response = res;
                this.vegetablelist = response.vegetablesList;
                this.cartdata();
                //  this.dismiss();
                console.log("api  data ", this.vegetablelist);
            });
        }
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
    openVegetablaPage(id) {
        this.route.navigate(["/detail-page"]);
        localStorage.setItem("vegetablesList", id);
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
                    this.httpplugin.setDataSerializer("json");
                    this.httpplugin
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
                        this.addcardtoast();
                        console.log("success", data);
                        this.cartlist = [];
                        this.cartdata();
                        //this.dismiss();
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
            //this.dismiss();
            this.value = null;
        }
        else if (weight) {
            this.value = weight;
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
                    console.log("weight if condition", value.quantity[i].weight, this.value);
                    this.httpplugin.setDataSerializer("json");
                    this.httpplugin
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
                        this.addcardtoast();
                        console.log("success", data);
                        this.cartlist = [];
                        this.cartdata();
                        //this.dismiss();
                    }, (error) => {
                        console.log("oops", error);
                        alert("Out of Stock");
                        this.dismiss();
                    });
                }
                else {
                    this.dismiss();
                    console.log(" weight else condition", value.quantity[i].weight, this.value);
                }
            }
            //this.dismiss();
            this.value = null;
        }
        else {
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " +
                    btoa(`${localStorage.getItem("username")}:${localStorage.getItem("password")}`),
            }),
        };
        this.httpplugin
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
};
ListPagePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
ListPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-list-page",
        template: _raw_loader_list_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListPagePage);



/***/ }),

/***/ "cw0W":
/*!*****************************************************!*\
  !*** ./src/app/pages/list-page/list-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6Imxpc3QtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzYwYmU3NDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "g6g7":
/*!*****************************************************!*\
  !*** ./src/app/pages/list-page/list-page.module.ts ***!
  \*****************************************************/
/*! exports provided: ListPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPagePageModule", function() { return ListPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-page-routing.module */ "EjYY");
/* harmony import */ var _list_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-page.page */ "R7qN");







let ListPagePageModule = class ListPagePageModule {
};
ListPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPagePageRoutingModule"]
        ],
        declarations: [_list_page_page__WEBPACK_IMPORTED_MODULE_6__["ListPagePage"]]
    })
], ListPagePageModule);



/***/ }),

/***/ "oF0t":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-page/list-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n    <ion-buttons\n      slot=\"end\"\n      style=\"margin-right: 4%\"\n      [routerLink]=\"['/checkout-page']\"\n    >\n      <ion-icon name=\"cart-outline\" style=\"font-size: 144%\"></ion-icon>\n      <span\n        style=\"\n          color: white;\n          background-color: red;\n          border-radius: 23px;\n          padding: 1px;\n          text-align: center;\n        \"\n        >{{cartlist.length}}</span\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div\n    style=\"margin-top: 3%; margin-left: 3%; font-size: 101%; font-weight: 600\"\n  >\n    Vegetables\n  </div>\n  <!-- <ion-list>\n    <ion-img src=\"assets/cauliflower.png\" style=\"width: 21%;\">\n\n    </ion-img>\n    Cauliflower<span>\n      \n    </span>\n  </ion-list> -->\n  <ion-list>\n    <ion-card *ngFor=\"let list of vegetablelist;let i=index\">\n      <div style=\"width: 40%; float: left\">\n        <ion-img\n          src=\"{{list.images.src}}\"\n          (click)=\"openVegetablaPage(list.id)\"\n        ></ion-img>\n      </div>\n      <div\n        style=\"\n          width: 60%;\n          text-align: center;\n          color: black;\n          float: right;\n          position: relative;\n          margin-top: 5%;\n        \"\n      >\n        {{list.name}}\n        <span\n          ><br />\n          <ion-label\n            *ngIf=\"list.quantity[0].is_in_stock == false\"\n            style=\"color: red\"\n          >\n            Out of stock\n          </ion-label>\n          <ion-select\n            placeholder=\"Select One\"\n            (ionChange)=\"quanity($event.target.value)\"\n            value=\"{{list.quantity[0].weight}}\"\n            style=\"max-width: 100%; color: black\"\n          >\n            <ion-select-option\n              *ngFor=\"let item of list.quantity \"\n              value=\"{{item.weight}}\"\n              >{{item.weight_html}}\n              <p>Rs.{{item.display_price}}</p></ion-select-option\n            >\n          </ion-select>\n        </span>\n      </div>\n      <div style=\"text-align: center\">\n        <ion-button\n          *ngIf=\"list.quantity[0].is_in_stock == true\"\n          style=\"\n            margin-left: 0%;\n            background-color: #60be74;\n            border-radius: 12px;\n            color: black;\n            margin-top: 1em;\n          \"\n          (click)=\"additem(list,i,list.quantity[0].weight)\"\n          ><ion-icon name=\"cart-outline\"></ion-icon> Add to Cart\n        </ion-button>\n        <ion-button\n          *ngIf=\"list.quantity[0].is_in_stock == false\"\n          style=\"\n            margin-left: 0%;\n            background-color: #60be74;\n            border-radius: 12px;\n            color: black;\n            margin-top: 1em;\n          \"\n          ><ion-icon name=\"cart-outline\"></ion-icon> Add to Cart\n        </ion-button>\n      </div></ion-card\n    >\n    <!-- <ion-card>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"assets/cauliflower.png\"> </ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>Cauliflower</h2>\n          <h3>\n            1 per Pack\n            <button style=\"margin-left: 30%; border-radius: 16px\">+</button>\n            <input type=\"number\" style=\"width: 8%; border-radius: 35px\" />\n            <button style=\"border-radius: 16px\">-</button>\n          </h3>\n          <h3>\n            Rs.20.5<button\n              [routerLink]=\"['/checkout-page']\"\n              style=\"\n                margin-left: 35%;\n                background-color: #15ff00d1;\n                border-radius: 12px;\n                color: white;\n              \"\n            >\n              <ion-icon name=\"cart-outline\"></ion-icon>\n              Add to Cart\n            </button>\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-card> -->\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-list-page-list-page-module-es2015.js.map