(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ion-page\" id=\"main-content\" main>\n  <ion-header>\n    <ion-toolbar>\n      <ion-menu-toggle slot=\"start\">\n        <ion-icon\n          name=\"menu-outline\"\n          style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n        ></ion-icon>\n      </ion-menu-toggle>\n      <ion-title style=\"font-size: 100%; font-family: revert\"\n        ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n        </ion-img\n      ></ion-title>\n      <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n        <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n      </ion-buttons> -->\n      <ion-buttons slot=\"end\" style=\"margin-right: 4%\" (click)=\"opencartpage()\">\n        <ion-icon name=\"cart-outline\" style=\"font-size: 144%\"></ion-icon>\n        <span\n          style=\"\n            color: white;\n            background-color: red;\n            border-radius: 23px;\n            padding: 1px;\n            text-align: center;\n          \"\n          >{{cartlist.length}}</span\n        >\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-slides\n      #mySlider\n      (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\"\n      pager=\"false\"\n      style=\"margin-top: 1%; height: 20%\"\n    >\n      <!-- <ion-slide class=\"first-slide\">\n  </ion-slide> -->\n      <ion-slide\n        style=\"background-color: white\"\n        (click)=\"openonionVegetablaPage()\"\n      >\n        <ion-img src=\"assets/POT(1).jpg\" style=\"width: 100%\"> </ion-img>\n      </ion-slide>\n      <ion-slide\n        style=\"background-color: white\"\n        [routerLink]=\"['/fruits-list-page']\"\n      >\n        <ion-img src=\"assets/POT(2).jpg\" style=\"width: 100%\"> </ion-img>\n      </ion-slide>\n      <ion-slide style=\"background-color: white\" [routerLink]=\"['/list-page']\">\n        <ion-img src=\"assets/POT.jpg\" style=\"width: 100%\"> </ion-img>\n      </ion-slide>\n      <!-- <ion-slide style=\"background-color: red\">\n      <h2>Slide 3</h2>\n    </ion-slide> -->\n    </ion-slides>\n    <div style=\"text-align: end\" *ngIf=\"vegetablesflag==true\">\n      <ion-button\n        class=\"something\"\n        *ngIf=\"vegetablelist && vegetablesflag==true\"\n        (click)=\"vegetables()\"\n      >\n        Vegetables\n      </ion-button>\n      <ion-button\n        *ngIf=\"vegetablelist && vegetablesflag==true\"\n        (click)=\"fruits()\"\n      >\n        Fruits\n      </ion-button>\n    </div>\n    <div style=\"text-align: end\" *ngIf=\"vegetablesflag==false\">\n      <ion-button\n        *ngIf=\"vegetablelist && vegetablesflag==false\"\n        (click)=\"vegetables()\"\n      >\n        Vegetables\n      </ion-button>\n      <ion-button\n        *ngIf=\"vegetablelist && vegetablesflag==false\"\n        class=\"something\"\n        (click)=\"fruits()\"\n      >\n        Fruits\n      </ion-button>\n    </div>\n    <div\n      style=\"\n        margin-top: 2%;\n        margin-left: 4%;\n        font-size: 100%;\n        font-family: unset;\n        margin-bottom: 2%;\n      \"\n    >\n      <b>BEST SELLING</b>\n    </div>\n    <ion-slides\n      style=\"margin-top: 1%; height: 44%\"\n      *ngIf=\"vegetablelist && vegetablesflag==true\"\n    >\n      <ion-slide\n        style=\"background-color: white\"\n        *ngFor=\"let data of vegetablelist | slice:0:3;let i=index;\"\n      >\n        <ion-col size=\"6\" style=\"padding: 11px\" *ngIf=\"vegetablelist[i+i]\">\n          <div class=\"box\" style=\"background-color: white; height: 96%\">\n            <ion-img\n              src=\"{{vegetablelist[i+i].images.src}}\"\n              (click)=\"openVegetablaPage(vegetablelist[i+i].id)\"\n            >\n            </ion-img>\n\n            <span\n              style=\"\n                margin-left: -1%;\n                font-size: 17px;\n                width: 100%;\n                height: 100%;\n              \"\n            >\n              {{vegetablelist[i+i].name | slice:0:10}}......\n            </span>\n            <span style=\"font-size: 15px; margin-left: -4%\">\n              <ion-label\n                *ngIf=\"vegetablelist[i+i].quantity[0].is_in_stock == false\"\n                style=\"color: red\"\n              >\n                Out of stock\n              </ion-label>\n\n              <ion-select\n                placeholder=\"Select One\"\n                (ionChange)=\"quanity($event.target.value)\"\n                value=\"{{vegetablelist[i+i].quantity[0].weight}}\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of vegetablelist[i+i].quantity \"\n                  value=\"{{item.weight}}\"\n                  >{{item.weight_html}}\n                  <p>Rs.{{item.display_price}}</p></ion-select-option\n                >\n              </ion-select>\n            </span>\n\n            <div style=\"width: 103%\">\n              <button\n                *ngIf=\"vegetablelist[i+i].quantity[0].is_in_stock == false\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n              >\n                Add toCart\n              </button>\n              <button\n                *ngIf=\"vegetablelist[i+i].quantity[0].is_in_stock == true\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n                (click)=\"additem(vegetablelist[i+i],i+i,vegetablelist[i+i].quantity[0].weight)\"\n              >\n                Add toCart\n              </button>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col style=\"padding: 11px\" *ngIf=\"vegetablelist[i+i+1]\">\n          <div class=\"box\" style=\"background-color: white; height: 96%\">\n            <ion-img\n              (click)=\"openVegetablaPage(vegetablelist[i+i+1].id)\"\n              src=\"{{vegetablelist[i+i+1].images.src}}\"\n            >\n            </ion-img>\n            <span\n              style=\"\n                margin-left: -1%;\n                font-size: 17px;\n                width: 100%;\n                height: 100%;\n              \"\n            >\n              {{vegetablelist[i+i+1].name | slice:0:10}}......\n            </span>\n            <span style=\"font-size: 15px; margin-left: -4%\">\n              <ion-label\n                *ngIf=\"vegetablelist[i+i+1].quantity[0].is_in_stock == false\"\n                style=\"color: red\"\n              >\n                Out of Stock</ion-label\n              >\n              <ion-select\n                placeholder=\"Select One\"\n                (ionChange)=\"quanity($event.target.value)\"\n                value=\"{{vegetablelist[i+i+1].quantity[0].weight}}\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of vegetablelist[i+i+1].quantity \"\n                  value=\"{{item.weight}}\"\n                  >{{item.weight_html}}\n                  <p>Rs.{{item.display_price}}</p></ion-select-option\n                >\n              </ion-select>\n            </span>\n            <div style=\"width: 103%\">\n              <button\n                *ngIf=\"vegetablelist[i+i+1].quantity[0].is_in_stock == false\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n              >\n                Add toCart\n              </button>\n              <button\n                *ngIf=\"vegetablelist[i+i+1].quantity[0].is_in_stock == true\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n                (click)=\"additem(vegetablelist[i+i+1],i+i+1,vegetablelist[i+i+1].quantity[0].weight)\"\n              >\n                Add toCart\n              </button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n    <ion-slides\n      style=\"margin-top: 1%; height: 44%\"\n      *ngIf=\"vegetablelist && vegetablesflag==false\"\n    >\n      <ion-slide\n        style=\"background-color: white\"\n        *ngFor=\"let data of fruitlist | slice:0:3;let i=index;\"\n      >\n        <ion-col size=\"6\" style=\"padding: 11px\" *ngIf=\"fruitlist[i+i]\">\n          <div class=\"box\" style=\"background-color: white; height: 96%\">\n            <ion-img\n              src=\"{{fruitlist[i+i].images.src}}\"\n              (click)=\"openVegetablaPage(fruitlist[i+i].id)\"\n            >\n            </ion-img>\n\n            <span\n              style=\"\n                margin-left: -1%;\n                font-size: 17px;\n                width: 100%;\n                height: 100%;\n              \"\n            >\n              {{fruitlist[i+i].name | slice:0:10}}......\n            </span>\n            <span style=\"font-size: 15px; margin-left: -4%\">\n              <ion-label\n                *ngIf=\"fruitlist[i+i].quantity[0].is_in_stock == false\"\n                style=\"color: red\"\n              >\n                Out of Stock</ion-label\n              >\n              <ion-select\n                placeholder=\"Select One\"\n                (ionChange)=\"quanity($event.target.value)\"\n                value=\"{{fruitlist[i+i].quantity[0].weight}}\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of fruitlist[i+i].quantity \"\n                  value=\"{{item.weight}}\"\n                  >{{item.weight_html}}\n                  <p>Rs.{{item.display_price}}</p></ion-select-option\n                >\n              </ion-select>\n            </span>\n\n            <div style=\"width: 103%\">\n              <button\n                *ngIf=\"fruitlist[i+i].quantity[0].is_in_stock == false\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n              >\n                Add toCart\n              </button>\n              <button\n                *ngIf=\"fruitlist[i+i].quantity[0].is_in_stock == true\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n                (click)=\"additem(fruitlist[i+i],i+i,fruitlist[i+i].quantity[0].weight)\"\n              >\n                Add toCart\n              </button>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col style=\"padding: 11px\" *ngIf=\"fruitlist[i+i+1]\">\n          <div class=\"box\" style=\"background-color: white; height: 96%\">\n            <ion-img\n              (click)=\"openVegetablaPage(fruitlist[i+i+1].id)\"\n              src=\"{{fruitlist[i+i+1].images.src}}\"\n            >\n            </ion-img>\n            <span\n              style=\"\n                margin-left: -1%;\n                font-size: 17px;\n                width: 100%;\n                height: 100%;\n              \"\n            >\n              {{fruitlist[i+i+1].name | slice:0:10}}......\n            </span>\n            <span style=\"font-size: 15px; margin-left: -4%\">\n              <ion-label\n                *ngIf=\"fruitlist[i+i+1].quantity[0].is_in_stock == false\"\n                style=\"color: red\"\n              >\n                Out of Stock</ion-label\n              >\n              <ion-select\n                placeholder=\"Select One\"\n                (ionChange)=\"quanity($event.target.value)\"\n                value=\"{{fruitlist[i+i+1].quantity[0].weight}}\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of fruitlist[i+i+1].quantity \"\n                  value=\"{{item.weight}}\"\n                  >{{item.weight_html}}\n                  <p>Rs.{{item.display_price}}</p></ion-select-option\n                >\n              </ion-select>\n            </span>\n            <div style=\"width: 103%\">\n              <button\n                *ngIf=\"fruitlist[i+i+1].quantity[0].is_in_stock == false\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n              >\n                Add toCart\n              </button>\n              <button\n                *ngIf=\"fruitlist[i+i+1].quantity[0].is_in_stock == true\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n                (click)=\"additem(fruitlist[i+i+1],i+i+1,fruitlist[i+i+1].quantity[0].weight)\"\n              >\n                Add toCart\n              </button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n\n    <div\n      style=\"\n        margin-top: 2%;\n        margin-left: 4%;\n        font-size: 100%;\n        font-family: unset;\n      \"\n    >\n      <b>SHOP BY CATEGORY</b>\n    </div>\n    <ion-grid style=\"margin-top: 2%; padding: 11px\">\n      <ion-row style=\"margin-top: -4px\" align-items-start>\n        <ion-col\n          size=\"4\"\n          style=\"padding: 0px; border: 1px solid black\"\n          [routerLink]=\"['/list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <!-- <ion-icon name=\"document-outline\"></ion-icon> -->\n            <div>\n              <ion-img src=\"assets/categoryimage/8.jpg\"> </ion-img>\n            </div>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\"> Vegetable</span> -->\n          </div>\n          <!-- <ion-icon name=\"list-outline\"></ion-icon> -->\n        </ion-col>\n        <ion-col\n          style=\"padding: 0px; border: 1px solid black\"\n          [routerLink]=\"['/fruits-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <ion-img src=\"assets/categoryimage/6.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\"> Fruits</span> -->\n          </div>\n        </ion-col>\n        <ion-col\n          style=\"padding: 0px; border: 1px solid black\"\n          [routerLink]=\"['/herb-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <ion-img src=\"assets/categoryimage/5.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\">Herbs</span> -->\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start>\n        <ion-col\n          size=\"4\"\n          style=\"padding: 0px; border: 1px solid black\"\n          [routerLink]=\"['/frozen-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <!-- <ion-icon name=\"document-outline\"></ion-icon> -->\n            <ion-img src=\"assets/categoryimage/4.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\">Frozen</span> -->\n          </div>\n          <!-- <ion-icon name=\"list-outline\"></ion-icon> -->\n        </ion-col>\n        <ion-col\n          style=\"padding: 0px; border: 1px solid black; background-color: white\"\n          [routerLink]=\"['/diary-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <ion-img src=\"assets/categoryimage/1.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\">Diary</span> -->\n          </div>\n        </ion-col>\n        <ion-col\n          style=\"padding: 0px; border: 1px solid black\"\n          [routerLink]=\"['/seasonal-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <ion-img src=\"assets/categoryimage/7.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\">Seasonal</span> -->\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start>\n        <ion-col\n          size=\"4\"\n          style=\"padding: 0px; border: 1px solid black\"\n          [routerLink]=\"['/frozen-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <!-- <ion-icon name=\"document-outline\"></ion-icon> -->\n            <ion-img src=\"assets/categoryimage/3.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\">Exotic Fruit</span> -->\n          </div>\n          <!-- <ion-icon name=\"list-outline\"></ion-icon> -->\n        </ion-col>\n        <ion-col\n          style=\"padding: 0px; border: 1px solid black\"\n          [routerLink]=\"['/diary-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <ion-img src=\"assets/categoryimage/2.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\"\n              >Exotic Vegetable</span\n            > -->\n          </div>\n        </ion-col>\n        <ion-col\n          style=\"padding: 0px; border: 1px solid black; background-color: white\"\n          [routerLink]=\"['/seasonal-list-page']\"\n        >\n          <div class=\"box\" style=\"min-height: 105px\">\n            <ion-img src=\"assets/categoryimage/9.jpg\"> </ion-img>\n            <!-- <span style=\"font-size: 12px; margin-top: 10%\">View All</span> -->\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div\n      style=\"\n        margin-top: 2%;\n        margin-left: 4%;\n        font-size: 100%;\n        font-family: unset;\n        margin-bottom: 2%;\n      \"\n    >\n      <b>TOP FEATURED</b>\n    </div>\n    <ion-slides style=\"margin-top: 1%; height: 44%\" *ngIf=\"featured\">\n      <ion-slide\n        style=\"background-color: white\"\n        *ngFor=\"let data of featured | slice:0:3;let i=index;\"\n      >\n        <ion-col size=\"6\" style=\"padding: 11px\" *ngIf=\"featured[i+i]\">\n          <div class=\"box\" style=\"background-color: white; height: 96%\">\n            <ion-img\n              src=\"{{featured[i+i].images.src}}\"\n              (click)=\"openfeaturedpage(featured[i+i].id)\"\n            >\n            </ion-img>\n\n            <span\n              style=\"\n                margin-left: -1%;\n                font-size: 17px;\n                width: 100%;\n                height: 100%;\n              \"\n            >\n              {{featured[i+i].name | slice:0:10}}......\n            </span>\n            <span style=\"font-size: 15px; margin-left: -4%\">\n              <ion-label\n                *ngIf=\"featured[i+i].quantity[0].is_in_stock == false\"\n                style=\"color: red\"\n              >\n                Out of Stock</ion-label\n              >\n              <ion-select\n                placeholder=\"Select One\"\n                (ionChange)=\"quanity($event.target.value)\"\n                value=\"{{featured[i+i].quantity[0].weight}}\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of featured[i+i].quantity \"\n                  value=\"{{item.weight}}\"\n                  >{{item.weight_html}}\n                  <p>Rs.{{item.display_price}}</p></ion-select-option\n                >\n              </ion-select>\n            </span>\n\n            <div style=\"width: 103%\">\n              <button\n                *ngIf=\"featured[i+i].quantity[0].is_in_stock == false\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n              >\n                Add toCart\n              </button>\n              <button\n                *ngIf=\"featured[i+i].quantity[0].is_in_stock == true\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n                (click)=\"additem(featured[i+i],i+i,featured[i+i+1].quantity[0].weight)\"\n              >\n                Add toCart\n              </button>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col style=\"padding: 11px\" *ngIf=\"featured[i+i+1]\">\n          <div class=\"box\" style=\"background-color: white; height: 96%\">\n            <ion-img\n              (click)=\"openfeaturedpage(featured[i+i+1].id)\"\n              src=\"{{featured[i+i+1].images.src}}\"\n            >\n            </ion-img>\n            <span\n              style=\"\n                margin-left: -1%;\n                font-size: 17px;\n                width: 100%;\n                height: 100%;\n              \"\n            >\n              {{featured[i+i+1].name | slice:0:10}}......\n            </span>\n            <span style=\"font-size: 15px; margin-left: -4%\">\n              <ion-label\n                *ngIf=\"featured[i+i+1].quantity[0].is_in_stock == false\"\n                style=\"color: red\"\n                >Out of Stock</ion-label\n              >\n              <ion-select\n                placeholder=\"Select One\"\n                (ionChange)=\"quanity($event.target.value)\"\n                value=\"{{featured[i+i+1].quantity[0].weight}}\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of featured[i+i+1].quantity \"\n                  value=\"{{item.weight}}\"\n                  >{{item.weight_html}}\n                  <p>Rs.{{item.display_price}}</p></ion-select-option\n                >\n              </ion-select>\n            </span>\n            <div style=\"width: 103%\">\n              <button\n                *ngIf=\"featured[i+i+1].quantity[0].is_in_stock == false\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n              >\n                Add toCart\n              </button>\n              <button\n                *ngIf=\"featured[i+i+1].quantity[0].is_in_stock == true\"\n                type=\"button\"\n                class=\"btn btn-success\"\n                style=\"\n                  background-color: #60be74;\n                  width: 87%;\n                  border-radius: 5px;\n                  height: 30px;\n                  font-size: 0.8em;\n                  font-weight: 700;\n                \"\n                (click)=\"additem(featured[i+i+1],i+i+1,featured[i+i+1].quantity[0].weight)\"\n              >\n                Add toCart\n              </button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>\n</div>\n";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* ion-col div.box {\n  /*background-color: red !important; padding: 1em;*/\n  text-align: center;\n  color: #0e0d0d;\n  font-size: 4.5vw;\n  /* min-width: 111px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: white;\n  padding: 6px;\n}\n\nion-toolbar {\n  --background: #60be74;\n}\n\nion-button.something {\n  --background: #f7746d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQUE7RUFHQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQWVBO0VBQ0UscUJBQUE7QUFaRjs7QUFjQTtFQUNFLHFCQUFBO0FBWEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqaW9uLWNvbCBkaXYuYm94IHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDsgcGFkZGluZzogMWVtOyovXG4gIC8vICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAvL2JveC1zaGFkb3c6IDAgMTJweCAzMHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgNjAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDE0LCAxMywgMTMpO1xuICBmb250LXNpemU6IDQuNXZ3O1xuICAvKiBtaW4td2lkdGg6IDExMXB4OyAqL1xuICAvL21pbi1oZWlnaHQ6IDEzM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLy8qaW9uLWNvbCBpb24taWNvbntmb250LXNpemU6NDBweDsgZGlzcGxheTogYmxvY2s7IHRleHQtYWxpZ246Y2VudGVyOyB3aWR0aDoxMDAlOyBtYXJnaW4tdG9wOjEwcHg7fVxuLy8gLmZhLXBsdXMge1xuLy8gICBtYXJnaW4tdG9wOiAzcHg7XG4vLyAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAuZmEtbWludXMge1xuLy8gICBtYXJnaW4tdG9wOiA0cHg7XG4vLyAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuLy8gfVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2MGJlNzQ7XG59XG5pb24tYnV0dG9uLnNvbWV0aGluZyB7XG4gIC0tYmFja2dyb3VuZDogI2Y3NzQ2ZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_pages_coupon_pop_over_coupon_pop_over_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/pages/coupon-pop-over/coupon-pop-over.page */
      "HR+o");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(http, httpplugin, route, loadingController, alertCtrl, popoverController) {
          _classCallCheck(this, HomePage);

          this.http = http;
          this.httpplugin = httpplugin;
          this.route = route;
          this.loadingController = loadingController;
          this.alertCtrl = alertCtrl;
          this.popoverController = popoverController;
          this.number = 1;
          this.isLoading = false;
          this.vegetablesflag = true;
          this.Additem = 0;
          this.cartlist = [];
          this.cartflag = true;
          this.couponcode();
        }

        _createClass(HomePage, [{
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
          key: "presentPopover",
          value: function presentPopover(code, amount) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: src_app_pages_coupon_pop_over_coupon_pop_over_page__WEBPACK_IMPORTED_MODULE_4__["CouponPopOverPage"],
                        //event: ev,
                        translucent: true,
                        backdropDismiss: false,
                        showBackdrop: false,
                        keyboardClose: false,
                        componentProps: {
                          key1: code,
                          key2: amount
                        }
                      });

                    case 2:
                      popover = _context2.sent;
                      _context2.next = 5;
                      return popover.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "add",
          value: function add() {
            this.number = this.number + 1;
          }
        }, {
          key: "minus",
          value: function minus() {
            this.number = this.number - 1;
          }
        }, {
          key: "slidesDidLoad",
          value: function slidesDidLoad(slides) {
            slides.startAutoplay();
          }
        }, {
          key: "fruits",
          value: function fruits() {
            var _this = this;

            this.vegetablesflag = false;

            if (!this.fruitlist) {
              this.presentLoading();
              this.http.get("http://freshofast.com/homelist/").subscribe(function (res) {
                var response = res;
                _this.fruitlist = response.fruitsList;

                _this.dismiss();

                console.log("api  data ", res);
              });
            } else {}
          }
        }, {
          key: "vegetables",
          value: function vegetables() {
            var _this2 = this;

            this.vegetablesflag = true;

            if (!this.vegetablelist) {
              this.presentLoading();
              this.http.get("http://freshofast.com/homelist/").subscribe(function (res) {
                var response = res;
                _this2.vegetablelist = response.vegetablesList;
                _this2.featured = response.featuredproduct;

                _this2.dismiss();

                _this2.cartdata();

                console.log("api  data ", response);
              });
            } else {// this.cartdata();
            }
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
        }, {
          key: "openVegetablaPage",
          value: function openVegetablaPage(id) {
            this.route.navigate(["/detail-page"]);
            localStorage.setItem("vegetablesList", id);
          }
        }, {
          key: "openonionVegetablaPage",
          value: function openonionVegetablaPage() {
            this.route.navigate(["/detail-page"]);
            localStorage.setItem("vegetablesList", "1242");
          } // openstomatoVegetablaPage() {
          //   this.route.navigate(["/fruits-list-page"]);
          //  // localStorage.setItem("vegetablesList", "1264");
          // }
          // openstomatoVegetablaPage() {
          //   this.route.navigate(["/fruits-list-page"]);
          //  // localStorage.setItem("vegetablesList", "1264");
          // }

        }, {
          key: "openFruitPage",
          value: function openFruitPage(id) {
            this.route.navigate(["/detail-page"]);
            localStorage.setItem("fruitsList", id);
          }
        }, {
          key: "openfeaturedpage",
          value: function openfeaturedpage(id) {
            this.route.navigate(["/detail-page"]);
            localStorage.setItem("featuredproduct", id);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            //this.fruits();
            this.vegetables(); // this.presentPopover();
            //this.variationlist();
          }
        }, {
          key: "couponcode",
          value: function couponcode() {
            var _this3 = this;

            //https://freshofast.com/wp-json/wc/v3/coupons
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa("freshofast:Freshofast@#2020")
              })
            };
            this.httpplugin.get("https://freshofast.com/wp-json/wc/v3/coupons", {}, //{
            {
              Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
              "Content-Type": "application/json"
            } //}
            ).then(function (data) {
              var val = data.data;
              var b = val.replace(/^\s+/g, "");
              var c = JSON.parse(b);
              console.log(" couponsuccess", data);
              var a = c;

              _this3.presentPopover(a[0].code, a[0].amount);

              localStorage.setItem("coupon", a[0].code);
              localStorage.setItem("couponamount", a[0].amount); //this.dismiss();
            }, function (error) {
              console.log("oops", error);
              alert("Invalid parameter"); //this.dismiss();
            });
          }
        }, {
          key: "variationlist",
          value: function variationlist() {
            var _this4 = this;

            this.httpplugin.get("https://freshofast.com/wp-json/public-woo/v3/products/4667/variations/", {}, {}).then(function (res) {
              var response = res;

              _this4.dismiss();

              console.log("variation  data ", response);
            });
          }
        }, {
          key: "additem",
          value: function additem(value, index, weight) {
            var _this5 = this;

            if (localStorage.getItem("login")) {
              if (this.value) {
                // this.value = weight;
                this.presentLoading(); // document.getElementById("mySelect").value

                console.log("add item", value.quantity); //https://freshofast.com/wp-json/cocart/v1/add-item

                localStorage.getItem("username");
                localStorage.getItem("password");
                var httpOptions = {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
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
                    console.log("if condition", value.quantity[i].weight, this.value); //var req = encodeURIComponent(JSON.stringify(body));

                    console.log("body------", body);
                    this.httpplugin.setDataSerializer("json");
                    this.httpplugin.post("https://freshofast.com/wp-json/cocart/v1/add-item", //{
                    body, {
                      Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password"))),
                      "Content-Type": "application/json"
                    } //}
                    ).then(function (data) {
                      console.log("success", JSON.stringify(data));

                      _this5.cartdata(); // this.Additem = this.Additem + 1;
                      // localStorage.setItem("addedItem", this.Additem.toString());


                      _this5.addcardtoast(); // this.dismiss();

                    }, function (error) {
                      console.log("oops", JSON.stringify(error));
                      alert("Out of Stock");

                      _this5.dismiss();
                    });
                  } else {
                    console.log("else condition", value.quantity[i].weight, this.value);
                  }
                }

                this.value = null;
              } else if (weight) {
                this.value = weight; // this.value = weight;

                this.presentLoading(); // document.getElementById("mySelect").value

                console.log("add item", value.quantity); //https://freshofast.com/wp-json/cocart/v1/add-item

                localStorage.getItem("username");
                localStorage.getItem("password");
                var _httpOptions = {
                  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
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
                    console.log("if condition", value.quantity[i].weight, this.value, _body);
                    this.httpplugin.setDataSerializer("json");
                    this.httpplugin.post("https://freshofast.com/wp-json/cocart/v1/add-item", //{
                    _body, {
                      Authorization: "Basic " + btoa("".concat(localStorage.getItem("username"), ":").concat(localStorage.getItem("password"))),
                      "Content-Type": "application/json"
                    } //}
                    ).then(function (data) {
                      console.log("success", data);

                      _this5.cartdata();

                      _this5.addcardtoast(); // this.Additem = this.Additem + 1;
                      // localStorage.setItem("addedItem", this.Additem.toString());
                      // this.dismiss();

                    }, function (error) {
                      console.log("oops", error);
                      alert("Out of Stock");

                      _this5.dismiss();
                    });
                  } else {
                    this.dismiss();
                    console.log("else condition", value.quantity[i].weight, this.value);
                  }
                }

                this.value = null;
              } else {
                this.dismiss();
                alert("Please Select the quantity");
              }
            } else {
              alert("You need to login");
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
            var _this6 = this;

            //  this.presentLoading();
            // localStorage.getItem("username");
            //     localStorage.getItem("password");
            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
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

              console.log("res data ", response.length, _this6.cartflag); // if (this.cartflag == true || response.length != 0) {

              _this6.cartflag = false;
              _this6.cartlist = [];

              for (var propName in response) {
                if (response.hasOwnProperty(propName)) {
                  var propValue = response[propName];
                  console.log("propValue data ", propValue);

                  _this6.cartlist.push(propValue); // do something with each element here

                }
              } // if (response.length != 0) {
              //   this.addcardtoast();
              // }


              console.log(" if cart item", response, _this6.cartlist);

              _this6.dismiss(); // } else if (this.cartflag == false && response.length == 0) {
              //   alert("Please Login ");
              //   this.dismiss();
              //   console.log("else if cart item", response, this.cartlist);
              //   // this.cartlist.push(data);
              // }
              //this.dismiss();
              //this.totalcosting();
              //console.log("cart item", response, this.cartlist);

            });
          }
        }, {
          key: "opencartpage",
          value: function opencartpage() {
            if (localStorage.getItem("login")) {
              this.route.navigate(["/checkout-page"]);
            } else {
              alert("You need to login");
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map