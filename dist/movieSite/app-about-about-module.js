(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-about-about-module"],{

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");




var routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n  <div class=\"about__head\">\n    <img src=\"assets/icons/android-chrome-192x192.png\" alt=\"logo\">\n    <h2>MovieSite</h2>\n    <small>Version 1.0.0</small>\n  </div>\n  <div class=\"about__body\">\n    <div class=\"about--container\">\n      <div class=\"about--info\">\n        <mat-icon>bug_report</mat-icon>\n        <h3>Send a feedback</h3>\n        <p>If you have comments or suggestions, you can send an <a\n            href=\"mailto:info@codebyravi.com?subject=[MovieSite] Feedback\">email</a></p>\n      </div>\n    </div>\n    <div class=\"about--container\">\n      <div class=\"about--info\">\n        <mat-icon>perm_identity</mat-icon>\n        <h3>Developer</h3>\n        <p>C. Lamarque</p>\n      </div>\n    </div>\n    <div class=\"about--container\">\n      <div class=\"about--info\">\n        <mat-icon>movie_filter</mat-icon>\n        <h3>The movie Database</h3>\n        <p>This application uses the API from TMDB but is not certified or approved by them.</p>\n      </div>\n    </div>\n    <div class=\"about--container\">\n      <div class=\"about--info\">\n        <mat-icon>copyright</mat-icon>\n        <h3>2019 Copyright</h3>\n        <p>This application can not be reproduced or used in any manner whatsoever without the express written\n          permission of\n          the owner.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\n  padding: 0 20px; }\n  .about small, .about mat-icon {\n    color: white; }\n  .about__head {\n    padding: 40px; }\n  .about__head small {\n      display: block; }\n  .about__body {\n    display: flex;\n    flex-wrap: wrap; }\n  .about__body .about--container {\n      display: inherit;\n      width: 100%;\n      padding: 0 0 40px; }\n  .about__body .about--info {\n      display: inherit;\n      flex-direction: column;\n      width: 100%;\n      justify-content: center;\n      align-items: center; }\n  .about__body .about--info p {\n        margin: 0;\n        color: grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBO0VBRG5CO0lBSVEsWUFBWSxFQUFBO0VBR2hCO0lBQ0ksYUFBYSxFQUFBO0VBRGhCO01BSU8sY0FBYyxFQUFBO0VBSXRCO0lBQ0ksYUFBYTtJQUNiLGVBQWUsRUFBQTtFQUZsQjtNQU1XLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7RUFSNUI7TUFXVyxnQkFBZ0I7TUFDaEIsc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCx1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7RUFmOUI7UUFrQmUsU0FBUztRQUNULFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgXG4gICAgc21hbGwsIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICZfX2hlYWQge1xuICAgICAgICBwYWRkaW5nOiA0MHB4O1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYm9keSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAuYWJvdXQge1xuICAgICAgICAgICAgJi0tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0taW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-about-about-module.js.map