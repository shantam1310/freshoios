(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thank-you-thank-you-module"],{

/***/ "AA4P":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thank-you/thank-you.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"order\">\n  <div\n    style=\"\n      font-size: 1.4em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 1em;\n      color: black;\n    \"\n  >\n    Thank You\n  </div>\n  <div\n    style=\"\n      font-size: 1.4em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 1em;\n      color: black;\n    \"\n  >\n    Shopping With Us!\n  </div>\n  <div\n    style=\"\n      font-size: 1em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 1em;\n      color: black;\n    \"\n  >\n    OrderId:-{{order.id}}\n  </div>\n  <div\n    style=\"\n      font-size: 1em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 1em;\n      color: black;\n    \"\n  >\n    Name:-{{order.billing.first_name}}\n  </div>\n  <div\n    style=\"\n      font-size: 1em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 1em;\n      color: black;\n    \"\n  >\n    Mail:-{{order.billing.email}}\n  </div>\n  <div\n    style=\"\n      font-size: 1em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 1em;\n      color: black;\n    \"\n  >\n    Phone:-{{order.billing.phone}}\n  </div>\n  <ion-card *ngFor=\"let item of order.line_items\">\n    <ion-item\n      ><span style=\"font-size: 0.8em; width: 10em; color: black\"\n        ><p>Item:-{{item.name}}</p>\n        <p>Price:-{{item.price}}</p>\n        <p>Quantity:-{{item.quantity}}</p>\n      </span></ion-item\n    >\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "DYMP":
/*!*************************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ThankYouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageRoutingModule", function() { return ThankYouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thank-you.page */ "G2HA");




const routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_3__["ThankYouPage"]
    }
];
let ThankYouPageRoutingModule = class ThankYouPageRoutingModule {
};
ThankYouPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThankYouPageRoutingModule);



/***/ }),

/***/ "G2HA":
/*!***************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.page.ts ***!
  \***************************************************/
/*! exports provided: ThankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPage", function() { return ThankYouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thank-you.page.html */ "AA4P");
/* harmony import */ var _thank_you_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thank-you.page.scss */ "bI6h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ThankYouPage = class ThankYouPage {
    constructor() { }
    ngOnInit() { }
    ionViewWillEnter() {
        localStorage.getItem("order");
        // this.order_id = localStorage.getItem("order_id");
        // this.order_email = localStorage.getItem("order_email");
        // this.order_first_name = localStorage.getItem("order_first_name");
        // this.order_phone = localStorage.getItem("order_phone");
        this.order = JSON.parse(localStorage.getItem("order"));
        console.log("orderid", JSON.parse(localStorage.getItem("order")));
    }
};
ThankYouPage.ctorParameters = () => [];
ThankYouPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-thank-you",
        template: _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thank_you_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ThankYouPage);



/***/ }),

/***/ "bI6h":
/*!*****************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InRoYW5rLXlvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzYwYmU3NDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "foAR":
/*!*****************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.module.ts ***!
  \*****************************************************/
/*! exports provided: ThankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function() { return ThankYouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you-routing.module */ "DYMP");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thank-you.page */ "G2HA");







let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThankYouPageRoutingModule"]
        ],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]]
    })
], ThankYouPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-thank-you-thank-you-module-es2015.js.map