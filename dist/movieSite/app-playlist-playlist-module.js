(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-playlist-playlist-module"],{

/***/ "./src/app/playlist/playlist-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/playlist/playlist-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _playlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist.component */ "./src/app/playlist/playlist.component.ts");


var routes = [
    { path: '', component: _playlist_component__WEBPACK_IMPORTED_MODULE_1__["PlaylistComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/playlist/playlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/playlist/playlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-shade\" *ngIf=\"isLoadingResults\">\n  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n</div>\n<ng-template [ngIf]=\"!isLoadingResults\">\n  <h2>{{ \"Watch later.Title\" | translate }}</h2>\n  <mat-tab-group class=\"playlist__tab\">\n    <mat-tab label=\"{{ 'Watch later.To watch' | translate }}\">\n      <div *ngIf=\"moviesToWatch.length > 0; else noData\">\n        <mat-nav-list *ngFor=\"let movie of moviesToWatch\">\n          <a mat-list-item [routerLink]=\"['/movie', movie.movieId]\">\n            <div\n              matListAvatar\n              class=\"icon-container\"\n              [ngStyle]=\"{\n                'background-image':\n                  'url(' +\n                  'https://image.tmdb.org/t/p/original' +\n                  movie.poster_path +\n                  ')'\n              }\"\n            >\n              <mat-icon *ngIf=\"!movie.poster_path\" class=\"icon-movie\"\n                >movie</mat-icon\n              >\n            </div>\n            <h3 matLine>{{ movie.original_title }}</h3>\n            <p matLine>{{ movie.release_date | date }}</p>\n          </a>\n          <mat-action-list>\n            <button mat-icon-button (click)=\"shareDialog(movie)\">\n              <mat-icon>share</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"deleteMovie(movie.movieId)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"watchedMovie(movie.movieId, true)\">\n              <mat-icon>visibility</mat-icon>\n            </button>\n          </mat-action-list>\n          <div class=\"actions\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"shareDialog(movie)\">\n                <mat-icon>share</mat-icon>\n                <span>{{ \"Btn-share\" | translate }}</span>\n              </button>\n              <button mat-menu-item (click)=\"deleteMovie(movie.movieId)\">\n                <mat-icon>delete</mat-icon>\n                <span>{{ \"Btn-delete\" | translate }}</span>\n              </button>\n              <button mat-menu-item (click)=\"watchedMovie(movie.movieId, true)\">\n                <mat-icon>visibility</mat-icon>\n                <span>{{ \"Watch later.Watched?\" | translate }}</span>\n              </button>\n            </mat-menu>\n          </div>\n        </mat-nav-list>\n      </div>\n      <ng-template #noData>\n        <h3>\n          {{ \"Watch later.No movies\" | translate }}\n          <mat-icon>sentiment_very_dissatisfied</mat-icon>\n        </h3>\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"{{ 'Watch later.Watched' | translate }}\">\n      <div *ngIf=\"moviesWatched.length > 0; else noData\">\n        <mat-nav-list *ngFor=\"let movie of moviesWatched\">\n          <a mat-list-item [routerLink]=\"['/movie', movie.movieId]\">\n            <div\n              matListAvatar\n              class=\"icon-container\"\n              [ngStyle]=\"{\n                'background-image':\n                  'url(' +\n                  'https://image.tmdb.org/t/p/original' +\n                  movie.poster_path +\n                  ')'\n              }\"\n            >\n              <mat-icon *ngIf=\"!movie.poster_path\" class=\"icon-movie\"\n                >movie</mat-icon\n              >\n            </div>\n            <h3 matLine>{{ movie.original_title }}</h3>\n            <p matLine>{{ movie.release_date | date }}</p>\n          </a>\n          <mat-action-list>\n            <button mat-icon-button (click)=\"shareDialog(movie)\">\n              <mat-icon>share</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"deleteMovie(movie.movieId)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"watchedMovie(movie.movieId, false)\">\n              <mat-icon>visibility_off</mat-icon>\n            </button>\n          </mat-action-list>\n          <div class=\"actions\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item (click)=\"shareDialog(movie)\">\n                <mat-icon>share</mat-icon>\n                <span>{{ \"Btn-share\" | translate }}</span>\n              </button>\n              <button mat-menu-item (click)=\"deleteMovie(movie.movieId)\">\n                <mat-icon>delete</mat-icon>\n                <span>{{ \"Btn-delete\" | translate }}</span>\n              </button>\n              <button\n                mat-menu-item\n                (click)=\"watchedMovie(movie.movieId, false)\"\n              >\n                <mat-icon>visibility_off</mat-icon>\n                <span>{{ \"Watch later.Not Watched\" | translate }}</span>\n              </button>\n            </mat-menu>\n          </div>\n        </mat-nav-list>\n      </div>\n      <ng-template #nodata>\n        <h3>\n          {{ \"Watch later.No movies\" | translate }}\n          <mat-icon>sentiment_very_dissatisfied</mat-icon>\n        </h3>\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/playlist/playlist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/playlist/playlist.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playlist__tab .mat-nav-list {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.playlist__tab a.mat-list-item {\n  flex: 1;\n  overflow: hidden; }\n\n.playlist__tab a.mat-list-item:hover {\n    background: #e3e0cf; }\n\n.playlist__tab .mat-list {\n  display: none; }\n\n@media only screen and (min-width: 731px) {\n    .playlist__tab .mat-list {\n      display: flex; } }\n\n.playlist__tab .mat-list-base button {\n  color: #9E9E9E; }\n\n.playlist__tab .actions {\n  display: flex;\n  color: #FFF; }\n\n@media only screen and (min-width: 731px) {\n    .playlist__tab .actions {\n      display: none; } }\n\n.playlist__tab /deep/ .mat-list-text h3 {\n  color: #9fa8a3;\n  text-align: left; }\n\n.playlist__tab /deep/ .mat-list-text p {\n  color: #FFF;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhdml2YWxsdXJpL0Rlc2t0b3AvbW92aWVTaXRlL3NyYy9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0s7RUFHTyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUwxQjtFQVFPLE9BQU87RUFDUCxnQkFBZ0IsRUFBQTs7QUFUdkI7SUFZVyxtQkNYSSxFQUFBOztBRERmO0VBZ0JPLGFBQWEsRUFBQTs7QUFDYjtJQWpCUDtNQWtCVyxhQUFhLEVBQUEsRUFFcEI7O0FBcEJKO0VBdUJXLGNDeEJGLEVBQUE7O0FEQ1Q7RUEyQk8sYUFBYTtFQUNiLFdDL0JBLEVBQUE7O0FEaUNBO0lBOUJQO01BK0JXLGFBQWEsRUFBQSxFQUVwQjs7QUFqQ0o7RUFvQ1csY0NwQ087RURxQ1AsZ0JBQWdCLEVBQUE7O0FBckMzQjtFQXdDVyxXQzNDSjtFRDRDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3MvcGFsZXR0ZSc7XG5cbi5wbGF5bGlzdCB7XG4gICAgJl9fdGFiIHtcblxuICAgICAgICAubWF0LW5hdi1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBhLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXQtbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzFweCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1saXN0LWJhc2UgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzMxcHgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC9kZWVwLyAubWF0LWxpc3QtdGV4dCB7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkd2hpdGU6ICNGRkY7XG4kYmxhY2s6ICNjNWQ1Y2I7XG4kZ3JleTogIzlFOUU5RTtcbiRwcmltYXJ5LWxpZ2h0OiAjOWZhOGEzO1xuJGJhY2tncm91bmQ6ICNlM2UwY2Y7XG4kZmFjZWJvb2s6ICM0MjY3YjI7XG4kdHdpdHRlcjogIzQyODVmNDtcbiRncmVlbjogIzRjYWY1MDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kdGVhbCA6ICMwMDk2ODg7Il19 */"

/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/component/share-modal/share-modal.component */ "./src/app/shared/component/share-modal/share-modal.component.ts");
/* harmony import */ var _shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/database/database.service */ "./src/app/shared/service/database/database.service.ts");






var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(databaseService, dialog, snackBar, translateService) {
        this.databaseService = databaseService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.translateService = translateService;
        this.moviesToWatch = [];
        this.moviesWatched = [];
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.sub = this.databaseService.getMoviesCategoriesDefault('MovieLater').subscribe(function (response) {
            // tslint:disable-next-line: no-string-literal
            _this.moviesToWatch = response.filter(function (val) { return val['watched'] === false; });
            // tslint:disable-next-line: no-string-literal
            _this.moviesWatched = response.filter(function (val) { return val['watched'] === true; });
            _this.isLoadingResults = false;
        });
    };
    PlaylistComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlaylistComponent.prototype.deleteMovie = function (id) {
        var _this = this;
        this.databaseService.deleteMoviesCategoriesDefault('MovieLater', id, function (error) {
            if (error) {
                _this.snackBar.open(error, 'Hide', { duration: 5000 });
            }
            else {
                _this.translateService.get('Error.List-updated').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
            }
        });
    };
    PlaylistComponent.prototype.shareDialog = function (movie) {
        this.dialog.open(_shared_component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_4__["ShareModalComponent"], {
            data: { id: movie.movieId, original_title: movie.original_title }
        });
    };
    PlaylistComponent.prototype.watchedMovie = function (movieId, watched) {
        var _this = this;
        this.databaseService.updateMovieCategoriesDefault(movieId, watched, function (error) {
            if (error) {
                _this.snackBar.open(error, 'Hide', { duration: 5000 });
            }
            else {
                _this.translateService.get('Error.List-updated').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
            }
        });
    };
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__(/*! ./playlist.component.html */ "./src/app/playlist/playlist.component.html"),
            styles: [__webpack_require__(/*! ./playlist.component.scss */ "./src/app/playlist/playlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/playlist/playlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/playlist/playlist.module.ts ***!
  \*********************************************/
/*! exports provided: PlaylistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistModule", function() { return PlaylistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _playlist_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playlist-routing.module */ "./src/app/playlist/playlist-routing.module.ts");





var PlaylistModule = /** @class */ (function () {
    function PlaylistModule() {
    }
    PlaylistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _playlist_routing_module__WEBPACK_IMPORTED_MODULE_4__["routing"],
            ],
            declarations: [
                _playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistComponent"],
            ]
        })
    ], PlaylistModule);
    return PlaylistModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-playlist-playlist-module.js.map