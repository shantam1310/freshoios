(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-return-and-refund-return-and-refund-module"], {
    /***/
    "/EBT":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/return-and-refund/return-and-refund-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ReturnAndRefundPageRoutingModule */

    /***/
    function EBT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnAndRefundPageRoutingModule", function () {
        return ReturnAndRefundPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _return_and_refund_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./return-and-refund.page */
      "QScF");

      var routes = [{
        path: '',
        component: _return_and_refund_page__WEBPACK_IMPORTED_MODULE_3__["ReturnAndRefundPage"]
      }];

      var ReturnAndRefundPageRoutingModule = function ReturnAndRefundPageRoutingModule() {
        _classCallCheck(this, ReturnAndRefundPageRoutingModule);
      };

      ReturnAndRefundPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReturnAndRefundPageRoutingModule);
      /***/
    },

    /***/
    "FQBu":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/return-and-refund/return-and-refund.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FQBu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 20px; text-align: center\">\n    <h2>Return, Refund and Cancellation policy</h2>\n    <br />\n    In the event, if you are displeased with the Product delivered, we will\n    refund back the money without asking anything. Please read the fine prints\n    of each deal before buying it, it provides all the details about &nbsp;the\n    product you purchase.<br /><br />\n    In case of dissatisfaction from our products, You have the liberty to cancel\n    their order and request a refund from us. Our Policy for the cancellation\n    and refund will be as follows: <br />\n    <br />\n    <strong>&nbsp;Cancellation Policy</strong><br /><br />\n    For Cancellations please contact the us via email id and Phone no.&nbsp;<br /><br />\n    You can request for cancellation within 12 hours of your order. Cancellation\n    will be initiated within 24 hours and in case of online payment mode amount\n    will be reflected in your original mode of payment in 7-10 days<br /><br /><strong\n      >Refund Policy</strong\n    ><br /><br />\n    In case any client is not completely satisfied with our products we can\n    provide a refund.You can ask for refund within 24 hours of receiving the\n    product. If paid by COD mode you have to provide your bank details so that\n    we can refund you and amount will reflect in your account within 7-10 days\n    <br /><br />\n    If paid by credit card, refunds will be issued to the original credit card\n    provided at the time of purchase and in case of payment gateway name\n    payments refund will be made to the same account in 7-10 days\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "MtpV":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/return-and-refund/return-and-refund.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ReturnAndRefundPageModule */

    /***/
    function MtpV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnAndRefundPageModule", function () {
        return ReturnAndRefundPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _return_and_refund_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./return-and-refund-routing.module */
      "/EBT");
      /* harmony import */


      var _return_and_refund_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./return-and-refund.page */
      "QScF");

      var ReturnAndRefundPageModule = function ReturnAndRefundPageModule() {
        _classCallCheck(this, ReturnAndRefundPageModule);
      };

      ReturnAndRefundPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _return_and_refund_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnAndRefundPageRoutingModule"]],
        declarations: [_return_and_refund_page__WEBPACK_IMPORTED_MODULE_6__["ReturnAndRefundPage"]]
      })], ReturnAndRefundPageModule);
      /***/
    },

    /***/
    "OZdB":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/return-and-refund/return-and-refund.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function OZdB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JldHVybi1hbmQtcmVmdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoicmV0dXJuLWFuZC1yZWZ1bmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2MGJlNzQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "QScF":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/return-and-refund/return-and-refund.page.ts ***!
      \*******************************************************************/

    /*! exports provided: ReturnAndRefundPage */

    /***/
    function QScF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnAndRefundPage", function () {
        return ReturnAndRefundPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_return_and_refund_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./return-and-refund.page.html */
      "FQBu");
      /* harmony import */


      var _return_and_refund_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./return-and-refund.page.scss */
      "OZdB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReturnAndRefundPage = /*#__PURE__*/function () {
        function ReturnAndRefundPage() {
          _classCallCheck(this, ReturnAndRefundPage);
        }

        _createClass(ReturnAndRefundPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReturnAndRefundPage;
      }();

      ReturnAndRefundPage.ctorParameters = function () {
        return [];
      };

      ReturnAndRefundPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-return-and-refund',
        template: _raw_loader_return_and_refund_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_return_and_refund_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReturnAndRefundPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-return-and-refund-return-and-refund-module-es5.js.map