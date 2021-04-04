(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-page-list-page-module"], {
    /***/
    "EjYY":
    /*!*************************************************************!*\
      !*** ./src/app/pages/list-page/list-page-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ListPagePageRoutingModule */

    /***/
    function EjYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPagePageRoutingModule", function () {
        return ListPagePageRoutingModule;
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


      var _list_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-page.page */
      "R7qN");

      var routes = [{
        path: '',
        component: _list_page_page__WEBPACK_IMPORTED_MODULE_3__["ListPagePage"]
      }];

      var ListPagePageRoutingModule = function ListPagePageRoutingModule() {
        _classCallCheck(this, ListPagePageRoutingModule);
      };

      ListPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListPagePageRoutingModule);
      /***/
    },

    /***/
    "R7qN":
    /*!***************************************************!*\
      !*** ./src/app/pages/list-page/list-page.page.ts ***!
      \***************************************************/

    /*! exports provided: ListPagePage */

    /***/
    function R7qN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPagePage", function () {
        return ListPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_list_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./list-page.page.html */
      "oF0t");
      /* harmony import */


      var _list_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-page.page.scss */
      "cw0W");
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
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");

      var ListPagePage = /*#__PURE__*/function () {
        function ListPagePage(http, httpplugin, route, loadingController, alertCtrl, popoverController) {
          _classCallCheck(this, ListPagePage);

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

        _createClass(ListPagePage, [{
          key: "addcardtoast",
          value: function addcardtoast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        cssClass: "my-custom-class",
                        // header: 'Alert',
                        // subHeader: 'Subtitle',
                        message: "Item is added",
                        buttons: ["OK"]
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present(); // const toast = await this.toastController.create({
                      //   message: "Item Added Sucessfull",
                      //   duration: 2000,
                      //   cssClass: "my_custom_class",
                      // });
                      // toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.vegetables(); // this.variationlist();
          }
        }, {
          key: "vegetables",
          value: function vegetables() {
            var _this = this;

            this.vegetablesflag = true;

            if (!this.vegetablelist) {
              this.presentLoading();
              this.http.get("http://freshofast.com/homelist/").subscribe(function (res) {
                var response = res;
                _this.vegetablelist = response.vegetablesList;

                _this.cartdata(); //  this.dismiss();


                console.log("api  data ", _this.vegetablelist);
              });
            }
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      _context2.next = 3;
                      return this.loadingController.create({// message: 'Loading...',
                      });

                    case 3:
                      loading = _context2.sent;
                      _context2.next = 6;
                      return loading.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!this.isLoading) {
                        _context3.next = 3;
                        break;
                      }

                      _context3.next = 3;
                      return this.loadingController.dismiss();

                    case 3:
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openVegetablaPage",
          value: function openVegetablaPage(id) {
            this.route.navigate(["/detail-page"]);
            localStorage.setItem("vegetablesList", id);
          }
        }, {
          key: "additem",
          value: function additem(value, index, weight) {
            var _this2 = this;

            console.log("weight", weight);

            if (this.value) {
              // this.value = weight;
              this.presentLoading(); // document.getElementById("mySelect").value

              console.log("add item", value.quantity); //https://freshofast.com/wp-json/cocart/v1/add-item

              localStorage.getItem("username");
              localStorage.getItem("password");
              var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password")))
                })
              };

              for (var i = 0; i <= value.quantity.length - 1; i++) {
                if (value.quantity[i].weight == this.value) {
                  var body = {
                    product_id: value.id.toString(),
                    quantity: value.quantity[i].min_qty,
                    variation_id: value.quantity[i].variation_id
                  };
                  console.log("if condition", value.quantity[i].weight, this.value);
                  this.httpplugin.setDataSerializer("json");
                  this.httpplugin.post("https://freshofast.com/wp-json/cocart/v1/add-item", //{
                  body, {
                    Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password"))),
                    "Content-Type": "application/json"
                  } //}
                  ).then(function (data) {
                    _this2.addcardtoast();

                    console.log("success", data);
                    _this2.cartlist = [];

                    _this2.cartdata(); //this.dismiss();

                  }, function (error) {
                    console.log("oops", error);
                    alert("Out of Stock");

                    _this2.dismiss();
                  });
                } else {
                  this.dismiss();
                  console.log("else condition", value.quantity[i].weight, this.value);
                }
              } //this.dismiss();


              this.value = null;
            } else if (weight) {
              this.value = weight;
              this.presentLoading(); // document.getElementById("mySelect").value

              console.log("add item", value.quantity); //https://freshofast.com/wp-json/cocart/v1/add-item

              localStorage.getItem("username");
              localStorage.getItem("password");
              var _httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password")))
                })
              };

              for (var i = 0; i <= value.quantity.length - 1; i++) {
                if (value.quantity[i].weight == this.value) {
                  var _body = {
                    product_id: value.id.toString(),
                    quantity: value.quantity[i].min_qty,
                    variation_id: value.quantity[i].variation_id
                  };
                  console.log("weight if condition", value.quantity[i].weight, this.value);
                  this.httpplugin.setDataSerializer("json");
                  this.httpplugin.post("https://freshofast.com/wp-json/cocart/v1/add-item", //{
                  _body, {
                    Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password"))),
                    "Content-Type": "application/json"
                  } //}
                  ).then(function (data) {
                    _this2.addcardtoast();

                    console.log("success", data);
                    _this2.cartlist = [];

                    _this2.cartdata(); //this.dismiss();

                  }, function (error) {
                    console.log("oops", error);
                    alert("Out of Stock");

                    _this2.dismiss();
                  });
                } else {
                  this.dismiss();
                  console.log(" weight else condition", value.quantity[i].weight, this.value);
                }
              } //this.dismiss();


              this.value = null;
            } else {
              alert("Please Select the quantity");
              this.dismiss();
            }
          }
        }, {
          key: "quanity",
          value: function quanity(value) {
            this.value = value;
            console.log("valueeee  ", value);
          }
        }, {
          key: "cartdata",
          value: function cartdata() {
            var _this3 = this;

            //  this.presentLoading();
            // localStorage.getItem("username");
            //     localStorage.getItem("password");
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password")))
              })
            };
            this.httpplugin.get("https://freshofast.com/wp-json/cocart/v1/get-cart", {}, {
              Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password"))),
              "Content-Type": "application/json"
            }).then(function (res) {
              var val = res.data;
              var b = val.replace(/^\s+/g, "");
              var c = JSON.parse(b);
              console.log("resssssss", c);
              var response = c; //this.dismiss();
              // this.cartlist = res;

              for (var propName in response) {
                if (response.hasOwnProperty(propName)) {
                  var propValue = response[propName];
                  console.log("propValue data ", propValue);

                  _this3.cartlist.push(propValue); // do something with each element here

                }
              }

              _this3.dismiss(); //this.totalcosting();


              console.log("login data ", _this3.cartlist);
            });
          }
        }]);

        return ListPagePage;
      }();

      ListPagePage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }];
      };

      ListPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-list-page",
        template: _raw_loader_list_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListPagePage);
      /***/
    },

    /***/
    "cw0W":
    /*!*****************************************************!*\
      !*** ./src/app/pages/list-page/list-page.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function cw0W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6Imxpc3QtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzYwYmU3NDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "g6g7":
    /*!*****************************************************!*\
      !*** ./src/app/pages/list-page/list-page.module.ts ***!
      \*****************************************************/

    /*! exports provided: ListPagePageModule */

    /***/
    function g6g7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPagePageModule", function () {
        return ListPagePageModule;
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


      var _list_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-page-routing.module */
      "EjYY");
      /* harmony import */


      var _list_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-page.page */
      "R7qN");

      var ListPagePageModule = function ListPagePageModule() {
        _classCallCheck(this, ListPagePageModule);
      };

      ListPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPagePageRoutingModule"]],
        declarations: [_list_page_page__WEBPACK_IMPORTED_MODULE_6__["ListPagePage"]]
      })], ListPagePageModule);
      /***/
    },

    /***/
    "oF0t":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-page/list-page.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function oF0t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n    <ion-buttons\n      slot=\"end\"\n      style=\"margin-right: 4%\"\n      [routerLink]=\"['/checkout-page']\"\n    >\n      <ion-icon name=\"cart-outline\" style=\"font-size: 144%\"></ion-icon>\n      <span\n        style=\"\n          color: white;\n          background-color: red;\n          border-radius: 23px;\n          padding: 1px;\n          text-align: center;\n        \"\n        >{{cartlist.length}}</span\n      >\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"md\">\n  <div\n    style=\"margin-top: 3%; margin-left: 3%; font-size: 101%; font-weight: 600\"\n  >\n    Vegetables\n  </div>\n  <!-- <ion-list>\n    <ion-img src=\"assets/cauliflower.png\" style=\"width: 21%;\">\n\n    </ion-img>\n    Cauliflower<span>\n      \n    </span>\n  </ion-list> -->\n  <ion-list>\n    <ion-card *ngFor=\"let list of vegetablelist;let i=index\">\n      <div style=\"width: 40%; float: left\">\n        <ion-img\n          src=\"{{list.images.src}}\"\n          (click)=\"openVegetablaPage(list.id)\"\n        ></ion-img>\n      </div>\n      <div\n        style=\"\n          width: 60%;\n          text-align: center;\n          color: black;\n          float: right;\n          position: relative;\n          margin-top: 5%;\n        \"\n      >\n        {{list.name}}\n        <span\n          ><br />\n          <ion-label\n            *ngIf=\"list.quantity[0].is_in_stock == false\"\n            style=\"color: red\"\n          >\n            Out of stock\n          </ion-label>\n          <ion-select\n            placeholder=\"Select One\"\n            (ionChange)=\"quanity($event.target.value)\"\n            value=\"{{list.quantity[0].weight}}\"\n            style=\"max-width: 100%; color: black\"\n          >\n            <ion-select-option\n              *ngFor=\"let item of list.quantity \"\n              value=\"{{item.weight}}\"\n              >{{item.weight_html}}\n              <p>Rs.{{item.display_price}}</p></ion-select-option\n            >\n          </ion-select>\n        </span>\n      </div>\n      <div style=\"text-align: center\">\n        <ion-button\n          *ngIf=\"list.quantity[0].is_in_stock == true\"\n          style=\"\n            margin-left: 0%;\n            background-color: #60be74;\n            border-radius: 12px;\n            color: black;\n            margin-top: 1em;\n          \"\n          (click)=\"additem(list,i,list.quantity[0].weight)\"\n          ><ion-icon name=\"cart-outline\"></ion-icon> Add to Cart\n        </ion-button>\n        <ion-button\n          *ngIf=\"list.quantity[0].is_in_stock == false\"\n          style=\"\n            margin-left: 0%;\n            background-color: #60be74;\n            border-radius: 12px;\n            color: black;\n            margin-top: 1em;\n          \"\n          ><ion-icon name=\"cart-outline\"></ion-icon> Add to Cart\n        </ion-button>\n      </div></ion-card\n    >\n    <!-- <ion-card>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-img src=\"assets/cauliflower.png\"> </ion-img>\n        </ion-avatar>\n        <ion-label>\n          <h2>Cauliflower</h2>\n          <h3>\n            1 per Pack\n            <button style=\"margin-left: 30%; border-radius: 16px\">+</button>\n            <input type=\"number\" style=\"width: 8%; border-radius: 35px\" />\n            <button style=\"border-radius: 16px\">-</button>\n          </h3>\n          <h3>\n            Rs.20.5<button\n              [routerLink]=\"['/checkout-page']\"\n              style=\"\n                margin-left: 35%;\n                background-color: #15ff00d1;\n                border-radius: 12px;\n                color: white;\n              \"\n            >\n              <ion-icon name=\"cart-outline\"></ion-icon>\n              Add to Cart\n            </button>\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-card> -->\n  </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-list-page-list-page-module-es5.js.map