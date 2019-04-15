(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-account-account-module"],{

/***/ "./src/app/account/account-delete-modal/account-delete-modal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/account/account-delete-modal/account-delete-modal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{'Account-dialog.Title' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'Account-dialog.Content' | translate}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button color=\"primary\" (click)=\"onNoClick()\">{{'Btn-cancel' | translate}}</button>\n  <button mat-button color=\"primary\" [mat-dialog-close]=\"true\">OK</button>\n</div>"

/***/ }),

/***/ "./src/app/account/account-delete-modal/account-delete-modal.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/account/account-delete-modal/account-delete-modal.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n  text-align: center; }\n\n.mat-dialog-actions {\n  display: flex;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL2FjY291bnQvYWNjb3VudC1kZWxldGUtbW9kYWwvYWNjb3VudC1kZWxldGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQtZGVsZXRlLW1vZGFsL2FjY291bnQtZGVsZXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/account-delete-modal/account-delete-modal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/account/account-delete-modal/account-delete-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: AccountDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDeleteModalComponent", function() { return AccountDeleteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AccountDeleteModalComponent = /** @class */ (function () {
    function AccountDeleteModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AccountDeleteModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AccountDeleteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-delete-modal',
            template: __webpack_require__(/*! ./account-delete-modal.component.html */ "./src/app/account/account-delete-modal/account-delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./account-delete-modal.component.scss */ "./src/app/account/account-delete-modal/account-delete-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AccountDeleteModalComponent);
    return AccountDeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");




var routes = [
    { path: '', component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"] }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"account\">\n    <div class=\"account--informations\">\n        <div class=\"account--informations-avatar\">\n            <ng-template [ngIf]=\"photoURL\">\n                <img src=\"{{photoURL}}\" alt=\"profile\" width=\"50\">\n            </ng-template>\n            <ng-template [ngIf]=\"!photoURL\">\n                <div class=\"avatar\">{{notPhotoURL}}</div>\n            </ng-template>\n        </div>\n        <div class=\"account--informations-details\">\n            <p> {{displayName}}</p>\n            <small>{{email}}</small>\n        </div>\n    </div>\n    <div class=\"account--actions\">\n        <button mat-raised-button (click)=\"deleteAccountDialog()\">{{'Account.Delete account' | translate}}</button>\n    </div>\n</div>\n<div class=\"account__stat\">\n\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  color: white;\n  margin: 20px 0; }\n  @media only screen and (max-width: 731px) {\n    .account {\n      flex-direction: column; } }\n  .account--informations {\n    display: inherit;\n    flex-direction: row;\n    align-items: inherit;\n    justify-content: flex-end;\n    width: inherit; }\n  @media only screen and (max-width: 731px) {\n      .account--informations {\n        flex-direction: column;\n        justify-content: center;\n        margin: 0 0 20px; } }\n  .account--informations-details {\n      margin: 0 20px 0;\n      text-align: left; }\n  @media only screen and (max-width: 731px) {\n        .account--informations-details {\n          text-align: center; } }\n  .account--informations-details p {\n        margin: 0; }\n  .account--actions {\n    display: inherit;\n    width: inherit;\n    justify-content: center; }\n  .account--actions button {\n      background: #9fa8a3;\n      color: black; }\n  .avatar {\n  width: 50px;\n  height: 50px;\n  background: #FFF;\n  border-radius: 50%;\n  line-height: 3;\n  text-transform: capitalize;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXNzZXRzL3Njc3MvcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBRWQ7SUFUSjtNQVVRLHNCQUFzQixFQUFBLEVBdUM3QjtFQXBDRztJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixjQUFjLEVBQUE7RUFFZDtNQVBKO1FBUVEsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixnQkFBaUIsRUFBQSxFQWV4QjtFQVpHO01BQ0ksZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBO0VBQ2hCO1FBSEo7VUFJUSxrQkFBa0IsRUFBQSxFQU96QjtFQVhBO1FBU08sU0FBUyxFQUFBO0VBSXJCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUIsRUFBQTtFQUgxQjtNQU1PLG1CQzVDVztNRDZDWCxZQUFZLEVBQUE7RUFLeEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQ3hEUTtFRHlEUixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9wYWxldHRlJztcblxuLmFjY291bnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDIwcHggMDtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMxcHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAmLS1pbmZvcm1hdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzFweCkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAgMCAwIDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLWRldGFpbHMge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMXB4KSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLS1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1saWdodDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDM7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6IGJsYWNrO1xufSIsIiR3aGl0ZTogI0ZGRjtcbiRibGFjazogI2M1ZDVjYjtcbiRncmV5OiAjOUU5RTlFO1xuJHByaW1hcnktbGlnaHQ6ICM5ZmE4YTM7XG4kYmFja2dyb3VuZDogI2UzZTBjZjtcbiRmYWNlYm9vazogIzQyNjdiMjtcbiR0d2l0dGVyOiAjNDI4NWY0O1xuJGdyZWVuOiAjNGNhZjUwO1xuJHllbGxvdzogI2ZmYzEwNztcbiR0ZWFsIDogIzAwOTY4ODsiXX0= */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _account_delete_modal_account_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-delete-modal/account-delete-modal.component */ "./src/app/account/account-delete-modal/account-delete-modal.component.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var AccountComponent = /** @class */ (function () {
    function AccountComponent(authService, snackBar, router, dialog, translateService) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.dialog = dialog;
        this.translateService = translateService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.authService.readUser().subscribe(function (authData) {
            if (authData) {
                _this.displayName = authData.displayName;
                _this.email = authData.email;
                _this.photoURL = authData.photoURL;
                _this.notPhotoURL = authData.displayName.slice(0, 1);
                _this.creationTime = dayjs__WEBPACK_IMPORTED_MODULE_6__(authData.metadata.creationTime).format('YYYY-MM-D');
            }
        });
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AccountComponent.prototype.deleteAccountDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_account_delete_modal_account_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["AccountDeleteModalComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.authService.deleteUser(function (error) {
                    if (error) {
                        _this.snackBar.open(error, 'hide', { duration: 5000 });
                    }
                    else {
                        _this.translateService.get('Error.Delete').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
                        _this.router.navigate(['/movies/now-playing']);
                    }
                });
            }
        });
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _account_delete_modal_account_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-delete-modal/account-delete-modal.component */ "./src/app/account/account-delete-modal/account-delete-modal.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");







var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [
                _account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"],
                _account_delete_modal_account_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["AccountDeleteModalComponent"]
            ],
            entryComponents: [_account_delete_modal_account_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["AccountDeleteModalComponent"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-account-account-module.js.map