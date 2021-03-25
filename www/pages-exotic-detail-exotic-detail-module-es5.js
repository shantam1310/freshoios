(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exotic-detail-exotic-detail-module"], {
    /***/
    "/xjx":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/exotic-detail/exotic-detail-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ExoticDetailPageRoutingModule */

    /***/
    function xjx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExoticDetailPageRoutingModule", function () {
        return ExoticDetailPageRoutingModule;
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


      var _exotic_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exotic-detail.page */
      "FDfh");

      var routes = [{
        path: '',
        component: _exotic_detail_page__WEBPACK_IMPORTED_MODULE_3__["ExoticDetailPage"]
      }];

      var ExoticDetailPageRoutingModule = function ExoticDetailPageRoutingModule() {
        _classCallCheck(this, ExoticDetailPageRoutingModule);
      };

      ExoticDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExoticDetailPageRoutingModule);
      /***/
    },

    /***/
    "3lJ8":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exotic-detail/exotic-detail.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lJ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>exoticDetail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "DT0+":
    /*!*************************************************************!*\
      !*** ./src/app/pages/exotic-detail/exotic-detail.module.ts ***!
      \*************************************************************/

    /*! exports provided: ExoticDetailPageModule */

    /***/
    function DT0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExoticDetailPageModule", function () {
        return ExoticDetailPageModule;
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


      var _exotic_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./exotic-detail-routing.module */
      "/xjx");
      /* harmony import */


      var _exotic_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exotic-detail.page */
      "FDfh");

      var ExoticDetailPageModule = function ExoticDetailPageModule() {
        _classCallCheck(this, ExoticDetailPageModule);
      };

      ExoticDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _exotic_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExoticDetailPageRoutingModule"]],
        declarations: [_exotic_detail_page__WEBPACK_IMPORTED_MODULE_6__["ExoticDetailPage"]]
      })], ExoticDetailPageModule);
      /***/
    },

    /***/
    "FDfh":
    /*!***********************************************************!*\
      !*** ./src/app/pages/exotic-detail/exotic-detail.page.ts ***!
      \***********************************************************/

    /*! exports provided: ExoticDetailPage */

    /***/
    function FDfh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExoticDetailPage", function () {
        return ExoticDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_exotic_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./exotic-detail.page.html */
      "3lJ8");
      /* harmony import */


      var _exotic_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./exotic-detail.page.scss */
      "VtA8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExoticDetailPage = /*#__PURE__*/function () {
        function ExoticDetailPage() {
          _classCallCheck(this, ExoticDetailPage);
        }

        _createClass(ExoticDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExoticDetailPage;
      }();

      ExoticDetailPage.ctorParameters = function () {
        return [];
      };

      ExoticDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-exotic-detail',
        template: _raw_loader_exotic_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exotic_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExoticDetailPage);
      /***/
    },

    /***/
    "VtA8":
    /*!*************************************************************!*\
      !*** ./src/app/pages/exotic-detail/exotic-detail.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function VtA8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleG90aWMtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-exotic-detail-exotic-detail-module-es5.js.map