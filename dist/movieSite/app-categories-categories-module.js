(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-categories-categories-module"],{

/***/ "./src/app/categories/categories-add-modal/categories-add-modal.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/categories/categories-add-modal/categories-add-modal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{'Categories-add.Title' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'Categories-add.Content' | translate}}</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">{{'Btn-cancel' | translate}}</button>\n  <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>OK</button>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories-add-modal/categories-add-modal.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/categories/categories-add-modal/categories-add-modal.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1hZGQtbW9kYWwvY2F0ZWdvcmllcy1hZGQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/categories/categories-add-modal/categories-add-modal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/categories/categories-add-modal/categories-add-modal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CategoriesAddModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesAddModalComponent", function() { return CategoriesAddModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CategoriesAddModalComponent = /** @class */ (function () {
    function CategoriesAddModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CategoriesAddModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CategoriesAddModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories-add-modal',
            template: __webpack_require__(/*! ./categories-add-modal.component.html */ "./src/app/categories/categories-add-modal/categories-add-modal.component.html"),
            styles: [__webpack_require__(/*! ./categories-add-modal.component.scss */ "./src/app/categories/categories-add-modal/categories-add-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CategoriesAddModalComponent);
    return CategoriesAddModalComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories-delete-modal/categories-delete-modal.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/categories/categories-delete-modal/categories-delete-modal.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{'Categories-delete.Title' | translate}}</h1>\n<div mat-dialog-content>\n  <p>{{'Categories-delete.Content' | translate}}</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">{{'Btn-cancel' | translate}}</button>\n  <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>OK</button>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories-delete-modal/categories-delete-modal.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/categories/categories-delete-modal/categories-delete-modal.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1kZWxldGUtbW9kYWwvY2F0ZWdvcmllcy1kZWxldGUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/categories/categories-delete-modal/categories-delete-modal.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/categories/categories-delete-modal/categories-delete-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CategoriesDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesDeleteModalComponent", function() { return CategoriesDeleteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CategoriesDeleteModalComponent = /** @class */ (function () {
    function CategoriesDeleteModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CategoriesDeleteModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CategoriesDeleteModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories-delete-modal',
            template: __webpack_require__(/*! ./categories-delete-modal.component.html */ "./src/app/categories/categories-delete-modal/categories-delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./categories-delete-modal.component.scss */ "./src/app/categories/categories-delete-modal/categories-delete-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CategoriesDeleteModalComponent);
    return CategoriesDeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");




var routes = [
    { path: '', component: _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-shade\" *ngIf=\"isLoadingResults\">\n  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n</div>\n<ng-template [ngIf]=\"!isLoadingResults\">\n  <h2>{{ \"Categories.Title\" | translate }}</h2>\n  <button\n    class=\"btn-add-category\"\n    mat-icon-button\n    (click)=\"addCategoryDialog()\"\n    matTooltip=\"{{ 'Categories.Btn-add' | translate }}\"\n  >\n    <mat-icon>add</mat-icon>\n  </button>\n  <button\n    class=\"btn-delete-category\"\n    mat-icon-button\n    (click)=\"deleteCategoryDialog()\"\n    matTooltip=\"{{ 'Categories.Btn-delete' | translate }}\"\n  >\n    <mat-icon>delete_forever</mat-icon>\n  </button>\n  <mat-tab-group\n    class=\"categories__tab\"\n    #tabGroup\n    (selectedTabChange)=\"tabChanged($event)\"\n  >\n    <mat-tab label=\"{{ 'Categories.Favorites' | translate }}\">\n      <div *ngIf=\"movies.length > 0; else noData\">\n        <mat-nav-list *ngFor=\"let movie of movies\">\n          <a mat-list-item [routerLink]=\"['/movie', movie.movieId]\">\n            <div\n              matListAvatar\n              class=\"icon-container\"\n              [ngStyle]=\"{\n                'background-image':\n                  'url(' +\n                  'https://image.tmdb.org/t/p/original' +\n                  movie.poster_path +\n                  ')'\n              }\"\n            >\n              <mat-icon *ngIf=\"!movie.poster_path\" class=\"icon-movie\"\n                >movie</mat-icon\n              >\n            </div>\n            <h3 matLine>{{ movie.original_title }}</h3>\n            <p matLine>{{ movie.release_date | date }}</p>\n          </a>\n          <mat-action-list>\n            <button mat-icon-button (click)=\"shareDialog(movie)\">\n              <mat-icon>share</mat-icon>\n            </button>\n            <button\n              mat-icon-button\n              (click)=\"deleteMovieFromFavorites(movie.movieId)\"\n            >\n              <mat-icon>delete</mat-icon>\n            </button>\n          </mat-action-list>\n          <div class=\"actions\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"shareDialog(movie)\">\n                <mat-icon>share</mat-icon>\n                <span>{{ \"Btn-share\" | translate }}</span>\n              </button>\n              <button\n                mat-menu-item\n                (click)=\"deleteMovieFromFavorites(movie.movieId)\"\n              >\n                <mat-icon>delete</mat-icon>\n                <span>{{ \"Btn-delete\" | translate }}</span>\n              </button>\n            </mat-menu>\n          </div>\n        </mat-nav-list>\n      </div>\n      <ng-template #noData>\n        <h3>\n          {{ \"Categories.No favorites\" | translate }}\n          <mat-icon>sentiment_very_dissatisfied</mat-icon>\n        </h3>\n      </ng-template>\n    </mat-tab>\n    <mat-tab *ngFor=\"let category of categories\" [label]=\"category\">\n      <div *ngIf=\"movies.length > 0; else noData\">\n        <mat-nav-list *ngFor=\"let movie of movies\">\n          <a mat-list-item [routerLink]=\"['/movie', movie.movieId]\">\n            <div\n              matListAvatar\n              class=\"icon-container\"\n              [ngStyle]=\"{\n                'background-image':\n                  'url(' +\n                  'https://image.tmdb.org/t/p/original' +\n                  movie.poster_path +\n                  ')'\n              }\"\n            >\n              <mat-icon *ngIf=\"!movie.poster_path\" class=\"icon-movie\"\n                >movie</mat-icon\n              >\n            </div>\n            <h3 matLine>{{ movie.original_title }}</h3>\n            <p matLine>{{ movie.release_date | date }}</p>\n          </a>\n          <mat-action-list>\n            <button mat-icon-button (click)=\"shareDialog(movie)\">\n              <mat-icon>share</mat-icon>\n            </button>\n            <button\n              mat-icon-button\n              (click)=\"deleteMovieFromCategory(movie.category, movie.movieId)\"\n            >\n              <mat-icon>delete</mat-icon>\n            </button>\n          </mat-action-list>\n        </mat-nav-list>\n      </div>\n      <ng-template #noData>\n        <h3>\n          {{ \"Categories.No movies\" | translate }}\n          <mat-icon>sentiment_very_dissatisfied</mat-icon>\n        </h3>\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-add-category,\n.btn-delete-category {\n  color: white; }\n\n.categories__tab .mat-nav-list {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.categories__tab a.mat-list-item {\n  flex: 1; }\n\n.categories__tab a.mat-list-item:hover {\n    background: #e3e0cf; }\n\n.categories__tab .mat-list {\n  display: none; }\n\n@media only screen and (min-width: 731px) {\n    .categories__tab .mat-list {\n      display: flex; } }\n\n.categories__tab .mat-list-base button {\n  color: #9E9E9E; }\n\n.categories__tab .actions {\n  display: flex;\n  color: #FFF; }\n\n@media only screen and (min-width: 731px) {\n    .categories__tab .actions {\n      display: none; } }\n\n.categories__tab /deep/ .mat-list-text h3 {\n  color: #9fa8a3;\n  text-align: left; }\n\n.categories__tab /deep/ .mat-list-text p {\n  color: #FFF;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXNzZXRzL3Njc3MvcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVJLFlBQVksRUFBQTs7QUFJWDtFQUdPLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBTDFCO0VBUU8sT0FBTyxFQUFBOztBQVJkO0lBV1csbUJDZkksRUFBQTs7QURJZjtFQWVPLGFBQWEsRUFBQTs7QUFDYjtJQWhCUDtNQWlCVyxhQUFhLEVBQUEsRUFFcEI7O0FBbkJKO0VBdUJXLGNDN0JGLEVBQUE7O0FETVQ7RUEyQk8sYUFBYTtFQUNiLFdDcENBLEVBQUE7O0FEc0NBO0lBOUJQO01BK0JXLGFBQWEsRUFBQSxFQUVwQjs7QUFqQ0o7RUFvQ1csY0N6Q087RUQwQ1AsZ0JBQWdCLEVBQUE7O0FBckMzQjtFQXdDVyxXQ2hESjtFRGlESSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUnO1xuXG4uYnRuLWFkZC1jYXRlZ29yeSxcbi5idG4tZGVsZXRlLWNhdGVnb3J5IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXRlZ29yaWVzIHtcbiAgICAmX190YWIge1xuXG4gICAgICAgIC5tYXQtbmF2LWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGEubWF0LWxpc3QtaXRlbSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWF0LWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzMxcHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXQtbGlzdC1iYXNlIHtcbiAgXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzFweCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgL2RlZXAvIC5tYXQtbGlzdC10ZXh0IHtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiR3aGl0ZTogI0ZGRjtcbiRibGFjazogI2M1ZDVjYjtcbiRncmV5OiAjOUU5RTlFO1xuJHByaW1hcnktbGlnaHQ6ICM5ZmE4YTM7XG4kYmFja2dyb3VuZDogI2UzZTBjZjtcbiRmYWNlYm9vazogIzQyNjdiMjtcbiR0d2l0dGVyOiAjNDI4NWY0O1xuJGdyZWVuOiAjNGNhZjUwO1xuJHllbGxvdzogI2ZmYzEwNztcbiR0ZWFsIDogIzAwOTY4ODsiXX0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/database/database.service */ "./src/app/shared/service/database/database.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/component/share-modal/share-modal.component */ "./src/app/shared/component/share-modal/share-modal.component.ts");
/* harmony import */ var _categories_add_modal_categories_add_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-add-modal/categories-add-modal.component */ "./src/app/categories/categories-add-modal/categories-add-modal.component.ts");
/* harmony import */ var _categories_delete_modal_categories_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories-delete-modal/categories-delete-modal.component */ "./src/app/categories/categories-delete-modal/categories-delete-modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(databaseService, dialog, snackBar, translateService) {
        this.databaseService = databaseService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.translateService = translateService;
        this.categories = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.sub = this.databaseService.getMoviesCategoriesDefault('FavoriteMovie').subscribe(function (response) {
            _this.movies = response;
            _this.isLoadingResults = false;
        });
        this.sub = this.databaseService.getAllCategoriesUser().subscribe(function (response) {
            _this.getCategories = response;
            _this.categories = _this.getCategories.map(function (value) { return value.name; });
        });
    };
    CategoriesComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CategoriesComponent.prototype.cancelClick = function (event) {
        event.stopPropagation();
    };
    CategoriesComponent.prototype.tabChanged = function (event) {
        var _this = this;
        var name = event.tab.textLabel;
        if (event.index !== 0) {
            this.sub = this.databaseService.getMovieCategory(name).subscribe(function (response) {
                _this.movies = response;
            });
        }
        else {
            this.sub = this.databaseService.getMoviesCategoriesDefault('FavoriteMovie').subscribe(function (response) {
                _this.movies = response;
            });
        }
    };
    CategoriesComponent.prototype.deleteMovieFromFavorites = function (id, event) {
        var _this = this;
        event.stopPropagation();
        this.databaseService.deleteMoviesCategoriesDefault('FavoriteMovie', id, function (error) {
            if (error) {
                _this.snackBar.open(error, 'Hide', { duration: 5000 });
            }
            else {
                _this.translateService.get('Error.List-updated').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
            }
        });
    };
    CategoriesComponent.prototype.deleteMovieFromCategory = function (category, id) {
        var _this = this;
        this.databaseService.deleteMovieCategory(category, id, function (error) {
            if (error) {
                _this.snackBar.open(error, 'Hide', { duration: 5000 });
            }
            else {
                _this.translateService.get('Error.List-updated').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
            }
        });
    };
    CategoriesComponent.prototype.shareDialog = function (movie) {
        this.dialog.open(_shared_component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_4__["ShareModalComponent"], {
            data: { id: movie.movieId, original_title: movie.original_title }
        });
    };
    CategoriesComponent.prototype.addCategoryDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_categories_add_modal_categories_add_modal_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesAddModalComponent"], {
            data: { name: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.databaseService.addCategories(result, function (error) {
                    if (error) {
                        _this.snackBar.open(error, 'hide', { duration: 5000 });
                    }
                    else {
                        _this.translateService.get('Error.List-updated').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
                    }
                });
            }
        });
    };
    CategoriesComponent.prototype.deleteCategoryDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_categories_delete_modal_categories_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesDeleteModalComponent"], {
            width: '250px',
            data: { name: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.databaseService.deleteCategories(result, function (error) {
                    if (error) {
                        _this.snackBar.open(error, 'hide', { duration: 5000 });
                    }
                    else {
                        _this.translateService.get('Error.List-updated').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
                    }
                });
            }
        });
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_add_modal_categories_add_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-add-modal/categories-add-modal.component */ "./src/app/categories/categories-add-modal/categories-add-modal.component.ts");
/* harmony import */ var _categories_delete_modal_categories_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories-delete-modal/categories-delete-modal.component */ "./src/app/categories/categories-delete-modal/categories-delete-modal.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [
                _categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"],
                _categories_add_modal_categories_add_modal_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesAddModalComponent"],
                _categories_delete_modal_categories_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesDeleteModalComponent"]
            ],
            entryComponents: [
                _categories_add_modal_categories_add_modal_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesAddModalComponent"],
                _categories_delete_modal_categories_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesDeleteModalComponent"]
            ]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-categories-categories-module.js.map