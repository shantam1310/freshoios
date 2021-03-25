(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coupon-pop-over-coupon-pop-over-module"], {
    /***/
    "QviG":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/coupon-pop-over/coupon-pop-over.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CouponPopOverPageModule */

    /***/
    function QviG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponPopOverPageModule", function () {
        return CouponPopOverPageModule;
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


      var _coupon_pop_over_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./coupon-pop-over-routing.module */
      "xmkQ");
      /* harmony import */


      var _coupon_pop_over_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./coupon-pop-over.page */
      "HR+o");

      var CouponPopOverPageModule = function CouponPopOverPageModule() {
        _classCallCheck(this, CouponPopOverPageModule);
      };

      CouponPopOverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _coupon_pop_over_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponPopOverPageRoutingModule"]],
        declarations: [_coupon_pop_over_page__WEBPACK_IMPORTED_MODULE_6__["CouponPopOverPage"]]
      })], CouponPopOverPageModule);
      /***/
    },

    /***/
    "xmkQ":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/coupon-pop-over/coupon-pop-over-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: CouponPopOverPageRoutingModule */

    /***/
    function xmkQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CouponPopOverPageRoutingModule", function () {
        return CouponPopOverPageRoutingModule;
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


      var _coupon_pop_over_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./coupon-pop-over.page */
      "HR+o");

      var routes = [{
        path: '',
        component: _coupon_pop_over_page__WEBPACK_IMPORTED_MODULE_3__["CouponPopOverPage"]
      }];

      var CouponPopOverPageRoutingModule = function CouponPopOverPageRoutingModule() {
        _classCallCheck(this, CouponPopOverPageRoutingModule);
      };

      CouponPopOverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CouponPopOverPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-coupon-pop-over-coupon-pop-over-module-es5.js.map