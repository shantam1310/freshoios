(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"],{

/***/ "Dk72":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"md\"\n  ><div\n    style=\"\n      text-align: center;\n      font-size: 4em;\n      font-family: auto;\n      margin-top: 1.5em;\n    \"\n  >\n    <span><ion-img src=\"assets/logo.png\" alt=\"Freshofast\"></ion-img></span>\n  </div>\n  <div\n    style=\"\n      font-size: 1.4em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 0.5em;\n    \"\n  >\n    Welcome!\n  </div>\n  <div\n    style=\"\n      font-size: 1.4em;\n      text-align: center;\n      font-weight: 700;\n      margin-top: 0.8em;\n    \"\n  >\n    Sign in our account and get started\n  </div>\n  <ion-input\n    type=\"text\"\n    placeholder=\"User Name\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 53%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    [(ngModel)]=\"user_name\"\n  ></ion-input>\n  <ion-input\n    type=\"text\"\n    placeholder=\"First Name\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 53%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    [(ngModel)]=\"first_name\"\n  ></ion-input>\n  <ion-input\n    type=\"text\"\n    placeholder=\"Last Name\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 53%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    [(ngModel)]=\"last_name\"\n  ></ion-input>\n  <ion-input\n    type=\"text\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 53%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    placeholder=\"Mail\"\n    [(ngModel)]=\"mail\"\n  ></ion-input>\n  <!-- <ion-input\n    type=\"text\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 53%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    placeholder=\"Mobile.no\"\n    [(ngModel)]=\"mobile\"\n  ></ion-input> -->\n\n  <ion-input\n    type=\"password\"\n    placeholder=\"Password\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 53%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    [(ngModel)]=\"Password\"\n  ></ion-input>\n  <ion-input\n    type=\"password\"\n    placeholder=\"Confirm Password\"\n    style=\"\n      background-color: white;\n      margin-top: 3%;\n      margin-left: 25%;\n      width: 53%;\n      border-radius: 4%;\n      height: 5%;\n      color: black;\n    \"\n    [(ngModel)]=\"confirm_password\"\n  ></ion-input>\n  <button\n    style=\"\n      background-color: #60be74;\n      border: none;\n      color: #f5f6f9;\n      padding: 10px 20px;\n      text-align: center;\n      text-decoration: none;\n      display: inline-block;\n      margin: 4px 2px;\n      cursor: pointer;\n      border-radius: 16px;\n      margin-left: 31%;\n      margin-top: 4%;\n      width: 36%;\n    \"\n    (click)=\"signup()\"\n  >\n    SignUp\n  </button>\n</ion-content>\n\n<!-- <ion-input type=\"text\" placeholder=\"First Name\" style=\"background-color: white; margin-top: 3%; margin-left: 25%; width: 48%; border-radius: 4%; height: 5%; color: black;\" placeholder=\"First Name\" ></ion-input> -->\n");

/***/ }),

/***/ "J606":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-routing.module */ "Z4dq");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "yntF");







let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "Z4dq":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "yntF");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "sWnx":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('login.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRiIsImZpbGUiOiJzaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9naW4uanBnXCIpO1xufVxuIl19 */");

/***/ }),

/***/ "yntF":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
  \***********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.page.html */ "Dk72");
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.page.scss */ "sWnx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");








let SignUpPage = class SignUpPage {
    constructor(http, route, loadingController, popoverController) {
        this.http = http;
        this.route = route;
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.isLoading = false;
        // this.login();
        // this.convertText();
        // this.encryptData("BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
        //this.decryptData("$P$BGhyZLcMrKeaOSAyKGw50LvGEotaFr.");
        //{ Authorization: 'Basic ' + btoa('admin:in2ittech2020'), 'Content-Type': 'application/json' }
    }
    ngOnInit() { }
    signup() {
        this.presentLoading();
        if (this.user_name && this.Password && this.mail && this.confirm_password) {
            if (this.Password == this.confirm_password) {
                const httpOptions = {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                        "Content-Type": "application/json",
                        Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
                    }),
                };
                const body = {
                    username: this.user_name,
                    password: this.Password,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.mail,
                    // phone: this.mobile,
                    roles: "customer",
                };
                console.log("form data ", body);
                this.http.setDataSerializer("json");
                this.http
                    .post("https://freshofast.com/wp-json/wp/v2/users", 
                //{
                body, {
                    Authorization: "Basic " + btoa("freshofast:Freshofast@#2020"),
                    "Content-Type": "application/json",
                }
                //}
                )
                    .then((data) => {
                    console.log("success", data);
                    console.log("sign up data ", data);
                    this.route.navigate(["/login"]);
                    this.dismiss();
                }, (error) => {
                    console.log("oops", error);
                    alert("Invalid parameter");
                    this.dismiss();
                });
                // alert("Detail already Exist");
                //console.log("form data 3");
            }
            // console.log("form data 2");
        }
        else {
            //console.log("form data 4");
            this.dismiss();
            alert("Fill the Credential");
        }
        this.dismiss();
        // console.log("form data 5");
    }
    // login() {
    //   this.presentLoading();
    //   if (this.user_name && this.Password) {
    //     const httpOptions = {
    //       headers: new HttpHeaders({
    //         "Content-Type": "application/json",
    //         Authorization: "Basic " + btoa(`${this.user_name}:${this.Password}`),
    //       }),
    //     };
    //     this.http
    //       .get("https://freshofast.com/wp-json/wp/v2/users", httpOptions)
    //       .subscribe((res) => {
    //         var response: any = res;
    //         this.dismiss();
    //         this.route.navigate(["/home"]);
    //         console.log("login data ", response);
    //       });
    //   } else {
    //     alert("Fill the Credential");
    //   }
    // }
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
};
SignUpPage.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-sign-up",
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es2015.js.map