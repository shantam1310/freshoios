(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('login.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbi5qcGdcIik7XG59XG4iXX0= */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"md\"\n  ><div\n    style=\"\n      text-align: center;\n      font-size: 4em;\n      font-family: auto;\n      margin-top: 1.5em;\n    \"\n  >\n    <span><ion-img src=\"assets/logo.png\" alt=\"Freshofast\"></ion-img></span>\n  </div>\n  <div\n    style=\"\n      font-size: 1.4em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 0.5em;\n    \"\n  >\n    Welcome!\n  </div>\n  <div\n    style=\"\n      font-size: 1.4em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 0.8em;\n    \"\n  >\n    Login in our account and get started\n  </div>\n  <ion-input\n    type=\"text\"\n    placeholder=\"User Name or Email\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 48%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    [(ngModel)]=\"user_name\"\n  ></ion-input\n  ><ion-input\n    type=\"password\"\n    placeholder=\"Password\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 48%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    [(ngModel)]=\"Password\"\n  ></ion-input\n  ><button\n    style=\"\n      background-color: #60be74;\n      border: none;\n      color: #f5f6f9;\n      padding: 10px 20px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      margin: 4px 2px;\n      cursor: pointer;\n      border-radius: 16px;\n      margin-left: 31%;\n      margin-top: 4%;\n      width: 36%;\n    \"\n    (click)=\"login()\"\n  >\n    Login\n  </button>\n  <div\n    style=\"\n      font-size: 1.4em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 0.8em;\n    \"\n    [routerLink]=\"['/sign-up']\"\n  >\n    New here? Sign Up\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_pages_location_location_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/location/location.page */ "N4Pa");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");








//import { CouponPopOverPage } from "src/app/pages/coupon-pop-over/coupon-pop-over.page";

let LoginPage = class LoginPage {
    constructor(http, httpclient, route, loadingController, popoverController) {
        this.http = http;
        this.httpclient = httpclient;
        this.route = route;
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.isLoading = false;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        //localStorage.setItem("login", "true");
        if (localStorage.getItem("login") == "true") {
            this.route.navigate(["/home"]);
            //this.login();
            console.log("pre login");
        }
        else {
            this.presentPopover();
            console.log("create  login");
        }
    }
    login() {
        this.presentLoading();
        if (this.user_name && this.Password) {
            localStorage.setItem("username", this.user_name);
            localStorage.setItem("password", this.Password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    Authorization: "Basic " + btoa(`${this.user_name}:${this.Password}`),
                }),
            };
            // this.http
            //   .get("http://freshofast.com/wp-json/wp/v2/users", httpOptions)
            this.http
                .get("http://freshofast.com/wp-json/wp/v2/users", {}, {
                Authorization: "Basic " + btoa(`${this.user_name}:${this.Password}`),
                "Content-Type": "application/json",
            })
                .then((data) => {
                console.log("success", data);
                localStorage.setItem("login", "true");
                this.user_detail();
                this.dismiss();
            }, (error) => {
                console.log("oops", error);
                alert("Credential is wrong");
                this.dismiss();
            });
        }
        else {
            this.dismiss();
            alert("Fill the Credential");
        }
    }
    user_detail() {
        let formData = new FormData();
        formData.append("user_login", this.user_name);
        const body = {
            user_login: this.user_name,
        };
        // http://freshofast.com/login
        this.httpclient
            .post("http://freshofast.com/login", formData)
            .subscribe((res) => {
            var response = res;
            this.dismiss();
            this.route.navigate(["/home"]);
            console.log("login data ", response);
            localStorage.setItem("profileId", response[0].ID);
        });
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
    presentPopover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_pages_location_location_page__WEBPACK_IMPORTED_MODULE_7__["LocationPage"],
                //event: ev,
                translucent: true,
                backdropDismiss: false,
                showBackdrop: false,
                keyboardClose: false,
            });
            return yield popover.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map