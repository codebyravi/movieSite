(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-sign-in-sign-in-module"],{

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h2>{{'Sign-in.Title' | translate}}</h2>\n  <button class=\"btn-social btn-facebook\" mat-raised-button (click)=\"login('facebook')\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 216 216\" class=\"_5h0m\" color=\"#ffffff\"><path fill=\"#ffffff\" d=\"\n          M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9\n          11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1\n          11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2\n          15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3\n          11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z\"></path></svg> \n          <span>{{'Sign-in.Btn-sign' | translate}} Facebook</span>\n  </button>\n  <button class=\"btn-social btn-google\" mat-button (click)=\"login('google')\">\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18px\" height=\"18px\" viewBox=\"0 0 48 48\" class=\"abcRioButtonSvg\"><g><path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"></path><path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"></path><path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"></path><path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"></path><path fill=\"none\" d=\"M0 0h48v48H0z\"></path></g></svg>\n    <span>{{'Sign-in.Btn-sign' | translate}} Google</span>\n  </button>\n  <button class=\"btn-social btn-twitter\" mat-button (click)=\"login('twitter')\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n              <g>\n                <path style=\"fill:#337ab7;\" d=\"M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z\"></path>\n              </g>\n    </svg>\n    <span>{{'Sign-in.Btn-sign' | translate}} Twitter</span>\n  </button>\n</section>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-social {\n  margin: 0.625rem 10px;\n  min-width: 242px;\n  height: 40px;\n  border: none;\n  background: transparent;\n  outline: none; }\n\n.btn-twitter {\n  background-color: #FFF; }\n\n.btn-facebook {\n  background-color: #4267b2;\n  color: #FFF; }\n\n.btn-google {\n  background-color: #4285f4;\n  color: #FFF; }\n\nsvg {\n  height: 24px;\n  width: 24px;\n  margin: 0 10px 0 -6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXNzZXRzL3Njc3MvcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixhQUFhLEVBQUE7O0FBRWY7RUFDRSxzQkNYVSxFQUFBOztBRGFaO0VBQ0UseUJDVGdCO0VEVWhCLFdDZlUsRUFBQTs7QURpQlo7RUFDRSx5QkNaZTtFRGFmLFdDbkJVLEVBQUE7O0FEcUJaO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUnO1xuXG4uYnRuLXNvY2lhbCB7XG4gIG1hcmdpbjogMC42MjVyZW0gMTBweDtcbiAgbWluLXdpZHRoOiAyNDJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJ0bi10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xufVxuLmJ0bi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRmYWNlYm9vaztcbiAgY29sb3I6ICR3aGl0ZTtcbn1cbi5idG4tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHR3aXR0ZXI7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5zdmcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW46IDAgMTBweCAwIC02cHg7XG59XG4iLCIkd2hpdGU6ICNGRkY7XG4kYmxhY2s6ICNjNWQ1Y2I7XG4kZ3JleTogIzlFOUU5RTtcbiRwcmltYXJ5LWxpZ2h0OiAjOWZhOGEzO1xuJGJhY2tncm91bmQ6ICNlM2UwY2Y7XG4kZmFjZWJvb2s6ICM0MjY3YjI7XG4kdHdpdHRlcjogIzQyODVmNDtcbiRncmVlbjogIzRjYWY1MDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kdGVhbCA6ICMwMDk2ODg7Il19 */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






var SignInComponent = /** @class */ (function () {
    function SignInComponent(router, authService, snackBar, translateService) {
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.translateService = translateService;
    }
    SignInComponent.prototype.login = function (name) {
        var _this = this;
        this.authService.oAuthLogin(name, function (error) {
            if (error) {
                _this.error = error;
                _this.snackBar.open(_this.error, 'hide', { duration: 10000 });
            }
            else {
                _this.authService.readUser().subscribe(function (authData) {
                    if (authData) {
                        _this.translateService.get('Error.Welcome').subscribe(function (results) {
                            return _this.snackBar.open(results + ' ' + authData.displayName, '', { duration: 2000 });
                        });
                        _this.router.navigate(['/movies/now-playing']);
                    }
                });
            }
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_in_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in.routing */ "./src/app/sign-in/sign-in.routing.ts");





var SignInModule = /** @class */ (function () {
    function SignInModule() {
    }
    SignInModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _sign_in_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]]
        })
    ], SignInModule);
    return SignInModule;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.routing.ts":
/*!********************************************!*\
  !*** ./src/app/sign-in/sign-in.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.component */ "./src/app/sign-in/sign-in.component.ts");


var routes = [
    { path: '', component: _sign_in_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=app-sign-in-sign-in-module.js.map