(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		"./src/app/about/about.module.ts",
		"app-about-about-module"
	],
	"app/account/account.module": [
		"./src/app/account/account.module.ts",
		"app-account-account-module"
	],
	"app/categories/categories.module": [
		"./src/app/categories/categories.module.ts",
		"app-categories-categories-module"
	],
	"app/playlist/playlist.module": [
		"./src/app/playlist/playlist.module.ts",
		"app-playlist-playlist-module"
	],
	"app/sign-in/sign-in.module": [
		"./src/app/sign-in/sign-in.module.ts",
		"app-sign-in-sign-in-module"
	],
	"app/star/star.module": [
		"./src/app/star/star.module.ts",
		"app-star-star-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");
/* harmony import */ var _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movie-list/movie-list.component */ "./src/app/movies/movie-list/movie-list.component.ts");
/* harmony import */ var _movies_movie_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movie/movie.component */ "./src/app/movies/movie/movie.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");








var routes = [
    { path: 'movies/:category', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__["MoviesComponent"] },
    { path: 'movie/:id', component: _movies_movie_movie_component__WEBPACK_IMPORTED_MODULE_5__["MovieComponent"] },
    { path: 'genre', component: _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__["MovieListComponent"] },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'playlist', loadChildren: 'app/playlist/playlist.module#PlaylistModule', canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'categories', loadChildren: 'app/categories/categories.module#CategoriesModule', canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule', canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'sign-in', loadChildren: 'app/sign-in/sign-in.module#SignInModule' },
    { path: 'star/:id', loadChildren: 'app/star/star.module#StarModule' },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
    { path: '', redirectTo: '/movies/now-playing', pathMatch: 'full' },
    { path: '**', redirectTo: '/movies/now-playing' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-toolbar\" [class.app-toolbar--mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <h1>MovieSite</h1>\n  </mat-toolbar>\n</div>\n<mat-sidenav-container class=\"app-sidenav\">\n  <mat-sidenav [opened]=\"mobileQuery.matches ? 'false': 'true'\" #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n    [fixedInViewport]=\"mobileQuery.matches\">\n    <nav class=\"navigation\">\n      <div class=\"navigation--search\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>{{'App.Search movies' |translate}}...</mat-label>\n          <input matInput #search (keyup.enter)=\"searchMovie(search.value); search.value=''\"\n            (keyup.enter)=\"closeSidenav()\" tabindex=\"-1\">\n          <mat-icon matSuffix>search</mat-icon>\n        </mat-form-field>\n      </div>\n      <ul class=\"navigation--links\">\n        <li>\n          <a [routerLink]=\"['/movies', 'now-playing']\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>local_movies</mat-icon> {{'App.Now-playing' | translate}}\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/movies', 'upcoming']\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>date_range</mat-icon> {{'App.Coming soon' | translate}}\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/movies', 'discover']\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>whatshot</mat-icon> {{'App.Trending' | translate}}\n          </a>\n        </li>\n        <li *ngIf=\"authService.user | async\">\n          <a [routerLink]=\"['/playlist']\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>watch_later</mat-icon> {{'App.Watch later' | translate}}\n          </a>\n        </li>\n        <li *ngIf=\"authService.user | async\">\n          <a [routerLink]=\"['/categories']\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>folder</mat-icon> {{'App.Categories' | translate}}\n          </a>\n        </li>\n        <li *ngIf=\"authService.user | async\">\n          <a routerLink=\"/account\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>account_box</mat-icon> {{'App.Account' | translate}}\n          </a>\n        </li>\n        <li [hidden]=\"authService.user | async\">\n          <a routerLink=\"/sign-in\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>account_circle</mat-icon> {{'App.Sign in' | translate}}\n          </a>\n        </li>\n        <li *ngIf=\"authService.user | async\">\n          <a (click)=\"closeSidenav()\" (click)=\"onSignOut()\">\n            <mat-icon>cancel</mat-icon> {{'App.Sign out' | translate}}\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/settings\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>settings</mat-icon> {{'App.Settings' | translate}}\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/about\" routerLinkActive=\"active\" (click)=\"closeSidenav()\">\n            <mat-icon>info</mat-icon> {{'App.About' | translate}}\n          </a>\n        </li>\n      </ul>\n\n    </nav>\n  </mat-sidenav>\n  <div id=\"movieSite\">\n    <router-outlet></router-outlet>\n  </div>\n</mat-sidenav-container>\n<div id=\"btn-returnToTop\">\n  <button mat-mini-fab color=\"primary\" (click)=\"scrollTop()\">\n    <mat-icon>arrow_upward</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Container principal */\n[id=\"movieSite\"] {\n  position: relative;\n  text-align: center; }\n.app-toolbar {\n  display: none; }\n.app-toolbar--mobile {\n    display: block; }\n.app-toolbar .mat-toolbar {\n    background-color: #9fa8a3;\n    color: #FFF; }\n.app-sidenav {\n  min-height: 100vh;\n  background: #c5d5cb; }\n.app-sidenav /deep/ .mat-sidenav {\n    background: #e3e0cf; }\n@media only screen and (max-width: 731px) {\n      .app-sidenav /deep/ .mat-sidenav {\n        position: fixed; } }\n.app-sidenav /deep/ .mat-sidenav-content {\n      background: inherit; }\n.navigation--search {\n  background: #9fa8a3;\n  min-height: 3rem;\n  line-height: 3;\n  padding: 16px 0 0 20px; }\n.navigation--search .mat-form-field {\n    width: 180px;\n    padding: 0 20px;\n    font-size: 13px; }\n.navigation--search /deep/ .mat-form-field-outline {\n    color: #FFF; }\n.navigation--search /deep/ .mat-form-field-label {\n    color: #FFF; }\n.navigation--search .mat-icon {\n    color: #FFF;\n    height: 1.75rem; }\n.navigation--links {\n  -webkit-padding-start: 30px;\n          padding-inline-start: 30px; }\n.navigation--links li {\n    min-height: 3rem;\n    line-height: 3;\n    padding-left: 10px; }\n.navigation--links li:hover {\n      background-color: #c5d5cb; }\n.navigation--links li:last-child {\n      color: #FFF; }\n.navigation--links a {\n    display: block;\n    padding: .625rem 0;\n    color: #FFF; }\n.navigation--links a:hover {\n      color: #9fa8a3; }\n.navigation--links a .mat-icon {\n      height: 1.75rem; }\n.navigation--links .active {\n    color: #9fa8a3; }\n.btn-menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 20px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  color: #FFF;\n  z-index: 3; }\n/* button return top*/\n[id=\"btn-returnToTop\"] {\n  position: fixed;\n  bottom: 40px;\n  right: 12px;\n  display: none;\n  z-index: 1; }\n.show {\n  display: block; }\n.hide {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhdml2YWxsdXJpL0Rlc2t0b3AvbW92aWVTaXRlL3NyYy9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsd0JBQUE7QUNEQTtFREdJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLGFBQWEsRUFBQTtBQUViO0lBQ0ksY0FBYyxFQUFBO0FBSnRCO0lBUVEseUJFYmU7SUZjZixXRWpCSSxFQUFBO0FGcUJaO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CRXRCVyxFQUFBO0FGb0JmO0lBS1EsbUJFdEJZLEVBQUE7QUZ3Qlo7TUFQUjtRQVFZLGVBQWUsRUFBQSxFQU10QjtBQWRMO01BWVksbUJBQW1CLEVBQUE7QUFPM0I7RUFDSSxtQkV0Q2U7RUZ1Q2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0IsRUFBQTtBQUp6QjtJQU9PLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZSxFQUFBO0FBVHRCO0lBYU8sV0VyREEsRUFBQTtBRndDUDtJQWlCTyxXRXpEQSxFQUFBO0FGd0NQO0lBcUJPLFdFN0RBO0lGOERBLGVBQWUsRUFBQTtBQUl2QjtFQUNJLDJCQUEwQjtVQUExQiwwQkFBMEIsRUFBQTtBQUQ3QjtJQUlPLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7QUFOekI7TUFTVyx5QkUxRUQsRUFBQTtBRmlFVjtNQWFXLFdFL0VKLEVBQUE7QUZrRVA7SUFrQk8sY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXRXRGQSxFQUFBO0FGa0VQO01BdUJXLGNFdEZPLEVBQUE7QUYrRGxCO01BMkJXLGVBQWUsRUFBQTtBQTNCMUI7SUFnQ08sY0UvRlcsRUFBQTtBRm9HdkI7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdFaEhRO0VGaUhSLFVBQVUsRUFBQTtBQUdkLHFCQUFBO0FDekNBO0VEMkNJLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVLEVBQUE7QUFHZDtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUnO1xuXG4vKiBDb250YWluZXIgcHJpbmNpcGFsICovXG5baWQ9XCJtb3ZpZVNpdGVcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHAtdG9vbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICYtLW1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5tYXQtdG9vbGJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbn1cblxuLmFwcC1zaWRlbmF2IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG5cbiAgICAvZGVlcC8gLm1hdC1zaWRlbmF2IHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzFweCkge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgJi1jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLm5hdmlnYXRpb24ge1xuICAgICYtLXNlYXJjaCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0O1xuICAgICAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMztcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDAgMjBweDtcblxuICAgICAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMS43NXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWxpbmtzIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDMwcHg7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbWluLWhlaWdodDogM3JlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNjI1cmVtIDA7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG4tbWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG4vKiBidXR0b24gcmV0dXJuIHRvcCovXG5baWQ9XCJidG4tcmV0dXJuVG9Ub3BcIl0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDQwcHg7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSIsIi8qIENvbnRhaW5lciBwcmluY2lwYWwgKi9cbltpZD1cIm1vdmllU2l0ZVwiXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hcHAtdG9vbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmFwcC10b29sYmFyLS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5hcHAtdG9vbGJhciAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmE4YTM7XG4gICAgY29sb3I6ICNGRkY7IH1cblxuLmFwcC1zaWRlbmF2IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNjNWQ1Y2I7IH1cbiAgLmFwcC1zaWRlbmF2IC9kZWVwLyAubWF0LXNpZGVuYXYge1xuICAgIGJhY2tncm91bmQ6ICNlM2UwY2Y7IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMXB4KSB7XG4gICAgICAuYXBwLXNpZGVuYXYgL2RlZXAvIC5tYXQtc2lkZW5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgfSB9XG4gICAgLmFwcC1zaWRlbmF2IC9kZWVwLyAubWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0OyB9XG5cbi5uYXZpZ2F0aW9uLS1zZWFyY2gge1xuICBiYWNrZ3JvdW5kOiAjOWZhOGEzO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xuICBsaW5lLWhlaWdodDogMztcbiAgcGFkZGluZzogMTZweCAwIDAgMjBweDsgfVxuICAubmF2aWdhdGlvbi0tc2VhcmNoIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7IH1cbiAgLm5hdmlnYXRpb24tLXNlYXJjaCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgIGNvbG9yOiAjRkZGOyB9XG4gIC5uYXZpZ2F0aW9uLS1zZWFyY2ggL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICNGRkY7IH1cbiAgLm5hdmlnYXRpb24tLXNlYXJjaCAubWF0LWljb24ge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGhlaWdodDogMS43NXJlbTsgfVxuXG4ubmF2aWdhdGlvbi0tbGlua3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMzBweDsgfVxuICAubmF2aWdhdGlvbi0tbGlua3MgbGkge1xuICAgIG1pbi1oZWlnaHQ6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDM7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG4gICAgLm5hdmlnYXRpb24tLWxpbmtzIGxpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWQ1Y2I7IH1cbiAgICAubmF2aWdhdGlvbi0tbGlua3MgbGk6bGFzdC1jaGlsZCB7XG4gICAgICBjb2xvcjogI0ZGRjsgfVxuICAubmF2aWdhdGlvbi0tbGlua3MgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogLjYyNXJlbSAwO1xuICAgIGNvbG9yOiAjRkZGOyB9XG4gICAgLm5hdmlnYXRpb24tLWxpbmtzIGE6aG92ZXIge1xuICAgICAgY29sb3I6ICM5ZmE4YTM7IH1cbiAgICAubmF2aWdhdGlvbi0tbGlua3MgYSAubWF0LWljb24ge1xuICAgICAgaGVpZ2h0OiAxLjc1cmVtOyB9XG4gIC5uYXZpZ2F0aW9uLS1saW5rcyAuYWN0aXZlIHtcbiAgICBjb2xvcjogIzlmYThhMzsgfVxuXG4uYnRuLW1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGO1xuICB6LWluZGV4OiAzOyB9XG5cbi8qIGJ1dHRvbiByZXR1cm4gdG9wKi9cbltpZD1cImJ0bi1yZXR1cm5Ub1RvcFwiXSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogMTJweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogMTsgfVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuIiwiJHdoaXRlOiAjRkZGO1xuJGJsYWNrOiAjYzVkNWNiO1xuJGdyZXk6ICM5RTlFOUU7XG4kcHJpbWFyeS1saWdodDogIzlmYThhMztcbiRiYWNrZ3JvdW5kOiAjZTNlMGNmO1xuJGZhY2Vib29rOiAjNDI2N2IyO1xuJHR3aXR0ZXI6ICM0Mjg1ZjQ7XG4kZ3JlZW46ICM0Y2FmNTA7XG4keWVsbG93OiAjZmZjMTA3O1xuJHRlYWwgOiAjMDA5Njg4OyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/service/storage/storage.service */ "./src/app/shared/service/storage/storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var AppComponent = /** @class */ (function () {
    function AppComponent(authService, changeDetectorRef, media, router, snackbar, storageService, translateService) {
        this.authService = authService;
        this.router = router;
        this.snackbar = snackbar;
        this.storageService = storageService;
        this.translateService = translateService;
        this.mobileQuery = media.matchMedia('(max-width: 731px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.translateService.setDefaultLang('en-US');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.lang = this.storageService.read('language');
        !this.lang ? this.storageService.save('language', 'en-US') : this.lang = this.lang;
        this.translateService.use(this.lang);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent.prototype.scrollHandler = function (event) {
        var height = window.scrollY;
        var el = document.getElementById('btn-returnToTop');
        height >= 500 ? el.className = 'show' : el.className = 'hide';
    };
    AppComponent.prototype.scrollTop = function () {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };
    AppComponent.prototype.searchMovie = function (term) {
        term === '' ? this.router.navigate(['/movies/now-playing']) : this.router.navigate(['/movies/search', { term: term }]);
    };
    AppComponent.prototype.onSignOut = function () {
        var _this = this;
        this.authService.signOut();
        this.translateService.get('Error.Goodbye').subscribe(function (results) { return _this.snackbar.open(results, '', { duration: 2000 }); });
        this.router.navigate(['/movies/now-playing']);
    };
    AppComponent.prototype.closeSidenav = function () {
        if (this.mobileQuery.matches !== false) {
            this.snav.close();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('snav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "snav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "scrollHandler", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm5/ng-lazyload-image.js");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movies/movie-list/movie-list.component */ "./src/app/movies/movie-list/movie-list.component.ts");
/* harmony import */ var _movies_movie_movie_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./movies/movie/movie.component */ "./src/app/movies/movie/movie.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/service/storage/storage.service */ "./src/app/shared/service/storage/storage.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");











/* CORE MODULE */


/* ROUTING */

/* COMPONENT */






/* SHARED */

var MyHammerConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HammerGestureConfig"]));

function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_17__["MoviesComponent"],
                _movies_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_15__["MovieListComponent"],
                _movies_movie_movie_component__WEBPACK_IMPORTED_MODULE_16__["MovieComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
                _app_core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
                    }
                }),
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"].forRoot(),
                ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__["LazyLoadImageModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
            ],
            providers: [
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_GESTURE_CONFIG"], useClass: MyHammerConfig },
                _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_19__["StorageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.uid = '';
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("Users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
    }
    AuthService.prototype.oAuthLogin = function (name, callback) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(this.getProvider(name))
            .then(function (credential) {
            callback();
            _this.updateUserData(credential.user);
        })
            .catch(function (err) { return callback(err); });
    };
    AuthService.prototype.getProvider = function (name) {
        switch (name) {
            case 'google': return new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
            case 'facebook': return new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider();
            case 'twitter': return new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].TwitterAuthProvider();
        }
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () { return _this.router.navigate(['/']); });
    };
    AuthService.prototype.readUser = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.deleteUser = function (callback) {
        return this.afAuth.authState.subscribe(function (authState) {
            authState.delete()
                .then(function (success) { return callback(); })
                .catch(function (error) { return callback(error); });
        });
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("Users/" + user.uid);
        var data = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            uid: user.uid,
            pseudo: null
        };
        return userRef.set(data, { merge: true });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"]
            ],
            providers: [
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, af) {
        this.authService = authService;
        this.router = router;
        this.af = af;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var _this = this;
        return this.af.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) {
            if (auth === null) {
                // Store the attempted URL for redirecting
                _this.authService.redirectUrl = url;
                // Create a dummy session id
                var sessionId = 123456789;
                // Set our navigation extras object
                // that contains our global query params and fragment
                var navigationExtras = {
                    queryParams: { session_id: sessionId },
                    fragment: 'anchor'
                };
                // Navigate to the login page with extras
                _this.router.navigate(['/sign-in'], navigationExtras);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"!dataParam\">{{title}}</h2>\n<h2 *ngIf=\"dataParam\">{{dataParam}}</h2>\n<div class=\"loading-shade\" *ngIf=\"isLoadingResults\">\n  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n</div>\n<div class=\"items\" *ngIf=\"moviesLength > 0; else noData\" (swipeleft)=\"swipe(pager.currentPage +1, $event.type)\" (swiperight)=\"swipe(pager.currentPage -1, $event.type)\">\n  <div class=\"item\" *ngFor=\"let movie of movies\">\n    <a [routerLink]=\"['/movie', movie.id]\">\n      <img *ngIf=\"movie.poster_path\" [defaultImage]=\"'assets/images/no_poster_available.jpg'\" [lazyLoad]=\"'https://image.tmdb.org/t/p/w185/' + movie.poster_path\"\n        alt=\"poster movie\">\n      <img *ngIf=\"!movie.poster_path\" src=\"/assets/images/no_poster_available.jpg\" alt=\"No poster available\">\n    </a>\n    <h3>{{movie.title}}</h3>\n    <button *ngIf=\"authService.user | async\" aria-hidden=\"true\" mat-icon-button class=\"btn-add\" color=\"primary\" (click)=\"addMovie(movie)\"\n      matTooltip=\"{{'Movie-list.Watch later' | translate}}\">\n      <mat-icon>visibility</mat-icon>\n    </button>\n    <p class=\"date\">{{movie.release_date | date}}</p>\n  </div>\n</div>\n<ng-template #noData>\n  <h3>\n    {{'Movie-list.No results' | translate}}\n    <mat-icon>sentiment_very_dissatisfied</mat-icon>\n  </h3>\n</ng-template>\n<footer class=\"pagination\" *ngIf=\"moviesLength > 0\">\n  <nav>\n    <ul>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(parameter, 1)\">\n          <mat-icon>first_page</mat-icon>\n        </a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(parameter, pager.currentPage - 1)\">\n          <mat-icon>chevron_left</mat-icon>\n        </a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{disabled:pager.currentPage === page}\">\n        <a (click)=\"setPage(parameter, page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(parameter, pager.currentPage + 1)\">\n          <mat-icon>chevron_right</mat-icon>\n        </a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(parameter, pager.totalPages)\">\n          <mat-icon>last_page</mat-icon>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</footer>"

/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-transform: capitalize; }\n\nh3 {\n  margin: 15px 0 5px;\n  color: #9fa8a3; }\n\na {\n  position: relative;\n  display: block; }\n\n.date {\n  margin: 0;\n  color: #FFF; }\n\n.btn-add {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcmF2aXZhbGx1cmkvRGVza3RvcC9tb3ZpZVNpdGUvc3JjL2Fzc2V0cy9zY3NzL3BhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGtCQUFrQjtFQUNsQixjQ0xtQixFQUFBOztBRFF2QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksU0FBUztFQUNULFdDbEJRLEVBQUE7O0FEcUJaO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWUtbGlzdC9tb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvcGFsZXR0ZSc7XG5cbmgyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaDMge1xuICAgIG1hcmdpbjogMTVweCAwIDVweDtcbiAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XG59XG5cbmEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRhdGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogJHdoaXRlO1xufVxuXG4uYnRuLWFkZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbn0iLCIkd2hpdGU6ICNGRkY7XG4kYmxhY2s6ICNjNWQ1Y2I7XG4kZ3JleTogIzlFOUU5RTtcbiRwcmltYXJ5LWxpZ2h0OiAjOWZhOGEzO1xuJGJhY2tncm91bmQ6ICNlM2UwY2Y7XG4kZmFjZWJvb2s6ICM0MjY3YjI7XG4kdHdpdHRlcjogIzQyODVmNDtcbiRncmVlbjogIzRjYWY1MDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kdGVhbCA6ICMwMDk2ODg7Il19 */"

/***/ }),

/***/ "./src/app/movies/movie-list/movie-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/movies/movie-list/movie-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/database/database.service */ "./src/app/shared/service/database/database.service.ts");
/* harmony import */ var _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/service/storage/storage.service */ "./src/app/shared/service/storage/storage.service.ts");
/* harmony import */ var _shared_service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/service/tmdb/tmdb.service */ "./src/app/shared/service/tmdb/tmdb.service.ts");










var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(authService, databaseService, tmdbService, route, snackBar, storageService, translateService) {
        this.authService = authService;
        this.databaseService = databaseService;
        this.tmdbService = tmdbService;
        this.route = route;
        this.snackBar = snackBar;
        this.storageService = storageService;
        this.translateService = translateService;
        this.pager = {};
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.lang = this.storageService.read('language');
        this.adult = this.storageService.read('adult');
        this.route.params.subscribe(function (params) {
            if (params.term) {
                _this.request = _this.tmdbService.getSearchMovie(params.term, 1, _this.lang, _this.adult);
                _this.parameter = params.term;
            }
            else if (params.category) {
                _this.request = _this.tmdbService.getMovie(params.category, 1, _this.lang, _this.adult);
                _this.parameter = params.category;
            }
            else if (params.id && params.name) {
                _this.request = _this.tmdbService.getGenreMovie(+params.id, 1, _this.lang, _this.adult);
                _this.parameter = +params.id;
                _this.dataParam = params.name;
            }
            else {
                _this.request = null;
                _this.isLoadingResults = false;
            }
            if (_this.request) {
                _this.request.subscribe(function (response) {
                    _this.parameter === 'upcoming'
                        ? (_this.movies = response.results.filter(function (val) {
                            return dayjs__WEBPACK_IMPORTED_MODULE_5__(val.release_date).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_5__().startOf('year'));
                        }))
                        : (_this.movies = response.results);
                    _this.moviesLength = response.results.length;
                    _this.isLoadingResults = false;
                    _this.title = _this.parameter;
                    _this.totalPages = response.total_pages;
                    _this.pager = _this.tmdbService.getPager(_this.totalPages, 1);
                }, function (error) {
                    _this.isLoadingResults = false;
                });
            }
            else {
                _this.isLoadingResults = false;
            }
        });
    };
    MovieListComponent.prototype.swipe = function (currentIndex, action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT ||
            action === this.SWIPE_ACTION.LEFT) {
            this.setPage(this.parameter, currentIndex);
        }
    };
    MovieListComponent.prototype.setPage = function (param, page) {
        var _this = this;
        this.isLoadingResults = true;
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.tmdbService.getPager(this.totalPages, page);
        this.currentPage = this.pager.currentPage;
        if (typeof param === 'string') {
            if (param === 'discover' ||
                param === 'upcoming' ||
                param === 'now-playing') {
                this.request = this.tmdbService.getMovie(param, this.currentPage, this.lang, this.adult);
            }
            else {
                this.request = this.tmdbService.getSearchMovie(param, this.currentPage, this.lang, this.adult);
            }
        }
        if (typeof param === 'number') {
            this.request = this.tmdbService.getGenreMovie(param, this.currentPage, this.lang, this.adult);
        }
        if (!navigator.onLine) {
            this.snackBar.open('Sorry, you\'re offline', null, { duration: 5000 });
        }
        else {
            this.request.subscribe(function (response) {
                _this.isLoadingResults = false;
                param === 'upcoming'
                    ? (_this.movies = response.results.filter(function (val) {
                        return dayjs__WEBPACK_IMPORTED_MODULE_5__(val.release_date).isAfter(dayjs__WEBPACK_IMPORTED_MODULE_5__().startOf('year'));
                    }))
                    : (_this.movies = response.results);
            }, function (error) {
                _this.isLoadingResults = false;
            });
        }
    };
    MovieListComponent.prototype.addMovie = function (movie) {
        var _this = this;
        this.databaseService.addMovieCategoriesDefault(movie, 'MovieLater', function (error) {
            if (error) {
                _this.snackBar.open(error, 'Hide', { duration: 5000 });
            }
            else {
                _this.translateService
                    .get('Error.Movie-added')
                    .subscribe(function (results) {
                    return _this.snackBar.open(results, '', { duration: 2000 });
                });
            }
        });
    };
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/movies/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.scss */ "./src/app/movies/movie-list/movie-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            _shared_service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_9__["TmdbService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/movies/movie/movie.component.html":
/*!***************************************************!*\
  !*** ./src/app/movies/movie/movie.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-shade\" *ngIf=\"isLoadingResults\">\n  <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n</div>\n<ng-template [ngIf]=\"!isLoadingResults\">\n\n  <div class=\"movie\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" *ngIf=\"movie\">\n    <div class=\"movie--background\">\n      <div class=\"image-rotator\" [ngStyle]=\"{'background-image': 'url('+'https://image.tmdb.org/t/p/original'+movie.backdrop_path+')'}\">\n      </div>\n      <div class=\"vignette\"></div>\n    </div>\n    <div class=\"movie__head\">\n      <button class=\"btn-back\" (click)=\"back()\">\n        <mat-icon>arrow_back</mat-icon>\n      </button>\n      <h2>{{movie.title}}</h2>\n    </div>\n    <div class=\"movie__body\">\n      <div class=\"movie--infos\">\n        <p>\n          <mat-icon>date_range</mat-icon> {{movie.release_date | date: 'y'}} •\n          <mat-icon>timer</mat-icon> {{movie.runtime}} minutes •\n          <mat-icon [ngClass]=\"{'mat-green': movie.vote_average >= 5, 'mat-red': movie.vote_average < 5}\">star</mat-icon> {{movie.vote_average}}\n        </p>\n      </div>\n      <div class=\"movie--genre\">\n        <ul>\n          <li *ngFor=\"let genre of movie.genres\">\n            <a [routerLink]=\"['/genre', {id: genre.id, name: genre.name}]\"> {{genre.name}}</a>\n          </li>\n        </ul>\n      </div>\n      <p class=\"movie--overview\">{{movie.overview}}</p>\n      <div class=\" movie--actions\">\n        <button *ngIf=\"authService.user | async\" mat-button (click)=\"pushMovieCategoryDefault(movie, 'MovieLater')\">\n          <mat-icon class=\"mat-teal\">watch_later</mat-icon> {{'Movie.Watch later' | translate}}\n        </button>\n        <button *ngIf=\"authService.user | async\" mat-button (click)=\"pushMovieCategoryDefault(movie, 'FavoriteMovie')\">\n          <mat-icon class=\"mat-red\">favorite_border</mat-icon> {{'Movie.Favorite' | translate}}\n        </button>\n        <button *ngIf=\"authService.user | async\" mat-button [matMenuTriggerFor]=\"menu\" (click)=\"getAllCategories()\">\n          <mat-icon>create_new_folder</mat-icon> {{'Movie.Categories' | translate}}\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <div *ngIf=\"categories.length > 0; else noData\">\n            <button mat-menu-item *ngFor=\"let category of categories\" (click)=\"pushMovieCategory(movie, category)\">{{category}}</button>\n          </div>\n          <ng-template #noData>\n            <small>{{'Movie.No lists' | translate}}</small>\n          </ng-template>\n        </mat-menu>\n        <button mat-button (click)=\"shareDialog(movie)\">\n          <mat-icon class=\"mat-yellow\">share</mat-icon> {{'Movie.Share' | translate}}\n        </button>\n      </div>\n    </div>\n  </div>\n  <mat-tab-group class=\"movie__tab\">\n    <mat-tab label=\"{{'Movie.Cast' | translate}}\">\n      <section class=\"movie--cast\" *ngIf=\"cast\">\n        <mat-nav-list *ngFor=\"let person of cast\">\n          <a mat-list-item [routerLink]=\"['/star', person.id]\">\n            <div class=\"icon-container\" matListAvatar [ngStyle]=\"{'background-image': 'url('+'https://image.tmdb.org/t/p/original'+person.profile_path+')'}\">\n              <mat-icon *ngIf=\"!person.profile_path\" class=\"icon-person\">person</mat-icon>\n            </div>\n            <h3 matLine>{{person.name}}</h3>\n            <p matLine>{{person.character}}</p>\n          </a>\n        </mat-nav-list>\n      </section>\n    </mat-tab>\n    <mat-tab label=\"{{'Movie.Trailer' | translate}}\">\n      <section class=\"movie--trailer\" *ngIf=\"safeUrl; else noTrailer\">\n        <iframe width=\"560\" height=\"315\" [src]=\"safeUrl\" frameborder=\"0\" allowfullscreen></iframe>\n      </section>\n      <ng-template #noTrailer>\n        <h3>{{'Movie.No trailer' | translate}}\n          <mat-icon>sentiment_very_dissatisfied</mat-icon>\n        </h3>\n      </ng-template>\n    </mat-tab>\n    <mat-tab label=\"{{'Movie.Similar' | translate}}\">\n      <section class=\"movie--similar items\" *ngIf=\"similarMovies\">\n        <div class=\"item\" *ngFor=\"let movie of similarMovies\">\n          <a [routerLink]=\"['/movie', movie.id]\">\n            <img *ngIf=\"movie.poster_path\" [defaultImage]=\"'assets/images/no_poster_available.jpg'\" [lazyLoad]=\"'https://image.tmdb.org/t/p/w185/' + movie.poster_path\"\n              alt=\"poster movie\">\n            <img *ngIf=\"!movie.poster_path\" src=\"assets/images/no_poster_available.jpg\" alt=\"No poster available\">\n            <h3>{{movie.title}}</h3>\n          </a>\n        </div>\n      </section>\n    </mat-tab>\n  </mat-tab-group>\n</ng-template>"

/***/ }),

/***/ "./src/app/movies/movie/movie.component.scss":
/*!***************************************************!*\
  !*** ./src/app/movies/movie/movie.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.movie {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin: 0;\n  padding: 20px;\n  height: auto;\n  background-position: top;\n  background-size: cover;\n  color: #FFF;\n  text-align: left; }\n@media only screen and (min-width: 731px) {\n    .movie {\n      min-height: 500px; } }\n.movie--background .image-rotator {\n    position: absolute;\n    top: 0;\n    left: 30%;\n    bottom: 0;\n    right: 0;\n    width: 70%;\n    overflow: hidden;\n    background-size: cover;\n    background-position: center; }\n@media only screen and (min-width: 731px) {\n      .movie--background .image-rotator {\n        background-position: initial; } }\n.movie--background .vignette {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 30%;\n    background: #c5d5cb;\n    z-index: 2; }\n.movie--background .vignette::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 100%;\n      bottom: 0;\n      width: 100%;\n      background-image: linear-gradient(to right, #c5d5cb, transparent); }\n.movie__head {\n    display: inherit;\n    z-index: 2; }\n.movie__head .btn-back {\n      border: none;\n      background: transparent;\n      color: #FFF;\n      cursor: pointer; }\n.movie__head h1 {\n      color: #FFF;\n      text-align: left !important; }\n.movie__body {\n    z-index: 2; }\n.movie__body .mat-green {\n      color: #4caf50; }\n.movie__body .mat-red {\n      color: #9fa8a3; }\n.movie__body .mat-yellow {\n      color: #ffc107; }\n.movie__body .mat-teal {\n      color: #009688; }\n.movie__body .movie--infos {\n      display: flex;\n      align-items: center; }\n.movie__body .movie--infos span {\n        margin: 0 5px 0 0; }\n.movie__body .movie--infos .mat-icon {\n        width: 20px;\n        font-size: 20px; }\n.movie__body .movie--overview {\n      font-weight: normal;\n      text-align: justify; }\n.movie__body .movie--genre ul {\n      padding: 0; }\n.movie__body .movie--genre ul li {\n        display: inline-block;\n        padding: 0 5px 0 0; }\n.movie__body .movie--genre ul li::after {\n          content: '•';\n          color: #9fa8a3; }\n.movie__body .movie--genre ul li:last-child:after {\n          content: ''; }\n.movie__body .movie--actions button {\n      padding: 0; }\n.movie__tab .movie--cast a.mat-list-item:hover {\n  background: #e3e0cf; }\n.movie__tab .movie--cast /deep/ .mat-list-text h3 {\n  color: #9fa8a3;\n  text-align: left; }\n.movie__tab .movie--cast /deep/ .mat-list-text p {\n  color: #9E9E9E;\n  text-align: left; }\n.movie__tab .movie--trailer {\n  margin: 30px 0; }\n.movie__tab .movie--trailer iframe {\n    display: block;\n    margin: .625rem auto; }\n@media only screen and (max-width: 731px) {\n      .movie__tab .movie--trailer iframe {\n        width: 100%; } }\n.movie__tab .movie--similar h3 {\n  color: #9fa8a3; }\nsmall {\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllL21vdmllLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhdml2YWxsdXJpL0Rlc2t0b3AvbW92aWVTaXRlL3NyYy9hcHAvbW92aWVzL21vdmllL21vdmllLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhdml2YWxsdXJpL0Rlc2t0b3AvbW92aWVTaXRlL3NyYy9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixXQ1hRO0VEWVIsZ0JBQWdCLEVBQUE7QUFDaEI7SUFYSjtNQVlRLGlCQUFpQixFQUFBLEVBb0h4QjtBQWpISTtJQUVPLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsMkJBQTJCLEVBQUE7QUFFM0I7TUFaUDtRQWFXLDRCQUE0QixFQUFBLEVBRW5DO0FBZko7SUFrQk8sa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixtQkN2Q0c7SUR3Q0gsVUFBVSxFQUFBO0FBeEJqQjtNQTJCVyxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLE1BQU07TUFDTixVQUFVO01BQ1YsU0FBUztNQUNULFdBQVc7TUFDWCxpRUFBOEQsRUFBQTtBQUsxRTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVLEVBQUE7QUFGYjtNQUtPLFlBQVk7TUFDWix1QkFBdUI7TUFDdkIsV0M5REE7TUQrREEsZUFBZSxFQUFBO0FBUnRCO01BWU8sV0NuRUE7TURvRUEsMkJBQTJCLEVBQUE7QUFHbkM7SUFDSSxVQUFVLEVBQUE7QUFEYjtNQUlPLGNDcEVHLEVBQUE7QURnRVY7TUFPTyxjQzNFVyxFQUFBO0FEb0VsQjtNQVVPLGNDekVJLEVBQUE7QUQrRFg7TUFhTyxjQzNFRyxFQUFBO0FEOERWO01BbUJXLGFBQWE7TUFDYixtQkFBbUIsRUFBQTtBQXBCOUI7UUF1QmUsaUJBQWlCLEVBQUE7QUF2QmhDO1FBMEJlLFdBQVc7UUFDWCxlQUFlLEVBQUE7QUEzQjlCO01BK0JPLG1CQUFtQjtNQUNuQixtQkFBbUIsRUFBQTtBQWhDMUI7TUFvQ1csVUFBVSxFQUFBO0FBcENyQjtRQXVDZSxxQkFBcUI7UUFDckIsa0JBQWtCLEVBQUE7QUF4Q2pDO1VBMkNtQixZQUFTO1VBQ1QsY0NoSEQsRUFBQTtBRG9FbEI7VUErQ21CLFdBQVcsRUFBQTtBQS9DOUI7TUFzRFcsVUFBVSxFQUFBO0FBU3JCO0VBS21CLG1CQ3ZJSixFQUFBO0FEa0lmO0VBVW1CLGNDN0lEO0VEOElDLGdCQUFnQixFQUFBO0FBWG5DO0VBZW1CLGNDbkpWO0VEb0pVLGdCQUFnQixFQUFBO0FBaEJuQztFQXFCVyxjQUFjLEVBQUE7QUFyQnpCO0lBd0JlLGNBQWM7SUFDZCxvQkFBb0IsRUFBQTtBQUVwQjtNQTNCZjtRQTRCbUIsV0FBVyxFQUFBLEVBRWxCO0FBOUJaO0VBa0NlLGNDcktHLEVBQUE7QUQ0S3ZCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllL21vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1vdmllIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDczMXB4KSB7XG4gICAgLm1vdmllIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4OyB9IH1cbiAgLm1vdmllLS1iYWNrZ3JvdW5kIC5pbWFnZS1yb3RhdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzFweCkge1xuICAgICAgLm1vdmllLS1iYWNrZ3JvdW5kIC5pbWFnZS1yb3RhdG9yIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogaW5pdGlhbDsgfSB9XG4gIC5tb3ZpZS0tYmFja2dyb3VuZCAudmlnbmV0dGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBiYWNrZ3JvdW5kOiAjYzVkNWNiO1xuICAgIHotaW5kZXg6IDI7IH1cbiAgICAubW92aWUtLWJhY2tncm91bmQgLnZpZ25ldHRlOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAxMDAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjNWQ1Y2IsIHRyYW5zcGFyZW50KTsgfVxuICAubW92aWVfX2hlYWQge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgei1pbmRleDogMjsgfVxuICAgIC5tb3ZpZV9faGVhZCAuYnRuLWJhY2sge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5tb3ZpZV9faGVhZCBoMSB7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxuICAubW92aWVfX2JvZHkge1xuICAgIHotaW5kZXg6IDI7IH1cbiAgICAubW92aWVfX2JvZHkgLm1hdC1ncmVlbiB7XG4gICAgICBjb2xvcjogIzRjYWY1MDsgfVxuICAgIC5tb3ZpZV9fYm9keSAubWF0LXJlZCB7XG4gICAgICBjb2xvcjogIzlmYThhMzsgfVxuICAgIC5tb3ZpZV9fYm9keSAubWF0LXllbGxvdyB7XG4gICAgICBjb2xvcjogI2ZmYzEwNzsgfVxuICAgIC5tb3ZpZV9fYm9keSAubWF0LXRlYWwge1xuICAgICAgY29sb3I6ICMwMDk2ODg7IH1cbiAgICAubW92aWVfX2JvZHkgLm1vdmllLS1pbmZvcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgLm1vdmllX19ib2R5IC5tb3ZpZS0taW5mb3Mgc3BhbiB7XG4gICAgICAgIG1hcmdpbjogMCA1cHggMCAwOyB9XG4gICAgICAubW92aWVfX2JvZHkgLm1vdmllLS1pbmZvcyAubWF0LWljb24ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgLm1vdmllX19ib2R5IC5tb3ZpZS0tb3ZlcnZpZXcge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7IH1cbiAgICAubW92aWVfX2JvZHkgLm1vdmllLS1nZW5yZSB1bCB7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICAubW92aWVfX2JvZHkgLm1vdmllLS1nZW5yZSB1bCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCA1cHggMCAwOyB9XG4gICAgICAgIC5tb3ZpZV9fYm9keSAubW92aWUtLWdlbnJlIHVsIGxpOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJ+KAoic7XG4gICAgICAgICAgY29sb3I6ICM5ZmE4YTM7IH1cbiAgICAgICAgLm1vdmllX19ib2R5IC5tb3ZpZS0tZ2VucmUgdWwgbGk6bGFzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7IH1cbiAgICAubW92aWVfX2JvZHkgLm1vdmllLS1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwOyB9XG5cbi5tb3ZpZV9fdGFiIC5tb3ZpZS0tY2FzdCBhLm1hdC1saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTNlMGNmOyB9XG5cbi5tb3ZpZV9fdGFiIC5tb3ZpZS0tY2FzdCAvZGVlcC8gLm1hdC1saXN0LXRleHQgaDMge1xuICBjb2xvcjogIzlmYThhMztcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4ubW92aWVfX3RhYiAubW92aWUtLWNhc3QgL2RlZXAvIC5tYXQtbGlzdC10ZXh0IHAge1xuICBjb2xvcjogIzlFOUU5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4ubW92aWVfX3RhYiAubW92aWUtLXRyYWlsZXIge1xuICBtYXJnaW46IDMwcHggMDsgfVxuICAubW92aWVfX3RhYiAubW92aWUtLXRyYWlsZXIgaWZyYW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IC42MjVyZW0gYXV0bzsgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMxcHgpIHtcbiAgICAgIC5tb3ZpZV9fdGFiIC5tb3ZpZS0tdHJhaWxlciBpZnJhbWUge1xuICAgICAgICB3aWR0aDogMTAwJTsgfSB9XG5cbi5tb3ZpZV9fdGFiIC5tb3ZpZS0tc2ltaWxhciBoMyB7XG4gIGNvbG9yOiAjOWZhOGEzOyB9XG5cbnNtYWxsIHtcbiAgcGFkZGluZzogNXB4OyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9wYWxldHRlJztcblxuLm1vdmllIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzFweCkge1xuICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICB9XG5cbiAgICAmLS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgLmltYWdlLXJvdGF0b3Ige1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzMxcHgpIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudmlnbmV0dGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsJGJsYWNrLHRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2hlYWQge1xuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgIC5idG4tYmFjayB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2JvZHkge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAubWF0IHtcbiAgICAgICAgJi1ncmVlbiB7XG4gICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgICYtcmVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcbiAgICAgICAgfVxuICAgICAgICAmLXllbGxvdyB7XG4gICAgICAgICAgICBjb2xvcjogJHllbGxvdztcbiAgICAgICAgfVxuICAgICAgICAmLXRlYWwge1xuICAgICAgICAgICAgY29sb3I6ICR0ZWFsO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1vdmllIHtcblxuICAgICAgICAgICAgJi0taW5mb3Mge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICYtLW92ZXJ2aWV3IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB9XG4gICAgICAgICYtLWdlbnJlIHtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4IDAgMDtcblxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn4oCiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi0tYWN0aW9ucyB7XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4ubW92aWUge1xuICAgICZfX3RhYiB7XG4gICAgICAgIC5tb3ZpZSB7XG4gICAgICAgICAgICAmLS1jYXN0IHtcbiAgICAgICAgICAgICAgICBhLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC9kZWVwLyAubWF0LWxpc3QtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0tdHJhaWxlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG5cbiAgICAgICAgICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNjI1cmVtIGF1dG87XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMxcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi0tc2ltaWxhciB7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5zbWFsbCB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuIiwiJHdoaXRlOiAjRkZGO1xuJGJsYWNrOiAjYzVkNWNiO1xuJGdyZXk6ICM5RTlFOUU7XG4kcHJpbWFyeS1saWdodDogIzlmYThhMztcbiRiYWNrZ3JvdW5kOiAjZTNlMGNmO1xuJGZhY2Vib29rOiAjNDI2N2IyO1xuJHR3aXR0ZXI6ICM0Mjg1ZjQ7XG4kZ3JlZW46ICM0Y2FmNTA7XG4keWVsbG93OiAjZmZjMTA3O1xuJHRlYWwgOiAjMDA5Njg4OyJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movie/movie.component.ts":
/*!*************************************************!*\
  !*** ./src/app/movies/movie/movie.component.ts ***!
  \*************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _shared_component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/component/share-modal/share-modal.component */ "./src/app/shared/component/share-modal/share-modal.component.ts");
/* harmony import */ var _shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/service/database/database.service */ "./src/app/shared/service/database/database.service.ts");
/* harmony import */ var _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/service/storage/storage.service */ "./src/app/shared/service/storage/storage.service.ts");
/* harmony import */ var _shared_service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/service/tmdb/tmdb.service */ "./src/app/shared/service/tmdb/tmdb.service.ts");













var MovieComponent = /** @class */ (function () {
    function MovieComponent(authService, databaseService, dialog, location, route, sanitizer, snackBar, tmdbService, storageService, translateService) {
        this.authService = authService;
        this.databaseService = databaseService;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.sanitizer = sanitizer;
        this.snackBar = snackBar;
        this.tmdbService = tmdbService;
        this.storageService = storageService;
        this.translateService = translateService;
        this.isConnected = false;
        this.baseUrl = 'https://www.youtube.com/embed/';
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.categories = [];
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingResults = true;
        this.lang = this.storageService.read('language');
        this.route.paramMap.subscribe(function (params) {
            _this.id = +params.get('id');
            var dataMovie = _this.tmdbService.getDetailsMovie(_this.id, _this.lang);
            var castMovie = _this.tmdbService.getCastMovie(_this.id);
            var videoMovie = _this.tmdbService.getVideoMovie(_this.id, _this.lang);
            var similarVideo = _this.tmdbService.getSimilarMovies(_this.id, _this.lang);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(dataMovie, castMovie, videoMovie, similarVideo).subscribe(function (_a) {
                var movie = _a[0], credits = _a[1], video = _a[2], similar = _a[3];
                _this.isLoadingResults = false;
                _this.movie = movie;
                _this.cast = credits.cast.slice(0, 10);
                _this.videos = video.results.slice(0, 1);
                if (_this.videos.length > 0) {
                    _this.getMovieVideoUrl(_this.videos[0].key);
                }
                _this.similarMovies = similar.results;
            });
        });
    };
    MovieComponent.prototype.back = function () {
        this.location.back();
    };
    MovieComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.sub = this.databaseService.getAllCategoriesUser().subscribe(function (response) {
            _this.getCategories = response;
            _this.categories = _this.getCategories.map(function (value) { return value.name; });
        });
    };
    MovieComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT || action === this.SWIPE_ACTION.LEFT) {
            this.location.back();
        }
    };
    MovieComponent.prototype.pushMovieCategoryDefault = function (movie, category) {
        var _this = this;
        this.databaseService.addMovieCategoriesDefault(movie, category, function (error) {
            if (error) {
                _this.snackBar.open(error, 'Hide', { duration: 5000 });
            }
            else {
                _this.translateService.get('Error.Movie-added').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
            }
        });
    };
    MovieComponent.prototype.getMovieVideoUrl = function (id) {
        return this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + id);
    };
    MovieComponent.prototype.pushMovieCategory = function (movie, category) {
        var _this = this;
        this.databaseService.addMovieCategory(movie, category, function (error) {
            if (error) {
                _this.snackBar.open(error, 'Hide', { duration: 5000 });
            }
            else {
                _this.translateService.get('Error.Movie-added').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
            }
        });
    };
    MovieComponent.prototype.shareDialog = function (movie) {
        this.dialog.open(_shared_component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_9__["ShareModalComponent"], {
            data: { id: movie.id, original_title: movie.original_title }
        });
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movies/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/movies/movie/movie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _shared_service_database_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _shared_service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_12__["TmdbService"],
            _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-movie-list></app-movie-list>"

/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoviesComponent = /** @class */ (function () {
    function MoviesComponent() {
    }
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/movies/movies.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings\">\n  <h2>{{'App.Settings' | translate}}</h2>\n  <div class=\"settings__container\">\n    <div class=\"setting\">\n        <mat-icon>language</mat-icon>\n        <mat-select placeholder=\"{{'App.Language' | translate}}\" [ngModel]=\"lang\" (selectionChange)=\"languageChange($event)\">\n          <mat-option *ngFor=\"let language of languages\" [value]=\"language.value\">\n            {{ language.viewValue }}\n          </mat-option>\n        </mat-select>\n    </div>\n    <div class=\"setting\">\n        <mat-slide-toggle [checked]=\"adult\" (change)=\"adultChange($event)\">{{'Settings.label' | translate}}</mat-slide-toggle>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings {\n  min-height: 50vh;\n  padding: 20px; }\n  .settings mat-icon {\n    color: white; }\n  .settings__container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start; }\n  .settings__container .setting {\n      display: inherit;\n      align-items: center;\n      width: 100%;\n      height: 50px; }\n  .settings__container .setting:hover {\n        background: #e3e0cf; }\n  .settings /deep/ .mat-select {\n    width: 140px; }\n  .settings /deep/ .mat-select-arrow {\n      color: white; }\n  .settings /deep/ .mat-select-placeholder, .settings /deep/ .mat-select-value {\n      color: white; }\n  .settings /deep/ .mat-slide-toggle-label {\n    color: white; }\n  .settings /deep/ .mat-slide-toggle-bar {\n    background: grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3Jhdml2YWxsdXJpL0Rlc2t0b3AvbW92aWVTaXRlL3NyYy9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0VBRmpCO0lBSVEsWUFBWSxFQUFBO0VBR2hCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQTtFQUgxQjtNQU1PLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVksRUFBQTtFQVRuQjtRQVdXLG1CQ2hCSSxFQUFBO0VERnBCO0lBdUJRLFlBQVksRUFBQTtFQXZCcEI7TUEwQlksWUFBWSxFQUFBO0VBMUJ4QjtNQThCWSxZQUFZLEVBQUE7RUE5QnhCO0lBa0NRLFlBQVksRUFBQTtFQWxDcEI7SUFxQ1EsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3BhbGV0dGUnO1xuXG4uc2V0dGluZ3Mge1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAmX19jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAuc2V0dGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgL2RlZXAvIC5tYXQtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgIFxuICAgICAgICAmLWFycm93IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAmLXBsYWNlaG9sZGVyLCAmLXZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUtbGFiZWwge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC9kZWVwLyAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIH1cbn1cbiIsIiR3aGl0ZTogI0ZGRjtcbiRibGFjazogI2M1ZDVjYjtcbiRncmV5OiAjOUU5RTlFO1xuJHByaW1hcnktbGlnaHQ6ICM5ZmE4YTM7XG4kYmFja2dyb3VuZDogI2UzZTBjZjtcbiRmYWNlYm9vazogIzQyNjdiMjtcbiR0d2l0dGVyOiAjNDI4NWY0O1xuJGdyZWVuOiAjNGNhZjUwO1xuJHllbGxvdzogI2ZmYzEwNztcbiR0ZWFsIDogIzAwOTY4ODsiXX0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/storage/storage.service */ "./src/app/shared/service/storage/storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(storageService, translateService) {
        this.storageService = storageService;
        this.translateService = translateService;
        this.languages = [
            { value: 'en-US', viewValue: 'English' },
            { value: 'fr-FR', viewValue: 'French' }
        ];
        this.adult = this.storageService.read('adult');
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.lang = this.storageService.read('language');
        if (!this.adult) {
            this.storageService.save('adult', false);
        }
    };
    SettingsComponent.prototype.languageChange = function (event) {
        this.storageService.save('language', event.value);
        this.translateService.use(event.value);
    };
    SettingsComponent.prototype.adultChange = function (event) {
        if (event.checked === true) {
            this.storageService.save('adult', true);
        }
        else {
            this.storageService.save('adult', false);
        }
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/share-modal/share-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/share-modal/share-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{'Shared-dialog.Title' | translate}}</h1>\n<div mat-dialog-content>\n  <div class=\"share-buttons\">\n    <a href=\"https://www.facebook.com/sharer/sharer.php?u=https://hubmovies.fr/movie/{{data.id}}\">Facebook</a>\n    <a href=\"https://twitter.com/intent/tweet?text={{data.original_title}}%20on%20&url=https://hubmovies.fr/movie/{{data.id}}&hashtags=hubmovies, {{data.original_title}}\">Twitter</a>\n  </div>\n  <div class=\"link\">\n    <mat-form-field>\n      <input id=\"inputId\" matInput value=\"https://hubmovies.fr/movie/{{data.id}}\">\n    </mat-form-field>\n  </div>\n\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"copyLink(data.id)\" cdkFocusInitial>{{'Shared-dialog.Btn-copy' | translate}}</button>\n    <button mat-button (click)=\"onNoClick()\">OK</button>\n  </div>"

/***/ }),

/***/ "./src/app/shared/component/share-modal/share-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/share-modal/share-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\n  text-align: center; }\n  .mat-dialog-content a:hover {\n    opacity: 0.5; }\n  .mat-dialog-actions {\n  display: flex;\n  justify-content: center; }\n  .share-buttons {\n  display: flex;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXZpdmFsbHVyaS9EZXNrdG9wL21vdmllU2l0ZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvc2hhcmUtbW9kYWwvc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTtFQUR0QjtJQUtZLFlBQVksRUFBQTtFQUl4QjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQUczQjtFQUNJLGFBQWE7RUFDYiw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvc2hhcmUtbW9kYWwvc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBhIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2hhcmUtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/component/share-modal/share-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/component/share-modal/share-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: ShareModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModalComponent", function() { return ShareModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var ShareModalComponent = /** @class */ (function () {
    function ShareModalComponent(dialogRef, data, snackBar, translateService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.translateService = translateService;
    }
    ShareModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ShareModalComponent.prototype.copyLink = function (movieId) {
        var _this = this;
        var inputElement = document.getElementById('inputId');
        inputElement.select();
        document.execCommand('copy');
        inputElement.blur();
        this.translateService.get('Error.Link').subscribe(function (results) { return _this.snackBar.open(results, '', { duration: 2000 }); });
        this.dialogRef.close();
    };
    ShareModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share-modal',
            template: __webpack_require__(/*! ./share-modal.component.html */ "./src/app/shared/component/share-modal/share-modal.component.html"),
            styles: [__webpack_require__(/*! ./share-modal.component.scss */ "./src/app/shared/component/share-modal/share-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ShareModalComponent);
    return ShareModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/database/database.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/service/database/database.service.ts ***!
  \*************************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var DatabaseService = /** @class */ (function () {
    function DatabaseService(afAuth, dbf) {
        var _this = this;
        this.afAuth = afAuth;
        this.dbf = dbf;
        this.uid = '';
        this.afAuth.authState.subscribe(function (auth) {
            auth ? _this.uid = auth.uid : _this.uid = null;
        });
    }
    /* CATEGORIES*/
    DatabaseService.prototype.addCategories = function (name, callback) {
        var category = {
            userId: this.uid,
            name: name
        };
        return this.dbf.doc("Categories/" + this.uid + "_" + name)
            .set(category)
            .then(function (success) { return callback(); })
            .catch(function (err) { return callback(err); });
    };
    DatabaseService.prototype.getAllCategoriesUser = function () {
        var _this = this;
        return this.dbf.collection('Categories', function (ref) { return ref
            .where('userId', '==', _this.uid); }).valueChanges();
    };
    DatabaseService.prototype.deleteCategories = function (category, callback) {
        return this.dbf.doc("Categories/" + this.uid + "_" + category)
            .delete()
            .then(function (success) { return callback(); })
            .catch(function (err) { return callback(err); });
    };
    /* MOVIES TO CATEGORY */
    DatabaseService.prototype.addMovieCategory = function (movie, category, callback) {
        var movieDetails = {
            userId: this.uid,
            movieId: movie.id,
            date: new Date(),
            original_title: movie.original_title,
            overview: movie.overview,
            popularity: movie.popularity,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            category: category,
            status: movie.status || null,
            watched: false
        };
        return this.dbf.doc("Categories/" + this.uid + "_" + category).collection('movies').doc(this.uid + "_" + movie.id)
            .set(movieDetails, { merge: true })
            .then(function (success) { return callback(); })
            .catch(function (err) { return callback(err); });
    };
    DatabaseService.prototype.getMovieCategory = function (category) {
        var _this = this;
        return this.dbf.collection('Categories').doc(this.uid + "_" + category).collection('movies', function (ref) { return ref
            .where('userId', '==', _this.uid); }).valueChanges();
    };
    DatabaseService.prototype.deleteMovieCategory = function (category, id, callback) {
        return this.dbf.doc("Categories/" + this.uid + "_" + category).collection('movies').doc(this.uid + "_" + id)
            .delete()
            .then(function (success) { return callback(); })
            .catch(function (err) { return callback(err); });
    };
    /* CATEGORIES DEFAULT */
    DatabaseService.prototype.addMovieCategoriesDefault = function (movie, category, callback) {
        var movieDetails = {
            userId: this.uid,
            movieId: movie.id,
            date: new Date(),
            original_title: movie.original_title,
            overview: movie.overview,
            popularity: movie.popularity,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            category: category,
            status: movie.status || null,
            watched: false
        };
        return this.dbf.doc(category + "/" + this.uid + "_" + movie.id)
            .set(movieDetails)
            .then(function (success) { return callback(); })
            .catch(function (err) { return callback(err); });
    };
    DatabaseService.prototype.getMoviesCategoriesDefault = function (category) {
        var _this = this;
        return this.dbf.collection("" + category, function (ref) { return ref
            .where('userId', '==', _this.uid)
            .orderBy('date', 'desc'); }).valueChanges();
    };
    DatabaseService.prototype.updateMovieCategoriesDefault = function (movieId, watched, callback) {
        this.dbf.doc("MovieLater/" + this.uid + "_" + movieId)
            .update({
            watched: watched
        })
            .then(function (success) { return callback(); })
            .catch(function (err) { return callback(err); });
    };
    DatabaseService.prototype.deleteMoviesCategoriesDefault = function (category, id, callback) {
        return this.dbf.doc(category + "/" + this.uid + "_" + id)
            .delete()
            .then(function (success) { return callback(); })
            .catch(function (err) { return callback(err); });
    };
    DatabaseService.prototype.deleteDatafromUser = function () {
        // waiting feature from firebase
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/shared/service/storage/storage.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/service/storage/storage.service.ts ***!
  \***********************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.save = function (key, data) {
        // sessionStorage.setItem(key, this.getSettable(data));
        sessionStorage.setItem(key, data);
    };
    StorageService.prototype.read = function (key) {
        var value = sessionStorage.getItem(key);
        // return this.getGettable(value);
        return value;
    };
    StorageService.prototype.remove = function (key) {
        sessionStorage.removeItem(key);
    };
    StorageService.prototype.clear = function () {
        sessionStorage.clear();
    };
    /**
     *
     * Private function settable or gettable data
     */
    StorageService.prototype.getSettable = function (value) {
        var data = this.encode(typeof value === 'string' ? value : JSON.stringify(value));
        return data;
    };
    StorageService.prototype.getGettable = function (value) {
        var data = this.decode(value);
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return data;
        }
    };
    /**
     *
     * Private function to encrypt and decrypt data in localstorage
     */
    StorageService.prototype.encode = function (value) {
        var encodedItem = btoa(value);
        encodedItem = encodedItem + '/d6mTWZon';
        return encodedItem;
    };
    StorageService.prototype.decode = function (value) {
        if (value) {
            var decodedItem = value.slice(0, -9);
            decodedItem = atob(decodedItem);
            return decodedItem;
        }
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/shared/service/tmdb/tmdb.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/tmdb/tmdb.service.ts ***!
  \*****************************************************/
/*! exports provided: TmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function() { return TmdbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/storage/storage.service */ "./src/app/shared/service/storage/storage.service.ts");




var TmdbService = /** @class */ (function () {
    // private lang = this.storageService.read('language');
    function TmdbService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.API_KEY = '431bc17da732dfb3be082e58f7a5cf27';
        this.URL_DISCOVER = 'https://api.themoviedb.org/3/discover/movie';
        this.URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
        this.URL_MOVIE = 'https://api.themoviedb.org/3/movie';
        this.URL_PERSON = 'https://api.themoviedb.org/3/person';
        this.URL_GENRE = 'https://api.themoviedb.org/3/genre';
    }
    TmdbService.prototype.getMovie = function (category, page, lang, adult) {
        switch (category) {
            case 'now-playing': return this.getNowPlaying(page, lang);
            case 'upcoming': return this.getUpComing(page, lang);
            case 'discover': return this.getMovieDiscover(page, lang, adult);
        }
    };
    TmdbService.prototype.getSearchMovie = function (name, page, lang, adult) {
        return this.http.get("\n      " + this.URL_SEARCH + "?api_key=" + this.API_KEY + "&language=" + lang + "&query=" + name + "&page=" + page + "&include_adult=" + adult + "\n    ");
    };
    TmdbService.prototype.getNowPlaying = function (page, lang) {
        return this.http.get(this.URL_MOVIE + "/now_playing?api_key=" + this.API_KEY + "&language=" + lang + "&page=" + page);
    };
    TmdbService.prototype.getDetailsMovie = function (movieID, lang) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getMovieDiscover = function (page, lang, adult) {
        return this.http.get("\n      " + this.URL_DISCOVER + "?api_key=" + this.API_KEY + "&language=" + lang + "&sort_by=popularity.desc&page=" + page + "&include_adult=" + adult + "\n    ");
    };
    TmdbService.prototype.getCastMovie = function (movieID) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "/credits?api_key=" + this.API_KEY);
    };
    TmdbService.prototype.getVideoMovie = function (movieID, lang) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "/videos?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getGenreMovie = function (genreID, page, lang, adult) {
        return this.http.get("\n      " + this.URL_GENRE + "/" + genreID + "/movies?api_key=" + this.API_KEY + "&language=" + lang + "&page=" + page + "&include_adult=" + adult + "\n    ");
    };
    TmdbService.prototype.getSimilarMovies = function (movieID, lang) {
        return this.http.get(this.URL_MOVIE + "/" + movieID + "/similar?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getUpComing = function (page, lang) {
        return this.http.get(this.URL_MOVIE + "/upcoming?api_key=" + this.API_KEY + "&language=" + lang + "&page=" + page);
    };
    TmdbService.prototype.getPerson = function (personID, lang) {
        return this.http.get(this.URL_PERSON + "/" + personID + "?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getPersonMovies = function (personID, lang) {
        return this.http.get(this.URL_PERSON + "/" + personID + "/movie_credits?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getPersonTv = function (personID, lang) {
        return this.http.get(this.URL_PERSON + "/" + personID + "/tv_credits?api_key=" + this.API_KEY + "&language=" + lang);
    };
    TmdbService.prototype.getPager = function (totalItems, currentPage) {
        if (currentPage === void 0) { currentPage = 1; }
        var totalPages = totalItems;
        var startPage = 0;
        var endPage = 0;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                if (currentPage >= 1000) {
                    currentPage = 1000;
                    totalPages = 1000;
                }
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // create an array of pages to ng-repeat in the pager control
        var pages = new Array(startPage, currentPage, endPage);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            pages: pages
        };
    };
    TmdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_service_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], TmdbService);
    return TmdbService;
}());



/***/ }),

/***/ "./src/app/shared/shared-material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/shared-material.module.ts ***!
  \**************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SharedMaterialModule = /** @class */ (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ]
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/share-modal/share-modal.component */ "./src/app/shared/component/share-modal/share-modal.component.ts");
/* harmony import */ var _service_database_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/database/database.service */ "./src/app/shared/service/database/database.service.ts");
/* harmony import */ var _service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/tmdb/tmdb.service */ "./src/app/shared/service/tmdb/tmdb.service.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                _service_database_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"],
                _service_tmdb_tmdb_service__WEBPACK_IMPORTED_MODULE_9__["TmdbService"]
            ]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_7__["ShareModalComponent"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            declarations: [
                _component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_7__["ShareModalComponent"]
            ],
            entryComponents: [
                _component_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_7__["ShareModalComponent"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAV6yhUmJWeYYgJIH2_Op8VgTMa1JX9mI4',
        authDomain: 'hubmovies-a26fc.firebaseapp.com',
        databaseURL: 'https://hubmovies-a26fc.firebaseio.com',
        projectId: 'hubmovies-a26fc',
        storageBucket: 'hubmovies-a26fc.appspot.com',
        messagingSenderId: '559417527686'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
    if ('serviceWorker' in navigator && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        navigator.serviceWorker.register('/ngsw-worker.js');
    }
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ravivalluri/Desktop/movieSite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map