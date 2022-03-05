/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./App/contactPage.js":
/*!****************************!*\
  !*** ./App/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactPage)\n/* harmony export */ });\n/* harmony import */ var _utility_js_appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js/appender */ \"./App/utility.js/appender.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar chefImg = __webpack_require__(/*! ./images/pic1.jpg */ \"./App/images/pic1.jpg\");\n\nvar ContactPage = /*#__PURE__*/_createClass(function ContactPage() {\n  _classCallCheck(this, ContactPage);\n\n  _defineProperty(this, \"display\", function () {\n    var contactDiv = document.createElement(\"div\");\n    contactDiv.classList.add(\"contactDiv\");\n    var h2 = document.createElement(\"h2\");\n    var img = document.createElement(\"img\");\n    img.setAttribute(\"src\", chefImg);\n    h2.innerHTML = \"Get in touch!\";\n    var phoneh4 = document.createElement(\"h4\");\n    phoneh4.innerHTML = \"PHONE: +01632 960270\";\n    var emailh4 = document.createElement(\"h4\");\n    emailh4.innerHTML = \"EMAIL: KitchenKings@outlook.com\";\n    var addyh4 = document.createElement(\"h4\");\n    addyh4.innerText = \"ADDRESS: 29 Parkshot Ave, Richmond, Surrey, TW9 2RG\";\n    (0,_utility_js_appender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([h2, img, phoneh4, emailh4, addyh4], contactDiv);\n    return contactDiv;\n  });\n});\n\n\n\n//# sourceURL=webpack://resturant-page/./App/contactPage.js?");

/***/ }),

/***/ "./App/homePage.js":
/*!*************************!*\
  !*** ./App/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./App/styles.css\");\n/* harmony import */ var _utility_js_listitems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js/listitems */ \"./App/utility.js/listitems.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar HomePage = /*#__PURE__*/_createClass(function HomePage() {\n  var _this = this;\n\n  _classCallCheck(this, HomePage);\n\n  _defineProperty(this, \"display\", function () {\n    var firstDiv = document.createElement(\"div\");\n    firstDiv.classList.add(\".home\");\n    var h1 = document.createElement(\"h1\");\n    h1.classList.add(\"homeh1\");\n    h1.innerText = \"KITCHEN KINGS\";\n    var p = document.createElement(\"p\");\n    p.classList.add(\"hometext\");\n    p.classList.add(\"padding\");\n    var text = document.createTextNode(\"Welcome to kitchen kings. We take pride in our foods and say boldly we rule the kitchen! Our chefs are top of the range chefs who have built a distinguished reputation in the industry over many years. It is such a pleasure to have you join us. Please have a look around !\");\n    p.appendChild(text);\n    var timesDiv = document.createElement(\"div\");\n    timesDiv.classList.add(\"timesDiv\");\n    timesDiv.classList.add(\"padding\");\n    var hoursh1 = document.createElement(\"h2\");\n    hoursh1.innerHTML = \"Hours\";\n    timesDiv.appendChild(hoursh1);\n    var ul = document.createElement(\"ul\");\n    ul.classList.add(\"homeul\");\n    var openTimesArr = [\"Sunday: 8am - 8pm\", \"Monday: 6am - 6pm\", \"Tuesday: 6pm - 6pm\", \"Wednesday: 6am - 6pm\", \"Thursday: 6am - 10pm\", \"Friday: 6am - 10pm\", \"Saturday: 1pm - 2am\"];\n    (0,_utility_js_listitems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(openTimesArr, ul);\n    timesDiv.appendChild(ul);\n\n    _this.div.appendChild(h1);\n\n    _this.div.appendChild(p);\n\n    _this.div.appendChild(timesDiv);\n\n    return firstDiv;\n  });\n\n  this.div = document.createElement(\"div\");\n});\n\n\n\n//# sourceURL=webpack://resturant-page/./App/homePage.js?");

/***/ }),

/***/ "./App/index.js":
/*!**********************!*\
  !*** ./App/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./App/styles.css\");\n/* harmony import */ var _images_resturantPage_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/resturantPage.jpg */ \"./App/images/resturantPage.jpg\");\n/* harmony import */ var _navHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navHeader */ \"./App/navHeader.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homePage */ \"./App/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPage */ \"./App/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactPage */ \"./App/contactPage.js\");\n/* harmony import */ var _utility_js_showsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility.js/showsPage */ \"./App/utility.js/showsPage.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar Body = /*#__PURE__*/_createClass(function Body() {\n  var _this = this;\n\n  _classCallCheck(this, Body);\n\n  _defineProperty(this, \"display\", function () {\n    // creating instances of the components;\n    _this.header = new _navHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    _this.homepage = new _homePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    _this.menupage = new _menuPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    _this.contactpage = new _contactPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n    _this.body.classList.add(\"bodyReset\");\n\n    _this.wrapper.classList.add(\"img\"); // appending to the main div the header and navigation \n\n\n    _this.wrapper.appendChild(_this.header.display()); // appending the main element to the wrapper; \n\n\n    _this.wrapper.appendChild(_this.main); // appending the initial homepage;\n\n\n    _this.homepage.div.appendChild(_this.homepage.display());\n\n    _this.main.appendChild(_this.homepage.div);\n\n    _this.home = _this.header.home;\n    _this.menu = _this.header.menu;\n    _this.contact = _this.header.contact; // created a reuasble function to rerender the pages on click.\n\n    (0,_utility_js_showsPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_this.home, _this.homepage.div, _this.homepage.display);\n    (0,_utility_js_showsPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_this.menu, _this.homepage.div, _this.menupage.display);\n\n    _this.draft(_this.contact); // this.showHome(this.home);\n    // this.showMenu();\n    // this.showContacts();\n\n  });\n\n  _defineProperty(this, \"draft\", function (menu) {\n    menu.addEventListener(\"click\", function () {\n      _this.homepage.div.innerHTML = \"\";\n\n      _this.homepage.div.appendChild(_this.contactpage.display());\n    });\n  });\n\n  _defineProperty(this, \"showInitial\", function () {});\n\n  this.body = document.querySelector(\"body\");\n  this.wrapper = document.querySelector(\".wrapper\");\n  this.main = document.querySelector(\".main\");\n  this.footer = document.querySelector(\".footer\");\n});\n\nvar body = new Body();\nbody.display();\n\n//# sourceURL=webpack://resturant-page/./App/index.js?");

/***/ }),

/***/ "./App/menuPage.js":
/*!*************************!*\
  !*** ./App/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuPage)\n/* harmony export */ });\n/* harmony import */ var _utility_js_foodItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js/foodItems */ \"./App/utility.js/foodItems.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar MenuPage = /*#__PURE__*/_createClass(function MenuPage() {\n  _classCallCheck(this, MenuPage);\n\n  _defineProperty(this, \"display\", function () {\n    var menudiv = document.createElement(\"div\");\n    (0,_utility_js_foodItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menudiv);\n    menudiv.classList.add(\"menudiv\");\n    return menudiv;\n  });\n});\n\n\n\n//# sourceURL=webpack://resturant-page/./App/menuPage.js?");

/***/ }),

/***/ "./App/navHeader.js":
/*!**************************!*\
  !*** ./App/navHeader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavHeader)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./App/styles.css\");\n/* harmony import */ var _utility_js_listitems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.js/listitems */ \"./App/utility.js/listitems.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NavHeader = /*#__PURE__*/_createClass(function NavHeader() {\n  var _this = this;\n\n  _classCallCheck(this, NavHeader);\n\n  _defineProperty(this, \"display\", function () {\n    var navArray = [\"Home\", \"Menu\", \"Contact\"];\n    var nav = document.createElement(\"nav\");\n    nav.classList.add(\"nav\");\n    var ul = document.createElement(\"ul\");\n    (0,_utility_js_listitems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(navArray, ul);\n    nav.appendChild(ul);\n\n    _this.header.appendChild(nav);\n\n    _this.home = ul.children[0];\n    _this.menu = ul.children[1];\n    _this.contact = ul.children[2];\n    return _this.header;\n  });\n\n  this.header = document.querySelector(\".header\");\n});\n\n\n\n//# sourceURL=webpack://resturant-page/./App/navHeader.js?");

/***/ }),

/***/ "./App/utility.js/appender.js":
/*!************************************!*\
  !*** ./App/utility.js/appender.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar appender = function appender(vals, appendee) {\n  vals.map(function (val) {\n    appendee.appendChild(val);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appender);\n\n//# sourceURL=webpack://resturant-page/./App/utility.js/appender.js?");

/***/ }),

/***/ "./App/utility.js/foodItems.js":
/*!*************************************!*\
  !*** ./App/utility.js/foodItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appender */ \"./App/utility.js/appender.js\");\nvar starterImg = __webpack_require__(/*! ../images/starter.jpg */ \"./App/images/starter.jpg\");\n\nvar mainImg = __webpack_require__(/*! ../images/main.jpg */ \"./App/images/main.jpg\");\n\nvar desertImg = __webpack_require__(/*! ../images/desert.jpg */ \"./App/images/desert.jpg\");\n\n\nvar foodItems = [{\n  type: \"Starter\",\n  foodName: \"Creole Fish\",\n  src: starterImg\n}, {\n  type: \"Main\",\n  foodName: \"Chichi's Seafood Fryup\",\n  src: mainImg\n}, {\n  type: \"Desert\",\n  foodName: \"Ice-Cream Delight\",\n  src: desertImg\n}];\n\nvar displayFoodItems = function displayFoodItems(menudiv) {\n  var h2 = document.createElement(\"h2\");\n  h2.innerHTML = \"Today's Menu\";\n  h2.classList.add(\"foodItemsH2\");\n  menudiv.appendChild(h2);\n  var foodsDiv = document.createElement(\"div\");\n  foodsDiv.classList.add(\"foodsDiv\");\n  foodItems.map(function (items) {\n    var foodDiv = document.createElement(\"div\");\n    foodDiv.classList.add(\"fooddiv\");\n    var foodH2 = document.createElement(\"h2\");\n    var foodH4 = document.createElement(\"h4\");\n    var foodImg = document.createElement(\"img\");\n    foodH2.innerText = items.type;\n    foodH4.innerText = items.foodName;\n    foodImg.setAttribute(\"src\", items.src);\n    (0,_appender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([foodH2, foodH4, foodImg], foodDiv);\n    foodsDiv.appendChild(foodDiv);\n  });\n  menudiv.appendChild(foodsDiv);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayFoodItems);\n\n//# sourceURL=webpack://resturant-page/./App/utility.js/foodItems.js?");

/***/ }),

/***/ "./App/utility.js/listitems.js":
/*!*************************************!*\
  !*** ./App/utility.js/listitems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createLists = function createLists(arrItems, ul) {\n  arrItems.map(function (item) {\n    var li = document.createElement(\"li\");\n    var text = document.createTextNode(item);\n    li.appendChild(text);\n    ul.appendChild(li);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLists);\n\n//# sourceURL=webpack://resturant-page/./App/utility.js/listitems.js?");

/***/ }),

/***/ "./App/utility.js/showsPage.js":
/*!*************************************!*\
  !*** ./App/utility.js/showsPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar showPage = function showPage(page, div, func) {\n  page.addEventListener(\"click\", function () {\n    div.innerHTML = \"\";\n    div.appendChild(func());\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPage);\n\n//# sourceURL=webpack://resturant-page/./App/utility.js/showsPage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./App/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./App/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/resturantPage.jpg */ \"./App/images/resturantPage.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/starter.jpg */ \"./App/images/starter.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n.bodyReset {\\n  margin: 0;\\n  padding: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen,\\n    Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n}\\n\\n.wrapper {\\n  width: 100vw;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.img {\\n  background: linear-gradient(rgba(27, 25, 25, 0.4), rgba(21, 22, 22, 0.4)),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n}\\n\\n.nav {\\n  width: 100%;\\n  color: rgb(39, 16, 61);\\n}\\n\\n.nav li {\\n  font-size: 2rem;\\n  font-weight: 300;\\n  background: rgba(197, 186, 186, 0.5);\\n  padding: 10px;\\n  width: 300px;\\n  list-style: none;\\n  margin: 0 30px 0 0;\\n}\\n.nav ul {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n}\\n.nav li:hover {\\n  color: rgb(121, 59, 110);\\n  cursor: pointer;\\n}\\n\\n.main {\\n  min-height: 70%;\\n  width: 80%;\\n  max-width: 900px;\\n  background: rgba(197, 186, 186, 0.5);\\n  color: rgb(39, 16, 61);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  margin: 30px auto;\\n  padding-bottom: 30px;\\n}\\n.main .home {\\n  min-width: 100%;\\n  text-align: center;\\n  height: 95%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.home h1 {\\n  margin: 10px 0 0 0;\\n}\\n\\n.homeh1 {\\n  margin-top: 40px;\\n  font-weight: 400;\\n  font-size: 2.5rem;\\n  text-align: center;\\n  text-decoration: underline;\\n  text-underline-offset: 10px;\\n}\\n.hometext {\\n  font-size: 1.5rem;\\n  max-width: 800px;\\n  letter-spacing: 1px;\\n  align-self: center;\\n  margin: 0;\\n}\\n\\n.homeul {\\n  list-style: none;\\n}\\n.homeul li {\\n  font-size: 1.5rem;\\n}\\n\\n.timesDiv {\\n  margin-top: 20px;\\n}\\n\\n.padding {\\n  padding: 0 30px;\\n}\\n.timesDiv ul {\\n  margin-left: 0;\\n  padding: 0;\\n}\\n.timesDiv h2 {\\n  margin-left: 35px;\\n  margin: 0;\\n  text-decoration: underline;\\n  text-underline-offset: 4px;\\n}\\n.menudiv {\\n  width: 100%;\\n}\\n\\n.foodItemsH2 {\\n  text-decoration: underline;\\n  text-underline-offset: 4px;\\n  text-align: center;\\n}\\n\\n.foodsDiv {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.foodsDiv img {\\n  width: 200px;\\n  height: 200px;\\n  object-fit: cover;\\n}\\n.foodsDiv h2 {\\n  text-transform: uppercase;\\n  margin: 0;\\n  text-decoration: line-through;\\n}\\n\\n.contactDiv {\\n  padding: 20px;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n.contactDiv h2 {\\n  text-decoration: underline;\\n  text-underline-offset: 4px;\\n}\\n\\n.contactDiv h4 {\\n  max-width: 300px;\\n  text-align: center;\\n}\\n\\n.contactDiv img {\\n  width: 20vw;\\n  max-width: 750px;\\n}\\n@media screen and (min-width: 1020px) {\\n  .foodsDiv {\\n    display: grid;\\n    padding: 20px;\\n    column-gap: 30px;\\n    text-align: center;\\n    font-size: 1.2rem;\\n    grid-template-columns: repeat(3, 1fr);\\n  }\\n}\\n\\n.foodImg0 {\\n  width: 300px;\\n  height: 300px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n@media screen and (min-width: 700px) {\\n  .nav {\\n    margin-top: 40px;\\n  }\\n  .nav li {\\n    width: 150px;\\n    text-align: center;\\n  }\\n  .nav ul {\\n    flex-direction: row;\\n    justify-content: center;\\n  }\\n  .nav li:hover {\\n    transform: scale(1.2);\\n    cursor: pointer;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturant-page/./App/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./App/styles.css":
/*!************************!*\
  !*** ./App/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./App/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resturant-page/./App/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./App/images/desert.jpg":
/*!*******************************!*\
  !*** ./App/images/desert.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db62b09c2f8abc0ecbfe.jpg\";\n\n//# sourceURL=webpack://resturant-page/./App/images/desert.jpg?");

/***/ }),

/***/ "./App/images/main.jpg":
/*!*****************************!*\
  !*** ./App/images/main.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1dadb0403281bd6a2d2.jpg\";\n\n//# sourceURL=webpack://resturant-page/./App/images/main.jpg?");

/***/ }),

/***/ "./App/images/pic1.jpg":
/*!*****************************!*\
  !*** ./App/images/pic1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af8a3a705ae48b50a683.jpg\";\n\n//# sourceURL=webpack://resturant-page/./App/images/pic1.jpg?");

/***/ }),

/***/ "./App/images/resturantPage.jpg":
/*!**************************************!*\
  !*** ./App/images/resturantPage.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76b68565a2d4f3dcf81d.jpg\";\n\n//# sourceURL=webpack://resturant-page/./App/images/resturantPage.jpg?");

/***/ }),

/***/ "./App/images/starter.jpg":
/*!********************************!*\
  !*** ./App/images/starter.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"87248fddf6c3a09e539c.jpg\";\n\n//# sourceURL=webpack://resturant-page/./App/images/starter.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./App/index.js");
/******/ 	
/******/ })()
;