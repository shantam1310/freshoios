(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/shantamsharma/Desktop/untitled folder 2/freshofastIos/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, http, route, loadingController, alertCtrl, toastctrl) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.http = http;
          this.route = route;
          this.loadingController = loadingController;
          this.alertCtrl = alertCtrl;
          this.toastctrl = toastctrl;
          this.isLoading = false;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "rateUS",
          value: function rateUS() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastctrl.create({
                        message: "Coming Soon.",
                        duration: 2000,
                        cssClass: "my_custom_class"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "logouttoast",
          value: function logouttoast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastctrl.create({
                        message: "Logout Sucessfull",
                        duration: 2000,
                        cssClass: "my_custom_class"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this2 = this;

            ///wp-json/cocart/v1/logout
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password")))
              })
            };
            this.http.post("https://freshofast.com/wp-json/cocart/v1/logout", {}, {
              Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password"))),
              "Content-Type": "application/json"
            }).then(function (res) {
              var response = res;

              _this2.dismiss();

              localStorage.clear();

              _this2.logouttoast();

              _this2.route.navigate(["/login"]);

              console.log("logout data ", response);
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var loading;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.isLoading = true;
                      _context3.next = 3;
                      return this.loadingController.create({// message: 'Loading...',
                      });

                    case 3:
                      loading = _context3.sent;
                      _context3.next = 6;
                      return loading.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this.isLoading) {
                        _context4.next = 3;
                        break;
                      }

                      _context4.next = 3;
                      return this.loadingController.dismiss();

                    case 3:
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-root",
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"mainMenu\">\n    <ion-menu\n      side=\"start\"\n      contentId=\"mainMenu\"\n      menuId=\"mainMenu\"\n      type=\"overlay\"\n    >\n      <ion-header mode=\"md\">\n        <ion-toolbar style=\"text-align: center\">\n          <ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n          </ion-img>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content mode=\"md\">\n        <ion-list>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item [routerLink]=\"['/home']\"\n              ><ion-img\n                src=\"assets/homecate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"padding-left: 10px\">Home</span></ion-item\n            >\n\n            <ion-item [routerLink]=\"['/profile']\">\n              <ion-icon name=\"person\" style=\"color: #1f2d41\"></ion-icon\n              ><span style=\"margin-left: 10px\">Profile</span></ion-item\n            >\n\n            <ion-item [routerLink]=\"['/list-page']\"\n              ><ion-img\n                src=\"assets/vegetablecate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n                class=\"md hydrated\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Vegetables</span></ion-item\n            >\n            <ion-item [routerLink]=\"['/fruits-list-page']\"\n              ><ion-img\n                src=\"assets/fruit.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Fruits</span></ion-item\n            >\n\n            <ion-item [routerLink]=\"['/herb-list-page']\"\n              ><ion-img\n                src=\"assets/herbcate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n                class=\"md hydrated\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Herbs</span></ion-item\n            >\n            <ion-item [routerLink]=\"['/exotic-vegetable-list']\"\n              ><ion-img\n                src=\"assets/exveg.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n                class=\"md hydrated\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\"\n                >Exotic Vegetables</span\n              ></ion-item\n            >\n            <ion-item [routerLink]=\"['/exotic-list']\"\n              ><ion-img\n                src=\"assets/exfruit.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n                class=\"md hydrated\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Exotic Fruits</span></ion-item\n            >\n            <ion-item [routerLink]=\"['/seasonal-list-page']\"\n              ><ion-img\n                src=\"assets/seasonalcate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Seasonal</span></ion-item\n            >\n            <ion-item [routerLink]=\"['/frozen-list-page']\"\n              ><ion-img\n                src=\"assets/fr.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n                class=\"md hydrated\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\"\n                >Ready to Eat & Frozen</span\n              ></ion-item\n            >\n            <ion-item [routerLink]=\"['/diary-list-page']\"\n              ><ion-img\n                src=\"assets/dary.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n                class=\"md hydrated\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Dairy</span></ion-item\n            >\n            <ion-item [routerLink]=\"['/view-all']\"\n              ><ion-img\n                src=\"assets/viall.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n                class=\"md hydrated\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">View All</span></ion-item\n            >\n\n            <ion-item [routerLink]=\"['/about-us']\"\n              ><ion-img\n                src=\"assets/profilecate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">About Us</span></ion-item\n            >\n\n            <ion-item (click)=\"rateUS()\"\n              ><ion-img\n                src=\"assets/Delivery.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\"\n                >Delivery Information</span\n              ></ion-item\n            >\n\n            <ion-item [routerLink]=\"['/privacy-policy']\"\n              ><ion-img\n                src=\"assets/privacycate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Privacy Policy</span></ion-item\n            >\n\n            <ion-item [routerLink]=\"['/termsand-condition']\"\n              ><ion-img\n                src=\"assets/termscate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\"\n                >Terms &amp; Conditions</span\n              ></ion-item\n            >\n\n            <ion-item [routerLink]=\"['/return-and-refund']\"\n              ><ion-img\n                src=\"assets/returncate.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\"\n                >Return &amp; Refund Policy</span\n              ></ion-item\n            >\n\n            <ion-item (click)=\"logout()\"\n              ><ion-img\n                src=\"assets/logout.png\"\n                style=\"height: 1.7em; width: 1.7em\"\n              ></ion-img\n              ><span style=\"margin-left: 10px\">Logout</span></ion-item\n            ></ion-menu-toggle\n          ></ion-list\n        >\n\n        <!-- <ion-item [routerLink]=\"['/list-page']\" class=\"menuitem\">\n              <ion-icon style=\"color: #1f2d41\" name=\"snow\"></ion-icon\n              ><span style=\"margin-left: 10px\">About Us</span>\n            </ion-item>\n            <ion-item [routerLink]=\"['/list-page']\" class=\"menuitem\">\n              <ion-icon style=\"color: #1f2d41\" name=\"snow\"></ion-icon\n              ><span style=\"margin-left: 10px\">Delivery Information</span>\n            </ion-item>\n            <ion-item (click)=\"rateUS()\" class=\"menuitem\">\n              <ion-icon style=\"color: #1f2d41\" name=\"snow\"></ion-icon\n              ><span style=\"margin-left: 10px\">Privacy Policy</span>\n            </ion-item>\n            <ion-item (click)=\"rateUS()\" class=\"menuitem\">\n              <ion-icon style=\"color: #1f2d41\" name=\"snow\"></ion-icon\n              ><span style=\"margin-left: 10px\">Terms & Conditions</span>\n            </ion-item>\n            <ion-item (click)=\"rateUS()\" class=\"menuitem\">\n              <ion-icon style=\"color: #1f2d41\" name=\"snow\"></ion-icon\n              ><span style=\"margin-left: 10px\">Return & Refund Policy</span>\n            </ion-item>\n          </ion-menu-toggle>\n\n          \n        </ion-list> -->\n      </ion-content>\n      <ion-footer mode=\"md\">\n        <ion-toolbar\n          style=\"\n            height: 40px;\n            color: white;\n            text-align: center;\n            --min-height: 40px;\n            max-height: 40px;\n          \"\n        >\n          <div style=\"font-size: 14px\">\n            Powered by Aaditri Technology &trade;\n          </div>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu>\n\n    <ion-router-outlet id=\"mainMenu\" main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_native_all_in_one_sdk_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/all-in-one-sdk/ngx */
      "ptCa");
      /* harmony import */


      var _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/app-launcher/ngx */
      "03aV");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_all_in_one_sdk_ngx__WEBPACK_IMPORTED_MODULE_10__["AllInOneSDK"], _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_11__["AppLauncher"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_12__["HTTP"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule); // password jar signed
      //India@12345

      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: "home",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: "detail-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-detail-page-detail-page-module */
          "pages-detail-page-detail-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/detail-page/detail-page.module */
          "WNQv")).then(function (m) {
            return m.DetailPagePageModule;
          });
        }
      }, {
        path: "list-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-list-page-list-page-module */
          "pages-list-page-list-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/list-page/list-page.module */
          "g6g7")).then(function (m) {
            return m.ListPagePageModule;
          });
        }
      }, {
        path: "checkout-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-checkout-page-checkout-page-module */
          "pages-checkout-page-checkout-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/checkout-page/checkout-page.module */
          "e7MO")).then(function (m) {
            return m.CheckoutPagePageModule;
          });
        }
      }, {
        path: "herb-list-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-herb-list-page-herb-list-page-module */
          "pages-herb-list-page-herb-list-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/herb-list-page/herb-list-page.module */
          "Fh1e")).then(function (m) {
            return m.HerbListPagePageModule;
          });
        }
      }, {
        path: "fruits-list-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-fruits-list-page-fruits-list-page-module */
          "pages-fruits-list-page-fruits-list-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/fruits-list-page/fruits-list-page.module */
          "UE+q")).then(function (m) {
            return m.FruitsListPagePageModule;
          });
        }
      }, {
        path: "frozen-list-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-frozen-list-page-frozen-list-page-module */
          "pages-frozen-list-page-frozen-list-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/frozen-list-page/frozen-list-page.module */
          "kza/")).then(function (m) {
            return m.FrozenListPagePageModule;
          });
        }
      }, {
        path: "diary-list-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-diary-list-page-diary-list-page-module */
          "pages-diary-list-page-diary-list-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/diary-list-page/diary-list-page.module */
          "YNGg")).then(function (m) {
            return m.DiaryListPagePageModule;
          });
        }
      }, {
        path: "seasonal-list-page",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-seasonal-list-page-seasonal-list-page-module */
          "pages-seasonal-list-page-seasonal-list-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/seasonal-list-page/seasonal-list-page.module */
          "i0oi")).then(function (m) {
            return m.SeasonalListPagePageModule;
          });
        }
      }, {
        path: "innersurjan",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-innersurjan-innersurjan-module */
          "pages-innersurjan-innersurjan-module").then(__webpack_require__.bind(null,
          /*! ./pages/innersurjan/innersurjan.module */
          "OxXw")).then(function (m) {
            return m.InnersurjanPageModule;
          });
        }
      }, {
        path: "order-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-order-detail-order-detail-module */
          "pages-order-detail-order-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/order-detail/order-detail.module */
          "982l")).then(function (m) {
            return m.OrderDetailPageModule;
          });
        }
      }, {
        path: "location",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-location-location-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-location-location-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/location/location.module */
          "lPJH")).then(function (m) {
            return m.LocationPageModule;
          });
        }
      }, {
        path: "exotic-list",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-exotic-list-exotic-list-module */
          "pages-exotic-list-exotic-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/exotic-list/exotic-list.module */
          "CRsc")).then(function (m) {
            return m.ExoticListPageModule;
          });
        }
      }, {
        path: "exotic-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-exotic-detail-exotic-detail-module */
          "pages-exotic-detail-exotic-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/exotic-detail/exotic-detail.module */
          "DT0+")).then(function (m) {
            return m.ExoticDetailPageModule;
          });
        }
      }, {
        path: "exotic-vegetable-list",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-exotic-vegetable-list-exotic-vegetable-list-module */
          "pages-exotic-vegetable-list-exotic-vegetable-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/exotic-vegetable-list/exotic-vegetable-list.module */
          "8d8y")).then(function (m) {
            return m.ExoticVegetableListPageModule;
          });
        }
      }, {
        path: "exotic-vegetable-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-exotic-vegetable-detail-exotic-vegetable-detail-module */
          "pages-exotic-vegetable-detail-exotic-vegetable-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/exotic-vegetable-detail/exotic-vegetable-detail.module */
          "4w6b")).then(function (m) {
            return m.ExoticVegetableDetailPageModule;
          });
        }
      }, {
        path: "sign-up",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-sign-up-sign-up-module */
          "pages-sign-up-sign-up-module").then(__webpack_require__.bind(null,
          /*! ./pages/sign-up/sign-up.module */
          "J606")).then(function (m) {
            return m.SignUpPageModule;
          });
        }
      }, {
        path: "thank-you",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-thank-you-thank-you-module */
          "pages-thank-you-thank-you-module").then(__webpack_require__.bind(null,
          /*! ./pages/thank-you/thank-you.module */
          "foAR")).then(function (m) {
            return m.ThankYouPageModule;
          });
        }
      }, {
        path: "profile",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "723k")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: "privacy-policy",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-privacy-policy-privacy-policy-module */
          "pages-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
          /*! ./pages/privacy-policy/privacy-policy.module */
          "cjqQ")).then(function (m) {
            return m.PrivacyPolicyPageModule;
          });
        }
      }, {
        path: "termsand-condition",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-termsand-condition-termsand-condition-module */
          "pages-termsand-condition-termsand-condition-module").then(__webpack_require__.bind(null,
          /*! ./pages/termsand-condition/termsand-condition.module */
          "Mlt5")).then(function (m) {
            return m.TermsandConditionPageModule;
          });
        }
      }, {
        path: "return-and-refund",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-return-and-refund-return-and-refund-module */
          "pages-return-and-refund-return-and-refund-module").then(__webpack_require__.bind(null,
          /*! ./pages/return-and-refund/return-and-refund.module */
          "MtpV")).then(function (m) {
            return m.ReturnAndRefundPageModule;
          });
        }
      }, {
        path: "about-us",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-about-us-about-us-module */
          "pages-about-us-about-us-module").then(__webpack_require__.bind(null,
          /*! ./pages/about-us/about-us.module */
          "Yy7G")).then(function (m) {
            return m.AboutUsPageModule;
          });
        }
      }, {
        path: "view-all",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-view-all-view-all-module */
          "pages-view-all-view-all-module").then(__webpack_require__.bind(null,
          /*! ./pages/view-all/view-all.module */
          "Y5g3")).then(function (m) {
            return m.ViewAllPageModule;
          });
        }
      }, {
        path: "coupon-pop-over",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-coupon-pop-over-coupon-pop-over-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-coupon-pop-over-coupon-pop-over-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/coupon-pop-over/coupon-pop-over.module */
          "QviG")).then(function (m) {
            return m.CouponPopOverPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #60be74;\n}\n\nion-footer {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjBiZTc0O1xufVxuaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogIzYwYmU3NDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map