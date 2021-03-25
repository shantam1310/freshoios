(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
    /***/
    "723k":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "x0XS");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "EGjV":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function EGjV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjBiZTc0O1xufVxuIl19 */";
      /***/
    },

    /***/
    "VVTS":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function VVTS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n    <!-- <ion-buttons\n      slot=\"end\"\n      style=\"margin-right: 4%\"\n      [routerLink]=\"['/checkout-page']\"\n    >\n      <ion-icon name=\"cart-outline\" style=\"font-size: 144%\"></ion-icon>\n      <span\n        style=\"\n          color: white;\n          background-color: red;\n          border-radius: 23px;\n          padding: 1px;\n          text-align: center;\n        \"\n        >{{cartlist.length}}</span\n      >\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card\n    ><ion-card-header\n      style=\"text-align: center; font-weight: 700; font-size: 2em\"\n    >\n      User Profile </ion-card-header\n    ><ion-card-content\n      ><ion-item\n        ><ion-label>First Name:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"user_name\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Last Name:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"last_name\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Email:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"mail\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Phone number:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"phone\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Address:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"address_1\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>City:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"city\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>State:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"state\"> </ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-label>Postcode:-</ion-label\n        ><ion-input type=\"text\" [(ngModel)]=\"postcode\"></ion-input\n      ></ion-item>\n\n      <ion-item\n        ><ion-button\n          style=\"\n            background-color: #60be74;\n            width: 70%;\n            height: 70%;\n            border-radius: 7px;\n            font-size: 1em;\n            font-weight: 700;\n          \"\n          (click)=\"updateprofile()\"\n        >\n          Update Profile</ion-button\n        ></ion-item\n      ></ion-card-content\n    ></ion-card\n  >\n</ion-content>\n";
      /***/
    },

    /***/
    "uxLX":
    /*!***********************************************!*\
      !*** ./src/app/pages/profile/profile.page.ts ***!
      \***********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function uxLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "VVTS");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "EGjV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(http, route, loadingController, popoverController) {
          _classCallCheck(this, ProfilePage);

          this.http = http;
          this.route = route;
          this.loadingController = loadingController;
          this.popoverController = popoverController;
          this.isLoading = false;
          this.cartlist = [];
          this.line_items = [];
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.login();
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            this.presentLoading(); // if (this.user_name && this.Password) {
            //   localStorage.setItem("username", this.user_name);
            //   localStorage.setItem("password", this.Password);

            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("freshofast:Freshofast@#2020")
              })
            };
            this.http.get("https://freshofast.com/wp-json/wc/v3/customers/".concat(localStorage.getItem("profileId")), httpOptions).subscribe(function (data) {
              console.log("success", data);
              var response = data;
              _this.profiledata = data;
              _this.mail = response.email;
              _this.last_name = response.last_name;
              _this.user_name = response.first_name; //this.first_name

              _this.address_1 = response.billing.address_1;
              _this.city = response.billing.city;
              _this.state = response.billing.state;
              _this.postcode = response.billing.postcode;
              _this.country = response.billing.country;
              _this.phone = response.billing.phone;

              _this.dismiss();
            }, function (error) {
              console.log("oops", error);
              alert("Customer not found");

              _this.dismiss();
            } //   (res) => {
            //   var response: any = res;
            //   //this.dismiss();
            //   this.user_detail();
            //   localStorage.setItem("login", "true");
            //   console.log("login data ", response);
            // }
            ); // } else {
            //   this.dismiss();
            //   alert("Fill the Credential");
            // }
          }
        }, {
          key: "updateprofile",
          value: function updateprofile() {
            var _this2 = this;

            this.presentLoading();

            if (this.mail && this.user_name && this.last_name && this.address_1 && this.city && this.postcode && this.phone) {
              var body = {
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
                  phone: this.phone
                }
              };
              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  Authorization: "Basic " + btoa("freshofast:Freshofast@#2020")
                })
              };
              this.http.put("https://freshofast.com/wp-json/wc/v3/customers/".concat(localStorage.getItem("profileId")), body, httpOptions).subscribe(function (data) {
                console.log("success", data); // this.user_detail();

                _this2.dismiss();
              }, function (error) {
                console.log("oops", error);
                alert("Credential is wrong");

                _this2.dismiss();
              } //   (res) => {
              //   var response: any = res;
              //   //this.dismiss();
              //   this.user_detail();
              //   localStorage.setItem("login", "true");
              //   console.log("login data ", response);
              // }
              );
            } else {
              alert(" Please Fill all credential");
            }
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isLoading = true;
                      _context.next = 3;
                      return this.loadingController.create({// message: 'Loading...',
                      });

                    case 3:
                      loading = _context.sent;
                      _context.next = 6;
                      return loading.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.isLoading) {
                        _context2.next = 3;
                        break;
                      }

                      _context2.next = 3;
                      return this.loadingController.dismiss();

                    case 3:
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "x0XS":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function x0XS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-profile-profile-module-es5.js.map