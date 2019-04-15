(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-star-star-module"],{

/***/ "./src/app/star/star-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/star/star-routing.module.ts ***!
  \*********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star.component */ "./src/app/star/star.component.ts");


var routes = [
    { path: '', component: _star_component__WEBPACK_IMPORTED_MODULE_1__["StarComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/star/star.component.html":
/*!******************************************!*\
  !*** ./src/app/star/star.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n</div>\n<div class=\"person\">\n  <button class=\"btn-back\" (click)=\"back()\">\n    <mat-icon>arrow_back</mat-icon>\n  </button>\n  <section *ngIf=\"person\">\n    <img class=\"img_profile\" src=\"https://image.tmdb.org/t/p/w185/{{person.profile_path}}\" alt=\"profile\">\n    <h2>{{person.name}}</h2>\n    <p>{{person.birthday | date}}</p>\n    <p>{{person.biography}}</p>\n  </section>\n\n  <mat-tab-group>\n    <mat-tab label=\"{{'Star.Known in movies' | translate}}\">\n      <section class=\"items\" *ngIf=\"movies\">\n        <div class=\"item\" *ngFor=\"let movie of movies\">\n          <a [routerLink]=\"['/movie', movie.id]\">\n            <img *ngIf=\"movie.poster_path\" [defaultImage]=\"'assets/images/no_poster_available.jpg'\" [lazyLoad]=\"'https://image.tmdb.org/t/p/w185/' + movie.poster_path\"\n              alt=\"poster movie\">\n            <img *ngIf=\"!movie.poster_path\" src=\"assets/images/no_poster_available.jpg\" alt=\"No poster available\">\n            <p>{{movie.title}}</p>\n            <p>{{movie.character}}</p>\n          </a>\n        </div>\n      </section>\n    </mat-tab>\n    <mat-tab label=\"{{'Star.Known in TV' | translate}}\">\n      <section class=\"items\" *ngIf=\"tvCredits\">\n        <div class=\"item\" *ngFor=\"let tv of tv_credits\">\n          <img *ngIf=\"tv.poster_path\" [defaultImage]=\"'assets/images/no_poster_available.jpg'\" [lazyLoad]=\"'https://image.tmdb.org/t/p/w185/' + tv.poster_path\"\n            alt=\"poster movie\">\n          <img *ngIf=\"!tv.poster_path\" src=\"assets/images/no_poster_available.jpg\" alt=\"No poster available\">\n          <p>{{tv.name}}</p>\n          <p>{{tv.character}}</p>\n        </div>\n      </section>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/star/star.component.scss":
/*!******************************************!*\
  !*** ./src/app/star/star.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-back {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  border: none;\n  background: transparent;\n  color: #FFF;\n  cursor: pointer; }\n\n.person {\n  padding: 20px; }\n\n.person mat-tab-group p:nth-child(3) {\n    color: #9E9E9E; }\n\n.person p {\n    color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL3N0YXIvc3Rhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXNzZXRzL3Njc3MvcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQ1JRO0VEU1IsZUFBZSxFQUFBOztBQUduQjtFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFJUSxjQ2RNLEVBQUE7O0FEVWQ7SUFPUSxXQ25CSSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3Rhci9zdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvcGFsZXR0ZSc7XG5cbi5idG4tYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBlcnNvbiB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIG1hdC10YWItZ3JvdXAgcDpudGgtY2hpbGQoMykge1xuICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbn0iLCIkd2hpdGU6ICNGRkY7XG4kYmxhY2s6ICNjNWQ1Y2I7XG4kZ3JleTogIzlFOUU5RTtcbiRwcmltYXJ5LWxpZ2h0OiAjOWZhOGEzO1xuJGJhY2tncm91bmQ6ICNlM2UwY2Y7XG4kZmFjZWJvb2s6ICM0MjY3YjI7XG4kdHdpdHRlcjogIzQyODVmNDtcbiRncmVlbjogIzRjYWY1MDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kdGVhbCA6ICMwMDk2ODg7Il19 */"

/***/ }),

/***/ "./src/app/star/star.component.ts":
/*!****************************************!*\
  !*** ./src/app/star/star.component.ts ***!
  \****************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/tmdb/tmdb.service */ "./src/app/shared/service/tmdb/tmdb.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/storage/storage.service */ "./src/app/shared/service/storage/storage.service.ts");




/* SERVICES */



var StarComponent = /** @class */ (function () {
    function StarComponent(location, route, tmdbService, storageService) {
        this.location = location;
        this.route = route;
        this.tmdbService = tmdbService;
        this.storageService = storageService;
    }
    StarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.lang = this.storageService.read('language');
        var id = this.route.snapshot.paramMap.get('id');
        var getPerson = this.tmdbService.getPerson(+id, this.lang);
        var getPersonMovies = this.tmdbService.getPersonMovies(+id, this.lang);
        var getPersonTv = this.tmdbService.getPersonTv(+id, this.lang);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(getPerson, getPersonMovies, getPersonTv).subscribe(function (_a) {
            var person = _a[0], movies = _a[1], tvCredits = _a[2];
            _this.isLoadingResults = false;
            _this.person = person;
            _this.movies = movies.cast.slice(0, 10);
            _this.tvCredits = tvCredits.cast.slice(0, 10);
        });
    };
    StarComponent.prototype.back = function () {
        this.location.back();
    };
    StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/star/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.scss */ "./src/app/star/star.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_4__["TmdbService"],
            _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/star/star.module.ts":
/*!*************************************!*\
  !*** ./src/app/star/star.module.ts ***!
  \*************************************/
/*! exports provided: StarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarModule", function() { return StarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star.component */ "./src/app/star/star.component.ts");
/* harmony import */ var _star_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./star-routing.module */ "./src/app/star/star-routing.module.ts");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");






var StarModule = /** @class */ (function () {
    function StarModule() {
    }
    StarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _star_routing_module__WEBPACK_IMPORTED_MODULE_4__["routing"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__["LazyLoadImageModule"]
            ],
            declarations: [_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"]]
        })
    ], StarModule);
    return StarModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-star-star-module.js.map