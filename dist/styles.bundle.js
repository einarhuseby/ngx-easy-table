webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/spectre-icons.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/spectre-icons.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--7-1!../../node_modules/postcss-loader/lib/index.js??postcss!./spectre-icons.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--7-1!../../node_modules/postcss-loader/lib/index.js??postcss!./spectre-icons.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../../src/assets/spectre.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/spectre.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--7-1!../../node_modules/postcss-loader/lib/index.js??postcss!./spectre.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--7-1!../../node_modules/postcss-loader/lib/index.js??postcss!./spectre.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/spectre-icons.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ! Spectre.css Icons v0.4.5 | MIT License | github.com/picturepan2/spectre  */\n.ngx-icon{ box-sizing: border-box;display: inline-block;font-size: inherit;font-style: normal;height: 1em;position: relative;text-indent: -9999px;vertical-align: middle;width: 1em; }\n.ngx-icon::before,.ngx-icon::after{ display: block;left: 50%;position: absolute;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%); }\n.ngx-icon.ngx-icon-2x{ font-size: 1.6rem; }\n.ngx-icon.ngx-icon-3x{ font-size: 2.4rem; }\n.ngx-icon.ngx-icon-4x{ font-size: 3.2rem; }\n.ngx-accordion .ngx-icon,.ngx-btn .ngx-icon,.ngx-toast .ngx-icon,.ngx-menu .ngx-icon{ vertical-align: -10%; }\n.ngx-btn-lg .ngx-icon{ vertical-align: -15%; }\n.ngx-icon-arrow-down::before,.ngx-icon-arrow-left::before,.ngx-icon-arrow-right::before,.ngx-icon-arrow-up::before,.ngx-icon-downward::before,.ngx-icon-back::before,.ngx-icon-forward::before,.ngx-icon-upward::before{ border: .1rem solid currentColor;border-bottom: 0;border-right: 0;content: \"\";height: .65em;width: .65em; }\n.ngx-icon-arrow-down::before{ -webkit-transform: translate(-50%, -75%) rotate(225deg); transform: translate(-50%, -75%) rotate(225deg); }\n.ngx-icon-arrow-left::before{ -webkit-transform: translate(-25%, -50%) rotate(-45deg); transform: translate(-25%, -50%) rotate(-45deg); }\n.ngx-icon-arrow-right::before{ -webkit-transform: translate(-75%, -50%) rotate(135deg); transform: translate(-75%, -50%) rotate(135deg); }\n.ngx-icon-arrow-up::before{ -webkit-transform: translate(-50%, -25%) rotate(45deg); transform: translate(-50%, -25%) rotate(45deg); }\n.ngx-icon-caret::before{ border-left: .3em solid transparent;border-right: .3em solid transparent;border-top: .3em solid currentColor;content: \"\";height: 0;-webkit-transform: translate(-50%, -25%);transform: translate(-50%, -25%);width: 0; }\n.ngx-icon-menu::before{ background: currentColor;box-shadow: 0 -.35em, 0 .35em;content: \"\";height: .1rem;width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/spectre.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! Spectre.css v0.4.5 | MIT License | github.com/picturepan2/spectre */\n/* Manually forked from Normalize.css */\n/* normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/** 1. Change the default font family in all browsers (opinionated). 2. Correct the line height in all browsers. 3. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS. */\n\n\n/** 1. Add the correct box sizing in IE 10-. 2. Remove the padding in IE 10-. */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/** Correct the cursor style of increment and decrement buttons in Chrome. */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/** 1. Correct the odd appearance in Chrome and Safari. 2. Correct the outline style in Safari. */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/** Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/** 1. Correct the inability to style clickable types in iOS and Safari. 2. Change font properties to `inherit` in Safari. */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive ========================================================================== */\n/* Add the correct display in IE 9-. 1. Add the correct display in Edge, IE, and Firefox. */\ndetails,\nmenu {\n  display: block;\n}\n\n/* Add the correct display in all browsers. */\nsummary {\n  display: list-item;\n  outline: none;\n}\n\n/* Scripting ========================================================================== */\n/** Add the correct display in IE 9-. */\ncanvas {\n  display: inline-block;\n}\n\n/** Add the correct display in IE. */\ntemplate {\n  display: none;\n}\n\n/* Hidden ========================================================================== */\n/** Add the correct display in IE 10-. */\n[hidden] {\n  display: none;\n}\n\n.ngx-table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  text-align: left;\n  width: 100%;\n}\n\n.ngx-table.ngx-table-striped tbody tr:nth-of-type(odd) {\n  background: #f8f9fa;\n}\n\n.ngx-table.ngx-table-hover tbody tr:hover {\n  background: #f0f1f4;\n}\n\n.ngx-table tbody tr.ngx-active,\n.ngx-table.ngx-table-striped tbody tr.ngx-active {\n  background: #f0f1f4;\n}\n\n.ngx-table td,\n.ngx-table th {\n  border-bottom: .05rem solid #e7e9ed;\n  padding: .4rem .4rem;\n}\n\n.ngx-table th {\n  border-bottom-width: .1rem;\n}\n\n.ngx-container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: .4rem;\n  padding-right: .4rem;\n  width: 100%;\n}\n\n.ngx-container.ngx-grid-xl {\n  max-width: 1296px;\n}\n\n.ngx-container.ngx-grid-lg {\n  max-width: 976px;\n}\n\n.ngx-container.ngx-grid-md {\n  max-width: 856px;\n}\n\n.ngx-container.ngx-grid-sm {\n  max-width: 616px;\n}\n\n.ngx-container.ngx-grid-xs {\n  max-width: 496px;\n}\n\n.ngx-show-xs,\n.ngx-show-sm,\n.ngx-show-md,\n.ngx-show-lg,\n.ngx-show-xl {\n  display: none !important;\n}\n\n.ngx-columns {\n  display: -webkit-box;\n  display: flex;\n  display: -ms-flexbox;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-left: -.4rem;\n  margin-right: -.4rem;\n}\n\n.ngx-columns.ngx-col-gapless {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.ngx-columns.ngx-col-gapless > .ngx-column {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.ngx-columns.ngx-col-oneline {\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.ngx-column {\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n  max-width: 100%;\n  padding-left: .4rem;\n  padding-right: .4rem;\n}\n\n.ngx-column.ngx-col-12,\n.ngx-column.ngx-col-11,\n.ngx-column.ngx-col-10,\n.ngx-column.ngx-col-9,\n.ngx-column.ngx-col-8,\n.ngx-column.ngx-col-7,\n.ngx-column.ngx-col-6,\n.ngx-column.ngx-col-5,\n.ngx-column.ngx-col-4,\n.ngx-column.ngx-col-3,\n.ngx-column.ngx-col-2,\n.ngx-column.ngx-col-1 {\n  -ms-flex: none;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ngx-col-12 {\n  width: 100%;\n}\n\n.ngx-col-11 {\n  width: 91.66666667%;\n}\n\n.ngx-col-10 {\n  width: 83.33333333%;\n}\n\n.ngx-col-9 {\n  width: 75%;\n}\n\n.ngx-col-8 {\n  width: 66.66666667%;\n}\n\n.ngx-col-7 {\n  width: 58.33333333%;\n}\n\n.ngx-col-6 {\n  width: 50%;\n}\n\n.ngx-col-5 {\n  width: 41.66666667%;\n}\n\n.ngx-col-4 {\n  width: 33.33333333%;\n}\n\n.ngx-col-3 {\n  width: 25%;\n}\n\n.ngx-col-2 {\n  width: 16.66666667%;\n}\n\n.ngx-col-1 {\n  width: 8.33333333%;\n}\n\n.ngx-col-auto {\n  -ms-flex: 0 0 auto;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  max-width: none;\n  width: auto;\n}\n\n.ngx-col-mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-col-ml-auto {\n  margin-left: auto;\n}\n\n.ngx-col-mr-auto {\n  margin-right: auto;\n}\n\n@media (max-width: 1280px) {\n  .ngx-col-xl-12,\n  .ngx-col-xl-11,\n  .ngx-col-xl-10,\n  .ngx-col-xl-9,\n  .ngx-col-xl-8,\n  .ngx-col-xl-7,\n  .ngx-col-xl-6,\n  .ngx-col-xl-5,\n  .ngx-col-xl-4,\n  .ngx-col-xl-3,\n  .ngx-col-xl-2,\n  .ngx-col-xl-1 {\n    -ms-flex: none;\n    -webkit-box-flex: 0;\n            flex: none;\n  }\n  .ngx-col-xl-12 {\n    width: 100%;\n  }\n  .ngx-col-xl-11 {\n    width: 91.66666667%;\n  }\n  .ngx-col-xl-10 {\n    width: 83.33333333%;\n  }\n  .ngx-col-xl-9 {\n    width: 75%;\n  }\n  .ngx-col-xl-8 {\n    width: 66.66666667%;\n  }\n  .ngx-col-xl-7 {\n    width: 58.33333333%;\n  }\n  .ngx-col-xl-6 {\n    width: 50%;\n  }\n  .ngx-col-xl-5 {\n    width: 41.66666667%;\n  }\n  .ngx-col-xl-4 {\n    width: 33.33333333%;\n  }\n  .ngx-col-xl-3 {\n    width: 25%;\n  }\n  .ngx-col-xl-2 {\n    width: 16.66666667%;\n  }\n  .ngx-col-xl-1 {\n    width: 8.33333333%;\n  }\n  .ngx-hide-xl {\n    display: none !important;\n  }\n  .ngx-show-xl {\n    display: block !important;\n  }\n}\n\n@media (max-width: 960px) {\n  .ngx-col-lg-12,\n  .ngx-col-lg-11,\n  .ngx-col-lg-10,\n  .ngx-col-lg-9,\n  .ngx-col-lg-8,\n  .ngx-col-lg-7,\n  .ngx-col-lg-6,\n  .ngx-col-lg-5,\n  .ngx-col-lg-4,\n  .ngx-col-lg-3,\n  .ngx-col-lg-2,\n  .ngx-col-lg-1 {\n    -ms-flex: none;\n    -webkit-box-flex: 0;\n            flex: none;\n  }\n  .ngx-col-lg-12 {\n    width: 100%;\n  }\n  .ngx-col-lg-11 {\n    width: 91.66666667%;\n  }\n  .ngx-col-lg-10 {\n    width: 83.33333333%;\n  }\n  .ngx-col-lg-9 {\n    width: 75%;\n  }\n  .ngx-col-lg-8 {\n    width: 66.66666667%;\n  }\n  .ngx-col-lg-7 {\n    width: 58.33333333%;\n  }\n  .ngx-col-lg-6 {\n    width: 50%;\n  }\n  .ngx-col-lg-5 {\n    width: 41.66666667%;\n  }\n  .ngx-col-lg-4 {\n    width: 33.33333333%;\n  }\n  .ngx-col-lg-3 {\n    width: 25%;\n  }\n  .ngx-col-lg-2 {\n    width: 16.66666667%;\n  }\n  .ngx-col-lg-1 {\n    width: 8.33333333%;\n  }\n  .ngx-hide-lg {\n    display: none !important;\n  }\n  .ngx-show-lg {\n    display: block !important;\n  }\n}\n\n@media (max-width: 840px) {\n  .ngx-col-md-12,\n  .ngx-col-md-11,\n  .ngx-col-md-10,\n  .ngx-col-md-9,\n  .ngx-col-md-8,\n  .ngx-col-md-7,\n  .ngx-col-md-6,\n  .ngx-col-md-5,\n  .ngx-col-md-4,\n  .ngx-col-md-3,\n  .ngx-col-md-2,\n  .ngx-col-md-1 {\n    -ms-flex: none;\n    -webkit-box-flex: 0;\n            flex: none;\n  }\n  .ngx-col-md-12 {\n    width: 100%;\n  }\n  .ngx-col-md-11 {\n    width: 91.66666667%;\n  }\n  .ngx-col-md-10 {\n    width: 83.33333333%;\n  }\n  .ngx-col-md-9 {\n    width: 75%;\n  }\n  .ngx-col-md-8 {\n    width: 66.66666667%;\n  }\n  .ngx-col-md-7 {\n    width: 58.33333333%;\n  }\n  .ngx-col-md-6 {\n    width: 50%;\n  }\n  .ngx-col-md-5 {\n    width: 41.66666667%;\n  }\n  .ngx-col-md-4 {\n    width: 33.33333333%;\n  }\n  .ngx-col-md-3 {\n    width: 25%;\n  }\n  .ngx-col-md-2 {\n    width: 16.66666667%;\n  }\n  .ngx-col-md-1 {\n    width: 8.33333333%;\n  }\n  .ngx-hide-md {\n    display: none !important;\n  }\n  .ngx-show-md {\n    display: block !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .ngx-col-sm-12,\n  .ngx-col-sm-11,\n  .ngx-col-sm-10,\n  .ngx-col-sm-9,\n  .ngx-col-sm-8,\n  .ngx-col-sm-7,\n  .ngx-col-sm-6,\n  .ngx-col-sm-5,\n  .ngx-col-sm-4,\n  .ngx-col-sm-3,\n  .ngx-col-sm-2,\n  .ngx-col-sm-1 {\n    -ms-flex: none;\n    -webkit-box-flex: 0;\n            flex: none;\n  }\n  .ngx-col-sm-12 {\n    width: 100%;\n  }\n  .ngx-col-sm-11 {\n    width: 91.66666667%;\n  }\n  .ngx-col-sm-10 {\n    width: 83.33333333%;\n  }\n  .ngx-col-sm-9 {\n    width: 75%;\n  }\n  .ngx-col-sm-8 {\n    width: 66.66666667%;\n  }\n  .ngx-col-sm-7 {\n    width: 58.33333333%;\n  }\n  .ngx-col-sm-6 {\n    width: 50%;\n  }\n  .ngx-col-sm-5 {\n    width: 41.66666667%;\n  }\n  .ngx-col-sm-4 {\n    width: 33.33333333%;\n  }\n  .ngx-col-sm-3 {\n    width: 25%;\n  }\n  .ngx-col-sm-2 {\n    width: 16.66666667%;\n  }\n  .ngx-col-sm-1 {\n    width: 8.33333333%;\n  }\n  .ngx-hide-sm {\n    display: none !important;\n  }\n  .ngx-show-sm {\n    display: block !important;\n  }\n}\n\n@media (max-width: 480px) {\n  .ngx-col-xs-12,\n  .ngx-col-xs-11,\n  .ngx-col-xs-10,\n  .ngx-col-xs-9,\n  .ngx-col-xs-8,\n  .ngx-col-xs-7,\n  .ngx-col-xs-6,\n  .ngx-col-xs-5,\n  .ngx-col-xs-4,\n  .ngx-col-xs-3,\n  .ngx-col-xs-2,\n  .ngx-col-xs-1 {\n    -ms-flex: none;\n    -webkit-box-flex: 0;\n            flex: none;\n  }\n  .ngx-col-xs-12 {\n    width: 100%;\n  }\n  .ngx-col-xs-11 {\n    width: 91.66666667%;\n  }\n  .ngx-col-xs-10 {\n    width: 83.33333333%;\n  }\n  .ngx-col-xs-9 {\n    width: 75%;\n  }\n  .ngx-col-xs-8 {\n    width: 66.66666667%;\n  }\n  .ngx-col-xs-7 {\n    width: 58.33333333%;\n  }\n  .ngx-col-xs-6 {\n    width: 50%;\n  }\n  .ngx-col-xs-5 {\n    width: 41.66666667%;\n  }\n  .ngx-col-xs-4 {\n    width: 33.33333333%;\n  }\n  .ngx-col-xs-3 {\n    width: 25%;\n  }\n  .ngx-col-xs-2 {\n    width: 16.66666667%;\n  }\n  .ngx-col-xs-1 {\n    width: 8.33333333%;\n  }\n  .ngx-hide-xs {\n    display: none !important;\n  }\n  .ngx-show-xs {\n    display: block !important;\n  }\n}\n\n.ngx-dropdown {\n  display: inline-block;\n  position: relative;\n}\n\n.ngx-dropdown .ngx-menu {\n  -webkit-animation: slide-down .15s ease 1;\n          animation: slide-down .15s ease 1;\n  display: none;\n  left: 0;\n  max-height: 50vh;\n  overflow-y: auto;\n  position: absolute;\n  top: 100%;\n}\n\n.ngx-dropdown.ngx-dropdown-right .ngx-menu {\n  left: auto;\n  right: 0;\n}\n\n.ngx-dropdown.ngx-active .ngx-menu,\n.ngx-dropdown .ngx-dropdown-toggle:focus + .ngx-menu,\n.ngx-dropdown .ngx-menu:hover {\n  display: block;\n}\n\n.ngx-dropdown .ngx-btn-group .ngx-dropdown-toggle:nth-last-child(2) {\n  border-bottom-right-radius: .1rem;\n  border-top-right-radius: .1rem;\n}\n\n.ngx-menu {\n  background: #fff;\n  border-radius: .1rem;\n  box-shadow: 0 .05rem .2rem rgba(69, 77, 93, .3);\n  list-style: none;\n  margin: 0;\n  min-width: 180px;\n  padding: .4rem;\n  -webkit-transform: translateY(.2rem);\n          transform: translateY(.2rem);\n  z-index: 100;\n}\n\n.ngx-menu.ngx-menu-nav {\n  background: transparent;\n  box-shadow: none;\n}\n\n.ngx-menu .ngx-menu-item {\n  margin-top: 0;\n  padding: 0 .4rem;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.ngx-menu .ngx-menu-item > a {\n  border-radius: .1rem;\n  color: inherit;\n  display: block;\n  margin: 0 -.4rem;\n  padding: .2rem .4rem;\n  text-decoration: none;\n}\n\n.ngx-menu .ngx-menu-item > a:focus,\n.ngx-menu .ngx-menu-item > a:hover {\n  background: #d5e4f3;\n  color: #3f86ca;\n}\n\n.ngx-menu .ngx-menu-item > a:active,\n.ngx-menu .ngx-menu-item > a.ngx-active {\n  background: #d5e4f3;\n  color: #3f86ca;\n}\n\n.ngx-menu .ngx-menu-item + .ngx-menu-item {\n  margin-top: .2rem;\n}\n\n.ngx-menu .ngx-menu-badge {\n  float: right;\n  padding: .2rem 0;\n}\n\n.ngx-menu .ngx-menu-badge .ngx-btn {\n  margin-top: -.1rem;\n}\n\n.ngx-pagination {\n  display: -webkit-box;\n  display: flex;\n  display: -ms-flexbox;\n  list-style: none;\n  margin: .2rem 0;\n  padding: .2rem 0;\n}\n\n.ngx-pagination .ngx-page-item {\n  margin: .2rem .05rem;\n}\n\n.ngx-pagination .ngx-page-item span {\n  display: inline-block;\n  padding: .2rem .2rem;\n}\n\n.ngx-pagination .ngx-page-item a {\n  border-radius: .1rem;\n  color: #667189;\n  display: inline-block;\n  padding: .2rem .4rem;\n  text-decoration: none;\n}\n\n.ngx-pagination .ngx-page-item a:focus,\n.ngx-pagination .ngx-page-item a:hover {\n  color: #3f86ca;\n}\n\n.ngx-pagination .ngx-page-item.ngx-disabled a {\n  cursor: default;\n  opacity: .5;\n  pointer-events: none;\n}\n\n.ngx-pagination .ngx-page-item.ngx-active a {\n  background: #3f86ca;\n  color: #fff;\n}\n\n.ngx-pagination .ngx-page-item.ngx-page-prev,\n.ngx-pagination .ngx-page-item.ngx-page-next {\n  -ms-flex: 1 0 50%;\n  -webkit-box-flex: 1;\n          flex: 1 0 50%;\n}\n\n.ngx-pagination .ngx-page-item.ngx-page-next {\n  text-align: right;\n}\n\n.ngx-pagination .ngx-page-item .ngx-page-item-title {\n  margin: 0;\n}\n\n.ngx-pagination .ngx-page-item .ngx-page-item-subtitle {\n  margin: 0;\n  opacity: .5;\n}\n\n.ngx-text-primary {\n  color: #3f86ca;\n}\n\na.ngx-text-primary:focus,\na.ngx-text-primary:hover {\n  color: #3479bc;\n}\n\n.ngx-text-secondary {\n  color: #c9ddf0;\n}\n\na.ngx-text-secondary:focus,\na.ngx-text-secondary:hover {\n  color: #b5d0eb;\n}\n\n.ngx-text-gray {\n  color: #acb3c2;\n}\n\na.ngx-text-gray:focus,\na.ngx-text-gray:hover {\n  color: #9ea6b7;\n}\n\n.ngx-text-light {\n  color: #fff;\n}\n\na.ngx-text-light:focus,\na.ngx-text-light:hover {\n  color: #f2f2f2;\n}\n\n.ngx-text-success {\n  color: #32b643;\n}\n\na.ngx-text-success:focus,\na.ngx-text-success:hover {\n  color: #2da23c;\n}\n\n.ngx-text-warning {\n  color: #ffb700;\n}\n\na.ngx-text-warning:focus,\na.ngx-text-warning:hover {\n  color: #e6a500;\n}\n\n.ngx-text-error {\n  color: #e85600;\n}\n\na.ngx-text-error:focus,\na.ngx-text-error:hover {\n  color: #cf4d00;\n}\n\n.ngx-bg-primary {\n  background: #3f86ca;\n}\n\n.ngx-bg-secondary {\n  background: #d5e4f3;\n}\n\n.ngx-bg-dark {\n  background: #454d5d;\n}\n\n.ngx-bg-gray {\n  background: #f8f9fa;\n}\n\n.ngx-bg-success {\n  background: #32b643;\n}\n\n.ngx-bg-warning {\n  background: #ffb700;\n}\n\n.ngx-bg-error {\n  background: #e85600;\n}\n\n.ngx-c-hand {\n  cursor: pointer;\n}\n\n.ngx-c-move {\n  cursor: move;\n}\n\n.ngx-c-zoom-in {\n  cursor: zoom-in;\n}\n\n.ngx-c-zoom-out {\n  cursor: zoom-out;\n}\n\n.ngx-c-not-allowed {\n  cursor: not-allowed;\n}\n\n.ngx-c-auto {\n  cursor: auto;\n}\n\n.ngx-d-block {\n  display: block;\n}\n\n.ngx-d-inline {\n  display: inline;\n}\n\n.ngx-d-inline-block {\n  display: inline-block;\n}\n\n.ngx-clearfix::after,\n.ngx-container::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.ngx-float-left {\n  float: left !important;\n}\n\n.ngx-float-right {\n  float: right !important;\n}\n\n.ngx-relative {\n  position: relative;\n}\n\n.ngx-absolute {\n  position: absolute;\n}\n\n.ngx-fixed {\n  position: fixed;\n}\n\n.ngx-centered {\n  display: block;\n  float: none;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-flex-centered {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  display: -ms-flexbox;\n  -ms-flex-align: center;\n  -ms-flex-pack: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../../src/assets/spectre.css");
module.exports = __webpack_require__("../../../../../src/assets/spectre-icons.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map