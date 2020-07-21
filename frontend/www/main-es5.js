function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/line-chart/line-chart.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/line-chart/line-chart.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLineChartLineChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<kendo-chart>\n  <kendo-chart-title text=\"Dividends\"></kendo-chart-title>\n\n  <kendo-chart-series>\n    <kendo-chart-series-item  *ngFor=\"let item of valueArray\" type=\"column\" [data]=\"[item]\" [labels]=\"{visible: true}\"></kendo-chart-series-item>\n\n  </kendo-chart-series>\n</kendo-chart>\n<div class=\"months\">\n  <div *ngFor=\"let month of monthArray\">\n    {{month}}\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <button mat-button color=\"primary\" routerLink=\"\" class=\"nav-button\">Home</button>\n    <button mat-button color=\"primary\" routerLink=\"/save-list\" class=\"nav-button\">Stock List</button>\n    <button mat-button color=\"primary\" routerLink=\"/portfolio\" class=\"nav-button\">View Portfolio</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-horizontal-stepper linear=\"true\">\n  <mat-step [stepControl]=\"stockForm\" label=\"Enter Stock\">\n    <mat-card class=\"card\">\n      <mat-card-title>\n        Enter Stock Ticker\n      </mat-card-title>\n      <form [formGroup]=\"stockForm\" class=\"stockForm\">\n        <div formArrayName=\"tickers\">\n          <div *ngFor=\"let item of tickers.controls; let tickerIndex = index\" [formGroupName]=\"tickerIndex\">\n            <mat-form-field>\n              <mat-label>Stock Ticker</mat-label>\n              <input type=\"text\" matInput formControlName=\"ticker\" />\n            </mat-form-field>\n            <button mat-raised-button color=\"warn\" (click)=\"deleteInput(tickerIndex)\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </div>\n        </div>\n        <button mat-raised-button (click)=\"addInput()\">Add Ticker</button>\n        <button mat-raised-button color=\"primary\" (click)=\"submit()\" class=\"submit-button\">Submit</button>\n      </form>\n    </mat-card>\n  </mat-step>\n  <mat-step label=\"Results\" [completed]=\"isSubmitted\">\n    <div *ngIf=\"isSubmitted\">\n      <app-results *ngFor=\"let ticker of tickers.value\" [ticker]=\"ticker\"></app-results>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/results/results.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/results/results.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsHomeResultsResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-spinner *ngIf=\"loading\"></mat-spinner>\n      <div *ngIf=\"!loading\">\n        <div class=\"results\" *ngIf=\"!error\">\n          <p>Stock data input correctly for {{stockData.stock_name}}</p>\n        </div>\n      <mat-error *ngIf=\"error\">{{error}}</mat-error>\n      </div>\n\n  </mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/portfolio/portfolio.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/portfolio/portfolio.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsPortfolioPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n  <mat-card class=\"card\">\n  <form [formGroup]=\"simulationForm\" (ngSubmit)=\"submitForm()\" class=\"simulation-form\">\n    <mat-card-title>Dividend Simulation</mat-card-title>\n\n    <mat-form-field>\n      <mat-label>Ticker</mat-label>\n      <input type=\"text\" matInput formControlName=\"ticker\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Number of shares</mat-label>\n      <input type=\"number\" matInput formControlName=\"shares\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n  </form>\n</mat-card>\n<app-line-chart [monthArray]=\"monthArray\" [valueArray]=\"valueArray\"></app-line-chart>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/save-list/save-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/save-list/save-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsSaveListSaveListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <form class=\"stock-save-form\">\n    <mat-form-field>\n    <input matInput placeholder=\"Expected Dividends\" [(ngModel)]=\"profitWanted\" [ngModelOptions]=\"{standalone:true}\">\n    </mat-form-field>\n  </form>\n</mat-card>\n\n\n<kendo-grid\n  [data]=\"gridView\"\n  [sort]=\"sort\"\n  [sortable]=\"{\n  allowUnsort: true,\n  mode: multiple ? 'multiple' : 'single'\n  }\"\n  (sortChange)=\"sortChange($event)\"\n  *ngIf=\"!loading\"\n  [rowClass]=\"isInvestable\"\n  filterable=\"menu\"\n>\n<ng-template kendoGridToolbarTemplate>\n<button type=\"button\" kendoGridExcelCommand icon=\"file-excel\">Export to Excel</button>\n</ng-template>\n  <kendo-grid-column field=\"stock_name\" title=\"Name\"></kendo-grid-column>\n\n  <kendo-grid-column field=\"price\" title=\"Price\"></kendo-grid-column>\n\n  <kendo-grid-column field=\"ex_div_date\" title=\"Next Ex Div\"></kendo-grid-column>\n  <kendo-grid-column field=\"payment_date\" title=\"Payment Date\"></kendo-grid-column>\n\n  <kendo-grid-column field=\"next_div_amount\" title=\"Next Div Amount\"></kendo-grid-column>\n\n  <kendo-grid-column field=\"investment_needed\" title=\"Investment Needed\">\n    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n      Total :${{ (dataItem.price * (profitWanted / dataItem.dividend)).toFixed(2)}}\n      <br> Invested : {{(dataItem.price * dataItem.shares_owned).toFixed(2)}}\n      <br> Needed: {{(dataItem.price * (profitWanted / dataItem.dividend) - (dataItem.price * dataItem.shares_owned)).toFixed(2)}}\n    </ng-template>\n  </kendo-grid-column>\n\n  <kendo-grid-column field=\"shares_needed\" title=\"Shares Needed\">\n      <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n    Total:{{(profitWanted / dataItem.dividend).toFixed(0) }}\n        <br> Owned: {{dataItem.shares_owned}}\n        <br> Needed: {{((profitWanted / dataItem.dividend) - dataItem.shares_owned).toFixed(0)}}\n  </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-column field=\"ticker\" title=\"Ticker\"></kendo-grid-column>\n\n  <kendo-grid-column  title=\"Return %\" field=\"return\">\n    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n      {{((dataItem.dividend / dataItem.price) * 100).toFixed(2) }}%\n    </ng-template>\n  </kendo-grid-column>\n\n  <kendo-grid-column field=\"last_updated\" title=\"Last Updated\">\n    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n      {{dataItem.last_updated | date : 'short'}}\n    </ng-template>\n  </kendo-grid-column>\n  <kendo-grid-column title=\"Update\">\n    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n      <button mat-raised-button (click)=\"updateStock(dataItem.ticker)\">Update</button>\n    </ng-template>\n  </kendo-grid-column>\n\n  <kendo-grid-excel fileName=\"Dividends.xlsx\"></kendo-grid-excel>\n\n  <ng-template kendoGridDetailTemplate let-dataItem>\n    <section>\n      <table>\n        <thead>\n        <tr>\n          <th>Date</th>\n          <th>Dividend</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of (dataItem.ticker | getDividendTable) | async\">\n          <td>{{item.Date | date}}</td>\n          <td>{{item.Dividends}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </section>\n  </ng-template>\n</kendo-grid>\n\n<mat-spinner *ngIf=\"loading\" class=\"spinner\"></mat-spinner>\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/home/home.component */
    "./src/app/views/home/home.component.ts");
    /* harmony import */


    var _views_save_list_save_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./views/save-list/save-list.component */
    "./src/app/views/save-list/save-list.component.ts");
    /* harmony import */


    var _views_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./views/portfolio/portfolio.component */
    "./src/app/views/portfolio/portfolio.component.ts");

    var routes = [{
      path: '',
      component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'save-list',
      component: _views_save_list_save_list_component__WEBPACK_IMPORTED_MODULE_4__["SaveListComponent"]
    }, {
      path: 'portfolio',
      component: _views_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Stock';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _views_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./views/home/home.component */
    "./src/app/views/home/home.component.ts");
    /* harmony import */


    var _views_home_results_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./views/home/results/results.component */
    "./src/app/views/home/results/results.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _views_save_list_save_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./views/save-list/save-list.component */
    "./src/app/views/save-list/save-list.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @progress/kendo-angular-grid */
    "./node_modules/@progress/kendo-angular-grid/__ivy_ngcc__/dist/fesm2015/index.js");
    /* harmony import */


    var _pipes_get_dividend_table_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipes/get-dividend-table.pipe */
    "./src/app/pipes/get-dividend-table.pipe.ts");
    /* harmony import */


    var _views_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./views/portfolio/portfolio.component */
    "./src/app/views/portfolio/portfolio.component.ts");
    /* harmony import */


    var _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/line-chart/line-chart.component */
    "./src/app/components/line-chart/line-chart.component.ts");
    /* harmony import */


    var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @progress/kendo-angular-charts */
    "./node_modules/@progress/kendo-angular-charts/__ivy_ngcc__/dist/fesm2015/index.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_26___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_26__);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _views_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _views_home_results_results_component__WEBPACK_IMPORTED_MODULE_15__["ResultsComponent"], _views_save_list_save_list_component__WEBPACK_IMPORTED_MODULE_19__["SaveListComponent"], _pipes_get_dividend_table_pipe__WEBPACK_IMPORTED_MODULE_22__["GetDividendTablePipe"], _views_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_23__["PortfolioComponent"], _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_24__["LineChartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__["GridModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__["BodyModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_21__["ExcelModule"], _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_25__["ChartsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/line-chart/line-chart.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/line-chart/line-chart.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLineChartLineChartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".months{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb250aHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/line-chart/line-chart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/line-chart/line-chart.component.ts ***!
    \***************************************************************/

  /*! exports provided: LineChartComponent */

  /***/
  function srcAppComponentsLineChartLineChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
      return LineChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LineChartComponent =
    /*#__PURE__*/
    function () {
      function LineChartComponent() {
        _classCallCheck(this, LineChartComponent);
      }

      _createClass(LineChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LineChartComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LineChartComponent.prototype, "valueArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LineChartComponent.prototype, "monthArray", void 0);
    LineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-line-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./line-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/line-chart/line-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./line-chart.component.css */
      "./src/app/components/line-chart/line-chart.component.css"))["default"]]
    })], LineChartComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-button{\n  margin: 0 10px;\n  background-color: white;\n  color: blue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1idXR0b257XG4gIG1hcmdpbjogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsdWU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/pipes/get-dividend-table.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/pipes/get-dividend-table.pipe.ts ***!
    \**************************************************/

  /*! exports provided: GetDividendTablePipe */

  /***/
  function srcAppPipesGetDividendTablePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetDividendTablePipe", function () {
      return GetDividendTablePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_stock_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/stock-list.service */
    "./src/app/services/stock-list.service.ts");

    var GetDividendTablePipe =
    /*#__PURE__*/
    function () {
      function GetDividendTablePipe(stockService) {
        _classCallCheck(this, GetDividendTablePipe);

        this.stockService = stockService;
      }

      _createClass(GetDividendTablePipe, [{
        key: "transform",
        value: function transform(value) {
          return this.getDividendTable(value);
        }
      }, {
        key: "getDividendTable",
        value: function getDividendTable(ticker) {
          var payload = {
            ticker: ticker
          };
          return this.stockService.getChart(payload);
        }
      }]);

      return GetDividendTablePipe;
    }();

    GetDividendTablePipe.ctorParameters = function () {
      return [{
        type: _services_stock_list_service__WEBPACK_IMPORTED_MODULE_2__["StockListService"]
      }];
    };

    GetDividendTablePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'getDividendTable'
    })], GetDividendTablePipe);
    /***/
  },

  /***/
  "./src/app/services/stock-list.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/stock-list.service.ts ***!
    \************************************************/

  /*! exports provided: StockListService */

  /***/
  function srcAppServicesStockListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockListService", function () {
      return StockListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var StockListService =
    /*#__PURE__*/
    function () {
      function StockListService(http) {
        _classCallCheck(this, StockListService);

        this.http = http;
      }

      _createClass(StockListService, [{
        key: "getList",
        value: function getList() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api, "api/save-list"));
        }
      }, {
        key: "getChart",
        value: function getChart(ticker) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api, "api/scraper"), ticker);
        }
      }]);

      return StockListService;
    }();

    StockListService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StockListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StockListService);
    /***/
  },

  /***/
  "./src/app/services/stock.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/stock.service.ts ***!
    \*******************************************/

  /*! exports provided: StockService */

  /***/
  function srcAppServicesStockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StockService", function () {
      return StockService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var StockService =
    /*#__PURE__*/
    function () {
      function StockService(http) {
        _classCallCheck(this, StockService);

        this.http = http;
      }

      _createClass(StockService, [{
        key: "postStock",
        value: function postStock(payload) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api, "api/dividends"), payload);
        }
      }, {
        key: "getDividendData",
        value: function getDividendData(payload) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api, "api/dividend-data"), payload);
        }
      }, {
        key: "getChartData",
        value: function getChartData() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api, "api/chart-data"));
        }
      }]);

      return StockService;
    }();

    StockService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StockService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StockService);
    /***/
  },

  /***/
  "./src/app/views/home/home.component.css":
  /*!***********************************************!*\
    !*** ./src/app/views/home/home.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n.spinner{\n  width: 100%;\n}\n\n.stockForm{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card{\n  width: 25%;\n  margin-right: auto;\n  margin-left: auto;\n\n}\n\n.submit-button{\n  width: 25%;\n  display: flex;\n  justify-content: center;\n}\n\n.buttons{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc3Bpbm5lcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdG9ja0Zvcm17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcblxufVxuXG4uc3VibWl0LWJ1dHRvbntcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/views/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppViewsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(fb) {
        _classCallCheck(this, HomeComponent);

        this.fb = fb;
        this.isSubmitted = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stockForm = this.fb.group({
            tickers: this.fb.array([this.fb.group({
              ticker: ''
            })])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.isSubmitted = true;
          this.stepper.next();
        }
      }, {
        key: "addInput",
        value: function addInput() {
          this.tickers.push(this.fb.group({
            ticker: ''
          }));
        }
      }, {
        key: "deleteInput",
        value: function deleteInput(tickerIndex) {
          this.tickers.removeAt(tickerIndex);
        }
      }, {
        key: "tickers",
        get: function get() {
          return this.stockForm.get('tickers');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepper"], {
      "static": true
    })], HomeComponent.prototype, "stepper", void 0);
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/views/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/views/home/results/results.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/views/home/results/results.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsHomeResultsResultsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/home/results/results.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/home/results/results.component.ts ***!
    \*********************************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppViewsHomeResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/stock.service */
    "./src/app/services/stock.service.ts");

    var ResultsComponent =
    /*#__PURE__*/
    function () {
      function ResultsComponent(stockService) {
        _classCallCheck(this, ResultsComponent);

        this.stockService = stockService;
      }

      _createClass(ResultsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          var payload = this.ticker;
          this.stockService.postStock(payload).subscribe(function (res) {
            // @ts-ignore
            if (res.error) {
              // @ts-ignore
              _this.error = res.error;
              _this.loading = false;
            } else {
              _this.stockData = res;
              _this.loading = false;
            }
          });
        }
      }]);

      return ResultsComponent;
    }();

    ResultsComponent.ctorParameters = function () {
      return [{
        type: _services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResultsComponent.prototype, "ticker", void 0);
    ResultsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-results',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/results/results.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./results.component.css */
      "./src/app/views/home/results/results.component.css"))["default"]]
    })], ResultsComponent);
    /***/
  },

  /***/
  "./src/app/views/portfolio/portfolio.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/views/portfolio/portfolio.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsPortfolioPortfolioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main{\n  display: flex;\n  flex-direction: column;\n}\n\n.simulation-form{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.simulation-form > * {\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaW11bGF0aW9uLWZvcm17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaW11bGF0aW9uLWZvcm0gPiAqIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/views/portfolio/portfolio.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/views/portfolio/portfolio.component.ts ***!
    \********************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppViewsPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/stock.service */
    "./src/app/services/stock.service.ts");

    var PortfolioComponent =
    /*#__PURE__*/
    function () {
      function PortfolioComponent(fb, stockService) {
        _classCallCheck(this, PortfolioComponent);

        this.fb = fb;
        this.stockService = stockService;
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.stockService.getChartData().subscribe(function (res) {
            _this2.monthArray = Object.keys(res);
            _this2.valueArray = Object.values(res);
          });
          this.simulationForm = this.fb.group({
            ticker: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shares: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var payload = this.ticker;
          this.stockService.getDividendData(payload).subscribe(function (res) {// TODO:Get this to work
          });
        }
      }, {
        key: "ticker",
        get: function get() {
          return this.simulationForm.get('ticker').value;
        }
      }, {
        key: "shares",
        get: function get() {
          return this.simulationForm.get('shares').value;
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"]
      }];
    };

    PortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./portfolio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/portfolio/portfolio.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./portfolio.component.css */
      "./src/app/views/portfolio/portfolio.component.css"))["default"]]
    })], PortfolioComponent);
    /***/
  },

  /***/
  "./src/app/views/save-list/save-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/views/save-list/save-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsSaveListSaveListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stock-save-form{\n\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n}\nmat-card{\n    margin-left: auto;\n  margin-right: auto;\n  max-width: 300px;\n}\n.spinner{\n  margin-right: auto;\n  margin-left: auto;\n}\n.profit-wanted{\n  max-width: 300px;\n  margin-right: auto;\n  margin-left: auto;\n  border: black;\n}\n.k-grid tr.green{\n  background-color: lightgreen;\n}\n.k-grid tr.red{\n  background-color: lightsalmon;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2F2ZS1saXN0L3NhdmUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NhdmUtbGlzdC9zYXZlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9jay1zYXZlLWZvcm17XG5cbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbm1hdC1jYXJke1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5zcGlubmVye1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi5wcm9maXQtd2FudGVke1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXI6IGJsYWNrO1xufVxuXG4uay1ncmlkIHRyLmdyZWVue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG4uay1ncmlkIHRyLnJlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/save-list/save-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/views/save-list/save-list.component.ts ***!
    \********************************************************/

  /*! exports provided: SaveListComponent */

  /***/
  function srcAppViewsSaveListSaveListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaveListComponent", function () {
      return SaveListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_stock_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/stock-list.service */
    "./src/app/services/stock-list.service.ts");
    /* harmony import */


    var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @progress/kendo-data-query */
    "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
    /* harmony import */


    var _services_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/stock.service */
    "./src/app/services/stock.service.ts");

    var SaveListComponent =
    /*#__PURE__*/
    function () {
      function SaveListComponent(stockService, service) {
        _classCallCheck(this, SaveListComponent);

        this.stockService = stockService;
        this.service = service;
        this.multiple = true;
        this.sort = [{
          field: 'ex_div_date',
          dir: 'desc'
        }];
      }

      _createClass(SaveListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.loading = true;
          this.stockService.getList().subscribe(function (res) {
            // @ts-ignore
            _this3.stocks = res;

            _this3.loadStocks();

            _this3.loading = false;
          });
        }
      }, {
        key: "sortChange",
        value: function sortChange(sort) {
          this.sort = sort;
          this.loadStocks();
        }
      }, {
        key: "loadStocks",
        value: function loadStocks() {
          this.gridView = {
            data: Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_3__["orderBy"])(this.stocks, this.sort),
            total: this.stocks.length
          };
        }
      }, {
        key: "isInvestable",
        value: function isInvestable(context) {
          var row = context.dataItem.is_investable;
          return {
            green: row,
            red: !row
          };
        }
      }, {
        key: "updateStock",
        value: function updateStock(ticker) {
          var payload = {
            ticker: ticker
          };
          this.service.postStock(payload).subscribe();
        }
      }]);

      return SaveListComponent;
    }();

    SaveListComponent.ctorParameters = function () {
      return [{
        type: _services_stock_list_service__WEBPACK_IMPORTED_MODULE_2__["StockListService"]
      }, {
        type: _services_stock_service__WEBPACK_IMPORTED_MODULE_4__["StockService"]
      }];
    };

    SaveListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-save-list',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./save-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/save-list/save-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./save-list.component.css */
      "./src/app/views/save-list/save-list.component.css"))["default"]]
    })], SaveListComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      api: 'http://127.0.0.1:80/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/llmoore/Desktop/DividendApp/frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map