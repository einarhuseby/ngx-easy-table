webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-container\">\n  <div class=\"ngx-columns\">\n    <div class=\"ngx-column ngx-col-xs-12\">\n      <h3>\n        Ngx-easy-table\n      </h3>\n    </div>\n  </div>\n  <div class=\"ngx-columns\">\n    <div class=\"ngx-column ngx-col-xs-12\">\n      <ngx-table\n        [configuration]=\"configuration\"\n        [data]=\"data\"\n        [columns]=\"columns\">\n      </ngx-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.configuration = __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* ConfigService */].config;
        this.columns = [
            { key: 'phone', title: 'phone' },
            { key: 'age', title: 'age' },
            { key: 'company', title: 'company' },
            { key: 'name', title: 'name' },
            { key: 'isActive', title: 'isActive' }
        ];
        this.data = [{
                'phone': '+1 (949) 527-2108',
                'age': 36,
                'company': 'KONGENE',
                'name': 'Deanne Contreras',
                'isActive': false
            }, {
                'phone': '+1 (878) 515-3653',
                'age': 32,
                'company': 'ISOSWITCH',
                'name': 'Peggy Burke',
                'isActive': false
            }, {
                'phone': '+1 (844) 593-2360',
                'age': 21,
                'company': 'HIVEDOM',
                'name': 'Josephine Reilly',
                'isActive': true
            }, {
                'phone': '+1 (800) 413-3813',
                'age': 24,
                'company': 'EMERGENT',
                'name': 'Phillips Fry',
                'isActive': false
            }, {
                'phone': '+1 (934) 551-2224',
                'age': 20,
                'company': 'ZILLANET',
                'name': 'Valentine Webb',
                'isActive': false
            }, {
                'phone': '+1 (948) 460-3627',
                'age': 31,
                'company': 'KNOWLYSIS',
                'name': 'Heidi Duncan',
                'isActive': true
            }, {
                'phone': '+1 (841) 479-3920',
                'age': 30,
                'company': 'TYPHONICA',
                'name': 'Poole Dodson',
                'isActive': false
            }, {
                'phone': '+1 (998) 546-2953',
                'age': 37,
                'company': 'COLAIRE',
                'name': 'Marie Molina',
                'isActive': false
            }, {
                'phone': '+1 (811) 511-2927',
                'age': 31,
                'company': 'OMNIGOG',
                'name': 'Angelique Frazier',
                'isActive': true
            }, {
                'phone': '+1 (967) 504-3593',
                'age': 35,
                'company': 'ENERVATE',
                'name': 'Kinney Logan',
                'isActive': true
            }, {
                'phone': '+1 (902) 500-3665',
                'age': 28,
                'company': 'CALCULA',
                'name': 'Wilson Hatfield',
                'isActive': true
            }, {
                'phone': '+1 (933) 565-2698',
                'age': 29,
                'company': 'GINK',
                'name': 'Trevino Casey',
                'isActive': true
            }, {
                'phone': '+1 (939) 530-3189',
                'age': 34,
                'company': 'MARKETOID',
                'name': 'Scott Barker',
                'isActive': false
            }, {
                'phone': '+1 (949) 600-2827',
                'age': 29,
                'company': 'MATRIXITY',
                'name': 'Sheree James',
                'isActive': true
            }, {
                'phone': '+1 (833) 559-2128',
                'age': 35,
                'company': 'LETPRO',
                'name': 'Kristen Whitehead',
                'isActive': true
            }, {
                'phone': '+1 (923) 480-2195',
                'age': 20,
                'company': 'HOMETOWN',
                'name': 'Norma Rush',
                'isActive': false
            }, {
                'phone': '+1 (967) 573-3873',
                'age': 35,
                'company': 'EWEVILLE',
                'name': 'Merrill Allen',
                'isActive': true
            }, {
                'phone': '+1 (985) 404-2360',
                'age': 30,
                'company': 'PORTALINE',
                'name': 'Claudia Sawyer',
                'isActive': true
            }, {
                'phone': '+1 (907) 406-2333',
                'age': 27,
                'company': 'VIRVA',
                'name': 'Craig Herrera',
                'isActive': false
            }, {
                'phone': '+1 (954) 412-3881',
                'age': 37,
                'company': 'VINCH',
                'name': 'Peterson Johns',
                'isActive': false
            }, {
                'phone': '+1 (882) 527-2652',
                'age': 25,
                'company': 'GYNKO',
                'name': 'Gordon Rutledge',
                'isActive': false
            }, {
                'phone': '+1 (884) 587-2850',
                'age': 20,
                'company': 'COMCUR',
                'name': 'Patton Mcbride',
                'isActive': false
            }, {
                'phone': '+1 (802) 562-2467',
                'age': 39,
                'company': 'EARTHPURE',
                'name': 'Trudy Camacho',
                'isActive': false
            }, {
                'phone': '+1 (873) 421-3625',
                'age': 40,
                'company': 'ARCHITAX',
                'name': 'Chandra Blair',
                'isActive': true
            }, {
                'phone': '+1 (901) 502-3536',
                'age': 36,
                'company': 'CANOPOLY',
                'name': 'Josefa Foley',
                'isActive': true
            }, {
                'phone': '+1 (985) 524-3581',
                'age': 36,
                'company': 'ENTOGROK',
                'name': 'Kathy Barr',
                'isActive': false
            }, {
                'phone': '+1 (948) 492-2881',
                'age': 40,
                'company': 'CENTICE',
                'name': 'Sybil Sears',
                'isActive': false
            }, {
                'phone': '+1 (815) 412-3123',
                'age': 36,
                'company': 'ZANILLA',
                'name': 'Moody Blevins',
                'isActive': true
            }, {
                'phone': '+1 (924) 594-3384',
                'age': 31,
                'company': 'NAMEGEN',
                'name': 'Kristine Ratliff',
                'isActive': true
            }, {
                'phone': '+1 (938) 550-3997',
                'age': 30,
                'company': 'MAGNEATO',
                'name': 'Cooley Pitts',
                'isActive': false
            }, {
                'phone': '+1 (930) 593-3548',
                'age': 30,
                'company': 'GEOFORMA',
                'name': 'Haley Noble',
                'isActive': false
            }, {
                'phone': '+1 (995) 479-2495',
                'age': 26,
                'company': 'LYRIA',
                'name': 'Garner Owens',
                'isActive': true
            }, {
                'phone': '+1 (958) 410-2373',
                'age': 24,
                'company': 'SOFTMICRO',
                'name': 'Jody Reyes',
                'isActive': true
            }, {
                'phone': '+1 (835) 551-3617',
                'age': 39,
                'company': 'CORPORANA',
                'name': 'Patterson Chavez',
                'isActive': true
            }, {
                'phone': '+1 (872) 561-3479',
                'age': 20,
                'company': 'BOINK',
                'name': 'Ellen Nielsen',
                'isActive': true
            }, {
                'phone': '+1 (935) 535-2958',
                'age': 26,
                'company': 'PETICULAR',
                'name': 'Serena Graves',
                'isActive': false
            }, {
                'phone': '+1 (921) 426-2277',
                'age': 24,
                'company': 'SHOPABOUT',
                'name': 'Emily Bruce',
                'isActive': false
            }, {
                'phone': '+1 (875) 474-3800',
                'age': 29,
                'company': 'COMCUBINE',
                'name': 'Fanny Swanson',
                'isActive': true
            }, {
                'phone': '+1 (893) 536-2201',
                'age': 31,
                'company': 'ZEDALIS',
                'name': 'Sellers Velez',
                'isActive': false
            }, {
                'phone': '+1 (927) 460-3553',
                'age': 23,
                'company': 'SUREMAX',
                'name': 'Blankenship Glover',
                'isActive': false
            }];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* ConfigService */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_easy_table_table_module__ = __webpack_require__("../../../../../src/app/ngx-easy-table/table.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_easy_table_table_module__["a" /* TableModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigService = (function () {
    function ConfigService() {
    }
    ConfigService.config = {
        searchEnabled: true,
        headerEnabled: true,
        orderEnabled: true,
        globalSearchEnabled: true,
        paginationEnabled: true,
        exportEnabled: false,
        clickEvent: true,
        selectRow: false,
        selectCol: false,
        selectCell: false,
        rows: 10,
        additionalActions: false,
        serverPagination: false,
        isLoading: false,
        detailsTemplate: false,
        groupRows: false,
        paginationRangeEnabled: false,
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])()
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/base/base.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Verdana, serif;\n}\n\n.ngx-table__table-row--selected {\n  background: #9cbff9 !important;\n}\n\n.ngx-table__table-col--selected {\n  background: #9cbff9 !important;\n}\n\n.ngx-table__table-cell--selected {\n  background: #9cbff9 !important;\n}\n.ngx-table__table-loader {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/base/base.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-container\">\n  <div class=\"ngx-columns\">\n    <div class=\"ngx-column ngx-col-4 ngx-col-mr-auto\"></div>\n    <div class=\"ngx-column ngx-col-3\">\n      <global-search\n        *ngIf=\"config.globalSearchEnabled\"\n        (globalUpdate)=\"onGlobalSearch($event)\">\n      </global-search>\n    </div>\n  </div>\n  <div class=\"ngx-columns\">\n    <table class=\"ngx-table ngx-table-striped ngx-table-hover\">\n      <thead>\n      <tr class=\"ngx-table__header\" *ngIf=\"config.headerEnabled\">\n        <ng-container *ngFor=\"let column of columns\">\n          <th class=\"ngx-table__header-cell\"\n              (click)=\"!!column['sort'] || orderBy(column['key'])\">\n            <div class=\"ngx-d-inline\">{{ column['title'] }}</div>\n            <span *ngIf=\"resource.order[column['key']]==='asc' \"\n                  [style.display]=\"config.orderEnabled?'':'none' \"\n                  class=\"ngx-icon ngx-icon-arrow-up\">\n            </span>\n            <span *ngIf=\"resource.order[column['key']]==='desc' \"\n                  [style.display]=\"config.orderEnabled?'':'none' \"\n                  class=\"ngx-icon ngx-icon-arrow-down\">\n            </span>\n          </th>\n        </ng-container>\n        <th *ngIf=\"config.additionalActions || config.detailsTemplate\"\n            class=\"ngx-table__header-cell-additional-actions\">\n          <div class=\"ngx-dropdown ngx-active ngx-dropdown-right\"\n               *ngIf=\"config.additionalActions\"\n               [class.ngx-active]=\"menuActive\">\n            <a class=\"ngx-btn ngx-btn-link\" (click)=\"menuActive = !menuActive\">\n              <span class=\"ngx-icon ngx-icon-menu\"></span>\n            </a>\n            <ul class=\"ngx-menu ngx-table__table-menu\">\n              <li class=\"ngx-menu-item\">\n                <csv-export *ngIf=\"config.exportEnabled\"></csv-export>\n              </li>\n            </ul>\n          </div>\n        </th>\n      </tr>\n      <tr *ngIf=\"config.searchEnabled\"\n          class=\"ngx-table__sortHeader\">\n        <ng-container *ngFor=\"let column of columns\">\n          <th>\n            <table-header (update)=\"onSearch($event)\" [column]=\"column\"></table-header>\n          </th>\n        </ng-container>\n        <th *ngIf=\"config.additionalActions || config.detailsTemplate\"></th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"data && !config.isLoading\">\n      <ng-container *ngIf=\"rowTemplate\">\n        <tr *ngFor=\"let row of data | search : term | global : globalSearchTerm | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id };\n              let rowIndex = index\"\n            (click)=\"clickedCell($event, row, '', '', rowIndex)\"\n            [class.ngx-table__table-row--selected]=\"rowIndex == selectedRow && !config.selectCell\">\n          <ng-container [ngTemplateOutlet]=\"rowTemplate\"\n                        [ngTemplateOutletContext]=\"{ $implicit: row }\">\n          </ng-container>\n        </tr>\n      </ng-container>\n      <ng-container *ngIf=\"!rowTemplate && !config.groupRows\">\n        <ng-container\n          *ngFor=\"let row of data | search : term | global : globalSearchTerm | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count, id: id };\n                  let rowIndex = index\"\n          [class.ngx-table__table-row--selected]=\"rowIndex == selectedRow && !config.selectCell\">\n          <tr>\n            <ng-container *ngFor=\"let column of columns; let colIndex = index\">\n              <td (click)=\"clickedCell($event, row, column['key'], colIndex, rowIndex)\"\n                  [class.ngx-table__table-col--selected]=\"colIndex == selectedCol && !config.selectCell\"\n                  [class.ngx-table__table-cell--selected]=\"colIndex == selectedCol && rowIndex == selectedRow && !config.selectCol && !config.selectRow\"\n              >\n                <div>{{ row[column['key']] }}</div>\n              </td>\n            </ng-container>\n            <td *ngIf=\"config.additionalActions || config.detailsTemplate\">\n              <span class=\"ngx-icon ngx-c-hand\"\n                    [class.ngx-icon-arrow-down]=\"selectedDetailsTemplateRowId === rowIndex\"\n                    [class.ngx-icon-arrow-right]=\"selectedDetailsTemplateRowId !== rowIndex\"\n                    (click)=\"selectRowId(rowIndex)\">\n              </span>\n            </td>\n          </tr>\n          <tr *ngIf=\"config.detailsTemplate && selectedDetailsTemplateRowId === rowIndex\">\n            <td [attr.colspan]=\"columns.length + 1\">\n              <ng-container\n                [ngTemplateOutlet]=\"detailsTemplate\"\n                [ngTemplateOutletContext]=\"{ $implicit: row }\">\n              </ng-container>\n            </td>\n          </tr>\n        </ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!rowTemplate && config.groupRows\">\n        <ng-container\n          *ngFor=\"let group of grouped; let rowIndex = index\">\n          <tr>\n            <td [attr.colspan]=\"columns.length\">\n              <div>{{group[0][groupRowsBy]}} ({{group.length}})</div>\n            </td>\n            <td>\n              <span class=\"ngx-icon ngx-c-hand\"\n                    [class.ngx-icon-arrow-down]=\"selectedDetailsTemplateRowId === rowIndex\"\n                    [class.ngx-icon-arrow-right]=\"selectedDetailsTemplateRowId !== rowIndex\"\n                    (click)=\"selectRowId(rowIndex)\">\n              </span>\n            </td>\n          </tr>\n          <ng-container *ngIf=\"selectedDetailsTemplateRowId === rowIndex\">\n            <tr *ngFor=\"let row of group\">\n              <td *ngFor=\"let column of columns\">\n                {{row[column['key']]}}\n                <!-- TODO allow users to add groupRowsTemplateRef -->\n              </td>\n              <td></td>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </ng-container>\n      </tbody>\n      <tbody *ngIf=\"!data\">\n      <tr class=\"ngx-table__body-empty\">\n        <td>No results</td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"config.isLoading\">\n      <tr class=\"ngx-table__body-loading\">\n        <td>\n          <div class=\"ngx-table__table-loader\"></div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <pagination\n    *ngIf=\"config.paginationEnabled\"\n    [id]=\"id\"\n    [pagination]=\"pagination\"\n    (updateRange)=\"onPagination($event)\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/ngx-easy-table/services/resource-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_config_service__ = __webpack_require__("../../../../../src/app/ngx-easy-table/services/config-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_event_enum__ = __webpack_require__("../../../../../src/app/ngx-easy-table/model/event.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger_service__ = __webpack_require__("../../../../../src/app/ngx-easy-table/services/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_reduce__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/reduce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_groupBy__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/groupBy.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BaseComponent = (function () {
    function BaseComponent(resource, cdr, logger) {
        this.resource = resource;
        this.cdr = cdr;
        this.logger = logger;
        this.grouped = [];
        this.menuActive = false;
        this.page = 1;
        this.count = null;
        this.selectedDetailsTemplateRowId = null;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        // make random pagination ID to avoid situation when we have more than 1 table at page
        this.id = Math.floor((Math.random() * 10000) + 1);
    }
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.configuration) {
            __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config = this.configuration;
        }
        this.config = __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config;
        this.limit = this.configuration.rows;
        if (this.groupRowsBy) {
            __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */]
                .from(this.data)
                .groupBy(function (row) { return row[_this.groupRowsBy]; })
                .flatMap(function (group) { return group.reduce(function (acc, curr) { return acc.concat([curr]); }, []); })
                .subscribe(function (row) { return _this.grouped.push(row); });
        }
    };
    BaseComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
    };
    BaseComponent.prototype.ngOnChanges = function (changes) {
        var data = changes.data;
        var pagination = changes.pagination;
        if (data && data.currentValue) {
            this.data = data.currentValue.slice();
        }
        if (pagination && pagination.currentValue) {
            this.count = pagination.currentValue.count;
        }
    };
    BaseComponent.prototype.orderBy = function (key) {
        if (__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.orderEnabled || !__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.serverPagination) {
            this.data = this.resource.sortBy(key);
            this.data = this.data.slice();
        }
        this.onOrder(key);
    };
    BaseComponent.prototype.clickedCell = function ($event, row, key, colIndex, rowIndex) {
        if (__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.selectRow) {
            this.selectedRow = rowIndex;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.selectCol) {
            this.selectedCol = colIndex;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.selectCell) {
            this.selectedRow = rowIndex;
            this.selectedCol = colIndex;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.clickEvent) {
            var value = {
                event: $event,
                row: row,
                key: key,
                rowId: rowIndex,
                colId: colIndex
            };
            this.emitEvent(__WEBPACK_IMPORTED_MODULE_3__model_event_enum__["a" /* Event */].onClick, value);
        }
    };
    BaseComponent.prototype.toggleColumn = function (colIndex) {
        var toggleColumns = new Set(this.columns);
        if (toggleColumns.has(colIndex)) {
            toggleColumns.delete(colIndex);
        }
        else {
            toggleColumns.add(colIndex);
        }
    };
    BaseComponent.prototype.onSearch = function ($event) {
        if (!__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.serverPagination) {
            this.term = $event;
        }
        this.emitEvent(__WEBPACK_IMPORTED_MODULE_3__model_event_enum__["a" /* Event */].onSearch, $event);
    };
    BaseComponent.prototype.onGlobalSearch = function ($event) {
        if (!__WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */].config.serverPagination) {
            this.globalSearchTerm = $event;
        }
        this.emitEvent(__WEBPACK_IMPORTED_MODULE_3__model_event_enum__["a" /* Event */].onGlobalSearch, $event);
    };
    BaseComponent.prototype.onPagination = function ($event) {
        this.page = $event.page;
        this.limit = $event.limit;
        this.emitEvent(__WEBPACK_IMPORTED_MODULE_3__model_event_enum__["a" /* Event */].onPagination, $event);
    };
    BaseComponent.prototype.onOrder = function (key) {
        var value = {
            key: key,
            order: this.resource.order[key]
        };
        this.emitEvent(__WEBPACK_IMPORTED_MODULE_3__model_event_enum__["a" /* Event */].onOrder, value);
    };
    BaseComponent.prototype.emitEvent = function (event, value) {
        this.logger.info("event: " + __WEBPACK_IMPORTED_MODULE_3__model_event_enum__["a" /* Event */][event] + "; value: " + JSON.stringify(value));
        this.event.emit({ event: __WEBPACK_IMPORTED_MODULE_3__model_event_enum__["a" /* Event */][event], value: value });
    };
    BaseComponent.prototype.selectRowId = function (rowIndex) {
        if (this.selectedDetailsTemplateRowId === rowIndex) {
            this.selectedDetailsTemplateRowId = null;
        }
        else {
            this.selectedDetailsTemplateRowId = rowIndex;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "configuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "pagination", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "groupRowsBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "detailsTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Array)
    ], BaseComponent.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], BaseComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* TemplateRef */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* TemplateRef */])
    ], BaseComponent.prototype, "rowTemplate", void 0);
    BaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-table',
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */], __WEBPACK_IMPORTED_MODULE_4__services_logger_service__["a" /* LoggerService */], __WEBPACK_IMPORTED_MODULE_2__services_config_service__["a" /* ConfigService */]],
            template: __webpack_require__("../../../../../src/app/ngx-easy-table/components/base/base.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ngx-easy-table/components/base/base.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__services_logger_service__["a" /* LoggerService */]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/base/base.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_component__ = __webpack_require__("../../../../../src/app/ngx-easy-table/components/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_search_global_search_component__ = __webpack_require__("../../../../../src/app/ngx-easy-table/components/global-search/global-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_global_search_pipe__ = __webpack_require__("../../../../../src/app/ngx-easy-table/pipes/global-search-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_header_pipe__ = __webpack_require__("../../../../../src/app/ngx-easy-table/pipes/header-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/ngx-easy-table/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/ngx-easy-table/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__csv_export_component__ = __webpack_require__("../../../../../src/app/ngx-easy-table/components/csv-export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__base_component__["a" /* BaseComponent */],
                __WEBPACK_IMPORTED_MODULE_3__global_search_global_search_component__["a" /* GlobalSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__csv_export_component__["a" /* CsvExportComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_header_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_global_search_pipe__["a" /* GlobalSearchPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__base_component__["a" /* BaseComponent */]]
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/csv-export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvExportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/ngx-easy-table/services/resource-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CsvExportComponent = (function () {
    function CsvExportComponent(resource) {
        this.resource = resource;
    }
    CsvExportComponent.prototype.exportCsv = function () {
        var data = this.resource.data;
        var csvContent = 'data:text/csv;charset=utf-8,';
        var dataString = '';
        var x = [];
        var keys = Object.keys(this.resource.data[0]);
        data.forEach(function (row, index) {
            x[index] = [];
            keys.forEach(function (i) {
                if (row.hasOwnProperty(i)) {
                    if (typeof row[i] === 'object') {
                        row[i] = 'Object'; // so far just change object to "Object" string
                    }
                    x[index].push(row[i]);
                }
            });
        });
        csvContent += keys + '\n';
        x.forEach(function (row, index) {
            dataString = row.join(',');
            csvContent += index < data.length ? dataString + '\n' : dataString;
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'my_data.csv');
        link.click();
    };
    CsvExportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'csv-export',
            template: "\n    <a (click)=\"exportCsv()\">\n      CSV export\n    </a>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */]])
    ], CsvExportComponent);
    return CsvExportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/global-search/global-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalSearchComponent = (function () {
    function GlobalSearchComponent() {
        this.globalUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], GlobalSearchComponent.prototype, "globalUpdate", void 0);
    GlobalSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'global-search',
            template: __webpack_require__("../../../../../src/app/ngx-easy-table/components/global-search/global-search.html")
        })
    ], GlobalSearchComponent);
    return GlobalSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/global-search/global-search.html":
/***/ (function(module, exports) {

module.exports = "<label class=\"form-label ngx-float-right\" for=\"search\">\n  <input type=\"text\"\n         id=\"search\"\n         class=\"ngx-table__global-search ngx-form-input ngx-input-sm\"\n         #input\n         (input)=\"globalUpdate.emit({value: input.value})\"\n         placeholder=\"Search\"/>\n</label>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "column", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "update", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'table-header',
            template: "\n    <label for=\"search_{{ column['key'] }}\">\n      <input type=\"text\"\n             id=\"search_{{ column['key'] }}\"\n             aria-label=\"Search\"\n             placeholder=\"Search {{ column['title'] }}\"\n             class=\"ngx-table__header-search ngx-form-input ngx-input-sm\"\n             #input\n             (input)=\"update.emit({value: input.value, key: column['key']})\"\n      >\n    </label>"
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__("../../../../../src/app/ngx-easy-table/services/config-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent() {
        this.updateRange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* EventEmitter */]();
        this.ranges = [5, 10, 25, 50, 100];
        this.limit = __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */].config.rows;
        this.showRange = false;
    }
    PaginationComponent.prototype.onPageChange = function ($event) {
        this.updateRange.emit({
            page: $event,
            limit: this.limit
        });
    };
    PaginationComponent.prototype.changeLimit = function (limit) {
        this.showRange = !this.showRange;
        this.limit = limit;
        this.updateRange.emit({
            page: 1,
            limit: limit
        });
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.config = __WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */].config;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pagination", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "updateRange", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pagination',
            template: __webpack_require__("../../../../../src/app/ngx-easy-table/components/pagination/pagination.html"),
            styles: [__webpack_require__("../../../../../src/app/ngx-easy-table/components/pagination/pagination.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/pagination/pagination.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ pagination-controls > pagination-template > ul > li {\n  border: 1px solid #f0f0f0;\n}\n@media screen and (max-width: 480px) {\n  .pagination-mobile {\n    margin-right: auto;\n    margin-left: auto;\n  }\n}\n\n.ngx-btn {\n  color: #4f596c;\n  border: 1px solid #f0f0f0;\n}\n\n.ngx-range-dropdown {\n  margin-top: 16px;\n}\n\n.ngx-range-dropdown-button {\n  padding: 4px;\n}\n\n.ngx-menu {\n  min-width: 55px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/components/pagination/pagination.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-columns\">\n  <div class=\"ngx-col-mr-auto pagination-mobile\">\n    <pagination-controls\n      [id]=\"id\"\n      [maxSize]=\"5\"\n      [previousLabel]=\"''\"\n      [nextLabel]=\"''\"\n      (pageChange)=\"onPageChange($event)\">\n    </pagination-controls>\n  </div>\n  <div class=\"pagination-mobile\" *ngIf=\"config.paginationRangeEnabled\">\n    <div class=\"ngx-dropdown ngx-range-dropdown ngx-float-right\"\n         [class.ngx-active]=\"showRange\"\n         id=\"rowAmount\">\n      <div class=\"ngx-btn-group\">\n        <span class=\"ngx-btn ngx-range-dropdown-button\"\n              (click)=\"showRange = !showRange\">\n          {{limit}} <i class=\"ngx-icon ngx-icon-arrow-down\"></i>\n        </span>\n        <ul class=\"ngx-menu\">\n          <li class=\"ngx-c-hand ngx-range-dropdown-button\"\n              (click)=\"changeLimit(limit)\"\n              *ngFor=\"let limit of ranges\">\n            <span>{{limit}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/model/event.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event;
(function (Event) {
    Event[Event["onPagination"] = 0] = "onPagination";
    Event[Event["onOrder"] = 1] = "onOrder";
    Event[Event["onGlobalSearch"] = 2] = "onGlobalSearch";
    Event[Event["onSearch"] = 3] = "onSearch";
    Event[Event["onClick"] = 4] = "onClick";
})(Event || (Event = {}));


/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/pipes/global-search-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/ngx-easy-table/services/resource-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalSearchPipe = (function () {
    function GlobalSearchPipe(resource) {
        this.resource = resource;
    }
    GlobalSearchPipe.prototype.transform = function (dataArr, filter) {
        var _this = this;
        if (typeof dataArr === 'undefined') {
            return;
        }
        if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === '') {
            return dataArr;
        }
        this.resource.data = [];
        dataArr.forEach(function (row) {
            for (var value in row) {
                if (row.hasOwnProperty(value)) {
                    var element = void 0;
                    if (typeof row[value] === 'object') {
                        element = JSON.stringify(row[value]).toLocaleLowerCase();
                    }
                    if (typeof row[value] === 'boolean') {
                        element = '' + row[value];
                    }
                    if (typeof row[value] === 'string') {
                        element = row[value].toLocaleLowerCase();
                    }
                    if (typeof row[value] === 'number') {
                        element = '' + row[value];
                    }
                    if (element.indexOf(filter['value'].toLocaleLowerCase()) >= 0) {
                        _this.resource.data.push(row);
                        return;
                    }
                }
            }
        });
        return this.resource.data;
    };
    GlobalSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Pipe */])({
            name: 'global'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */]])
    ], GlobalSearchPipe);
    return GlobalSearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/pipes/header-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resource_service__ = __webpack_require__("../../../../../src/app/ngx-easy-table/services/resource-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPipe = (function () {
    function SearchPipe(resource) {
        this.resource = resource;
    }
    SearchPipe.prototype.transform = function (value, filters) {
        var _this = this;
        if (typeof value === 'undefined') {
            return;
        }
        this.resource.data = value.slice();
        if (typeof filters === 'undefined' || Object.keys(filters).length === 0) {
            return this.resource.data;
        }
        var filtersArr = [];
        filtersArr[filters.key] = filters.value;
        value.forEach(function (item) {
            for (var filterKey in filtersArr) {
                if (filtersArr.hasOwnProperty(filterKey)) {
                    var element = '';
                    if (typeof item[filterKey] === 'string') {
                        element = item[filterKey].toLocaleLowerCase();
                    }
                    if (typeof item[filterKey] === 'object') {
                        element = JSON.stringify(item[filterKey]);
                    }
                    if (typeof item[filterKey] === 'number') {
                        element = item[filterKey].toString();
                    }
                    if (typeof item[filterKey] === 'boolean') {
                        element = item[filterKey].toString();
                    }
                    if (element.indexOf(filtersArr[filterKey].toLocaleLowerCase()) === -1) {
                        _this.resource.data.splice(_this.resource.data.indexOf(item), 1);
                        return;
                    }
                }
            }
        });
        return this.resource.data;
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Pipe */])({
            name: 'search'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_resource_service__["a" /* ResourceService */]])
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/services/config-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigService = (function () {
    function ConfigService() {
    }
    ConfigService.config = {
        searchEnabled: false,
        headerEnabled: true,
        orderEnabled: true,
        globalSearchEnabled: false,
        paginationEnabled: true,
        exportEnabled: false,
        clickEvent: true,
        selectRow: false,
        selectCol: false,
        selectCell: false,
        rows: 10,
        additionalActions: false,
        serverPagination: false,
        isLoading: true,
        detailsTemplate: false,
        groupRows: false,
        paginationRangeEnabled: true,
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])()
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/services/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.error = function (message) {
        console.error(message);
    };
    LoggerService.prototype.warn = function (message) {
        console.warn(message);
    };
    LoggerService.prototype.info = function (message) {
        console.log(message);
    };
    LoggerService.prototype.debug = function (message) {
        console.log(message);
    };
    LoggerService.prototype.log = function (message) {
        console.log(message);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/services/resource-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourceService = (function () {
    function ResourceService() {
        this.data = [];
        this.order = [];
    }
    ResourceService.prototype.sortBy = function (key) {
        var _this = this;
        this.key = key;
        if (Object.keys(this.order).length === 0) {
            this.order[this.key] = 'asc';
        }
        if (this.order[this.key] === 'asc') {
            this.order = [];
            this.order[this.key] = 'desc';
            this.data.sort(function (a, b) { return _this.compare(a, b); });
        }
        else {
            this.order = [];
            this.order[this.key] = 'asc';
            this.data.sort(function (a, b) { return _this.compare(b, a); });
        }
        return this.data;
    };
    ResourceService.prototype.compare = function (a, b) {
        if ((isNaN(parseFloat(a[this.key])) || !isFinite(a[this.key])) || (isNaN(parseFloat(b[this.key])) || !isFinite(b[this.key]))) {
            if (a[this.key] + ''.toLowerCase() < b[this.key] + ''.toLowerCase()) {
                return -1;
            }
            if (a[this.key] + ''.toLowerCase() > b[this.key] + ''.toLowerCase()) {
                return 1;
            }
        }
        else {
            if (parseFloat(a[this.key]) < parseFloat(b[this.key])) {
                return -1;
            }
            if (parseFloat(a[this.key]) > parseFloat(b[this.key])) {
                return 1;
            }
        }
        return 0;
    };
    ResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])()
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-easy-table/table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_base_base_component__ = __webpack_require__("../../../../../src/app/ngx-easy-table/components/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_base_base_module__ = __webpack_require__("../../../../../src/app/ngx-easy-table/components/base/base.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TableModule = (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_base_base_module__["a" /* BaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__components_base_base_component__["a" /* BaseComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__components_base_base_component__["a" /* BaseComponent */]],
            providers: []
        })
    ], TableModule);
    return TableModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map