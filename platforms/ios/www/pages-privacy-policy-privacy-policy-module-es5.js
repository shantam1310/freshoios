(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-privacy-policy-privacy-policy-module"], {
    /***/
    "89RN":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PrivacyPolicyPageRoutingModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageRoutingModule", function () {
        return PrivacyPolicyPageRoutingModule;
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


      var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./privacy-policy.page */
      "m7nN");

      var routes = [{
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPolicyPage"]
      }];

      var PrivacyPolicyPageRoutingModule = function PrivacyPolicyPageRoutingModule() {
        _classCallCheck(this, PrivacyPolicyPageRoutingModule);
      };

      PrivacyPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrivacyPolicyPageRoutingModule);
      /***/
    },

    /***/
    "cjqQ":
    /*!***************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy.module.ts ***!
      \***************************************************************/

    /*! exports provided: PrivacyPolicyPageModule */

    /***/
    function cjqQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function () {
        return PrivacyPolicyPageModule;
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


      var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./privacy-policy-routing.module */
      "89RN");
      /* harmony import */


      var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy-policy.page */
      "m7nN");

      var PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
        _classCallCheck(this, PrivacyPolicyPageModule);
      };

      PrivacyPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyPageRoutingModule"]],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
      })], PrivacyPolicyPageModule);
      /***/
    },

    /***/
    "fXkI":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy-policy/privacy-policy.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fXkI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-toggle slot=\"start\">\n      <ion-icon\n        name=\"menu-outline\"\n        style=\"font-size: 170%; font-weight: bold; margin-left: 11%\"\n      ></ion-icon>\n    </ion-menu-toggle>\n    <ion-title style=\"font-size: 100%; font-family: revert\"\n      ><ion-img src=\"assets/logo.png\" alt=\"Freshofast\" style=\"width: 59%\">\n      </ion-img\n    ></ion-title>\n    <!-- <ion-buttons slot=\"end\" style=\"margin-right: 2%\">\n      <ion-icon slot=\"end\" name=\"search-outline\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 10px; text-align: center\">\n    <h2>Privacy Policy</h2>\n    The Company respects your privacy and values the trust you place in it. Set\n    out below is the Company’s ‘Privacy Policy’ which details the manner in\n    which information relating to you is collected, used and disclosed. Customer\n    are advised to read and understand our Privacy Policy carefully, as by\n    accessing the website you agree to be bound by the terms and conditions of\n    the Privacy Policy and consent to the collection, storage and use of\n    information relating to you as provided herein. If you do not agree with the\n    terms and conditions of our Privacy Policy, including in relation to the\n    manner of collection or use of your information, please do not use or access\n    the website. We also collect and store personal information provided by you\n    from time to time on the website. We only collect and use such information\n    from you that we consider necessary for achieving a seamless, efficient and\n    safe experience, customized to your needs including: To enable the provision\n    of services opted for by you;To communicate necessary account and\n    product/service related information from time to time; To allow you to\n    receive quality customer care services;To undertake necessary fraud and\n    money laundering prevention checks, and comply with the highest security\n    standards; To comply with applicable laws, rules and regulations; andTo\n    provide you with information and offers on products and services, on\n    updates, on promotions, on related, affiliated or associated service\n    providers and partners, that we believe would be of interest to you. Where\n    any service requested by you involves a third party, such information as is\n    reasonably necessary by the Company to carry out your service request may be\n    shared with such third party. We also do use your contact information to\n    send you offers based on your interests and prior activity. The Company may\n    also use contact information internally to direct its efforts for product\n    improvement, to contact you as a survey respondent, to notify you if you win\n    any contest; and to send you promotional materials from its contest sponsors\n    or advertisers. Contacts Permissions: If you allow Freshofast to access your\n    contacts (including contact number, email id etc.), it enables Freshofast to\n    subscribe you and your contacts to Freshofast promotional emails, messages,\n    ongoing offers etc., and through this permission you and your contacts will\n    be able to access a variety of social features such as inviting your friends\n    to try our app, send across referral links to your friends, etc. We may also\n    use this information to make recommendations of grocery items you placed.\n    This information will be synced from your phone and stored on our servers.\n    Further, you may from time to time choose to provide payment related\n    financial information (credit card, debit card, bank account details,\n    billing address etc.) on the website. We are committed to keeping all such\n    sensitive data/information safe at all times and ensure that such\n    data/information is only transacted over secure website [of approved payment\n    gateways which are digitally encrypted], and provide the highest possible\n    degree of care available under the technology presently in use. The Company\n    will not use your financial information for any purpose other than to\n    complete a transaction with you. To the extent possible, we provide you the\n    option of not divulging any specific information that you wish for us not to\n    collect, store or use. You may also choose not to use a particular service\n    or feature on the websitelication, and opt out of any non-essential\n    communications from the Company. Further, transacting over the internet has\n    inherent risks which can only be avoided by you following security practices\n    yourself, such as not revealing account/login related information to any\n    other person and informing our customer care team about any suspicious\n    activity or where your account has/may have been compromised. Company use\n    data collection devices such as “cookies” on certain pages of the website to\n    help analyse our web page flow, measure promotional effectiveness, and\n    promote trust and safety. “Cookies” are small files placed on your hard\n    drive that assist us in providing our services. Company offers certain\n    features that are only available through the use of a “cookie”. The Company\n    also use cookies to allow you to enter your password less frequently during\n    a session. Cookies can also help the Company provide information that is\n    targeted to your interests. Most cookies are “session cookies,” meaning that\n    they are automatically deleted from your hard drive at the end of a session.\n    You are always free to decline our cookies if your browser permits, although\n    in that case you may not be able to use certain features on the website and\n    you may be required to re-enter your password more frequently during a\n    session. Additionally, you may encounter “cookies” or other similar devices\n    on certain pages of the website that are placed by third parties. The\n    Company does not control the use of cookies by third parties. If you send\n    the Company personal correspondence, such as emails or letters, or if other\n    users or third parties send us correspondence about your activities on the\n    website, the Company may collect such information into a file specific to\n    you. The website may contain links to other websites. We are not responsible\n    for the privacy practices of such websites which we do not manage and\n    control.\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "m7nN":
    /*!*************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy.page.ts ***!
      \*************************************************************/

    /*! exports provided: PrivacyPolicyPage */

    /***/
    function m7nN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function () {
        return PrivacyPolicyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./privacy-policy.page.html */
      "fXkI");
      /* harmony import */


      var _privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./privacy-policy.page.scss */
      "xM6X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrivacyPolicyPage = /*#__PURE__*/function () {
        function PrivacyPolicyPage() {
          _classCallCheck(this, PrivacyPolicyPage);
        }

        _createClass(PrivacyPolicyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyPolicyPage;
      }();

      PrivacyPolicyPage.ctorParameters = function () {
        return [];
      };

      PrivacyPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PrivacyPolicyPage);
      /***/
    },

    /***/
    "xM6X":
    /*!***************************************************************!*\
      !*** ./src/app/pages/privacy-policy/privacy-policy.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function xM6X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #60be74;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoicHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2MGJlNzQ7XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-privacy-policy-privacy-policy-module-es5.js.map